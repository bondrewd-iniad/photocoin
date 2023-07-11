<template>
  <div :class="['root', size]">
    <a href="/"><span class="logo">PhotoCoin</span></a>
    <div class="social">
      <a class="twitter-share-button" href="https://twitter.com/share" data-dnt="true" :data-size="size"/>
    </div>
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
  mounted() {
    const twScript = document.createElement('script');
    twScript.innerHTML = 'window.twttr=(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],t=window.twttr||{};if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);t._e=[];t.ready=function(f){t._e.push(f);};return t;}(document,"script","twitter-wjs"));';
    document.body.appendChild(twScript);
  },
};
</script>

<style scoped>
.root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255,255,255,0.7);
  height: 60px;
}

.root.small {
  height: 40px;
}

.logo {
  height: 70%;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-size: 32px;
}

.social {
  height: 50%;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
}

.small > .social {
  margin-top: -2px;
  right: 10px;
}
</style>

<style>
.social > iframe {
  vertical-align: bottom;
  margin-left: 10px;
}

.small > .social > iframe {
  margin-left: 8px;
}
</style>