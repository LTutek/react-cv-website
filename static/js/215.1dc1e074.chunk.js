"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[215],{2883:function(e,t,i){i.d(t,{b:function(){return s}});var n={xs:0,sm:480,md:768,lg:1024,xl:1280,ul:1440};function s(e){return window.innerWidth>=n[e]}},8215:function(e,t,i){i.r(t),i.d(t,{sdx_figma:function(){return u}});var n=i(4942),s=i(5861),o=i(5671),a=i(3144),r=i(7757),l=i.n(r),d=i(9187),h=i(7778),c=i(2883),u=function(){function e(t){(0,o.Z)(this,e),(0,d.r)(this,t),this.hasLoaded=!1,this.showLoadingIndicator=!0,this.elWidth=999,this.url="",this.height=450,this.allowFullScreen=void 0}return(0,a.Z)(e,[{key:"onMessage",value:function(e){var t,i=null===this.el.offsetParent;"LOAD_FINISHED"===e.data&&e.origin.includes("figma.com")&&e.source===(null===(t=this.iframeEl)||void 0===t?void 0:t.contentWindow)&&!i&&(this.showLoadingIndicator=!1,this.hasLoaded=!0)}},{key:"load",value:function(){var e=(0,s.Z)(l().mark((function e(){var t;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!this.hasLoaded&&this.iframeEl&&(this.elWidth=this.el.getBoundingClientRect().width,null===(t=this.iframeEl.contentWindow)||void 0===t||t.location.replace("https://www.figma.com/embed?embed_host=share&url=".concat(this.url)));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillLoad",value:function(){(0,c.b)("md")||(this.height=.6*this.height)}},{key:"componentDidLoad",value:function(){this.el.offsetParent&&this.load()}},{key:"getElementsClassNames",value:function(){return{hidden:this.showLoadingIndicator}}},{key:"getComponentClassNames",value:function(){return(0,n.Z)({component:!0},(0,h.g)(this.el),!0)}},{key:"render",value:function(){var e=this;return(0,d.h)("div",{class:this.getComponentClassNames(),style:{height:"".concat(this.height,"px")}},(0,d.h)("sdx-loading-spinner",{class:this.getElementsClassNames(),size:"large"}),(0,d.h)("iframe",{title:"Figma design",ref:function(t){return e.iframeEl=t},class:this.getElementsClassNames(),style:{height:"".concat(this.height,"px"),width:"".concat(this.elWidth,"px")},allowFullScreen:this.allowFullScreen}))}},{key:"el",get:function(){return(0,d.g)(this)}}]),e}();u.style=":host,*,*:before,*:after{box-sizing:border-box}.component{display:flex;align-items:center;justify-content:center;background-color:#eef3f6;border-radius:12px}.component sdx-loading-spinner{position:absolute;visibility:hidden}.component sdx-loading-spinner.hidden{visibility:visible}.component iframe{border:1px solid #d6d6d6;border-radius:12px}.component iframe.hidden{position:fixed;visibility:hidden}.component.sdx--dark-theme{background-color:#1d1d1d}.component.sdx--dark-theme iframe{border-color:#5c5c5c}"}}]);
//# sourceMappingURL=215.1dc1e074.chunk.js.map