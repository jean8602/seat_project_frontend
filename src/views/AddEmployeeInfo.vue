<script>
export default {
    data() {
        return {

            employeeInfo: [],
            name:'',
            email:'',
            seat:''


        }
    },
    methods: {

        getEmployeedata() {
            fetch("http://localhost:8080/get_Employee_Info",
                {
                    method: "GET",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.employeeInfo = data.employeeList;

                })
        },

    // 新增資料到資料庫
        AddEmployeeInfo() {

             //防呆：輸入的是否為整數字串

            const confirmation = `新增員工資訊為\n 員工姓名:${this.name} \n 員工信箱:${this.email}`;

            if (confirm(confirmation)) {
                const updatedData = {
                    name: this.name,
                    email: this.email,
                };

                console.log(updatedData);
                fetch("http://localhost:8080/add_Employee_Info", {
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
    // 編輯資料
    // 跳到編輯的畫面testId

    // 返回管理頁面
        backToManagePage() {

            this.$router.push(`/employee-outer/employee-manage`)

        },


    },
    mounted() {

        this.getEmployeedata();



    },


}


</script>

<template>
    <div>
        <div class="center-container">
            <div class="container py-3 d-grid justify-content-center align-items-center">
                <h2>新增員工資料</h2>
                <div class="all d-flex justify-ceontent-center align-items-center">
                    <div class="empName">
                        <label for="">員工姓名</label>
                        <input type="text" id="empName" v-model="name">
                    </div>
                </div>
                <div class="email">
                    <label for="email">員工信箱</label>
                    <input type="text" id="email" v-model="email">
                </div>
                <div class="seat">
                    <label for="seat">員工座位</label>
                    <input type="text" id="seat" v-model="seat">
                </div>
                <div class="col-12" d-flex>
                    <button type="submit" class="btn" @click="AddEmployeeInfo">儲存</button>
                    <button type="button" class="btn" @click="backToManagePage">取消</button>
                </div>
            </div>

        </div>
        <!-- 員工資料表 -->
        <div class="data-list row justify-content-center">
            <div class="col-md-8">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">員工編號</th>
                            <th scope="col">員工姓名</th>
                            <th scope="col">員工信箱</th>
                            <th scope="col">員工座位</th>
                            <th scope="col">編輯</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr v-for="(employeeInfo, index) in employeeInfo" :key=index>
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ employeeInfo.employeeId }}</td>
                            <td>{{ employeeInfo.name }}</td>
                            <td>{{ employeeInfo.email }}</td>
                            <td>{{ employeeInfo.floorSeatSeq }}</td>
                            <!-- 編輯資料 -->
                            <td ><i class="fa-solid fa-pen"></i></td>
                        </tr>
                    </tbody>
                </table>
              
            </div>
        </div>
        <RouterView />

    </div>
</template>

<style lang="scss" scoped>
.btn {
    background-color: #8CD9D2;
    border-radius: 10px;
    font-size: 14px;
    border: 2px solid white;
    color: black;

}


</style>