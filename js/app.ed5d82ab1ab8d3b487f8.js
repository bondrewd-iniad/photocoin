webpackJsonp([1],{"/rWy":function(t,e,i){"use strict";var a=i("ROS8"),n=i("4unC"),r=i("KkvV"),s=i("lDdF"),o=s.saveAs,c=i("6ltY");e.a={components:{ThresholdBar:n.a},props:["imageData","onClose","isImage"],data:function(){return{threshold:256,threeCtrl:null,url:null,isSafari:"Safari"===c.name}},methods:{onSavePng:function(){var t=this;this.threeCtrl.getPngBlob(function(e){return t.saveImage(e,"png")})},onSaveGif:function(){var t=this;this.threeCtrl.getGifBlob(function(e){return t.saveImage(e,"gif")})},onChangeThreshold:function(t){this.threshold=t,this.threeCtrl.updateTexture(Object(a.a)({data:new Uint8Array(this.imageData.data),width:this.imageData.width},this.threshold,this.isImage))},onSeekStart:function(){this.threeCtrl.stopRotate()},onSeekEnd:function(){this.threeCtrl.startRotate()},saveImage:function(t,e){var i=this,a="photocoin."+e;this.isSafari||o(t,a),this.url=URL.createObjectURL(new File([t],a,{type:"image/"+e})),setTimeout(function(){return i.threeCtrl.pause()})},closeSaveArea:function(){this.threeCtrl.play(),URL.revokeObjectURL(this.url),this.url=null}},mounted:function(){this.threeCtrl=new r.a(this.$refs.container,this.imageData)},destroyed:function(){this.threeCtrl.destroy()}}},"1TOb":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:["root",t.size]},[i("span",{staticClass:"logo"},[t._v("PhotoCoin")])])},n=[],r={render:a,staticRenderFns:n};e.a=r},"4unC":function(t,e,i){"use strict";function a(t){i("92g3")}var n=i("5txN"),r=i("uMye"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-8c697f24",null);e.a=c.exports},"5txN":function(t,e,i){"use strict";e.a={props:["value","onChange","onSeekStart","onSeekEnd"],data:function(){return{seeking:!1}},computed:{max:function(){return 255}},methods:{handleSeekStart:function(t){this.seeking=!0,this.handleSeek(t),this.onSeekStart()},handleSeek:function(t){if(this.seeking){var e="number"==typeof t.clientX?t.clientX:t.touches[0].pageX,i=(e-t.target.parentNode.getBoundingClientRect().left)/t.target.parentNode.clientWidth*this.max;this.onChange(Math.max(0,Math.min(this.max,i)))}},handleSeekEnd:function(){this.seeking=!1,this.onSeekEnd()}}}},"77/w":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSI0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xMCAyMHYtNmg0djZoNXYtOGgzTDEyIDMgMiAxMmgzdjh6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="},"92g3":function(t,e){},CSbo:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMmMzZTUwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xNSA4aC4wMSIgLz4KICA8cGF0aCBkPSJNMTIuNSAyMWgtNi41YTMgMyAwIDAgMSAtMyAtM3YtMTJhMyAzIDAgMCAxIDMgLTNoMTJhMyAzIDAgMCAxIDMgM3Y2LjUiIC8+CiAgPHBhdGggZD0iTTMgMTZsNSAtNWMuOTI4IC0uODkzIDIuMDcyIC0uODkzIDMgMGw0IDQiIC8+CiAgPHBhdGggZD0iTTE0IDE0bDEgLTFjLjY1MyAtLjYyOSAxLjQxMyAtLjgxNSAyLjEzIC0uNTU5IiAvPgogIDxwYXRoIGQ9Ik0xOSAxNnY2IiAvPgogIDxwYXRoIGQ9Ik0yMiAxOWwtMyAzbC0zIC0zIiAvPgo8L3N2Zz4K"},CZZz:function(t,e,i){"use strict";var a=i("PGuG"),n=i("o7JW");e.a={props:["onClose","onSet"],data:function(){return{reqID:null,vw:null,vh:null,length:0,ctx:null,facingMode:"environment",isPC:n.a.isPC()}},mounted:function(){this.setVideo()},methods:{setVideo:function(){var t=this;a.a.attach(this.$refs.video,{video:{facingMode:this.facingMode},audio:!1},function(){alert("Camera could not be obtained."),t.onClose()})},startRendering:function(){var t=this.$refs.video,e=t.videoWidth,i=t.videoHeight,a=Math.min(e,i);this.vw=e,this.vh=i,this.length=a;var n=this.$refs.canvas;n.width=a,n.height=a,this.ctx||(this.ctx=n.getContext("2d")),this.reqID=requestAnimationFrame(this.render.bind(this))},stopRendering:function(){a.a.detach(),cancelAnimationFrame(this.reqID)},render:function(){var t=this.length,e=this.ctx;e.drawImage(this.$refs.video,(this.vw-t)/2,(this.vh-t)/2,t,t,0,0,t,t);var i=e.getImageData(0,0,t,t);e.putImageData(i,0,!1),this.reqID=requestAnimationFrame(this.render.bind(this))},closeApp:function(){this.stopRendering(),this.onClose()},shoot:function(){var t=this;this.$refs.blackFilter.style.display="block",setTimeout(function(){t.$refs.blackFilter.style.opacity=0},100),setTimeout(function(){t.$refs.blackFilter.style.display="none",t.$refs.blackFilter.style.opacity=1;var e=t.length,i=t.ctx;i.drawImage(t.$refs.video,(t.vw-e)/2,(t.vh-e)/2,e,e,0,0,e,e);var a=i.getImageData(0,0,e,e);t.stopRendering(),t.onSet(a)},500)},changeFacing:function(){this.facingMode="user"===this.facingMode?"environment":"user",this.setVideo()},onCancel:function(){this.setVideo()}}}},EWci:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main",style:{backgroundImage:"url(./image/back.jpg)"}},[a("div",{ref:"container",staticClass:"container"}),t._v(" "),a("div",{staticClass:"btnFrame"},[a("div",{style:{display:"flex",gap:"24px",justifyContent:"center"}},[a("div",{staticClass:"btn",on:{click:t.onClose}},[a("img",{attrs:{src:i("m3Th")}}),t._v(" "),a("div",[t._v("HOME")])]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.onSaveGif}},[a("img",{attrs:{src:i("CSbo")}}),t._v(" "),a("div",[t._v("GIF")])]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.onSavePng}},[a("img",{attrs:{src:i("CSbo")}}),t._v(" "),a("div",[t._v("PNG")])])]),t._v(" "),a("ThresholdBar",{attrs:{value:t.threshold,onChange:t.onChangeThreshold,onSeekStart:t.onSeekStart,onSeekEnd:t.onSeekEnd}})],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],ref:"saveArea",staticClass:"saveArea"},[a("div",[t.isSafari?a("div",{staticClass:"safariText"},[t._v("Press and hold to save image")]):t._e(),t._v(" "),a("img",{attrs:{src:t.url}})]),t._v(" "),a("div",{staticClass:"closeBtn",on:{click:t.closeSaveArea}},[t._v("Close")])])])},n=[],r={render:a,staticRenderFns:n};e.a=r},EWfp:function(t,e,i){"use strict";function a(t){i("eKAn"),i("wBn9")}var n=i("EZYi"),r=i("d5JE"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-4fa752a1",null);e.a=c.exports},EZYi:function(t,e,i){"use strict";var a=i("mriO"),n=i("wxRh"),r=i("teIl"),s=i("Om08");e.a={components:{Top:n.a,HeaderBar:r.a,CameraApp:a.a,Viewer:s.a},data:function(){return{mode:0,imageData:null}},methods:{openCamApp:function(){this.mode=1},closeCamApp:function(){this.mode=0},setImageData:function(t){this.mode=3,this.imageData=t}}}},HCTz:function(t,e,i){"use strict";var a=i("o7JW");e.a={data:function(){return{size:a.a.isPC()?"large":"small"}}}},KkvV:function(t,e,i){"use strict";function a(t){for(var e=new Uint8Array(t.data.buffer),i=0;i<Math.pow(t.width,2);i+=1)255===e[4*i+3]&&(e[4*i+3]=0===e[4*i]?120:0);return e}var n=i("woOf"),r=i.n(n),s=i("Zrlr"),o=i.n(s),c=i("wxAW"),l=i.n(c);i("pk0I");var u=i("Ml+6"),d=i("wVBE"),g=function(){function t(e,i){var a=this;o()(this,t),this.container=e,this.renderer=null,this.scene=null,this.texture=null,this.material=null,this.camera=null,this.cameraCtrl=null,this.reqID=null,this.initRenderer(),this.initScene(),this.initTexture(i),this.initMaterial(),this.initCoinRing(),this.initCoinPattern(),this.initLight(),this.initCamera(),this.resize=function(){a.camera.aspect=a.container.clientWidth/a.container.clientHeight,a.camera.updateProjectionMatrix(),a.renderer.setSize(a.container.clientWidth,a.container.clientHeight)},window.addEventListener("resize",this.resize,!1),this.resize()}return l()(t,[{key:"initRenderer",value:function(){this.renderer=new u.WebGLRenderer({preserveDrawingBuffer:!0,antialias:!0,alpha:!0}),this.container.appendChild(this.renderer.domElement),this.renderer.setClearColor(16777215,0),this.play()}},{key:"initScene",value:function(){this.scene=new u.Scene}},{key:"initTexture",value:function(t){var e=new u.DataTexture(a(t),t.width,t.height,u.RGBAFormat,u.UnsignedByteType);e.needsUpdate=!0,e.flipY=!0,this.texture=e}},{key:"updateTexture",value:function(t){this.texture.image.data=a(t),this.texture.needsUpdate=!0}},{key:"initMaterial",value:function(){var t=new u.CubeTextureLoader;t.setPath("./envMap/");var e=t.load(["posx.jpg","negx.jpg","posy.jpg","negy.jpg","posz.jpg","negz.jpg"]);e.minFilter=u.LinearFilter,this.material=new u.MeshStandardMaterial({roughness:.8,metalness:1,color:16761685,envMap:e})}},{key:"initCoinRing",value:function(){var t=this.scene,e=new u.RingBufferGeometry(1,1.1,128,1),i=new u.Mesh(e,this.material);i.position.z=.1,t.add(i);var a=i.clone();a.position.z=-.1,a.rotateY(Math.PI),t.add(a);var n=new u.CylinderBufferGeometry(1.1,1.1,.2,128,1,!0),r=new u.Mesh(n,this.material);r.rotateX(Math.PI/2),t.add(r);var s=new u.CylinderBufferGeometry(1,1,.2,128,1,!0),o=new u.Mesh(s,this.material);o.scale.x=-1,o.rotateX(Math.PI/2),t.add(o)}},{key:"initCoinPattern",value:function(){var t=this.scene,e=new u.CircleBufferGeometry(1.05,128),i=this.material.clone();r()(i,{bumpMap:this.texture,bumpScale:.05});var a=new u.Mesh(e,i);a.position.z=.05,t.add(a);var n=a.clone();n.position.z=-.05,n.rotateY(Math.PI),t.add(n);var s=new u.PlaneBufferGeometry(2.1,2.1,this.texture.image.width,this.texture.image.height),o=new u.MeshBasicMaterial({map:this.texture,blending:u.NormalBlending,transparent:!0}),c=new u.Mesh(s,o);c.position.z=.05+.001,t.add(c);var l=c.clone();l.position.z=-.05-.001,l.rotateY(Math.PI),t.add(l)}},{key:"initLight",value:function(){var t=new u.DirectionalLight(16777215,1.25);t.position.set(0,.5,2),this.scene.add(t);var e=new u.DirectionalLight(16777215,1.25);e.position.set(0,.5,-2),this.scene.add(e)}},{key:"initCamera",value:function(){var t=new u.PerspectiveCamera(40,1,.1,1e3);t.position.z=5;var e=new d(t,this.renderer.domElement);e.autoRotate=!0,e.minDistance=1.3,this.camera=t,this.cameraCtrl=e}},{key:"stopRotate",value:function(){this.cameraCtrl.autoRotate=!1,this.cameraCtrl.reset()}},{key:"startRotate",value:function(){this.cameraCtrl.autoRotate=!0}},{key:"render",value:function(){this.cameraCtrl.update(),this.renderer.render(this.scene,this.camera),this.play()}},{key:"destroy",value:function(){window.removeEventListener("resize",this.resize,!1),this.pause(),this.renderer.dispose()}},{key:"play",value:function(){this.reqID=requestAnimationFrame(this.render.bind(this))}},{key:"pause",value:function(){cancelAnimationFrame(this.reqID)}},{key:"resize4Save",value:function(){this.camera.aspect=1,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.texture.image.width,this.texture.image.height)}},{key:"getPngBlob",value:function(t){var e=this;this.resize4Save(),this.pause(),this.cameraCtrl.saveState(),this.cameraCtrl.enabled=!1,this.camera.position.set(0,0,3.2),this.camera.lookAt(this.cameraCtrl.target),this.renderer.render(this.scene,this.camera),setTimeout(function(){e.renderer.domElement.toBlob(function(i){t(i),e.cameraCtrl.reset(),e.cameraCtrl.enabled=!0,e.resize(),e.play()})})}},{key:"getGifBlob",value:function(t){var e=this;this.resize4Save();var i=new GIF({workers:4,quality:10,workerScript:"./libs/gif.worker.js",width:this.texture.image.width,height:this.texture.image.height,transparent:0});i.on("finished",function(i){t(i),e.cameraCtrl.reset(),e.resize(),e.cameraCtrl.enabled=!0,e.play()}),this.cameraCtrl.saveState(),this.cameraCtrl.enabled=!1,this.pause();var a=0;!function t(){20===a?i.render():(e.camera.position.set(1*Math.cos(a*Math.PI/20-Math.PI/2)*3.4,0,1*Math.sin(a*Math.PI/20-Math.PI/2)*3.4),e.camera.lookAt(e.cameraCtrl.target),e.renderer.render(e.scene,e.camera),setTimeout(function(){a+=1,i.addFrame(e.renderer.domElement,{delay:100,copy:!0}),t()}))}()}}]),t}();e.a=g},"L+cJ":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"root"},[a("div",{style:{maxWidth:t.length+"px"},attrs:{id:"canvasFrame"}},[a("div",[a("canvas",{ref:"canvas",style:{transform:"rotateY("+(t.isPC||"user"===t.facingMode?180:0)+"deg)"}})])]),t._v(" "),a("video",{ref:"video",attrs:{playsinline:""},on:{canplaythrough:t.startRendering}}),t._v(" "),a("div",{staticClass:"controls"},[a("div",{staticClass:"backBtn",on:{click:t.closeApp}},[a("img",{attrs:{src:i("77/w")}})]),t._v(" "),t.isPC?t._e():a("div",{staticClass:"facingBtn",on:{click:t.changeFacing}},[a("img",{attrs:{src:i("Zl/t")}})]),t._v(" "),a("div",{staticClass:"shutter",on:{click:t.shoot}})]),t._v(" "),a("div",{ref:"blackFilter",staticClass:"blackFilter"})])},n=[],r={render:a,staticRenderFns:n};e.a=r},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("7+uW"),n=i("YaEn");a.a.config.productionTip=!1,new a.a({el:"#app",router:n.a,template:"<router-view/>"})},Om08:function(t,e,i){"use strict";function a(t){i("nDkR")}var n=i("/rWy"),r=i("EWci"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-35cf2034",null);e.a=c.exports},PGuG:function(t,e,i){"use strict";function a(){r&&(r.getTracks().forEach(function(t){return t.stop()}),r=null)}navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia;var n=window.URL||window.webkitURL,r=void 0;e.a={attach:function(t,e,i){navigator.getUserMedia&&n?(a(),navigator.getUserMedia(e,function(e){void 0===t.srcObject?t.src=n.createObjectURL(e):t.srcObject=e,t.play(),r=e},i)):i()},detach:a}},ROS8:function(t,e,i){"use strict";e.a=function(t,e,i){for(var a=t.data,n=t.width,r=0;r<Math.pow(n,2);r+=1){var s=r%n,o=(r-s)/n;if(Math.pow(s-n/2,2)+Math.pow(o-n/2,2)<=Math.pow(n/2,2)){var c=a[4*r],l=a[4*r+1],u=a[4*r+2];Math.max(c,l,u)<e?(a[4*r+1]=0,a[4*r+2]=0):i&&(a[4*r]=255,a[4*r+1]=255,a[4*r+2]=255)}else a[4*r+3]=i?0:100}return t}},X34R:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"main",style:{backgroundImage:"url(./image/back.jpg)"}},[a("div",{ref:"container",staticClass:"container"}),t._v(" "),a("div",{staticClass:"btnFrame"},[a("div",{staticClass:"btn"},[a("img",{attrs:{src:i("dYHa")}}),t._v(" "),a("div",[t._v("Image")]),t._v(" "),a("input",{staticClass:"file",attrs:{type:"file",accept:"image/*"},on:{change:t.onSelectFile}})]),t._v(" "),a("div",{staticClass:"btn",on:{click:t.onStart}},[a("img",{attrs:{src:i("XYSa")}}),t._v(" "),a("div",[t._v("Camera")])])])])])},n=[],r={render:a,staticRenderFns:n};e.a=r},XYSa:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMmMzZTUwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xMiAyMGgtN2EyIDIgMCAwIDEgLTIgLTJ2LTlhMiAyIDAgMCAxIDIgLTJoMWEyIDIgMCAwIDAgMiAtMmExIDEgMCAwIDEgMSAtMWg2YTEgMSAwIDAgMSAxIDFhMiAyIDAgMCAwIDIgMmgxYTIgMiAwIDAgMSAyIDJ2My41IiAvPgogIDxwYXRoIGQ9Ik0xMiAxNmEzIDMgMCAxIDAgMCAtNmEzIDMgMCAwIDAgMCA2eiIgLz4KICA8cGF0aCBkPSJNMTkgMjJ2LTYiIC8+CiAgPHBhdGggZD0iTTIyIDE5bC0zIC0zbC0zIDMiIC8+Cjwvc3ZnPg=="},YaEn:function(t,e,i){"use strict";var a=i("7+uW"),n=i("/ocq"),r=i("EWfp");a.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/*",component:r.a}]})},"Zl/t":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjM4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KICAgIDxwYXRoIGQ9Ik0yMCA0aC0zLjE3TDE1IDJIOUw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yem0tNSAxMS41VjEzSDl2Mi41TDUuNSAxMiA5IDguNVYxMWg2VjguNWwzLjUgMy41LTMuNSAzLjV6Ii8+Cjwvc3ZnPg=="},agcW:function(t,e){},"d+Mw":function(t,e){},d5JE:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[0===t.mode?i("Top",{attrs:{onStart:t.openCamApp,onInput:t.setImageData}}):t._e(),t._v(" "),1===t.mode?i("CameraApp",{attrs:{onClose:t.closeCamApp,onSet:t.setImageData}}):t._e(),t._v(" "),3===t.mode?i("Viewer",{attrs:{imageData:t.imageData,isImage:!0,onClose:t.closeCamApp}}):t._e(),t._v(" "),i("HeaderBar",{directives:[{name:"show",rawName:"v-show",value:0===t.mode||3===t.mode,expression:"mode === 0 || mode === 3"}]})],1)},n=[],r={render:a,staticRenderFns:n};e.a=r},dYHa:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMmMzZTUwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik0xNSA4aC4wMSIgLz4KICA8cGF0aCBkPSJNMTIuNSAyMWgtNi41YTMgMyAwIDAgMSAtMyAtM3YtMTJhMyAzIDAgMCAxIDMgLTNoMTJhMyAzIDAgMCAxIDMgM3Y2LjUiIC8+CiAgPHBhdGggZD0iTTMgMTZsNSAtNWMuOTI4IC0uODkzIDIuMDcyIC0uODkzIDMgMGwzLjUgMy41IiAvPgogIDxwYXRoIGQ9Ik0xNCAxNGwxIC0xYy42NzkgLS42NTMgMS40NzMgLS44MjkgMi4yMTQgLS41MjYiIC8+CiAgPHBhdGggZD0iTTE5IDIydi02IiAvPgogIDxwYXRoIGQ9Ik0yMiAxOWwtMyAtM2wtMyAzIiAvPgo8L3N2Zz4K"},eKAn:function(t,e){},lsO9:function(t,e){},m3Th:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMmMzZTUwIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPgogIDxwYXRoIHN0cm9rZT0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPgogIDxwYXRoIGQ9Ik01IDEybC0yIDBsOSAtOWw5IDlsLTIgMCIgLz4KICA8cGF0aCBkPSJNNSAxMnY3YTIgMiAwIDAgMCAyIDJoMTBhMiAyIDAgMCAwIDIgLTJ2LTciIC8+CiAgPHBhdGggZD0iTTkgMjF2LTZhMiAyIDAgMCAxIDIgLTJoMmEyIDIgMCAwIDEgMiAydjYiIC8+Cjwvc3ZnPgo="},mriO:function(t,e,i){"use strict";function a(t){i("d+Mw")}var n=i("CZZz"),r=i("L+cJ"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-07a776d8",null);e.a=c.exports},nDkR:function(t,e){},o7JW:function(t,e,i){"use strict";var a={isIOS:function(){return/iphone|ipod|ipad/.test(navigator.userAgent.toLowerCase())},isAndroid:function(){return/android/.test(navigator.userAgent.toLowerCase())},isPC:function(){return!a.isIOS()&&!a.isAndroid()&&!/mobile/.test(navigator.userAgent.toLowerCase())}};e.a=a},teIl:function(t,e,i){"use strict";function a(t){i("lsO9")}var n=i("HCTz"),r=i("1TOb"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-33d00248",null);e.a=c.exports},uMye:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"seekBarFrame",on:{touchstart:function(e){return e.preventDefault(),t.handleSeekStart.apply(null,arguments)},mousedown:function(e){return e.preventDefault(),t.handleSeekStart.apply(null,arguments)},touchmove:t.handleSeek,mousemove:t.handleSeek,touchend:t.handleSeekEnd,mouseup:t.handleSeekEnd}},[i("div",{staticClass:"seekBar"},[i("div",{staticClass:"progress",style:{width:t.value/t.max*100+"%"}},[i("div",{staticClass:"circle"})])]),t._v(" "),i("div",{staticClass:"seekAbleArea",style:{position:this.seeking?"fixed":"absolute"}})])},n=[],r={render:a,staticRenderFns:n};e.a=r},wBn9:function(t,e){},wxRh:function(t,e,i){"use strict";function a(t){i("agcW")}var n=i("ylou"),r=i("X34R"),s=i("VU/8"),o=a,c=s(n.a,r.a,!1,o,"data-v-053de43a",null);e.a=c.exports},ylou:function(t,e,i){"use strict";var a=i("H1si"),n=i.n(a),r=i("KkvV"),s=i("ROS8");e.a={props:["onStart","onInput"],data:function(){return{threeCtrl:null}},methods:{onSelectFile:function(t){var e=this;n()(t.target.files[0],function(t){var i=Math.min(t.width,t.height),a=Math.min(500,i),n=document.createElement("canvas");n.width=a,n.height=a;var r=n.getContext("2d");r.drawImage(t,(t.width-i)/2,(t.height-i)/2,i,i,0,0,a,a),e.onInput(r.getImageData(0,0,a,a))},{canvas:!0,cover:!0,aspectRatio:1})}},mounted:function(){var t=this,e=new Image;e.src="./image/default.png",e.onload=function(){var i=document.createElement("canvas"),a=e.width;i.width=a,i.height=a;var n=i.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,a,a),n.drawImage(e,(a-e.width)/2,(a-e.height)/2),t.threeCtrl=new r.a(t.$refs.container,Object(s.a)(n.getImageData(0,0,a,a),238,!0))}},destroyed:function(){this.threeCtrl.destroy()}}}},["NHnr"]);
//# sourceMappingURL=app.ed5d82ab1ab8d3b487f8.js.map