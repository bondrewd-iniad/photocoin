<template>
  <div :class="['root', size]">
    <span class="logo">PhotoCoin</span>
  </div>
</template>

<script>
import osType from '@/utils/osType';

export default {
  data() {
    return {
      size: osType.isPC() ? 'large' : 'small',
    };
  },
};
</script>

<style scoped>
.root {
  position: fixed;
  top: 0;
  left: 0;
  height: 56px;
}

.root.small {
  height: 40px;
}

.logo {
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
  font-size: 32px;
  font-weight: bold;
}
</style>
