<template>
  <div>
    <div class="main" :style="{ backgroundImage: 'url(./image/back.jpg)' }">
      <div class="container" ref="container" />
      <div class="btnFrame">
        <div class="btn" @click="onStart">
          <img src="../assets/cameraIcon.svg"/>
          <div>Camera</div>
        </div>
        <div class="btn">
          <img src="../assets/photoIcon.svg"/>
          <div>Image</div>
          <input type="file" class="file" accept="image/*" @change="onSelectFile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loadImage from 'blueimp-load-image';
import ThreeCtrl from '@/threejs/ThreeCtrl';

export default {
  props: ['onStart', 'onInput'],
  data() {
    return {
      threeCtrl: null,
    };
  },
  methods: {
    onSelectFile(e) {
      const file = e.target.files[0];
      loadImage.parseMetaData(file, (data) => {
        loadImage(
          file,
          (image) => {
            const imageLength = Math.min(image.width, image.height);
            const length = Math.min(500, imageLength);
            const canvas = document.createElement('canvas');
            canvas.width = length;
            canvas.height = length;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(
              image,
              (image.width - imageLength) / 2,
              (image.height - imageLength) / 2,
              imageLength,
              imageLength,
              0,
              0,
              length,
              length,
            );
            this.onInput(ctx.getImageData(0, 0, length, length));
          },
          {
            canvas: true,
            cover: true,
            aspectRatio: 1,
            orientation: data.exif ? data.exif.get('Orientation') : 0,
          },
        );
      });
    },
  },
  mounted() {
    const image = new Image();
    image.src = './image/default.png';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      const length = image.width * 1.1;
      canvas.width = length;
      canvas.height = length;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, length, length);
      ctx.drawImage(image, (length - image.width) / 2, (length - image.height) / 2);
      this.threeCtrl = new ThreeCtrl(this.$refs.container, ctx.getImageData(0, 0, length, length));
    };
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
  display: flex;
  gap: 32px;
  position: absolute;
  left: 50%;
  bottom: 80px;
  transform: translateX(-50%);
}

.btn {
  cursor: pointer;
  transition: 0.25s;
  font-size: 24px;
  float: left;
  width: 120px;
  padding: 10px 0;
  box-sizing: border-box;
  position: relative;
  background: #fff;
  border-radius: 5px;
  transition: 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.file {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}

@media screen and (max-width: 500px) {
  .btnFrame {
    bottom: 70px;
  }

  .btn {
    font-size: 16px;
    padding: 8px 0;
  }
}
</style>
