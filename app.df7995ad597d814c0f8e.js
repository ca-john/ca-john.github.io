"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[143],{135:(t,e,i)=>{var o=i(477),n=i(11),s=i(365),r=i(358),d=function(t,e,i){if(i||2===arguments.length)for(var o,n=0,s=e.length;n<s;n++)!o&&n in e||(o||(o=Array.prototype.slice.call(e,0,n)),o[n]=e[n]);return t.concat(o||Array.prototype.slice.call(e))};const a=function(){function t(){this.group=new o.Tme,this.backgroundColor=window.getComputedStyle(document.body,null).getPropertyValue("background-color"),this.sizeSquared=35,this.windowX=window.innerWidth,this.windowY=window.innerHeight,this.scene=new o.xsS,this.renderer=new o.CP7({antialias:!0,alpha:!0}),this.camera=new o.cPb(20,this.windowX/this.windowY,1,2e3),this.models=[],this.currMouseX=3,this.oldMouseX=3,this.oldMouseY=65,this.lastScale=155,this.generateScene(),this.controls=new s.z(this.camera,this.renderer.domElement),this.backgroundPlane=new o.Kj0,this.docheight=-1,this.requestId=-1}return t.prototype.init=function(){this.generateScene(),this.setCamera(),this.generateControls(),this.addPlane(),this.addBackground(),this.addRemoveScroll(),this.addPointLight(),this.loadModels("https://raw.githubusercontent.com/ca-john/ca-john.github.io/main/homepage_buildings.obj",this.onLoadModelsComplete.bind(this)),this.animate()},t.prototype.generateScene=function(){this.renderer.setSize(this.windowX,this.windowY),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=o.dwk,document.body.querySelector(".canvas-wrapper").appendChild(this.renderer.domElement),this.scene.fog=new o.yo9("#36454F",.01)},t.prototype.addPointLight=function(){var t=new o.cek("#05f7ff",10);t.position.set(50,180,-50),this.scene.add(t)},t.prototype.addRemoveScroll=function(){document.documentElement.offsetHeight,window.innerHeight;window.addEventListener("scroll",(function(){0==document.documentElement.scrollTop&&document.querySelector(".arrows").classList.remove("scroll_remove"),0!=document.documentElement.scrollTop&&document.querySelector(".arrows").classList.add("scroll_remove")}))},t.prototype.setCamera=function(){this.camera.position.set(0,50,150),this.scene.add(this.camera)},t.prototype.generateControls=function(){this.controls.dampingFactor=.03,this.controls.enabled=!1},t.prototype.addSpotLight=function(){var t="#f00",e=641,i=-462,n=509,s=new o.PMe(t,5);s.position.set(e,i,n),s.castShadow=!0,this.scene.add(s)},t.prototype.addBackground=function(){var t=this,e=new o._12(400,100),i=new o.EJi({color:"#fff"});this.backgroundPlane.material=i,this.backgroundPlane.geometry=e,this.backgroundPlane.receiveShadow=!1,this.backgroundPlane.position.y=10,this.backgroundPlane.position.z=-150,this.scene.add(this.backgroundPlane),this.tiltingEffect={body:document.body,docEl:document.documentElement,getMousePos:function(t,e){var i=0,o=0;return t||(t=window.event),t.pageX||t.pageY?(i=t.pageX,o=t.pageY):(t.clientX||t.clientY)&&(i=t.clientX+e.left,o=t.clientY+e.top),{x:i,y:o}},lerp:function(t,e,i){return(1-i)*t+i*e},lineEq:function(t,e,i,o,n){var s=(t-e)/(i-o);return s*n+(e-s*o)}},this.docheight=Math.max(this.tiltingEffect.body.scrollHeight,this.tiltingEffect.body.offsetHeight,this.tiltingEffect.docEl.clientHeight,this.tiltingEffect.docEl.scrollHeight,this.tiltingEffect.docEl.offsetHeight),this.requestId=requestAnimationFrame((function(){return t.tilt()})),window.addEventListener("mousemove",(function(e){var i={left:t.tiltingEffect.body.scrollLeft+t.tiltingEffect.docEl.scrollLeft,top:t.tiltingEffect.body.scrollTop+t.tiltingEffect.docEl.scrollTop},o=t.tiltingEffect.getMousePos(e,i);t.currMouseX=o.x-i.left})),window.addEventListener("resize",(function(){return t.docheight=Math.max(t.tiltingEffect.body.scrollHeight,t.tiltingEffect.body.offsetHeight,t.tiltingEffect.docEl.clientHeight,t.tiltingEffect.docEl.scrollHeight,t.tiltingEffect.docEl.offsetHeight)})),window.onbeforeunload=function(){window.cancelAnimationFrame(t.requestId),window.scrollTo(0,0)}},t.prototype.tilt=function(){var t=this;this.oldMouseX=this.tiltingEffect.lerp(this.oldMouseX,this.tiltingEffect.lineEq(6,0,this.windowX,0,this.currMouseX),.05);var e=window.pageYOffset;this.oldMouseY=this.tiltingEffect.lerp(this.oldMouseY,this.tiltingEffect.lineEq(0,65,this.docheight,0,e),.05),this.lastScale=this.tiltingEffect.lerp(this.lastScale,this.tiltingEffect.lineEq(0,158,this.docheight,0,e),.05),this.camera.position.set(this.oldMouseX,this.oldMouseY,this.lastScale),this.requestId=requestAnimationFrame((function(){return t.tilt()}))},t.prototype.addPlane=function(){var t=new o._12(200,200),e=new o.Wid({color:"#000000",metalness:0,emissive:"#000000",roughness:0}),i=new o.Kj0(t,e);t.rotateX(-Math.PI/2),i.position.y=0,this.scene.add(i)},t.prototype.getModel=function(){return this.models[Math.floor(Math.random()*Math.floor(this.models.length))]},t.prototype.onLoadModelsComplete=function(t){var e=this;this.models=d([],t.children,!0).map((function(t){var e=.01;return t.scale.set(e,e,e),t.position.set(0,-20,0),t.receiveShadow=!0,t.castShadow=!0,t})),this.draw(),setTimeout((function(){e.deleteLoadingIcon(),e.showBuildings()}),500),window.addEventListener("resize",this.onResize.bind(this))},t.prototype.deleteLoadingIcon=function(){document.querySelector(".loadingIcon").classList.add("loadIconRemove")},t.prototype.deleteScrollIcon=function(){document.querySelector(".arrows").classList.add("scroll_remove")},t.prototype.showBuildings=function(){this.sortBuildingsByDistance(),this.models.forEach((function(t,e){r.p8.to(t.position,{duration:.8+e/4e3,y:1,ease:"Power4.out",delay:e/4e3})}))},t.prototype.sortBuildingsByDistance=function(){this.models.sort((function(t,e){return t.position.z>e.position.z?1:t.position.z<e.position.z?-1:0})).reverse()},t.prototype.loadModels=function(t,e){(new n.L).load(t,e)},t.prototype.draw=function(){for(var t=new o.EJi({color:"#000",metalness:0,emissive:"#000",roughness:.8}),e=0;e<this.sizeSquared;e++)for(var i=0;i<this.sizeSquared;i++){var n=this.getModel().clone();n.material=t,n.scale.y=Math.random()*(.008+.01),n.position.x=3*e,n.position.z=3*i,this.group.add(n),this.models.push(n)}this.scene.add(this.group),this.group.position.set(-this.sizeSquared-10,1,-this.sizeSquared-10)},t.prototype.onResize=function(){this.windowX=window.innerWidth,this.windowY=window.innerHeight,this.camera.aspect=this.windowX/this.windowY,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.windowX,this.windowY)},t.prototype.onResumeClick=function(){},t.prototype.animate=function(){this.controls.update(),this.renderer.render(this.scene,this.camera),requestAnimationFrame(this.animate.bind(this))},t}();document.addEventListener("DOMContentLoaded",(function(){(new a).init()}))}},t=>{t.O(0,[431],(()=>{return e=135,t(t.s=e);var e}));t.O()}]);