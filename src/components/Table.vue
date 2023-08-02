<script>
export default {
    data() {
        return {

            employeeInfo: [],


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

        },
    // 編輯資料

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
    <!-- 搜尋欄 -->

    <div class="container d-flex justify-content-center py-3">
        <div class="card w-50">
            <div class="card-body">
                <form action="">
                    <div class="mb-3">
                        <!-- 問卷標題欄 -->
                        <label for="name">員工編號:</label>
                        <input type="text" id="name" >
                    </div>
                    <br>
                    <!-- 時間欄 -->
                    <div class="mb-3">
                        <label for="startTime">員工姓名: </label>
                        <input type="text" id="startTime">
                        <br>
                        <label for="endTime">員工信箱: </label>
                        <input type="text" id="endTime">
                    </div>
                    <a href="#" class="btn btn-primary" >搜尋</a>
                </form>

            </div>
        </div>
    </div>




    <!-- 表格欄 -->
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
                            <th scope="col"></th>
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
</template>

<style lang="scss" scoped>
</style>