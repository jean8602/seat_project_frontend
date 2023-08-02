<script>
export default {
    methods:{
        // 到新增員工資料的頁面
        addEmployeePage (){
            this.$router.push(`/employee-outer/add-employeeInfo`)
        },
        // 返回原本管理頁面
        backEmployeeManage(){
            this.$router.push(`/employee-outer/employee-manage`)
        },
        // 座位管理頁面
        seatManagePage (){
            this.$router.push(`/employee-outer/seat-manage`)
        },
        
    }
}

</script>

<template>
    <div>
        <nav class="nav flex-column">
       
            <a class="nav-link link-success active" aria-current="page" href="#" @click="backEmployeeManage">
                <span>
                    座位管理
                </span>
                Dashboard
            </a>
            <a class="nav-link link-success" href="#" @click="addEmployeePage">
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                新增員工基本資料</a>

                <a class="nav-link link-success" href="#" @click="seatManagePage">
                <i class="fa-sharp fa-solid fa-pen-to-square"></i>
                新增座位資訊</a>
        </nav>
        
    </div>
</template>

<style lang="scss" scoped>
.nav{
  /*   border:1px solid black; */
  position: fixed;
  min-width: 200px;
  min-height: 100vh;

}

</style>