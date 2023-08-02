<script>

export default {

  data() {

  },

  methods: {

    
  }
}

</script>

<template>
  <div class="wrap">
    <div class="left">
      <h2>人資座位系統</h2>
      <p>座位管理很方便</p>
      <button type="button">Get started</button>
      <RouterView />
    </div>
    <div class="right">
      <img src="" alt="">
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px;
}

.btn {
  background-color: #8CD9D2;
}

.left {
  text-align: center;

  h2 {
    font-size: 30px;
  }

  p {
    font-size: 20px;
  }

  button {
    background-color: #FFBB13;
    border-radius: 10px;
    font-size: 20px;
    padding: 8px;
    border: 2px solid white;
    color: white;
  }

}

img {
  width: 800px;
}

.card-img-top {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

.card {
  border-radius: 3px;
  padding: 20px;
}

.left-box {
  display: flex;

}

.section {
  display: flex;
  margin: 0 auto;
}
</style>