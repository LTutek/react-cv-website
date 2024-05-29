"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[103],{2103:function(o,e,t){t.r(e),t.d(e,{sdx_button:function(){return l},sdx_loading_spinner:function(){return b}});var n=t(4942),r=t(5861),a=t(5671),i=t(3144),d=t(7757),s=t.n(d),c=t(9187),h=t(7778),l=function(){function o(e){(0,a.Z)(this,o),(0,c.r)(this,e),this.theme="primary",this.background="light",this.disabled=!1,this.href="",this.target=void 0,this.label="",this.iconName=void 0,this.iconSize=void 0,this.srHint="",this.ariaExpandedOnButton=void 0,this.badge="",this.type="button",this.loading=!1,this.valid=void 0,"submit"===this.type&&(this.lightDOMHiddenSubmitEl=document.createElement("input"),this.lightDOMHiddenSubmitEl.type=this.type,this.lightDOMHiddenSubmitEl.disabled=this.disabled,this.lightDOMHiddenSubmitEl.hidden=!0,this.lightDOMHiddenSubmitEl.onclick=function(o){return o.stopPropagation()},this.el.append(this.lightDOMHiddenSubmitEl))}return(0,i.Z)(o,[{key:"disabledChanged",value:function(){this.lightDOMHiddenSubmitEl&&(this.lightDOMHiddenSubmitEl.disabled=this.disabled)}},{key:"doFocus",value:function(){var o=(0,r.Z)(s().mark((function o(){var e;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:null===(e=this.focusableEl)||void 0===e||e.focus();case 1:case"end":return o.stop()}}),o,this)})));return function(){return o.apply(this,arguments)}}()},{key:"onTouchStart",value:function(){}},{key:"onClick",value:function(){var o;null===(o=this.lightDOMHiddenSubmitEl)||void 0===o||o.click()}},{key:"getHostClassNames",value:function(){var o;return o={},(0,n.Z)(o,this.theme,!0),(0,n.Z)(o,"disabled",this.disabled),(0,n.Z)(o,"loading",this.loading),(0,n.Z)(o,(0,h.g)(this.el),!0),o}},{key:"getButtonClassNames",value:function(){var o,e=this.getIconSize()||1;return o={clickable:!0,"button-reset":!0},(0,n.Z)(o,this.theme,!0),(0,n.Z)(o,"no-background","dark"===this.background),(0,n.Z)(o,"disabled",this.disabled),(0,n.Z)(o,"invalid",!1===this.valid),(0,n.Z)(o,"h4",e>4),o}},{key:"getAriaExpanded",value:function(){return!0===this.ariaExpandedOnButton?"true":!1===this.ariaExpandedOnButton?"false":void 0}},{key:"getIconSize",value:function(){if("transparent"===this.theme)return this.iconSize}},{key:"isBadgeDisplayed",value:function(){return!!this.badge&&"transparent"===this.theme&&!this.label}},{key:"createLabel",value:function(o){if(o)return(0,c.h)("span",{class:"label"},o)}},{key:"render",value:function(){var o=this,e=this.href?"a":"button";return(0,c.h)(c.H,{class:this.getHostClassNames()},(0,c.h)("div",{class:"component"},(0,c.h)(e,{ref:function(e){return o.focusableEl=e},class:this.getButtonClassNames(),href:this.href,target:this.target,disabled:this.disabled,type:this.type,"aria-expanded":this.getAriaExpanded()},this.loading&&(0,c.h)("div",{class:"loading-spinner-container","aria-live":"polite"},(0,c.h)("sdx-loading-spinner",{srHint:this.srHint||void 0,strokeInherit:!0})),"chip"===this.theme&&this.createLabel(this.label),("chip"===this.theme||this.iconName)&&(0,c.h)("sdx-icon",{class:"icon",size:this.getIconSize(),iconName:"chip"===this.theme?"icon-clear-circle":this.iconName}),"chip"!==this.theme&&this.createLabel(this.label),this.srHint&&(0,c.h)("span",{class:"sr-only"},this.srHint)),this.isBadgeDisplayed()&&(0,c.h)("span",{class:"badge"},this.badge)))}},{key:"el",get:function(){return(0,c.g)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),o}();l.style=":host,*,*:before,*:after{box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.component:active button.sr-only-focusable.chip,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}.button-reset{font-family:TheSans, sans-serif;font-weight:500;line-height:24px;letter-spacing:-0.1px;font-size:18px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;vertical-align:middle;text-decoration:none;text-align:center;color:inherit;margin:0;transition:all 150ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-tap-highlight-color:transparent;white-space:unset;padding:unset;border:none;background:transparent;user-select:none}.button-reset:focus{outline:0}.button-reset:not(:disabled){cursor:pointer}.button-reset::-moz-focus-inner{border:0}:host{display:inline-block;outline:none;width:auto;min-width:160px}:host(.chip){min-width:48px;cursor:pointer}:host(.chip) .component{height:48px}:host(.transparent){min-width:0;color:#086adb}:host(.disabled),:host(.loading){pointer-events:none}:host(.disabled) .component.disabled,:host(.disabled) .component:disabled,:host(.loading) .component.disabled,:host(.loading) .component:disabled{cursor:not-allowed}:host(.disabled) .component.disabled:active,:host(.disabled) .component:active button.component.disabled.chip,:host(.disabled) .component:disabled:active,:host(.disabled) .component:active button.component.chip:disabled,:host(.loading) .component.disabled:active,:host(.loading) .component:active button.component.disabled.chip,:host(.loading) .component:disabled:active,:host(.loading) .component:active button.component.chip:disabled{pointer-events:none;transform:none}:host(.loading) .icon,:host(.loading) .label{visibility:hidden}.component{position:relative;display:flex;align-items:center;justify-content:center}.component:hover .badge,.component:hover button.component.chip .badge{background:#ba3e06}.component .badge{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:600;border-radius:18px;color:#fff;font-size:13px;height:18px;line-height:18px;min-width:18px;max-width:50px;text-align:center;padding:0 5px;user-select:none;animation:badge 300ms linear both;background:#cf4a0c;pointer-events:none;transition:background 150ms cubic-bezier(0.4, 0, 0.6, 1);position:absolute;bottom:calc(100% - 13px);left:calc(100% - 9px)}@keyframes badge{0%{transform:scale(1)}25%{transform:scale(1.15)}50%{transform:scale(1)}75%{transform:scale(0.85)}100%{transform:scale(1)}}.component .clickable{display:flex;justify-content:center;align-items:center}.component .clickable .icon+.label{margin-left:8px}.primary,.secondary,.confirm,.cancel,.chip{width:100%;height:48px;padding:0 23px;border:1px solid #086adb;border-radius:8px;transform-origin:50% 50%}.primary:active,.secondary:active,.confirm:active,.cancel:active,.chip:active,.component:active button.chip{transform:scale(0.98)}.primary{border-color:#086adb;background-color:#086adb;color:#fff}.primary:active,.component:active button.primary.chip,.primary:focus-visible{border-color:#0048cf;background-color:#0048cf}@media (hover: hover){.primary:hover,.component:hover button.primary.chip{border-color:#0048cf;background-color:#0048cf}}.primary.disabled{border-color:transparent;background-color:rgba(8, 106, 219, 0.4);color:rgba(255, 255, 255, 0.6)}.secondary{border-color:#086adb;background-color:#fff;color:#086adb}.secondary:active,.component:active button.secondary.chip,.secondary:focus-visible{border-color:#0048cf;background-color:#d1e6f9;color:#0048cf}@media (hover: hover){.secondary:hover,.component:hover button.secondary.chip{border-color:#0048cf;background-color:#d1e6f9;color:#0048cf}}.secondary.disabled{border-color:rgba(8, 106, 219, 0.4);background-color:rgba(255, 255, 255, 0.4);color:rgba(8, 106, 219, 0.4)}.confirm{border-color:#1b8712;background-color:#1b8712;color:#fff}.confirm:active,.component:active button.confirm.chip,.confirm:focus-visible{border-color:#0d6f2c;background-color:#0d6f2c}@media (hover: hover){.confirm:hover,.component:hover button.confirm.chip{border-color:#0d6f2c;background-color:#0d6f2c}}.confirm.disabled{border-color:transparent;background-color:rgba(27, 135, 18, 0.4)}.transparent{padding:0;margin:0;border:none;outline:none;user-select:none;background-color:transparent;color:inherit}.transparent.invalid{color:#d12}.transparent:active,.component:active button.transparent.chip,.transparent:focus-visible{color:#0048cf}.transparent:active.invalid,.component:active button.transparent.invalid.chip,.transparent:focus-visible.invalid{color:#be0000}@media (hover: hover){.transparent:hover,.component:hover button.transparent.chip{color:#0048cf}.transparent:hover.invalid,.component:hover button.transparent.invalid.chip{color:#be0000}}.transparent.disabled,.transparent.disabled.invalid{color:rgba(51, 51, 51, 0.4)}.cancel{border-color:transparent;background-color:transparent;color:#086adb}.cancel:active,.component:active button.cancel.chip,.cancel:focus-visible{border-color:#d1e6f9;background-color:#d1e6f9;color:#0048cf}@media (hover: hover){.cancel:hover,.component:hover button.cancel.chip{border-color:#d1e6f9;background-color:#d1e6f9;color:#0048cf}}.chip{font-weight:400;font-size:16px;border-color:#dde3e7;background-color:#dde3e7;width:auto;height:32px;padding:10px}.chip:active,.component:active button.chip,.chip:focus-visible{border-color:#b1b9be;background-color:#b1b9be}@media (hover: hover){.chip:hover,.component:hover button.chip{border-color:#b1b9be;background-color:#b1b9be}}.chip .label~.icon{margin-left:8px}.loading-spinner-container{position:absolute;left:0;right:0;display:flex;justify-content:center}.h4{line-height:24px;letter-spacing:-0.1px;font-size:20px}@media (min-width: 1024px){.h4{line-height:32px;letter-spacing:-0.35px;font-size:24px}}:host(.sdx--dark-theme) .primary.no-background,:host(.sdx--dark-theme) .primary.no-background.invalid,:host(.sdx--dark-theme) .secondary.no-background,:host(.sdx--dark-theme) .secondary.no-background.invalid,:host(.sdx--dark-theme) .confirm.no-background,:host(.sdx--dark-theme) .confirm.no-background.invalid,:host(.sdx--dark-theme) .transparent.no-background,:host(.sdx--dark-theme) .transparent.no-background.invalid,:host(.sdx--light-theme) .primary.no-background,:host(.sdx--light-theme) .primary.no-background.invalid,:host(.sdx--light-theme) .secondary.no-background,:host(.sdx--light-theme) .secondary.no-background.invalid,:host(.sdx--light-theme) .confirm.no-background,:host(.sdx--light-theme) .confirm.no-background.invalid,:host(.sdx--light-theme) .transparent.no-background,:host(.sdx--light-theme) .transparent.no-background.invalid{border-color:#fff;background-color:transparent;color:#fff}:host(.sdx--dark-theme) .primary.no-background:active,:host(.sdx--dark-theme) .component:active button.primary.no-background.chip,:host(.sdx--dark-theme) .primary.no-background:focus-visible,:host(.sdx--dark-theme) .primary.no-background.invalid:active,:host(.sdx--dark-theme) .primary.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .secondary.no-background:active,:host(.sdx--dark-theme) .component:active button.secondary.no-background.chip,:host(.sdx--dark-theme) .secondary.no-background:focus-visible,:host(.sdx--dark-theme) .secondary.no-background.invalid:active,:host(.sdx--dark-theme) .secondary.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .confirm.no-background:active,:host(.sdx--dark-theme) .component:active button.confirm.no-background.chip,:host(.sdx--dark-theme) .confirm.no-background:focus-visible,:host(.sdx--dark-theme) .confirm.no-background.invalid:active,:host(.sdx--dark-theme) .confirm.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .transparent.no-background:active,:host(.sdx--dark-theme) .component:active button.transparent.no-background.chip,:host(.sdx--dark-theme) .transparent.no-background:focus-visible,:host(.sdx--dark-theme) .transparent.no-background.invalid:active,:host(.sdx--dark-theme) .transparent.no-background.invalid:focus-visible,:host(.sdx--light-theme) .primary.no-background:active,:host(.sdx--light-theme) .component:active button.primary.no-background.chip,:host(.sdx--light-theme) .primary.no-background:focus-visible,:host(.sdx--light-theme) .primary.no-background.invalid:active,:host(.sdx--light-theme) .primary.no-background.invalid:focus-visible,:host(.sdx--light-theme) .secondary.no-background:active,:host(.sdx--light-theme) .component:active button.secondary.no-background.chip,:host(.sdx--light-theme) .secondary.no-background:focus-visible,:host(.sdx--light-theme) .secondary.no-background.invalid:active,:host(.sdx--light-theme) .secondary.no-background.invalid:focus-visible,:host(.sdx--light-theme) .confirm.no-background:active,:host(.sdx--light-theme) .component:active button.confirm.no-background.chip,:host(.sdx--light-theme) .confirm.no-background:focus-visible,:host(.sdx--light-theme) .confirm.no-background.invalid:active,:host(.sdx--light-theme) .confirm.no-background.invalid:focus-visible,:host(.sdx--light-theme) .transparent.no-background:active,:host(.sdx--light-theme) .component:active button.transparent.no-background.chip,:host(.sdx--light-theme) .transparent.no-background:focus-visible,:host(.sdx--light-theme) .transparent.no-background.invalid:active,:host(.sdx--light-theme) .transparent.no-background.invalid:focus-visible{background-color:rgba(255, 255, 255, 0.15)}@media (hover: hover){:host(.sdx--dark-theme) .primary.no-background:hover,:host(.sdx--dark-theme) .component:hover button.primary.no-background.chip,:host(.sdx--dark-theme) .primary.no-background.invalid:hover,:host(.sdx--dark-theme) .secondary.no-background:hover,:host(.sdx--dark-theme) .component:hover button.secondary.no-background.chip,:host(.sdx--dark-theme) .secondary.no-background.invalid:hover,:host(.sdx--dark-theme) .confirm.no-background:hover,:host(.sdx--dark-theme) .component:hover button.confirm.no-background.chip,:host(.sdx--dark-theme) .confirm.no-background.invalid:hover,:host(.sdx--dark-theme) .transparent.no-background:hover,:host(.sdx--dark-theme) .component:hover button.transparent.no-background.chip,:host(.sdx--dark-theme) .transparent.no-background.invalid:hover,:host(.sdx--light-theme) .primary.no-background:hover,:host(.sdx--light-theme) .component:hover button.primary.no-background.chip,:host(.sdx--light-theme) .primary.no-background.invalid:hover,:host(.sdx--light-theme) .secondary.no-background:hover,:host(.sdx--light-theme) .component:hover button.secondary.no-background.chip,:host(.sdx--light-theme) .secondary.no-background.invalid:hover,:host(.sdx--light-theme) .confirm.no-background:hover,:host(.sdx--light-theme) .component:hover button.confirm.no-background.chip,:host(.sdx--light-theme) .confirm.no-background.invalid:hover,:host(.sdx--light-theme) .transparent.no-background:hover,:host(.sdx--light-theme) .component:hover button.transparent.no-background.chip,:host(.sdx--light-theme) .transparent.no-background.invalid:hover{background-color:rgba(255, 255, 255, 0.15)}}:host(.sdx--dark-theme) .primary.no-background.disabled,:host(.sdx--dark-theme) .primary.no-background.invalid.disabled,:host(.sdx--dark-theme) .secondary.no-background.disabled,:host(.sdx--dark-theme) .secondary.no-background.invalid.disabled,:host(.sdx--dark-theme) .confirm.no-background.disabled,:host(.sdx--dark-theme) .confirm.no-background.invalid.disabled,:host(.sdx--dark-theme) .transparent.no-background.disabled,:host(.sdx--dark-theme) .transparent.no-background.invalid.disabled,:host(.sdx--light-theme) .primary.no-background.disabled,:host(.sdx--light-theme) .primary.no-background.invalid.disabled,:host(.sdx--light-theme) .secondary.no-background.disabled,:host(.sdx--light-theme) .secondary.no-background.invalid.disabled,:host(.sdx--light-theme) .confirm.no-background.disabled,:host(.sdx--light-theme) .confirm.no-background.invalid.disabled,:host(.sdx--light-theme) .transparent.no-background.disabled,:host(.sdx--light-theme) .transparent.no-background.invalid.disabled{border-color:rgba(255, 255, 255, 0.4);color:rgba(255, 255, 255, 0.4)}:host(.sdx--dark-theme) .primary.no-background.invalid:active,:host(.sdx--dark-theme) .component:active button.primary.no-background.invalid.chip,:host(.sdx--dark-theme) .primary.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .primary.no-background.invalid.invalid:active,:host(.sdx--dark-theme) .primary.no-background.invalid.invalid:focus-visible,:host(.sdx--dark-theme) .secondary.no-background.invalid:active,:host(.sdx--dark-theme) .component:active button.secondary.no-background.invalid.chip,:host(.sdx--dark-theme) .secondary.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .secondary.no-background.invalid.invalid:active,:host(.sdx--dark-theme) .secondary.no-background.invalid.invalid:focus-visible,:host(.sdx--dark-theme) .confirm.no-background.invalid:active,:host(.sdx--dark-theme) .component:active button.confirm.no-background.invalid.chip,:host(.sdx--dark-theme) .confirm.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .confirm.no-background.invalid.invalid:active,:host(.sdx--dark-theme) .confirm.no-background.invalid.invalid:focus-visible,:host(.sdx--dark-theme) .transparent.no-background.invalid:active,:host(.sdx--dark-theme) .component:active button.transparent.no-background.invalid.chip,:host(.sdx--dark-theme) .transparent.no-background.invalid:focus-visible,:host(.sdx--dark-theme) .transparent.no-background.invalid.invalid:active,:host(.sdx--dark-theme) .transparent.no-background.invalid.invalid:focus-visible,:host(.sdx--light-theme) .primary.no-background.invalid:active,:host(.sdx--light-theme) .component:active button.primary.no-background.invalid.chip,:host(.sdx--light-theme) .primary.no-background.invalid:focus-visible,:host(.sdx--light-theme) .primary.no-background.invalid.invalid:active,:host(.sdx--light-theme) .primary.no-background.invalid.invalid:focus-visible,:host(.sdx--light-theme) .secondary.no-background.invalid:active,:host(.sdx--light-theme) .component:active button.secondary.no-background.invalid.chip,:host(.sdx--light-theme) .secondary.no-background.invalid:focus-visible,:host(.sdx--light-theme) .secondary.no-background.invalid.invalid:active,:host(.sdx--light-theme) .secondary.no-background.invalid.invalid:focus-visible,:host(.sdx--light-theme) .confirm.no-background.invalid:active,:host(.sdx--light-theme) .component:active button.confirm.no-background.invalid.chip,:host(.sdx--light-theme) .confirm.no-background.invalid:focus-visible,:host(.sdx--light-theme) .confirm.no-background.invalid.invalid:active,:host(.sdx--light-theme) .confirm.no-background.invalid.invalid:focus-visible,:host(.sdx--light-theme) .transparent.no-background.invalid:active,:host(.sdx--light-theme) .component:active button.transparent.no-background.invalid.chip,:host(.sdx--light-theme) .transparent.no-background.invalid:focus-visible,:host(.sdx--light-theme) .transparent.no-background.invalid.invalid:active,:host(.sdx--light-theme) .transparent.no-background.invalid.invalid:focus-visible{color:rgba(255, 255, 255, 0.8)}@media (hover: hover){:host(.sdx--dark-theme) .primary.no-background.invalid:hover,:host(.sdx--dark-theme) .component:hover button.primary.no-background.invalid.chip,:host(.sdx--dark-theme) .primary.no-background.invalid.invalid:hover,:host(.sdx--dark-theme) .secondary.no-background.invalid:hover,:host(.sdx--dark-theme) .component:hover button.secondary.no-background.invalid.chip,:host(.sdx--dark-theme) .secondary.no-background.invalid.invalid:hover,:host(.sdx--dark-theme) .confirm.no-background.invalid:hover,:host(.sdx--dark-theme) .component:hover button.confirm.no-background.invalid.chip,:host(.sdx--dark-theme) .confirm.no-background.invalid.invalid:hover,:host(.sdx--dark-theme) .transparent.no-background.invalid:hover,:host(.sdx--dark-theme) .component:hover button.transparent.no-background.invalid.chip,:host(.sdx--dark-theme) .transparent.no-background.invalid.invalid:hover,:host(.sdx--light-theme) .primary.no-background.invalid:hover,:host(.sdx--light-theme) .component:hover button.primary.no-background.invalid.chip,:host(.sdx--light-theme) .primary.no-background.invalid.invalid:hover,:host(.sdx--light-theme) .secondary.no-background.invalid:hover,:host(.sdx--light-theme) .component:hover button.secondary.no-background.invalid.chip,:host(.sdx--light-theme) .secondary.no-background.invalid.invalid:hover,:host(.sdx--light-theme) .confirm.no-background.invalid:hover,:host(.sdx--light-theme) .component:hover button.confirm.no-background.invalid.chip,:host(.sdx--light-theme) .confirm.no-background.invalid.invalid:hover,:host(.sdx--light-theme) .transparent.no-background.invalid:hover,:host(.sdx--light-theme) .component:hover button.transparent.no-background.invalid.chip,:host(.sdx--light-theme) .transparent.no-background.invalid.invalid:hover{color:rgba(255, 255, 255, 0.8)}}:host(.sdx--dark-theme) .component .badge{background-color:#ce4a0c}:host(.sdx--dark-theme) .component .badge:hover,:host(.sdx--dark-theme) .component:hover button.badge.chip{background-color:#de4f0d}:host(.sdx--dark-theme) .primary{border-color:#0a71e9;background-color:#0a71e9}:host(.sdx--dark-theme) .primary:active,:host(.sdx--dark-theme) .component:active button.primary.chip,:host(.sdx--dark-theme) .primary:focus-visible{border-color:#147df5;background-color:#147df5}@media (hover: hover){:host(.sdx--dark-theme) .primary:hover,:host(.sdx--dark-theme) .component:hover button.primary.chip{border-color:#147df5;background-color:#147df5}}:host(.sdx--dark-theme) .primary.disabled{background-color:rgba(10, 113, 233, 0.4);border-color:transparent}:host(.sdx--dark-theme) .secondary{border-color:#4294ff;background-color:transparent;color:#4294ff}:host(.sdx--dark-theme) .secondary:active,:host(.sdx--dark-theme) .component:active button.secondary.chip,:host(.sdx--dark-theme) .secondary:focus-visible{border-color:#5ca3ff;background-color:rgba(66, 148, 255, 0.15);color:#5ca3ff}@media (hover: hover){:host(.sdx--dark-theme) .secondary:hover,:host(.sdx--dark-theme) .component:hover button.secondary.chip{border-color:#5ca3ff;background-color:rgba(66, 148, 255, 0.15);color:#5ca3ff}}:host(.sdx--dark-theme) .secondary.disabled{border-color:rgba(66, 148, 255, 0.4);color:rgba(66, 148, 255, 0.4)}:host(.sdx--dark-theme) .confirm{border-color:#1c8912;background-color:#1c8912}:host(.sdx--dark-theme) .confirm:active,:host(.sdx--dark-theme) .component:active button.confirm.chip,:host(.sdx--dark-theme) .confirm:focus-visible{border-color:#1f9414;background-color:#1f9414}@media (hover: hover){:host(.sdx--dark-theme) .confirm:hover,:host(.sdx--dark-theme) .component:hover button.confirm.chip{border-color:#1f9414;background-color:#1f9414}}:host(.sdx--dark-theme) .confirm.disabled{background-color:rgba(28, 137, 18, 0.4);border-color:transparent}:host(.sdx--dark-theme) .transparent.invalid{color:#f35d6a}:host(.sdx--dark-theme) .transparent:active,:host(.sdx--dark-theme) .component:active button.transparent.chip,:host(.sdx--dark-theme) .transparent:focus-visible{color:#5ca3ff}:host(.sdx--dark-theme) .transparent:active.invalid,:host(.sdx--dark-theme) .component:active button.transparent.invalid.chip,:host(.sdx--dark-theme) .transparent:focus-visible.invalid{color:#fe7e89}@media (hover: hover){:host(.sdx--dark-theme) .transparent:hover,:host(.sdx--dark-theme) .component:hover button.transparent.chip{color:#5ca3ff}:host(.sdx--dark-theme) .transparent:hover.invalid,:host(.sdx--dark-theme) .component:hover button.transparent.invalid.chip{color:#fe7e89}}:host(.sdx--dark-theme) .transparent.disabled,:host(.sdx--dark-theme) .transparent.disabled.invalid{color:rgba(92, 92, 92, 0.8)}:host(.sdx--dark-theme) .cancel{color:#4294ff}:host(.sdx--dark-theme) .cancel:active,:host(.sdx--dark-theme) .component:active button.cancel.chip,:host(.sdx--dark-theme) .cancel:focus-visible{border-color:transparent;background-color:rgba(66, 148, 255, 0.15);color:#5ca3ff}@media (hover: hover){:host(.sdx--dark-theme) .cancel:hover,:host(.sdx--dark-theme) .component:hover button.cancel.chip{border-color:transparent;background-color:rgba(66, 148, 255, 0.15);color:#5ca3ff}}:host(.sdx--dark-theme) .chip{border-color:#5c5c5c;background-color:#5c5c5c}:host(.sdx--dark-theme) .chip:active,:host(.sdx--dark-theme) .component:active button.chip,:host(.sdx--dark-theme) .chip:focus-visible{border-color:#8c8c8c;background-color:#8c8c8c}@media (hover: hover){:host(.sdx--dark-theme) .chip:hover,:host(.sdx--dark-theme) .component:hover button.chip{border-color:#8c8c8c;background-color:#8c8c8c}}:host(.transparent.sdx--dark-theme){color:#4294ff}";var b=function(){function o(e){(0,a.Z)(this,o),(0,c.r)(this,e),this.size="small",this.srHint="status: loading",this.strokeInherit=!1}return(0,i.Z)(o,[{key:"getCircleClassNames",value:function(){var o;return o={circle:!0},(0,n.Z)(o,(0,h.g)(this.el),!0),(0,n.Z)(o,"stroke-inherit",this.strokeInherit),o}},{key:"render",value:function(){var o="small"===this.size?27:52,e="".concat(27/o*7,"px");return(0,c.h)("div",{class:"component",style:{width:"".concat(o,"px"),height:"".concat(o,"px")}},(0,c.h)("span",{class:"sr-only"},this.srHint),(0,c.h)("svg",{viewBox:"0 0 50 50",width:"100%",height:"100%"},(0,c.h)("circle",{class:this.getCircleClassNames(),cx:"25",cy:"25",r:"20",fill:"none","stroke-width":e,"stroke-linecap":"round"})))}},{key:"el",get:function(){return(0,c.g)(this)}}]),o}();b.style=":host,*,*:before,*:after{box-sizing:border-box}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 150;stroke-dashoffset:0}50%{stroke-dasharray:90, 150;stroke-dashoffset:-35}100%{stroke-dasharray:90, 150;stroke-dashoffset:-124}}.component svg{animation:rotate 2s linear infinite}.circle{animation:dash 1.5s ease-in-out infinite;stroke:#015}.stroke-inherit{stroke:currentColor}.circle.sdx--dark-theme{stroke:#e6e6e6}.stroke-inherit.sdx--dark-theme{stroke:currentColor}"}}]);
//# sourceMappingURL=103.97d3f976.chunk.js.map