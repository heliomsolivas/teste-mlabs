
<template>
 <div class="header">
    <img src="@/assets/logo.png">
    <p>Discover the most exciting places on our planet</p>
  </div>
</template>

<script>
export default {
  name: 'signup-header',
  data(){
    return{
      
    }
  },
}
</script>

<style lang="scss" scoped>
.header {
  background: #ff6900;
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  align-items: center;
  padding: 0 30px;
  flex-direction: column;
  p {
    font-size: 18px;
  }
  img {
    max-width: 125px;
    height: auto;
  }
}
</style>
