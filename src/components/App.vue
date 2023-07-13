<template>
  <div id="app">
    <Top v-if="mode === 0" :onStart="openCamApp" :onInput="setImageData"/>
    <CameraApp v-if="mode === 1" :onClose="closeCamApp" :onSet="setImageData" :onChangeThreshold="changeThreshold" :threshold="threshold"/>
    <!-- <CheckImage v-if="mode === 2" :onCancel="closeCamApp" :onChangeThreshold="changeThreshold" :onDecide="setImageData" :threshold="threshold" :imageData="imageData"/> -->
    <Viewer v-if="mode === 3" :imageData="imageData" :isImage="true" :onClose="closeCamApp"/>
    <HeaderBar v-show="mode === 0 || mode === 3"/>
  </div>
</template>

<script>
import CameraApp from '@/components/CameraApp';
import Top from '@/components/Top';
import HeaderBar from '@/components/Header';
import Viewer from '@/threejs/Viewer';
import CheckImage from '@/components/CheckImage';

export default {
  components: {
    Top,
    HeaderBar,
    CameraApp,
    CheckImage,
    Viewer,
  },
  data() {
    return {
      mode: 0, // 1: camera app, 2: chacking image, 3: three.js
      imageData: null,
      threshold: 120,
    };
  },
  methods: {
    openCamApp() {
      this.mode = 1;
    },
    closeCamApp() {
      this.mode = 0;
    },
    setImageData(imageData) {
      this.mode = 3;
      this.imageData = imageData;
    },
    changeThreshold(threshold) {
      this.threshold = threshold;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  user-select: none;
  letter-spacing: 0.1em;
}
</style>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #223;
}
</style>
