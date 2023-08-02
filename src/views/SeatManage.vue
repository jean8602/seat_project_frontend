<script>
import { toHandlers } from 'vue';

export default {
    data() {
        return {
            // 輸入樓層
            floor: '',
            // 輸入座位號
            seat: '',
            allInfo: null,
            empInfo: null,
            selectedEmp: null,
            selectSeat: null,
            allEmpInfo: null,
            selectedEmployeeId: null, // 儲存選中的員工編號
            employeeId: null


        }
    },
    methods: {

        // 新增座位根據使用者輸入的值新增
        addSeatInfo() {

            //防呆：輸入的是否為整數字串
            if (!/^\d+$/.test(this.floor) || !/^\d+$/.test(this.seat)) {
                alert('樓層和座位編號必須為整數');
                this.floor = '';
                this.seat = '';
                return;
            }

            const confirmation = `新增座位資訊為\n 樓層:${this.floor} \n 座位編號:${this.seat}`;

            if (confirm(confirmation)) {
                const updatedData = {
                    floorNo: this.floor,
                    seatNo: this.seat,
                };

                console.log(updatedData);
                fetch("http://localhost:8080/add_Seat_Info", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updatedData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.message == "成功") {
                            alert("更新成功");
                            location.reload();

                        }
                        else {
                            alert("更新失敗");
                            location.reload();
                        }
                    })

            };

        },

        // 取消新增資訊（清空輸入框的值）
        cancel() {

            this.floor = '';
            this.seat = '';

        },


        // 取得所有資料（位置與員工資料）
        getAlldata() {
            fetch("http://localhost:8080/get_AllInfo",
                {
                    method: "GET",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.allInfo = data.searchAllList;
                })
        },

        // 取得所有資料（位置與員工資料）
        getEmpAlldata() {
            fetch("http://localhost:8080/searchAllEmpData",
                {
                    method: "GET",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.allEmpInfo = data.searchAllList;
                })
        },


        getEmpdata() {
            fetch("http://localhost:8080/get_Employee_Info",
                {
                    method: "GET",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.empInfo = data.employeeList;

                })
        },

        // 選位置
        selectLocation() {

            if (this.selectedEmp) {
                const employeeId = this.selectedEmp.match(/^\w+/).toString();
                console.log(employeeId);
                console.log(typeof employeeId);

                const confirmation = `要修改的內容為\n 員工編號:${employeeId} \n 座位代碼:${this.selectSeat}`;

                if (confirm(confirmation)) {
                    const updatedData = {
                        employeeId: employeeId,
                        floorSeatSeq: this.selectSeat,
                    };

                    fetch("http://localhost:8080/selectLocation", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedData)

                    })
                        .then(res => res.json())
                        .then(data => {
                            // 處理後端回應的邏輯
                            console.log(data);

                            if (data.message == "選位置成功") {
                                alert("更新成功");
                                location.reload();
                                // location.href = "/survey-outer/survey-manage";
                            }
                            else {
                                alert("更新失敗");
                                location.reload();

                            }
                        })

                }
            }
        },

        // 修改位置
        updateLocation() {
            const selectedSeat = this.selectSeat;
            console.log(selectedSeat);

            // 確認是否要清空已選座位
            const confirmation = `要清空的內容為\n 座位代碼:${selectedSeat}`;
            if (!confirm(confirmation)) {
                return;
            }

            fetch("http://localhost:8080/get_AllInfo")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const selectedEmployee = data.searchAllList.find(info => info.floorSeatSeq === selectedSeat).employeeId;

                    const updatedData = {
                        employeeId: selectedEmployee,
                        floorSeatSeq: null,
                    };

                    fetch("http://localhost:8080/clearLocation", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(updatedData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);

                            if (data.message == "success!") {
                                alert("更新成功");
                                location.reload();
                            } else {
                                alert("更新失敗");
                                location.reload();
                            }
                        });
                })
                .catch(error => {
                    console.error("獲取所有資料失敗：", error);
                });
        },

    },
    mounted() {

        this.getEmpdata();
        this.getAlldata();
        this.getEmpAlldata();

    },
    computed: {



    }

}


</script>

<template>
    <div>
        <div class="center-container">
            <div class="container py-3 d-grid justify-content-center align-items-center">
                <h3>新增座位資訊</h3>
                <div class="all d-flex justify-ceontent-center align-items-center">
                    <div class="floor">
                        <label for="">樓層</label>
                        <input type="text" id="floor" v-model="floor">
                    </div>
                </div>
                <div class="座位編號">
                    <label for="seatNo">座位編號</label>
                    <input type="text" id="seatNo" v-model="seat">
                </div>
                <div class="col-12" d-flex>
                    <button type="submit" class="btn" @click="addSeatInfo">儲存</button>
                    <button type="button" class="btn" @click="cancel">取消</button>
                </div>

                <!-- 員工資料下拉式選單 -->
                <h3>選擇座位</h3>
                <p>請選擇員工</p>
                <select name="empList" v-model="selectedEmp">
                    <option value="">請選擇員工</option>
                    <option v-for="allinfo in allEmpInfo">{{ allinfo.employeeId }}(座位編號{{ allinfo.floorSeatSeq }})</option>
                </select>
                <p>您選擇的員工編號：{{ selectedEmp }}</p>




                <!-- 所有座位表渲染 -->
                <form>
                    <fieldset>
                        <legend>座位表</legend>

                        <div v-for="allinfo in allInfo" :key="allinfo.floorSeatSeq">
                            <input type="radio" :id="'seat-' + allinfo.floorSeatSeq" name="choice"
                                :value="allinfo.floorSeatSeq" v-model="selectSeat" />
                            <label :class="{ 'seat-empty': true, 'red': allinfo.employeeId }"
                                :for="'seat-' + allinfo.floorSeatSeq">
                                {{ allinfo.floorNo }}樓: 座位{{ allinfo.seatNo }} [員編:{{ allinfo.employeeId }}]
                            </label>
                        </div>

                        <div>
                            <button type="button" class="btn" @click="selectLocation">送出</button>
                            <button type="button" class="btn" @click="updateLocation">清空已選座位</button>
                        </div>
                    </fieldset>
                </form>
                <div class="empty-icon">
                    空位
                </div>
                <div class="selecting-icon">
                    請選擇
                </div>
                <div class="selected-icon">
                    已佔用
                </div>

            </div>

        </div>
    </div>


    <RouterView />
</template>

<style lang="scss" scoped>
.btn {
    background-color: #8CD9D2;
    border-radius: 10px;
    font-size: 14px;
    border: 2px solid white;
    color: black;

}

input[type="radio"]:checked+label {
    background-color: green;
    color: white;
}

.seat-empty {
    padding: 10px;
    background-color: #bcbaba;
}

.empty-icon {
    padding: 10px;
    background-color: #bcbaba;
    border-radius: 10px;
    color: white;
    text-align: center;
}

.selecting-icon {
    background-color: green;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;

}

.selected-icon {
    background-color: red;
    color: white;
    text-align: center;
    padding: 10px;
    border-radius: 10px;

}

.red {
    background-color: red;
    color: white;
    text-align: center;
    padding: 10px;
}
</style>