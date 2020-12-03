<template>
  <div class="videoWrapper">
    <video
      id="myVideo"
      class="video-js vjs-big-play-centered "
      controls
      preload="auto"
      width="164"
      height="218"
      data-setup='{}'
    >
      <source
        src="https://yzl-pub-test-oss.youbao.wang/video/20201202/A73fF8_1606895493554.mp4"
        type="video/mp4"
      >
    </video>
  </div>
</template>
<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
export default {
  mounted() {
    videojs('myVideo', {
      controlBar: false,
      playbackRates: [0.5, 1, 1.5, 2],
      ControlBar: {
        customControlSpacer: true
      }
    },
      function onPlayerReady() {
        console.log('1111111')
      })
  }
}
</script>
<style lang="less" scoped>
.videoWrapper{
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  }
</style>
