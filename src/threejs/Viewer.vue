<template>
  <div>
    <div class="main" :style="{ backgroundImage: 'url(./image/back.jpg)' }">
      <div class="container" ref="container"/>
      <div class="btnFrame">
        <ThresholdBar
          :value="threshold"
          :onChange="onChangeThreshold"
          :onSeekStart="onSeekStart"
          :onSeekEnd="onSeekEnd"
        />
        <div class="btn" @click="onSavePng">Save as PNG</div>
        <div class="btn" @click="onSaveGif">Save as GIF</div>
        <div class="btn" @click="onClose">TOP</div>
      </div>
    </div>
    <div class="saveArea" ref="saveArea" v-show="url">
      <div>
        <div v-if="isSafari" class="safariText">Press and hold to save image</div>
        <img :src="url"/>
      </div>
      <div class="closeBtn" @click="closeSaveArea">Close</div>
    </div>
  </div>
</template>

<script>
import detectCanvas from '@/utils/detectCanvas';
import ThresholdBar from '@/components/ThresholdBar';
import ThreeCtrl from './ThreeCtrl';

const { saveAs } = require('file-saver');
const platform = require('platform');

export default {
  components: { ThresholdBar },
  props: ['imageData', 'onClose', 'isImage'],
  data() {
    return {
      threshold: 256,
      threeCtrl: null,
      url: null,
      isSafari: platform.name === 'Safari',
    };
  },
  methods: {
    onSavePng() {
      this.threeCtrl.getPngBlob(blob => this.saveImage(blob, 'png'));
    },
    onSaveGif() {
      this.threeCtrl.getGifBlob(blob => this.saveImage(blob, 'gif'));
    },
    onChangeThreshold(threshold) {
      this.threshold = threshold;
      this.threeCtrl.updateTexture(detectCanvas(
        {
          data: new Uint8Array(this.imageData.data),
          width: this.imageData.width,
        },
        this.threshold,
        this.isImage,
      ));
    },
    onSeekStart() {
      this.threeCtrl.stopRotate();
    },
    onSeekEnd() {
      this.threeCtrl.startRotate();
    },
    saveImage(blob, type) {
      const name = `photocoin.${type}`;
      if (!this.isSafari) saveAs(blob, name);

      this.url = URL.createObjectURL(new File([blob], name, { type: `image/${type}` }));
      setTimeout(() => this.threeCtrl.pause());
    },
    closeSaveArea() {
      this.threeCtrl.play();
      URL.revokeObjectURL(this.url);
      this.url = null;
    },
  },
  mounted() {
    this.threeCtrl = new ThreeCtrl(this.$refs.container, this.imageData);
  },
  destroyed() {
    this.threeCtrl.destroy();
  },
};
</script>

<style scoped>
.main {
  background: center/cover no-repeat;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.container {
  height: 100%;
  width: 100%;
}

.btnFrame {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

.btn {
  float: left;
  width: 33.33%;
  background: rgba(255, 255, 255, 0.8);
  padding: 12px 0;
  font-size: 24px;
  cursor: pointer;
  color: #222;
  transition: 0.25s;
}

.btn:hover {
  background: rgba(120, 120, 120, 0.8);
  color: #fff;
}

.saveArea {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background: #fff;
  padding: 20px 0 50px;
  box-sizing: border-box;
  color: #222;
}

.safariText {
  font-size: 20px;
  padding-top: 10px;
}

.saveArea img {
  width: 500px;
  max-width: 80%;
  margin: 10px auto 0;
}

.closeBtn {
  border-radius: 5px;
  background: #666;
  margin: 30px auto 0;
  color: #fff;
  cursor: pointer;
  width: 100px;
  padding: 12px 0;
  font-size: 20px;
  font-weight: bold;
  transition: 0.25s;
}

.closeBtn:hover {
  background: #ddd;
  color: #222;
}

@media screen and (max-width: 500px) {
  .btn {
    font-size: 18px;
  }
}
</style>
