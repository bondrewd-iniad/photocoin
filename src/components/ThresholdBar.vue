<template>
  <div
    class="seekBarFrame"
    @touchstart.prevent="handleSeekStart"
    @mousedown.prevent="handleSeekStart"
    @touchmove="handleSeek"
    @mousemove="handleSeek"
    @touchend="handleSeekEnd"
    @mouseup="handleSeekEnd"
  >
    <div class="seekBar">
      <div class="progress" :style="{width: value / max * 100 + '%'}">
        <div class="circle"/>
      </div>
    </div>
    <div class="seekAbleArea" :style="{ position: this.seeking ? 'fixed' : 'absolute' }"/>
  </div>
</template>

<script>
export default {
  props: ['value', 'onChange', 'onSeekStart', 'onSeekEnd'],
  data() {
    return {
      seeking: false,
    };
  },
  computed: {
    max: () => 255,
  },
  methods: {
    handleSeekStart(e) {
      this.seeking = true;
      this.handleSeek(e);
      this.onSeekStart();
    },
    handleSeek(e) {
      if (!this.seeking) return;

      const x = typeof e.clientX === 'number' ? e.clientX : e.touches[0].pageX;
      const t = ((x - e.target.parentNode.getBoundingClientRect().left)
        / e.target.parentNode.clientWidth)
        * this.max;
      this.onChange(Math.max(0, Math.min(this.max, t)));
    },
    handleSeekEnd() {
      this.seeking = false;
      this.onSeekEnd();
    },
  },
};
</script>

<style scoped>
.seekBarFrame {
  position: absolute;
  top: 100%;
  margin-top: 16px;
  width: 80%;
  left: 10%;
  height: 30px;
  cursor: pointer;
}

.seekBarFrame:hover > .seekBar {
  height: 20%;
  top: 40%;
}

.seekBar {
  height: 10%;
  top: 45%;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 2px;
  background: #999;
}

.progress {
  height: 100%;
  position: absolute;
  top: 0;
  background: #e60014;
  border-radius: 2px;
  left: 0;
}

.circle {
  width: 23px;
  height: 23px;
  border-radius: 50%;
  background: linear-gradient(to right, #e83545 0%, #e60014 100%);
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%,-50%);
  box-shadow: 0 1px 10px rgba(0,0,0,.3);
}

.seekAbleArea {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
