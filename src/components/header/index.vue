<template>
  <div class="header">
    <!-- 返回箭头 -->
    <div
      class="header_arrow"
      @click="getBack"
    >
      <img
        :src="backUrl"
        alt=""
        slot="header_arrow"
      />
    </div>
    <div class="header_title">
      <slot name="header_title">
        <span>title</span>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      backUrl: require('@/assets/back.png')
    }
  },
  name: "Header",
  props: {
    title: {
      type: String,
      default: '首页'
    },
    text: {
      type: String,
    },
  },
  methods: {
    // 返回上一页
    getBack() {
      this.$router.back(-1);
    },
  },
}
</script>

<style lang='less' scope>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
// 左中右布局, 直接给中间的盒子设置flex:1;
.header .header_title {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  font-weight: 700;
  margin-left: -5%;
  margin-right: -20%;
}
.header_arrow {
  width: 5%;
}
.header_arrow img {
  vertical-align: middle;
}
.header_icon {
  width: 20%;
  font-size: 14px;
  color: #115ffb;
}
</style>
