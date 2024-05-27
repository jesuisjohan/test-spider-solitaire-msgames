"use strict";(self.webpackChunkgame_core=self.webpackChunkgame_core||[]).push([[613],{683:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(32),i=n(22),a=n(2),o=n(20),s=n.n(o),d=n(66),c=n.n(d),u=n(58),p=n.n(u),l=n(238),h=n.n(l),v=n(33),m=n.n(v),f=n(67),w=n.n(f),g=n(701),b=n(691),I=n(694),x=GameCore.Utils,F=function(){function e(e,t){var n=this;this.options=void 0,this.recorder=void 0,this.pane=void 0,this.optionsFolder=void 0,this.controlFolder=void 0,this.previewFolder=void 0,this.infoFolder=void 0,this.qualityInput=void 0,this.previewImage=void 0,this.printScreenButton=void 0,this.startRecordButton=void 0,this.stopRecordButton=void 0,this.previewRecordButton=void 0,this.downloadZipButton=void 0,this.recorderMonitor=void 0,this.cachedImages=void 0,this.previewImages=void 0,this.previewImageIndex=void 0,this.previewTimer=void 0,this.snapshotFrame=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.recorder.snapshotFrameAsync();case 2:n.printScreenButton.disabled=!1,n.startRecordButton.disabled=!1;case 4:case"end":return e.stop()}}),e)}))),this.startCapture=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.previewFolder.expanded=!1,e.next=3,n.recorder.startCaptureAsync();case 3:n.cachedImages=[],n.stopRecordButton.disabled=!1;case 5:case"end":return e.stop()}}),e)}))),this.stopCapture=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.recorder.stopCaptureAsync();case 2:n.previewFolder.expanded=!0,n.stopRecordButton.disabled=!0,n.previewRecord();case 5:case"end":return e.stop()}}),e)}))),this.downloadImages=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.recorder.downloadImagesAsync();case 2:n.printScreenButton.disabled=!1,n.startRecordButton.disabled=!1,n.previewRecordButton.disabled=!1,n.downloadZipButton.disabled=!0;case 6:case"end":return e.stop()}}),e)}))),this.previewRecord=function(){n.previewImages=n.recorder.getRecordImages(),0!==n.previewImages.length&&(n.previewImageIndex=-1,n.requestPreviewFrame(),n.previewRecordButton.disabled=!1)},this.requestPreviewFrame=(0,i.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(clearTimeout(n.previewTimer),t=n.options.recordFps,n.previewImageIndex++,!(n.previewImageIndex>=n.previewImages.length)){e.next=6;break}return n.previewImageIndex=-1,e.abrupt("return");case 6:return n.previewImage.label="Frames\n"+(n.previewImageIndex+1)+"/"+n.previewImages.length,r=n.previewImages[n.previewImageIndex],e.next=10,n.processImage(n.previewImageIndex,r);case 10:n.previewTimer=setTimeout(n.requestPreviewFrame,1e3/t);case 11:case"end":return e.stop()}}),e)}))),this.processImage=function(){var e=(0,i.Z)(s().mark((function e(t,r){var i,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.previewImage.element.querySelector("img")){e.next=3;break}return e.abrupt("return");case 3:if(!n.cachedImages[t]){e.next=6;break}return i.src=n.cachedImages[t],e.abrupt("return");case 6:return e.next=8,x.Image.blobToHtmlImage(r,!1);case 8:a=e.sent,i.src=a.src,n.cachedImages[t]=a.src;case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),this.options=t,this.recorder=e,this.createPanel(),this.createOptionsFolder(),this.createControlFolder(),this.createPreviewFolder(),this.createInfoFolder(),this.addControlHotKey()}var t=e.prototype;return t.createPanel=function(){this.pane=new b.Pane({title:"Canvas Recorder",expanded:!0}),this.pane.registerPlugin(I);var e=this.pane.element.parentElement;e&&(e.style.width="280px")},t.createOptionsFolder=function(){this.optionsFolder=this.pane.addFolder({title:"Options",expanded:!0}),this.addImageTypePanel(),this.addSyncFpsPanel(),this.addFpsPanel(),this.addQualityPanel()},t.createControlFolder=function(){this.controlFolder=this.pane.addFolder({title:"Control",expanded:!0}),this.addPrintScreenButton(),this.controlFolder.addSeparator(),this.addStartRecordButton(),this.addStopRecordButton()},t.createPreviewFolder=function(){this.previewFolder=this.pane.addFolder({title:"Preview",expanded:!1}),this.addPreviewAnimation(),this.addPreviewRecordButton(),this.addDownloadZipButton()},t.createInfoFolder=function(){this.infoFolder=this.pane.addFolder({title:"Info",expanded:!0}),this.recorderMonitor={videoElapsedTime:"00:00:00",realTimeElapsedTime:"00:00:00"},this.addVideoElapsedTimeMonitor(),this.addRealTimeElapsedTimeMonitor()},t.blockInputPanel=function(){this.printScreenButton.disabled=!0,this.startRecordButton.disabled=!0,this.stopRecordButton.disabled=!0,this.previewRecordButton.disabled=!0,this.downloadZipButton.disabled=!0},t.unblockInputPanel=function(){this.printScreenButton.disabled=!1,this.startRecordButton.disabled=!1,this.stopRecordButton.disabled=!1,this.previewRecordButton.disabled=!1,this.downloadZipButton.disabled=!1},t.updateRecordInfo=function(e,t){this.recorderMonitor.videoElapsedTime=e,this.recorderMonitor.realTimeElapsedTime=t},t.addImageTypePanel=function(){var e=this;this.optionsFolder.addBlade({view:"list",label:"Image Type",options:{webp:"webp",png:"png",jpeg:"jpeg"},value:this.options.type}).on("change",(function(t){e.options.type=t.value,e.qualityInput.disabled="png"===t.value}))},t.addSyncFpsPanel=function(){this.optionsFolder.addInput(this.options,"syncFps",{label:"Sync Frames"})},t.addFpsPanel=function(){this.optionsFolder.addInput(this.options,"recordFps",{min:5,max:60,step:1,label:"Record FPS"})},t.addQualityPanel=function(){this.qualityInput=this.optionsFolder.addInput(this.options,"quality",{min:0,max:1,step:.05,label:"Quality"})},t.addPrintScreenButton=function(){this.printScreenButton=this.controlFolder.addButton({title:"Screenshot Canvas (or press S)"}),this.printScreenButton.on("click",this.snapshotFrame)},t.addStartRecordButton=function(){this.startRecordButton=this.controlFolder.addButton({title:"Record Canvas (or press Z)"}),this.startRecordButton.on("click",this.startCapture)},t.addStopRecordButton=function(){this.stopRecordButton=this.controlFolder.addButton({title:"Stop Record (or press X)",disabled:!0}),this.stopRecordButton.on("click",this.stopCapture)},t.addPreviewAnimation=function(){var e;this.previewImage=this.previewFolder.addInput({url:""},"url",{label:"Frames\n0/0",view:"input-image",imageFit:"contain",extensions:[".webp",".png",".jpeg"]});var t=this.previewImage.element;null==(e=t.querySelector(".tp-imgv_input"))||e.remove();var n=t.querySelector(".tp-lblv_v");n&&(n.style.width="100%",n.style.height="250px"),(n=t.querySelector(".tp-lblv_l"))&&(n.style.flex="none"),(n=t.querySelector(".tp-imgv"))&&(n.style.width="75%",n.style.height="100%")},t.addPreviewRecordButton=function(){this.previewRecordButton=this.previewFolder.addButton({title:"Review Record (or press C)"}),this.previewRecordButton.on("click",this.previewRecord)},t.addDownloadZipButton=function(){this.downloadZipButton=this.previewFolder.addButton({title:"Download Zip (or press D)"}),this.downloadZipButton.on("click",this.downloadImages)},t.addVideoElapsedTimeMonitor=function(){this.infoFolder.addMonitor(this.recorderMonitor,"videoElapsedTime",{label:"Elapsed Time"})},t.addRealTimeElapsedTimeMonitor=function(){this.infoFolder.addMonitor(this.recorderMonitor,"realTimeElapsedTime",{label:"Real Time Elapsed Time"})},t.addControlHotKey=function(){var e=this;window.addEventListener("keydown",(function(t){switch(t.key){case"s":if(e.printScreenButton.disabled)return;e.snapshotFrame();break;case"d":if(e.downloadZipButton.disabled)return;e.downloadImages();break;case"z":if(e.startRecordButton.disabled)return;e.startCapture();break;case"x":if(e.stopRecordButton.disabled)return;e.stopCapture();break;case"c":if(e.previewRecordButton.disabled)return;e.previewRecord()}}))},e}(),C=F,y={type:"webp",quality:.85,recordFps:30,syncFps:!0},k=n(60),B=n.n(k),R=function(){return"rgb("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+")"},S=function(e){var t=e.getContext("2d");if(!t)return console.error("Canvas context is null");var n=0,r=10,i=r,a=r,o=5,s=5,d=R();!function c(){t.clearRect(0,0,e.width,e.height),t.beginPath(),t.arc(i,a,r,0,2*Math.PI),t.fillStyle=d,B()(t).call(t),t.closePath(),(i+o>e.width-r||i+o<r)&&(o=-o,d=R()),(a+s>e.height-r||a+s<r)&&(s=-s,d=R()),i+=o,a+=s,t.font="10px Arial",t.fillStyle="black",t.fillText("F"+n++,5,15),t.beginPath(),t.moveTo(0,0),t.lineTo(e.width,0),t.lineTo(e.width,e.height),t.lineTo(0,e.height),t.lineTo(0,0),t.strokeStyle="black",t.stroke(),t.closePath(),requestAnimationFrame(c)}()},T=GameCore.Utils,P=function(e){function t(){for(var t,n,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=e.call.apply(e,c()(t=[this]).call(t,a))||this).options=void 0,n.panelControl=void 0,n.canvas=void 0,n.capturing=void 0,n.requestCount=0,n.requestFinishCount=0,n.lastCaptureTime=0,n.realStartTime=0,n.countVideoTime=0,n.imageList=void 0,n.processCapture=(0,i.Z)(s().mark((function e(){var t,r,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.isCapturing()){e.next=2;break}return e.abrupt("return");case 2:return t=performance.now(),e.next=5,n.waitNextFrame();case 5:if(n.isCapturing()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,n.handleCapture();case 9:if(n.lastCaptureTime=performance.now(),r=t-n.lastCaptureTime,n.options.syncFps){e.next=16;break}if(!((i=1e3/n.options.recordFps)>r)){e.next=16;break}return e.next=16,T.Time.sleepAsync(i-r);case 16:n.countVideoTime+=r,n.updateRecordInfo(),n.processCapture();case 19:case"end":return e.stop()}}),e)}))),n.handleCapture=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.requestCount++,e.next=4,n.snapshotCanvas();case 4:if(t=e.sent){e.next=7;break}throw new Error("Image data is null");case 7:n.addImageDataToList(n.requestCount,t),n.requestFinishCount++,e.next=16;break;case 11:return e.prev=11,e.t0=e.catch(0),console.error("handleCapture",e.t0),e.next=16,n.stopCaptureAsync();case 16:case"end":return e.stop()}}),e,null,[[0,11]])}))),n.addImageDataToList=function(e,t){var r=n.getPaddingName(e);n.imageList.push({name:r+"."+n.options.type,input:t})},n}(0,a.Z)(t,e);var n=t.prototype;return n.init=function(){this.imageList=[],this.options=(0,r.Z)({},y)},n.configure=function(e){this.options=(0,r.Z)({},this.options,e),this.panelControl=new C(this,this.options)},n.setCanvas=function(e){this.canvas=e},n.runTestCanvas=function(){var e=this.createCanvas(200,300);e.style.position="absolute",document.body.appendChild(e),S(e),this.setCanvas(e)},n.getOptions=function(){return this.options},n.isCapturing=function(){return this.capturing},n.initCaptureState=function(){this.imageList=[],this.capturing=!1,this.requestCount=0,this.requestFinishCount=0,this.countVideoTime=0,this.realStartTime=performance.now()},n.setStateInputPanel=function(e){e?this.panelControl.unblockInputPanel():this.panelControl.blockInputPanel()},n.startCaptureAsync=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isCapturing()){e.next=2;break}return e.abrupt("return");case 2:if(this.canvas){e.next=5;break}return console.warn("Canvas is not set"),e.abrupt("return");case 5:this.initCaptureState(),this.setStateInputPanel(!1),console.info("options",this.options),this.capturing=!0,this.processCapture();case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.waitNextFrame=function(){var e=(0,i.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new(p())((function(e){requestAnimationFrame((function(){e()}))})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.updateRecordInfo=function(){var e=this.formatDateHMS(this.countVideoTime),t=this.formatDateHMS(performance.now()-this.realStartTime);this.panelControl.updateRecordInfo(e,t)},n.snapshotCanvas=function(){var e=this;return new(p())((function(t){e.canvas.toBlob((function(e){t(e)}),"image/"+e.options.type,e.options.quality)}))},n.stopCaptureAsync=function(){var e=(0,i.Z)(s().mark((function e(){var t=this;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.capturing=!1,e.abrupt("return",new(p())((function(e){var n=setInterval((0,i.Z)(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(t.requestCount===t.requestFinishCount){r.next=2;break}return r.abrupt("return");case 2:clearInterval(n),t.setStateInputPanel(!0),e();case 5:case"end":return r.stop()}}),r)}))),500)})));case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.snapshotFrameAsync=function(){var e=(0,i.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.isCapturing()){e.next=3;break}return e.abrupt("return");case 3:if(this.setStateInputPanel(!1),this.canvas){e.next=7;break}return console.warn("Canvas is not set"),e.abrupt("return");case 7:return e.next=9,this.waitNextFrame();case 9:return e.next=11,this.snapshotCanvas();case 11:if(t=e.sent){e.next=14;break}throw new Error("Image data is null");case 14:this.downloadImage(t),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.error("snapshotFrame",e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(){return e.apply(this,arguments)}}(),n.downloadImage=function(e){var t=document.createElement("a"),n="screenshot-"+this.getDateFilename();t.download=n,t.href=h().createObjectURL(e);var r="image/"+this.options.type;t.dataset.downloadurl=[r,t.download,t.href].join(":"),t.click(),t.remove()},n.downloadImagesAsync=function(){var e=(0,i.Z)(s().mark((function e(){var t,n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!this.isCapturing()){e.next=3;break}return e.abrupt("return");case 3:return this.setStateInputPanel(!1),t=document.createElement("a"),n="images-"+this.getDateFilename(),t.download=n,e.next=9,(0,g.RZ)(this.imageList).blob();case 9:r=e.sent,t.href=h().createObjectURL(r),t.click(),t.remove(),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("downloadZipImages",e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),n.getRecordImages=function(){var e;return m()(e=this.imageList).call(e,(function(e){return e.input}))},n.createCanvas=function(e,t){var n=document.createElement("canvas");return n.width=e,n.height=t,n},n.getPaddingName=function(e){for(var t=e.toString().length,n="",r=0;r<5-t;r++)n+="0";return n+e.toString()},n.getDateFilename=function(){var e=new Date;return e.toLocaleTimeString()+"-"+e.toLocaleDateString()},n.formatDateHMS=function(e,t){void 0===t&&(t=!1);var n=new Date(e).toISOString();return t?w()(n).call(n,11,-5):w()(n).call(n,14,-5)},t}(Phaser.Plugins.BasePlugin),Z=P}}]);