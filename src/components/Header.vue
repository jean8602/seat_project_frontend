<script>
import { RouterLink } from 'vue-router';
export default {
    methods: {

    },
}
</script>

<template>
    <header>
        <div class="wrapper">
            <div class="logo-group">
                <div class="logo">
                    <RouterLink class="link" to="/">
                        <img src="" alt="">
                    </RouterLink>
                </div>
                <div class="function-group">
                    <!-- 回首頁 -->
                    <div class="home">
                        <RouterLink class="link"  to="/">
                            Home</RouterLink>
                    </div>
                    <!-- 座位系統管理 -->
                    <div class="employee-manage">
                        <RouterLink class="link" to="/employee-outer/employee-manage">
                            座位系統管理</RouterLink>
                    </div>
                </div>
            </div>

        </div>
    </header>
</template>

<style lang="scss" scoped>

.wrapper {
    display: flex;
    

}

.logo-group {
    width: 100vw;
    height: 120px;
    background-color: #8CD9D2;
    display: flex;

    .logo {
        width: 180px;
        height: 120px;


        img {
            width: 100%;
            height: 100%;
        }


    }

    .function-group {
        display: flex;
        color: white;
        align-items: center;


    }


}

.link {
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;
    margin: 0 1rem;
    font-size: 23px;


    &:hover {
        color: black;
        font-weight: bold;
    }
}
</style>