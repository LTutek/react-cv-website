"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[263],{263:function(n,e,t){t.r(e),t.d(e,{sdx_card:function(){return l}});var i=t(4942),o=t(5671),a=t(3144),r=t(9187),c=t(7778),l=function(){function n(e){(0,o.Z)(this,n),(0,r.r)(this,e),this.layout="default",this.background=void 0,this.label=void 0,this.labelAriaLevel=void 0,this.iconName=void 0,this.imageSrc="",this.imageAlt="",this.objectFit=void 0,this.notificationType="general",this.href=void 0,this.hrefLabel=void 0,this.hrefAriaLabel=void 0,this.animated=!0,this.gradient=void 0}return(0,a.Z)(n,[{key:"hasInteractionArea",value:function(){return(0,c.v)(this.el,"interaction")||!!this.href&&!!this.hrefLabel}},{key:"isNotificationishCard",value:function(){var n=this.getLayout();return"notification"===n||"inline-notification"===n}},{key:"getLayout",value:function(){return this.gradient?"gradient":this.layout}},{key:"getLabel",value:function(){return"interaction"===this.getLayout()?this.label||this.hrefLabel:this.label}},{key:"getDescription",value:function(){return"interaction"===this.getLayout()&&this.label?this.hrefLabel:""}},{key:"getIconName",value:function(){if(this.iconName)return this.iconName;if(!this.isNotificationishCard())return this.iconName;switch(this.notificationType){case"confirm":case"confirmation":return"icon-check-mark-2-circle";case"warning":case"alert":return"icon-exclamation-mark-circle";default:return"icon-information-circle"}}},{key:"getSrHint",value:function(){var n=this.getLayout();if("notification"===n||"inline-notification"===n)switch(this.notificationType){case"confirm":case"confirmation":return"This is a confirmation message.";case"alert":return"This is an alert message.";case"warning":return"This is a warning message.";default:return"This is an information message."}}},{key:"isColorCard",value:function(){return"default"===this.getLayout()&&!!this.background}},{key:"createIcon",value:function(n){var e=this.getIconName();if(e)return(0,r.h)("sdx-icon",{class:"icon",iconName:e,"sr-hint":n})}},{key:"getComponentClassNames",value:function(){var n;return n={component:!0,"has-label":!!this.label,"has-description":!!this.getDescription(),"has-image":!!this.imageSrc},(0,i.Z)(n,(0,c.g)(this.el),!0),(0,i.Z)(n,this.getLayout(),!0),(0,i.Z)(n,this.notificationType,!0),(0,i.Z)(n,this.background||"",!0),(0,i.Z)(n,"not-animated",!this.animated),n}},{key:"getLabelClassNames",value:function(){var n=this.getLayout();return(0,i.Z)({label:!0},"notification"===n?"h5":"h4",!0)}},{key:"getLinkClassNames",value:function(){return{link:!0,"link--white":"orchid"===this.background||"blue"===this.background,"link--standalone":!0}}},{key:"render",value:function(){var n=this.getLayout(),e=this.getIconName(),t=this.getLabel(),i="interaction"===n||this.isColorCard()&&this.hasInteractionArea()?"a":"div";return(0,r.h)(i,{class:this.getComponentClassNames(),href:this.href},(0,r.h)("div",{class:"first"},this.imageSrc&&(0,r.h)("img",{class:"image",src:this.imageSrc,alt:this.imageAlt,style:{objectFit:this.objectFit}}),this.createIcon(this.getSrHint()),(0,r.h)("slot",{name:"first"})),(0,r.h)("div",{class:"second"},(t||e)&&(0,r.h)("div",{class:this.getLabelClassNames(),role:this.labelAriaLevel?"heading":void 0,"aria-level":this.labelAriaLevel},this.createIcon()||"interaction"===n&&(0,r.h)("div",{class:"icon"},"\xa0"),(0,r.h)("span",{class:"title"},t)),(0,c.v)(this.el)&&(0,r.h)("div",{class:"slot"},(0,r.h)("slot",null)),this.hasInteractionArea()&&(0,r.h)("div",{class:"flex-wrapper"},(0,r.h)("div",{class:"description"},this.getDescription()),(0,r.h)("div",{class:"interaction-area"},"interaction"!==n&&(0,r.h)("slot",{name:"interaction"}),this.href&&this.hrefLabel&&(0,r.h)("a",{href:this.href,class:this.getLinkClassNames(),"aria-label":this.hrefAriaLabel},"interaction"!==n&&this.hrefLabel)))))}},{key:"el",get:function(){return(0,r.g)(this)}}]),n}();l.style=':host,*,*:before,*:after{box-sizing:border-box}.text-body-1,.text-standard{line-height:24px;letter-spacing:-0.1px;font-size:18px}.text-body-2,.text-small{line-height:21px;letter-spacing:0;font-size:16px}h1,h2,h3,h4,h5,h6,p{margin:0;text-align:left;word-wrap:break-word}.h1,.h2,.h3,.h4,.h5,.h6,.hero,.d1,.d2,.d3{color:#015}.h1,.text-h1,h1{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:700;margin-bottom:24px}@media (min-width: 1024px){.h1,.text-h1,h1{line-height:48px;letter-spacing:-1.2px;font-size:40px}}@media (min-width: 1024px){.h1,.text-h1,h1{margin-bottom:32px}}.h2,.text-h2,h2{line-height:32px;letter-spacing:-0.75px;font-size:28px;font-weight:700;margin-bottom:20px}@media (min-width: 1024px){.h2,.text-h2,h2{line-height:40px;letter-spacing:-1px;font-size:32px}}@media (min-width: 1024px){.h2,.text-h2,h2{margin-bottom:24px}}.h3,.h4,.text-h3,.text-h4,h3,h4{margin-bottom:16px}@media (min-width: 1024px){.h3,.h4,.text-h3,.text-h4,h3,h4{margin-bottom:20px}}.h3,.text-h3,h3{line-height:32px;letter-spacing:-0.35px;font-size:24px;font-weight:600}@media (min-width: 1024px){.h3,.text-h3,h3{line-height:32px;letter-spacing:-0.75px;font-size:28px}}.h4,.text-h4,h4{line-height:24px;letter-spacing:-0.1px;font-size:20px;font-weight:600}@media (min-width: 1024px){.h4,.text-h4,h4{line-height:32px;letter-spacing:-0.35px;font-size:24px}}.text-h3.text-compact{line-height:31px}.text-h4.text-compact{line-height:27px}.h5,.h6,.text-h5,.text-h6,h5,h6{margin-bottom:8px}.h5,.text-h5,h5{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:600}.h6,.text-h6,h6{line-height:24px;letter-spacing:-0.1px;font-size:16px;font-weight:600}.paragraph,p{line-height:24px;letter-spacing:-0.1px;font-size:18px;margin-bottom:20px}@media (min-width: 1024px){.paragraph,p{margin-bottom:24px}}.paragraph:last-child,p:last-child{margin-bottom:0}.hero,.text-hero,.d1,.text-d1,.d2,.text-d2,.d3,.text-d3{font-weight:700}.hero,.text-hero{line-height:80px;letter-spacing:-1.75px;font-size:70px}@media (min-width: 1024px){.hero,.text-hero{line-height:104px;letter-spacing:-2px;font-size:96px}}.d1,.text-d1{line-height:64px;letter-spacing:-1.35px;font-size:54px}@media (min-width: 1024px){.d1,.text-d1{line-height:80px;letter-spacing:-1.75px;font-size:70px}}.d2,.text-d2{line-height:56px;letter-spacing:-1.2px;font-size:48px}@media (min-width: 1024px){.d2,.text-d2{line-height:64px;letter-spacing:-1.35px;font-size:54px}}.d3,.text-d3{line-height:48px;letter-spacing:-1.2px;font-size:40px}@media (min-width: 1024px){.d3,.text-d3{line-height:56px;letter-spacing:-1.2px;font-size:48px}}.text-b1{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:400}.text-b2{line-height:21px;letter-spacing:0;font-size:16px;font-weight:400}.text-sm,.text-smaller{line-height:18px;letter-spacing:0.1px;font-size:14px;font-weight:400}.text-compact{line-height:21px}.figcaption{line-height:18px;letter-spacing:0.1px;font-size:14px}.code{font-family:monospace;background-color:#f8fafb;border-radius:4px;border:1px solid #d6d6d6;color:#474747;font-size:16px;padding:0 6px}address{font-style:normal}strong{font-weight:600}em{font-style:italic}.sdx--dark-theme .code{background-color:#242424;color:#d6d6d6}.font{font-family:TheSans, sans-serif}.font--sans{font-family:TheSans, sans-serif}.font--serif{font-family:TheSerif, serif}.font--light{font-weight:300}.font--semi-light{font-weight:400}.font--semi-bold{font-weight:600}.sdx--dark-theme .h1,.sdx--dark-theme .h2,.sdx--dark-theme .h3,.sdx--dark-theme .h4,.sdx--dark-theme .h5,.sdx--dark-theme .h6,.sdx--dark-theme .hero,.sdx--dark-theme .d1,.sdx--dark-theme .d2,.sdx--dark-theme .d3{color:unset}.sdx--dark-theme .h1,.sdx--dark-theme .text-h1,.sdx--dark-theme h1,.sdx--dark-theme .h2,.sdx--dark-theme .text-h2,.sdx--dark-theme h2,.sdx--dark-theme .h3,.sdx--dark-theme .text-h3,.sdx--dark-theme h3,.sdx--dark-theme .h4,.sdx--dark-theme .text-h4,.sdx--dark-theme h4,.sdx--dark-theme .d1,.sdx--dark-theme .text-d1,.sdx--dark-theme .d2,.sdx--dark-theme .text-d2,.sdx--dark-theme .d3,.sdx--dark-theme .text-d3{font-weight:600}.sdx--dark-theme .p,.sdx--dark-theme .paragraph,.sdx--dark-theme p{font-weight:500}.sdx--dark-theme .h1,.sdx--dark-theme .text-h1,.sdx--dark-theme h1{letter-spacing:-0.8px}.sdx--dark-theme .h2,.sdx--dark-theme .text-h2,.sdx--dark-theme h2{letter-spacing:-0.6px}.sdx--dark-theme .h3,.sdx--dark-theme .text-h3,.sdx--dark-theme h3{letter-spacing:-0.5px}.sdx--dark-theme .h4,.sdx--dark-theme .text-h4,.sdx--dark-theme h4{letter-spacing:-0.2px}.sdx--dark-theme .h5,.sdx--dark-theme .text-h5,.sdx--dark-theme h5{letter-spacing:-0.1px}.sdx--dark-theme .h6,.sdx--dark-theme .text-h6,.sdx--dark-theme h6{letter-spacing:0px}.sdx--dark-theme .d1,.sdx--dark-theme .text-d1{letter-spacing:-1.4px}.sdx--dark-theme .d2,.sdx--dark-theme .text-d2{letter-spacing:-1px}.sdx--dark-theme .d3,.sdx--dark-theme .text-d3{letter-spacing:-0.9px}.sdx--dark-theme strong,.sdx--dark-theme b{color:#fff}.sdx--dark-theme code{background-color:#242424;border:1px solid #b1b9be;border-radius:4px;color:#cfd5d9;font-size:16px}a,a.link,button.link{position:relative;transition:color 200ms cubic-bezier(0.4, 0, 0.6, 1), text-decoration 200ms cubic-bezier(0.4, 0, 0.6, 1);outline:none;text-decoration:underline;text-underline-offset:5px;cursor:pointer;color:#086adb}a:hover,a:focus-visible,a.link:hover,a.link:focus-visible,button.link:hover,button.link:focus-visible{text-decoration-thickness:2px;color:#0048cf}a:focus,a.link:focus,button.link:focus{outline:none}a+a,a+a.link,a+button.link,a.link+a,a.link+a.link,a.link+button.link,button.link+a,button.link+a.link,button.link+button.link{margin-left:24px}a[class*=icon-],a--standalone,a--anchor,a.link[class*=icon-],a.link--standalone,a.link--anchor,button.link[class*=icon-],button.link--standalone,button.link--anchor{display:inline-block;text-decoration:underline transparent;margin-left:24px}a[class*=icon-]:hover,a[class*=icon-]:focus-visible,a--standalone:hover,a--standalone:focus-visible,a--anchor:hover,a--anchor:focus-visible,a.link[class*=icon-]:hover,a.link[class*=icon-]:focus-visible,a.link--standalone:hover,a.link--standalone:focus-visible,a.link--anchor:hover,a.link--anchor:focus-visible,button.link[class*=icon-]:hover,button.link[class*=icon-]:focus-visible,button.link--standalone:hover,button.link--standalone:focus-visible,button.link--anchor:hover,button.link--anchor:focus-visible{text-decoration:underline;text-decoration-thickness:2px}a[class*=icon-]:hover:not(.link--white,.link--dark),a[class*=icon-]:focus-visible:not(.link--white,.link--dark),a--standalone:hover:not(.link--white,.link--dark),a--standalone:focus-visible:not(.link--white,.link--dark),a--anchor:hover:not(.link--white,.link--dark),a--anchor:focus-visible:not(.link--white,.link--dark),a.link[class*=icon-]:hover:not(.link--white,.link--dark),a.link[class*=icon-]:focus-visible:not(.link--white,.link--dark),a.link--standalone:hover:not(.link--white,.link--dark),a.link--standalone:focus-visible:not(.link--white,.link--dark),a.link--anchor:hover:not(.link--white,.link--dark),a.link--anchor:focus-visible:not(.link--white,.link--dark),button.link[class*=icon-]:hover:not(.link--white,.link--dark),button.link[class*=icon-]:focus-visible:not(.link--white,.link--dark),button.link--standalone:hover:not(.link--white,.link--dark),button.link--standalone:focus-visible:not(.link--white,.link--dark),button.link--anchor:hover:not(.link--white,.link--dark),button.link--anchor:focus-visible:not(.link--white,.link--dark){color:#0048cf}a[class*=icon-]::before,a--standalone::before,a--anchor::before,a.link[class*=icon-]::before,a.link--standalone::before,a.link--anchor::before,button.link[class*=icon-]::before,button.link--standalone::before,button.link--anchor::before{margin-left:-24px;display:inline-block;font-family:sdx-icons;padding-right:6px;position:relative}a--standalone::before,a.link--standalone::before,button.link--standalone::before{content:"\\e004"}a--anchor::before,a.link--anchor::before,button.link--anchor::before{content:"\\e002"}a:not([href]){text-decoration:none}p a+a,p a+a.link,p a+button.link,p a.link+a,p a.link+a.link,p a.link+button.link,p button.link+a,p button.link+a.link,p button.link+button.link,.list a+a,.list a+a.link,.list a+button.link,.list a.link+a,.list a.link+a.link,.list a.link+button.link,.list button.link+a,.list button.link+a.link,.list button.link+button.link{margin-left:0}a.link--white,a.link--white:hover,a.link--white:focus-visible,button.link--white,button.link--white:hover,button.link--white:focus-visible{color:#fff;border-color:#fff}.link--dark,.bg--dark a,.bg--dark a.link,.bg--dark button.link{color:#fff}.link--dark:hover,.link--dark:focus-visible,.bg--dark a:hover,.bg--dark button.link:hover,.bg--dark a:focus-visible,.bg--dark button.link:focus-visible{color:#fff}.sdx--dark-theme a,.sdx--dark-theme a.link,.sdx--dark-theme button.link{color:#4294ff}.sdx--dark-theme a:hover:not(.link--white,.link--dark),.sdx--dark-theme a:focus-visible:not(.link--white,.link--dark),.sdx--dark-theme a.link:hover:not(.link--white,.link--dark),.sdx--dark-theme a.link:focus-visible:not(.link--white,.link--dark),.sdx--dark-theme button.link:hover:not(.link--white,.link--dark),.sdx--dark-theme button.link:focus-visible:not(.link--white,.link--dark){color:#5ca3ff}.sdx--dark-theme a.link--white,.sdx--dark-theme a.link--white:hover,.sdx--dark-theme a.link--white:focus-visible,.sdx--dark-theme button.link--white,.sdx--dark-theme button.link--white:hover,.sdx--dark-theme button.link--white:focus-visible{color:#fff;border-color:#fff}.component{display:flex;flex-direction:column;height:100%;background:#fff;border:1px solid #bbb;border-radius:12px;overflow:hidden}.component.notification,.component.inline-notification{flex-direction:row;gap:16px}.component.notification:not(.has-label) .label,.component.inline-notification:not(.has-label) .label{display:none}.component.notification.alert::before,.component.inline-notification.alert::before{background:#d12}.component.notification.alert .icon,.component.inline-notification.alert .icon{color:#d12}.component.notification.warning::before,.component.inline-notification.warning::before{background:#cf4a0c}.component.notification.warning .icon,.component.inline-notification.warning .icon{color:#cf4a0c}.component.notification.general::before,.component.inline-notification.general::before{background:#086adb}.component.notification.general .icon,.component.inline-notification.general .icon{color:#086adb}.component.notification.confirm::before,.component.notification.confirmation::before,.component.inline-notification.confirm::before,.component.inline-notification.confirmation::before{background:#1b8712}.component.notification.confirm .icon,.component.notification.confirmation .icon,.component.inline-notification.confirm .icon,.component.inline-notification.confirmation .icon{color:#1b8712}.component.notification .first,.component.notification .second,.component.inline-notification .first,.component.inline-notification .second{padding:unset}.component.notification .first .icon,.component.inline-notification .first .icon{display:block;position:relative;left:3px}.component.notification .label,.component.inline-notification .label{flex-direction:row-reverse;justify-content:left}.component.notification .label .icon,.component.inline-notification .label .icon{visibility:hidden}.component.notification{padding:16px;position:relative}.component.notification::before{content:"";position:absolute;top:0;left:0;width:6px;height:100%}.component.notification .icon{font-size:24px}.component.inline-notification{border:unset;border-radius:unset;box-shadow:unset;background:unset}.component.inline-notification:not(.has-label) .slot{margin-top:3px}.component.interaction{flex-direction:row;text-decoration:none;transition:box-shadow 200ms ease-in-out}.component.interaction:hover,.component.interaction:focus-visible{border-color:#666;box-shadow:0 4px 16px 0 rgba(51, 51, 51, 0.16)}.component.interaction:hover .link--standalone,.component.interaction:focus-visible .link--standalone{text-decoration:underline;text-decoration-thickness:2px}.component.interaction:hover .link--standalone:not(.link--white,.link--dark),.component.interaction:focus-visible .link--standalone:not(.link--white,.link--dark){color:#0048cf}.component.interaction.not-animated{transition:unset}.component.interaction .second{gap:8px;flex-direction:column;align-self:end}.component.interaction .image{width:112px;height:100%}@media (min-width: 1024px){.component.interaction .image{width:128px}}.component.interaction .label{gap:0}@media (min-width: 1024px){.component.interaction:not(.has-image) .second{height:100%}.component.interaction:not(.has-image) .label{display:flex;flex-basis:100%;flex-direction:column;justify-content:flex-start}.component.interaction:not(.has-image) .flex-wrapper{flex-basis:0}.component.interaction:not(.has-description) .label{justify-content:space-between}}@media (max-width: 1023px){.component.interaction:not(.has-description):not(.has-image) .second,.component.interaction:not(.has-label):not(.has-image) .second{flex-direction:row;justify-content:space-between;align-self:auto;gap:0}.component.interaction:not(.has-description):not(.has-image) .flex-wrapper,.component.interaction:not(.has-label):not(.has-image) .flex-wrapper{align-items:center;width:auto;height:auto}}@media (min-width: 1024px){.component.interaction:not(.has-description):not(.has-image) .label,.component.interaction:not(.has-label):not(.has-image) .label{margin:0 32px -32px 0}}.component.interaction:not(.has-description).has-image .label,.component.interaction:not(.has-label).has-image .label{margin:0 32px -32px 0}.component.interaction .icon{color:#015;margin-bottom:32px;font-size:32px}.component.interaction .description{color:#333;hyphens:auto;padding-right:8px}.component.interaction .flex-wrapper{display:flex;align-items:flex-end;height:100%;width:100%;justify-content:space-between}.component.interaction .first .icon{display:block;margin:16px 0 16px 16px;font-size:24px}@media (min-width: 1024px){.component.interaction .first .icon{display:none}}.component.interaction .second .icon{display:none}@media (min-width: 1024px){.component.interaction .second .icon{display:block}}.component.interaction.has-image .second{flex-basis:auto}.component.interaction.has-image .second .icon{display:none}.component.interaction.has-image .second .label{margin-top:16px}.component.grey,.component.orchid,.component.blue{text-decoration:none;transition:box-shadow 200ms ease-in-out}.component.grey.not-animated,.component.orchid.not-animated,.component.blue.not-animated{transition:unset}.component.grey:hover .link--standalone,.component.orchid:hover .link--standalone,.component.blue:hover .link--standalone{text-decoration:underline;text-decoration-thickness:2px}.component.grey:hover .link--standalone:not(.link--white,.link--dark),.component.orchid:hover .link--standalone:not(.link--white,.link--dark),.component.blue:hover .link--standalone:not(.link--white,.link--dark){color:#0048cf}.component.orchid,.component.blue{border-color:transparent}.component.orchid,.component.orchid .label,.component.blue,.component.blue .label{color:#fff}.component.grey{background:#eef3f6;color:#333}.component.grey:is(a):hover{box-shadow:0 4px 16px 0 rgba(51, 51, 51, 0.16)}.component.orchid{background:#a63297}.component.orchid:is(a):hover{box-shadow:0 4px 16px 0 rgba(166, 50, 151, 0.5)}.component.blue{background:#086adb}.component.blue:is(a):hover{box-shadow:0 4px 16px 0 rgba(8, 106, 219, 0.5)}.component.gradient .first{background:radial-gradient(110% 220% at 0% 140%, #13a3f4 0%, rgba(22, 158, 255, 0.5) 40%, rgba(16, 136, 222, 0) 100%), radial-gradient(290% 800% at 220% -440%, #dd1122 30%, #001155 100%);-webkit-mask-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 360 122" fill="rgb(0, 0, 0)"><path d="M0,83.9V0h360v84.5C319,107.3,253.9,122,180.5,122C106.5,122,40.9,107,0,83.9z"/></svg>\');mask-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 360 122" fill="rgb(0, 0, 0)"><path d="M0,83.9V0h360v84.5C319,107.3,253.9,122,180.5,122C106.5,122,40.9,107,0,83.9z"/></svg>\');mask-size:100% 100%;display:flex;height:122px;color:#fff;align-items:center;justify-content:center}.component.gradient .first .icon{display:block;font-size:56px}.component.gradient .second{align-items:center}.component.gradient .label .icon{display:none}.component.split{flex-direction:column-reverse}@media (min-width: 1024px){.component.split{flex-direction:row}}.component.split.gradient-1 .first{background:radial-gradient(110% 240% at 0% 130%, rgba(19, 163, 244, 0.9) 0%, rgba(22, 158, 255, 0.5) 55%, rgba(16, 136, 222, 0) 130%), #001155;color:#fff}.component.split .first,.component.split .second{padding:16px;gap:16px;flex-basis:50%}@media (min-width: 1024px){.component.split .first,.component.split .second{padding:24px;gap:24px}}.component .first .icon{display:none}.component .second{padding:16px;gap:16px;flex:1;display:flex;flex-direction:column}@media (min-width: 1024px){.component .second{padding:24px;gap:24px}}.component .image{width:100%;height:180px;object-position:center;object-fit:cover;vertical-align:bottom;-webkit-user-drag:none}.component .label{font-weight:600;margin-bottom:0;display:flex;gap:8px;color:#015}.component .icon{font-size:24px}@media (min-width: 1024px){.component .icon{font-size:32px}}.component .slot{flex-grow:1}.component .link::before{font-family:sdx-icons;content:"\\e004"}.component.sdx--dark-theme{border:1px solid #707070;background-color:#222;color:#e6e6e6}.component.sdx--dark-theme:hover:hover{box-shadow:none}.component.sdx--dark-theme.inline-notification.alert,.component.sdx--dark-theme.inline-notification.warning,.component.sdx--dark-theme.inline-notification.general,.component.sdx--dark-theme.inline-notification.confirm{background-color:transparent}.component.sdx--dark-theme.notification.alert::before,.component.sdx--dark-theme.inline-notification.alert::before{background-color:#eb1224}.component.sdx--dark-theme.notification.alert .icon,.component.sdx--dark-theme.inline-notification.alert .icon{color:#eb1224}.component.sdx--dark-theme.notification.warning::before,.component.sdx--dark-theme.inline-notification.warning::before{background-color:#ce4a0c}.component.sdx--dark-theme.notification.warning .icon,.component.sdx--dark-theme.inline-notification.warning .icon{color:#ce4a0c}.component.sdx--dark-theme.notification.general::before,.component.sdx--dark-theme.inline-notification.general::before{background-color:#0a71e9}.component.sdx--dark-theme.notification.general .icon,.component.sdx--dark-theme.inline-notification.general .icon{color:#0a71e9}.component.sdx--dark-theme.notification.confirm::before,.component.sdx--dark-theme.notification.confirmation::before,.component.sdx--dark-theme.inline-notification.confirm::before,.component.sdx--dark-theme.inline-notification.confirmation::before{background-color:#1c8912}.component.sdx--dark-theme.notification.confirm .icon,.component.sdx--dark-theme.notification.confirmation .icon,.component.sdx--dark-theme.inline-notification.confirm .icon,.component.sdx--dark-theme.inline-notification.confirmation .icon{color:#1c8912}.component.sdx--dark-theme:hover .link--standalone:not(.link--white,.link--dark){color:#5ca3ff}.component.sdx--dark-theme.interaction{transition:background-color 200ms ease-in-out, border-color 200ms ease-in-out}.component.sdx--dark-theme.interaction .description{color:#e6e6e6}.component.sdx--dark-theme.interaction .icon{color:#e6e6e6}.component.sdx--dark-theme.interaction:hover,.component.sdx--dark-theme.interaction:focus-visible{background-color:#242424;border-color:#b1b9be}.component.sdx--dark-theme.grey,.component.sdx--dark-theme.orchid,.component.sdx--dark-theme.blue{transition:background-color 200ms ease-in-out, border-color 200ms ease-in-out}.component.sdx--dark-theme.grey.not-animated,.component.sdx--dark-theme.orchid.not-animated,.component.sdx--dark-theme.blue.not-animated{transition:unset}.component.sdx--dark-theme.grey{background-color:#222}.component.sdx--dark-theme.grey:is(a):hover{background-color:#242424;border-color:#b1b9be}.component.sdx--dark-theme.orchid{background-color:#a54c9b}.component.sdx--dark-theme.orchid:is(a):hover{background-color:#b053a5;border-color:#b1b9be}.component.sdx--dark-theme.blue{background-color:#0a71e9}.component.sdx--dark-theme.blue:is(a):hover{background-color:#147df5;border-color:#b1b9be}.component.sdx--dark-theme .label{transition:color 200ms ease-in-out;color:#e6e6e6}'}}]);
//# sourceMappingURL=263.b1c625a6.chunk.js.map