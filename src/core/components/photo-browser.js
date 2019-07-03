(function framework7ComponentLoader(e,o){void 0===o&&(o=!0);document,window;var r=e.$,t=(e.Template7,e.utils),a=(e.device,e.support,e.Class),n=(e.Modal,e.ConstructorMethods),p=(e.ModalMethods,function(e){function o(o,r){void 0===r&&(r={}),e.call(this,r,[o]);var a=this;a.app=o;var n=t.extend({on:{}},o.params.photoBrowser);a.useModulesParams(n),a.params=t.extend(n,r),t.extend(a,{exposed:!1,opened:!1,activeIndex:a.params.swiper.initialSlide,url:a.params.url,view:a.params.view||o.views.main,swipeToClose:{allow:!0,isTouched:!1,diff:void 0,start:void 0,current:void 0,started:!1,activeSlide:void 0,timeStart:void 0}}),a.useModules(),a.init()}return e&&(o.__proto__=e),o.prototype=Object.create(e&&e.prototype),o.prototype.constructor=o,o.prototype.onSlideChange=function(e){var o=this;o.activeIndex=e.activeIndex;var t=e.activeIndex+1,a=o.params.virtualSlides?o.params.photos.length:e.slides.length;e.params.loop&&(a-=2,(t-=e.loopedSlides)<1&&(t=a+t),t>a&&(t-=a));var n=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.activeIndex+'"]'):e.slides.eq(e.activeIndex),p=o.params.virtualSlides?e.$wrapperEl.find('.swiper-slide[data-swiper-slide-index="'+e.previousIndex+'"]'):e.slides.eq(e.previousIndex),s=o.$el.find(".photo-browser-current"),i=o.$el.find(".photo-browser-total");if("page"===o.params.type&&o.params.navbar&&0===s.length&&"ios"===o.app.theme){var l=o.app.navbar.getElByPage(o.$el);l&&(s=r(l).find(".photo-browser-current"),i=r(l).find(".photo-browser-total"))}if(s.text(t),i.text(a),o.captions.length>0){var d=e.params.loop?n.attr("data-swiper-slide-index"):o.activeIndex;o.$captionsContainerEl.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active"),o.$captionsContainerEl.find('[data-caption-index="'+d+'"]').addClass("photo-browser-caption-active")}var c=p.find("video");c.length>0&&"pause"in c[0]&&c[0].pause()},o.prototype.onTouchStart=function(){var e=this.swipeToClose;e.allow&&(e.isTouched=!0)},o.prototype.onTouchMove=function(e){var o=this,r=o.swipeToClose;if(r.isTouched){r.started||(r.started=!0,r.start="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,o.params.virtualSlides?r.activeSlide=o.swiper.$wrapperEl.children(".swiper-slide-active"):r.activeSlide=o.swiper.slides.eq(o.swiper.activeIndex),r.timeStart=t.now()),e.preventDefault(),r.current="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,r.diff=r.start-r.current;var a=1-Math.abs(r.diff)/300,n=o.exposed||"dark"===o.params.theme?0:255;r.activeSlide.transform("translate3d(0,"+-r.diff+"px,0)"),o.swiper.$el.css("background-color","rgba("+n+", "+n+", "+n+", "+a+")").transition(0)}},o.prototype.onTouchEnd=function(){var e=this,o=e.swipeToClose;if(o.isTouched=!1,o.started){o.started=!1,o.allow=!1;var r=Math.abs(o.diff),a=(new Date).getTime()-o.timeStart;a<300&&r>20||a>=300&&r>100?t.nextTick(function(){e.$el&&(o.diff<0?e.$el.addClass("swipe-close-to-bottom"):e.$el.addClass("swipe-close-to-top")),e.emit("local::swipeToClose",e),e.close(),o.allow=!0}):(0!==r?o.activeSlide.addClass("photo-browser-transitioning").transitionEnd(function(){o.allow=!0,o.activeSlide.removeClass("photo-browser-transitioning")}):o.allow=!0,e.swiper.$el.transition("").css("background-color",""),o.activeSlide.transform(""))}else o.started=!1},o.prototype.renderNavbar=function(){var e=this;if(e.params.renderNavbar)return e.params.renderNavbar.call(e);var o=e.params.iconsColor;e.params.iconsColor||"dark"!==e.params.theme||(o="white");var r="ios"!==e.app.theme&&"aurora"!==e.app.theme||!e.params.backLinkText?"":e.params.backLinkText,t="page"!==e.params.type;return('\n      <div class="navbar">\n        <div class="navbar-inner sliding">\n          <div class="left">\n            <a class="link '+(t?"popup-close":"")+" "+(r?"":"icon-only")+" "+(t?"":"back")+'" '+(t?'data-popup=".photo-browser-popup"':"")+'>\n              <i class="icon icon-back '+(o?"color-"+o:"")+'"></i>\n              '+(r?"<span>"+r+"</span>":"")+'\n            </a>\n          </div>\n          <div class="title">\n            <span class="photo-browser-current"></span>\n            <span class="photo-browser-of">'+e.params.navbarOfText+'</span>\n            <span class="photo-browser-total"></span>\n          </div>\n          <div class="right"></div>\n        </div>\n      </div>\n    ').trim()},o.prototype.renderToolbar=function(){var e=this;if(e.params.renderToolbar)return e.params.renderToolbar.call(e);var o=e.params.iconsColor;return e.params.iconsColor||"dark"!==e.params.theme||(o="white"),('\n      <div class="toolbar toolbar-bottom tabbar">\n        <div class="toolbar-inner">\n          <a class="link photo-browser-prev">\n            <i class="icon icon-back '+(o?"color-"+o:"")+'"></i>\n          </a>\n          <a class="link photo-browser-next">\n            <i class="icon icon-forward '+(o?"color-"+o:"")+'"></i>\n          </a>\n        </div>\n      </div>\n    ').trim()},o.prototype.renderCaption=function(e,o){return this.params.renderCaption?this.params.renderCaption.call(this,e,o):('\n      <div class="photo-browser-caption" data-caption-index="'+o+'">\n        '+e+"\n      </div>\n    ").trim()},o.prototype.renderObject=function(e,o){return this.params.renderObject?this.params.renderObject.call(this,e,o):'\n      <div class="photo-browser-slide photo-browser-object-slide swiper-slide" data-swiper-slide-index="'+o+'">'+(e.html?e.html:e)+"</div>\n    "},o.prototype.renderLazyPhoto=function(e,o){var r=this;return r.params.renderLazyPhoto?r.params.renderLazyPhoto.call(r,e,o):('\n      <div class="photo-browser-slide photo-browser-slide-lazy swiper-slide" data-swiper-slide-index="'+o+'">\n          <div class="preloader swiper-lazy-preloader '+("dark"===r.params.theme?"color-white":"")+'">'+(t[r.app.theme+"PreloaderContent"]||"")+'</div>\n          <span class="swiper-zoom-container">\n              <img data-src="'+(e.url?e.url:e)+'" class="swiper-lazy">\n          </span>\n      </div>\n    ').trim()},o.prototype.renderPhoto=function(e,o){return this.params.renderPhoto?this.params.renderPhoto.call(this,e,o):('\n      <div class="photo-browser-slide swiper-slide" data-swiper-slide-index="'+o+'">\n        <span class="swiper-zoom-container">\n          <img src="'+(e.url?e.url:e)+'">\n        </span>\n      </div>\n    ').trim()},o.prototype.render=function(){var e=this;return e.params.render?e.params.render.call(e,e.params):('\n      <div class="photo-browser photo-browser-'+e.params.theme+'">\n        <div class="view">\n          <div class="page photo-browser-page photo-browser-page-'+e.params.theme+" no-toolbar "+(e.params.navbar?"":"no-navbar")+'" data-name="photo-browser-page">\n            '+(e.params.navbar?e.renderNavbar():"")+"\n            "+(e.params.toolbar?e.renderToolbar():"")+'\n            <div class="photo-browser-captions photo-browser-captions-'+(e.params.captionsTheme||e.params.theme)+'">\n              '+e.params.photos.map(function(o,r){return o.caption?e.renderCaption(o.caption,r):""}).join(" ")+'\n            </div>\n            <div class="photo-browser-swiper-container swiper-container">\n              <div class="photo-browser-swiper-wrapper swiper-wrapper">\n                '+(e.params.virtualSlides?"":e.params.photos.map(function(o,r){return o.html||("string"==typeof o||o instanceof String)&&o.indexOf("<")>=0&&o.indexOf(">")>=0?e.renderObject(o,r):!0===e.params.swiper.lazy||e.params.swiper.lazy&&e.params.swiper.lazy.enabled?e.renderLazyPhoto(o,r):e.renderPhoto(o,r)}).join(" "))+"\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    ").trim()},o.prototype.renderStandalone=function(){return this.params.renderStandalone?this.params.renderStandalone.call(this):'<div class="popup photo-browser-popup photo-browser-standalone popup-tablet-fullscreen">'+this.render()+"</div>"},o.prototype.renderPage=function(){return this.params.renderPage?this.params.renderPage.call(this):this.render()},o.prototype.renderPopup=function(){return this.params.renderPopup?this.params.renderPopup.call(this):'<div class="popup photo-browser-popup">'+this.render()+"</div>"},o.prototype.onOpen=function(e,o){var a=this,n=a.app,p=r(o);p[0].f7PhotoBrowser=a,a.$el=p,a.el=p[0],a.openedIn=e,a.opened=!0,a.$swiperContainerEl=a.$el.find(".photo-browser-swiper-container"),a.$swiperWrapperEl=a.$el.find(".photo-browser-swiper-wrapper"),a.slides=a.$el.find(".photo-browser-slide"),a.$captionsContainerEl=a.$el.find(".photo-browser-captions"),a.captions=a.$el.find(".photo-browser-caption");var s=t.extend({},a.params.swiper,{initialSlide:a.activeIndex,on:{tap:function(e){a.emit("local::tap",e)},click:function(e){a.params.exposition&&a.expositionToggle(),a.emit("local::click",e)},doubleTap:function(e){a.emit("local::doubleTap",e)},slideChange:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.onSlideChange(this),a.emit.apply(a,["local::slideChange"].concat(e))},transitionStart:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.emit.apply(a,["local::transitionStart"].concat(e))},transitionEnd:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.emit.apply(a,["local::transitionEnd"].concat(e))},slideChangeTransitionStart:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.emit.apply(a,["local::slideChangeTransitionStart"].concat(e))},slideChangeTransitionEnd:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.emit.apply(a,["local::slideChangeTransitionEnd"].concat(e))},lazyImageLoad:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];a.emit.apply(a,["local::lazyImageLoad"].concat(e))},lazyImageReady:function(){for(var e=[],o=arguments.length;o--;)e[o]=arguments[o];var t=e[0];r(t).removeClass("photo-browser-slide-lazy"),a.emit.apply(a,["local::lazyImageReady"].concat(e))}}});a.params.swipeToClose&&"page"!==a.params.type&&t.extend(s.on,{touchStart:function(e){a.onTouchStart(e),a.emit("local::touchStart",e)},touchMoveOpposite:function(e){a.onTouchMove(e),a.emit("local::touchMoveOpposite",e)},touchEnd:function(e){a.onTouchEnd(e),a.emit("local::touchEnd",e)}}),a.params.virtualSlides&&t.extend(s,{virtual:{slides:a.params.photos,renderSlide:function(e,o){return e.html||("string"==typeof e||e instanceof String)&&e.indexOf("<")>=0&&e.indexOf(">")>=0?a.renderObject(e,o):!0===a.params.swiper.lazy||a.params.swiper.lazy&&a.params.swiper.lazy.enabled?a.renderLazyPhoto(e,o):a.renderPhoto(e,o)}}}),a.swiper=n.swiper.create(a.$swiperContainerEl,s),0===a.activeIndex&&a.onSlideChange(a.swiper),a.$el&&a.$el.trigger("photobrowser:open"),a.emit("local::open photoBrowserOpen",a)},o.prototype.onOpened=function(){this.$el&&this.$el.trigger("photobrowser:opened"),this.emit("local::opened photoBrowserOpened",this)},o.prototype.onClose=function(){var e=this;e.destroyed||(e.swiper&&e.swiper.destroy&&(e.swiper.destroy(!0,!1),e.swiper=null,delete e.swiper),e.$el&&e.$el.trigger("photobrowser:close"),e.emit("local::close photoBrowserClose",e))},o.prototype.onClosed=function(){var e=this;e.destroyed||(e.opened=!1,e.$el=null,e.el=null,delete e.$el,delete e.el,e.$el&&e.$el.trigger("photobrowser:closed"),e.emit("local::closed photoBrowserClosed",e))},o.prototype.openPage=function(){var e=this;if(e.opened)return e;var o=e.renderPage();return e.view.router.navigate({url:e.url,route:{content:o,path:e.url,on:{pageBeforeIn:function(o,r){e.view.$el.addClass("with-photo-browser-page with-photo-browser-page-"+e.params.theme),e.onOpen("page",r.el)},pageAfterIn:function(o,r){e.onOpened("page",r.el)},pageBeforeOut:function(o,r){e.view.$el.removeClass("with-photo-browser-page with-photo-browser-page-exposed with-photo-browser-page-"+e.params.theme),e.onClose("page",r.el)},pageAfterOut:function(o,r){e.onClosed("page",r.el)}}}}),e},o.prototype.openStandalone=function(){var e=this;if(e.opened)return e;var o={backdrop:!1,content:e.renderStandalone(),on:{popupOpen:function(o){e.onOpen("popup",o.el)},popupOpened:function(o){e.onOpened("popup",o.el)},popupClose:function(o){e.onClose("popup",o.el)},popupClosed:function(o){e.onClosed("popup",o.el)}}};return e.params.routableModals?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e},o.prototype.openPopup=function(){var e=this;if(e.opened)return e;var o={content:e.renderPopup(),on:{popupOpen:function(o){e.onOpen("popup",o.el)},popupOpened:function(o){e.onOpened("popup",o.el)},popupClose:function(o){e.onClose("popup",o.el)},popupClosed:function(o){e.onClosed("popup",o.el)}}};return e.params.routableModals?e.view.router.navigate({url:e.url,route:{path:e.url,popup:o}}):e.modal=e.app.popup.create(o).open(),e},o.prototype.expositionEnable=function(){var e=this;return"page"===e.params.type&&e.view.$el.addClass("with-photo-browser-page-exposed"),e.$el&&e.$el.addClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.addClass("photo-browser-captions-exposed"),e.exposed=!0,e},o.prototype.expositionDisable=function(){var e=this;return"page"===e.params.type&&e.view.$el.removeClass("with-photo-browser-page-exposed"),e.$el&&e.$el.removeClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.removeClass("photo-browser-captions-exposed"),e.exposed=!1,e},o.prototype.expositionToggle=function(){var e=this;return"page"===e.params.type&&e.view.$el.toggleClass("with-photo-browser-page-exposed"),e.$el&&e.$el.toggleClass("photo-browser-exposed"),e.params.expositionHideCaptions&&e.$captionsContainerEl.toggleClass("photo-browser-captions-exposed"),e.exposed=!e.exposed,e},o.prototype.open=function(e){var o=this,r=o.params.type;return o.opened?(o.swiper&&void 0!==e&&o.swiper.slideTo(parseInt(e,10)),o):(void 0!==e&&(o.activeIndex=e),"standalone"===r&&o.openStandalone(),"page"===r&&o.openPage(),"popup"===r&&o.openPopup(),o)},o.prototype.close=function(){var e=this;return e.opened?(e.params.routableModals||"page"===e.openedIn?e.view&&e.view.router.back():(e.modal.once("modalClosed",function(){t.nextTick(function(){e.modal.destroy(),delete e.modal})}),e.modal.close()),e):e},o.prototype.init=function(){},o.prototype.destroy=function(){var e=this;e.emit("local::beforeDestroy photoBrowserBeforeDestroy",e),e.$el&&(e.$el.trigger("photobrowser:beforedestroy"),e.$el[0].f7PhotoBrowser=null,delete e.$el[0].f7PhotoBrowser),t.deleteProps(e),e=null},o}(a)),s={name:"photoBrowser",params:{photoBrowser:{photos:[],exposition:!0,expositionHideCaptions:!1,type:"standalone",navbar:!0,toolbar:!0,theme:"light",captionsTheme:void 0,iconsColor:void 0,swipeToClose:!0,backLinkText:"Close",navbarOfText:"of",view:void 0,url:"photos/",routableModals:!0,virtualSlides:!0,renderNavbar:void 0,renderToolbar:void 0,renderCaption:void 0,renderObject:void 0,renderLazyPhoto:void 0,renderPhoto:void 0,renderPage:void 0,renderPopup:void 0,renderStandalone:void 0,swiper:{initialSlide:0,spaceBetween:20,speed:300,loop:!1,preloadImages:!0,navigation:{nextEl:".photo-browser-next",prevEl:".photo-browser-prev"},zoom:{enabled:!0,maxRatio:3,minRatio:1},lazy:{enabled:!0}}}},create:function(){this.photoBrowser=n({defaultSelector:".photo-browser",constructor:p,app:this,domProp:"f7PhotoBrowser"})},static:{PhotoBrowser:p}};if(o){if(e.prototype.modules&&e.prototype.modules[s.name])return;e.use(s),e.instance&&(e.instance.useModuleParams(s,e.instance.params),e.instance.useModule(s))}return s}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
