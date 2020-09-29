<template>
  <div class="home">
    <Vheader></Vheader>
  </div>
</template>

<script>
import Vheader from '@/components/header/index'
export default {
  name: 'Home',
  components: {
    Vheader
  }
}
</script>

<style scope lang='less'>
.my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
}
</style>