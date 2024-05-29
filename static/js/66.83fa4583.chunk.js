"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[66],{2883:function(t,e,n){n.d(e,{b:function(){return o}});var i={xs:0,sm:480,md:768,lg:1024,xl:1280,ul:1440};function o(t){return window.innerWidth>=i[t]}},9645:function(t,e,n){n.d(e,{a:function(){return s},o:function(){return a},r:function(){return r},t:function(){return l}});var i=n(1413),o=n(2982);function s(t,e){return t.includes(e)?t:[].concat((0,o.Z)(t),[e])}function r(t,e){return t.includes(e)?t.filter((function(t){return t!==e})):t}function l(t,e){return t.includes(e)?r(t,e):s(t,e)}function a(t,e){var n={};for(var o in t)n=(0,i.Z)((0,i.Z)({},n),e(o,t[o]));return n}},9066:function(t,e,n){n.r(e),n.d(e,{sdx_progress_full:function(){return g},sdx_progress_full_step:function(){return b}});var i=n(4942),o=n(2982),s=n(6459),r=n(5861),l=n(5671),a=n(3144),c=n(1413),u=n(7757),h=n.n(u),p=n(9187),d=n(7778),m=n(9645),f=n(2883),v=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_STEP_EL":return(0,c.Z)((0,c.Z)({},t),{},{stepEls:(0,m.a)(t.stepEls,e.stepEl).sort(d.s)});case"REMOVE_STEP_EL":return(0,c.Z)((0,c.Z)({},t),{},{stepEls:(0,m.r)(t.stepEls,e.stepEl).sort(d.s)});case"SET_VALUE":var n=e.value,i=n;return isNaN(n)||n<1?i=1:n>t.stepEls.length&&(i=t.stepEls.length),(0,c.Z)((0,c.Z)({},t),{},{value:i});default:return t}};var g=function(){function t(e){(0,l.Z)(this,t),(0,p.r)(this,e),this.generatedStepEls=[],this.invokeStepChangeCallback=function(){return null},this.lastInnerWidth=innerWidth,this.state=void 0,this.value=1,this.stepChangeCallback=void 0,this.step=1,this.srHint="",this.theme="responsive",this.store=new d.S(this,v,{stepEls:[],value:1,userInteractionInProgress:!1,mode:"standalone",theme:"vertical"},["stepEls","value","theme"]),this.store.set("value",this.value),this.setInvokeStepChangeCallback(),this.store.flush()}return(0,a.Z)(t,[{key:"stateChanged",value:function(){this.value=this.state.get().value}},{key:"valueChanged",value:function(){var e=(0,r.Z)(h().mark((function e(n,i){var o,r,l;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(0,s.Z)(n),r=this.state.get(),l=r.userInteractionInProgress,this.store.dispatch({type:"SET_VALUE",value:this.value}),null===(o=this.sdxScrollViewEl)||void 0===o||o.centerElement(this.el,this.getStepEls()[this.value-1]),l&&(0,d.d)(this.el,t.eventInput),this.invokeStepChangeCallback(this.value,i);case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"stepChangeCallbackChanged",value:function(){this.setInvokeStepChangeCallback()}},{key:"stepChanged",value:function(){this.store.dispatch({type:"SET_VALUE",value:this.step})}},{key:"onWindowResizeDebounced",value:function(){var t=this;this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout((function(){t.setTheme(),(0,p.f)(t.el)}),10)}},{key:"layout",value:function(){var t=(0,r.Z)(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setTheme(),this.setWidestStepElWidth();case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"nextStep",value:function(){var t=(0,r.Z)(h().mark((function t(){var e,n;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.state.get(),n=e.stepEls,this.value<n.length&&this.store.dispatch({type:"SET_VALUE",value:this.value+1});case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"previousStep",value:function(){var t=(0,r.Z)(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.value>1&&this.store.dispatch({type:"SET_VALUE",value:this.value-1});case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getActiveStep",value:function(){var t=(0,r.Z)(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.value);case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setActiveStep",value:function(){var t=(0,r.Z)(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.store.dispatch({type:"SET_VALUE",value:e});case 1:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentWillLoad",value:function(){var t=(0,r.Z)(h().mark((function t(){var e=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.w)((function(){return e.state.get().stepEls.length>0}));case 2:this.state.get().stepEls.some((function(t){return t.label}))&&this.store.set("mode","holistic"),this.setTheme();case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"componentDidLoad",value:function(){this.setWidestStepElWidth(),this.store.subscribe()}},{key:"componentDidRender",value:function(){innerWidth!==this.lastInnerWidth&&(this.setWidestStepElWidth(),this.lastInnerWidth=innerWidth)}},{key:"setInvokeStepChangeCallback",value:function(){this.invokeStepChangeCallback=(0,d.p)(this.stepChangeCallback)}},{key:"setTheme",value:function(){var t=this.theme;"responsive"===t&&(t=(0,f.b)("sm")?"horizontal":"vertical"),"standalone"===this.state.get().mode&&(t="horizontal"),this.store.set("theme",t)}},{key:"getStepEls",value:function(){var t=this.state.get(),e=t.stepEls,n=t.mode,i=t.theme;return"holistic"===n&&"horizontal"===i?this.generatedStepEls:e}},{key:"setWidestStepElWidth",value:function(){var t,e=this.getStepEls();if(e.length){e.forEach((function(t){return t.style.width="auto"}));var n=this.widestStepsElWidth;n||(n=Math.max.apply(Math,(0,o.Z)(e.map((function(t){return t.clientWidth})))),this.widestStepsElWidth=n),n<100?n=100:n>264&&(n=264),e.forEach((function(t){return t.style.width="".concat(n,"px")})),null===(t=this.sdxScrollViewEl)||void 0===t||t.layout()}}},{key:"getComponentClassNames",value:function(){var t,e=this.state.get(),n=e.mode,o=e.theme;return t={component:!0},(0,i.Z)(t,n,!0),(0,i.Z)(t,o,!0),t}},{key:"render",value:function(){var t=this,e=this.state.get(),n=e.stepEls,i=e.mode,o=e.theme;return this.generatedStepEls=[],(0,p.h)("div",{class:this.getComponentClassNames(),role:"group","aria-label":this.srHint},"horizontal"===o&&(0,p.h)("sdx-scroll-view",{arrowPositionTop:8,ref:function(e){return t.sdxScrollViewEl=e}},(0,p.h)("div",{class:"step-wrapper",role:"list"},"holistic"===i?n.map((function(e){return(0,p.h)("sdx-progress-full-step",{originalEl:e,ref:function(e){e&&t.generatedStepEls.push(e)}})})):(0,p.h)("slot",null))),(0,p.h)("slot",null))}},{key:"el",get:function(){return(0,p.g)(this)}}],[{key:"watchers",get:function(){return{state:["stateChanged"],value:["valueChanged"],stepChangeCallback:["stepChangeCallbackChanged"],step:["stepChanged"]}}}]),t}();g.eventInput="input",g.style=":host,*,*:before,*:after{box-sizing:border-box}.component.standalone .step-wrapper,.component.holistic.horizontal .step-wrapper{display:flex}";var b=function(){function t(e){(0,l.Z)(this,t),(0,p.r)(this,e),this.invokeStepClickCallback=function(){return null},this.state=void 0,this.label=void 0,this.summary=void 0,this.stepClickCallback=void 0,this.originalEl=void 0,this.position=void 0,this.store=new d.S(this,v,{stepEls:[],value:1,userInteractionInProgress:!1,mode:"standalone",theme:"vertical"},["stepEls","value","mode","theme"]),this.setInvokeStepClickCallback()}return(0,a.Z)(t,[{key:"stepClickCallbackChanged",value:function(){this.setInvokeStepClickCallback()}},{key:"connectedCallback",value:function(){this.originalEl||this.store.dispatch({type:"ADD_STEP_EL",stepEl:this.el})}},{key:"disconnectedCallback",value:function(){this.originalEl||this.store.dispatch({type:"REMOVE_STEP_EL",stepEl:this.el})}},{key:"componentDidLoad",value:function(){this.store.subscribe()}},{key:"setInvokeStepClickCallback",value:function(){this.invokeStepClickCallback=(0,d.p)(this.stepClickCallback)}},{key:"onClick",value:function(){this.store.set("userInteractionInProgress",!0),this.store.dispatch({type:"SET_VALUE",value:this.getPosition()}),this.store.set("userInteractionInProgress",!1),this.invokeStepClickCallback()}},{key:"getPosition",value:function(){var t=this.originalEl||this.el;return this.state.get().stepEls.indexOf(t)+1}},{key:"getLabel",value:function(){var t,e;return null!==(e=null===(t=this.originalEl)||void 0===t?void 0:t.label)&&void 0!==e?e:this.label}},{key:"getSummary",value:function(){var t,e;return null!==(e=null===(t=this.originalEl)||void 0===t?void 0:t.summary)&&void 0!==e?e:this.summary}},{key:"isRemaining",value:function(){return this.state.get().value<this.getPosition()}},{key:"isActive",value:function(){return this.state.get().value===this.getPosition()}},{key:"isCompleted",value:function(){return this.state.get().value>this.getPosition()}},{key:"hasSlotOnly",value:function(){var t=this.state.get(),e=t.mode,n=t.theme;return"holistic"===e&&"horizontal"===n&&!this.originalEl}},{key:"getComponentClassNames",value:function(){var t,e=this.state.get(),n=e.mode,o=e.theme;return t={component:!0,remaining:this.isRemaining(),active:this.isActive(),completed:this.isCompleted(),"full-width--mobile-only":"vertical"===o},(0,i.Z)(t,n,!0),(0,i.Z)(t,o,!0),(0,i.Z)(t,(0,d.g)(this.el),!0),t}},{key:"render",value:function(){var t=this,e=this.getPosition();return(0,p.h)(p.H,{role:"listitem"},(0,p.h)("div",{class:this.getComponentClassNames()},!this.hasSlotOnly()&&(0,p.h)(p.F,null,(0,p.h)("div",{class:"progress-line"}),(0,p.h)("button",{class:"button button-reset",onClick:function(){return t.onClick()},disabled:!this.isCompleted(),"aria-label":"".concat((0,d.t)("Position",this.el.lang)," ").concat(e)},(0,p.h)("span",{class:"position"},this.isCompleted()?(0,p.h)("sdx-icon",{class:"icon-check-mark",iconName:"icon-check-mark"}):this.getPosition()),(0,p.h)("span",{class:"label"},"holistic"===this.state.get().mode?this.getLabel():(0,p.h)("slot",null),this.isCompleted()&&this.getSummary()&&(0,p.h)("span",{class:"summary"},this.getSummary()," ",(0,p.h)("sdx-icon",{class:"icon-edit",iconName:"icon-edit"}))))),!this.originalEl&&(0,p.h)("div",{class:"slot"},(0,p.h)("slot",null))))}},{key:"el",get:function(){return(0,p.g)(this)}}],[{key:"watchers",get:function(){return{stepClickCallback:["stepClickCallbackChanged"]}}}]),t}();b.style=":host,*,*:before,*:after{box-sizing:border-box}.align-left{float:left !important}.align-right{float:right !important}.center-block{display:block;float:none;margin-right:auto;margin-left:auto}.center-vertical{display:flex;align-items:center}.full-width{position:relative;left:50%;right:50%;width:100vw;margin-left:-50vw;margin-right:-50vw}@media only screen and (max-width: 479px){.full-width--mobile-only{position:relative;left:50%;right:50%;width:100vw;margin-left:-50vw;margin-right:-50vw;padding-left:12px;padding-right:12px}}.button-reset{font-family:TheSans, sans-serif;font-weight:500;line-height:24px;letter-spacing:-0.1px;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;text-decoration:none;text-align:center;color:inherit;margin:0;transition:all 150ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-tap-highlight-color:transparent;white-space:unset;padding:unset;border:none;background:transparent;user-select:none}.button-reset:focus{outline:0}.button-reset:not(:disabled){cursor:pointer}.button-reset::-moz-focus-inner{border:0}:host{flex-shrink:0}:host(:last-of-type) .component .progress-line{display:none}.component{position:relative}.component.standalone.remaining .button .position,.component.holistic.horizontal.remaining .button .position{background:#fff;border-color:#333;color:#333}.component.standalone .progress-line,.component.holistic.horizontal .progress-line{width:100%;height:1px}.component.standalone .button,.component.holistic.horizontal .button{flex-flow:column}.component.standalone .button .label,.component.holistic.horizontal .button .label{margin:8px 64px 0 0}.component.holistic .slot{margin-top:24px}.component.holistic.vertical{padding:24px 24px}.component.holistic.vertical.completed,.component.holistic.vertical.remaining{background:#eef3f6;border-radius:12px}.component.holistic.vertical.completed{margin-bottom:8px}.component.holistic.vertical.remaining{margin-top:8px}.component.holistic.vertical.remaining .button .position{background:#666;color:#fff}.component.holistic.vertical .button .label{margin-left:16px}.component.completed .progress-line{background:#1b8712}.component.active .button .position{background:#333;border-color:#333;color:#fff}.component.active .slot{display:block}.component.completed .button:hover .position{background:#0d6f2c;border-color:#0d6f2c}.component.completed .button:hover .icon-edit{color:#0048cf}.component.completed .button .position{background:#1b8712;border-color:#1b8712;color:#fff}.component.completed .button .icon-edit{color:#086adb}.component .progress-line{background:#bbb;position:absolute;top:12px;transition:background 150ms cubic-bezier(0.4, 0, 0.2, 1);z-index:-1}.component .button{display:flex;text-align:left}.component .button .position{border-radius:50%;height:24px;width:24px;flex-shrink:0;border:1px solid transparent;display:flex;justify-content:center;align-items:center;transition:inherit}.component .button .position .icon-check-mark{margin-top:1px}.component .button .label{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:600;display:flex;flex-flow:column}.component .button .label .summary{line-height:21px;letter-spacing:0;font-size:16px;font-weight:400}.component .slot{display:none}.component.sdx--dark-theme.remaining .button .position{background:#141414;border-color:#e6e6e6;color:#e6e6e6}.component.sdx--dark-theme.completed .progress-line{background:#1c8912}.component.sdx--dark-theme.active .button .position{background:#e6e6e6;border-color:#e6e6e6;color:#141414}.component.sdx--dark-theme.completed .button:hover .position{border-color:#1f9414;background:#1f9414}.component.sdx--dark-theme.completed .button:hover .icon-edit{color:#147df5}.component.sdx--dark-theme.completed .button .position{border-color:#1c8912;background:#1c8912}.component.sdx--dark-theme.completed .button .icon-edit{color:#0a71e9}.component.sdx--dark-theme .progress-line{background:#5c5c5c}"},6459:function(t,e,n){function i(t){if(null==t)throw new TypeError("Cannot destructure undefined")}n.d(e,{Z:function(){return i}})}}]);
//# sourceMappingURL=66.83fa4583.chunk.js.map