"use strict";(self.webpackChunksdx_react_example=self.webpackChunksdx_react_example||[]).push([[421],{421:function(t,e,o){o.r(e),o.d(e,{sdx_teaser:function(){return c}});var n=o(4942),i=o(5671),a=o(3144),s=o(9187),d=o(7778),c=function(){function t(e){(0,i.Z)(this,t),(0,s.r)(this,e),this.layout="card",this.theme=void 0,this.label="\xa0",this.labelAriaLevel=void 0,this.tagLabel=void 0,this.tagTheme="standard",this.tagIconName=void 0,this.buttonIconName=void 0,this.date=void 0,this.stockAmount=0,this.stockTotal=0,this.imageSrc="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",this.imageAlt="",this.backgroundSize="cover",this.href=void 0,this.hrefLabel="\xa0",this.hrefAriaLabel=void 0}return(0,a.Z)(t,[{key:"hasDarkBackground",value:function(){return this.layout.startsWith("gradient")||this.layout.startsWith("cover")}},{key:"getHeading",value:function(){var t="h3";return this.layout.startsWith("cover")&&(t="h2"),this.layout.startsWith("product")&&(t="h4"),t}},{key:"getComponentClassNames",value:function(){var t;return t={component:!0},(0,n.Z)(t,this.layout,!0),(0,n.Z)(t,(0,d.g)(this.el),!0),t}},{key:"getLinkClassNames",value:function(){var t,e;return t={},(0,n.Z)(t,(null===(e=this.href)||void 0===e?void 0:e.startsWith("#"))?"link--anchor":"link--standalone",!0),(0,n.Z)(t,"link--white",this.hasDarkBackground()),t}},{key:"getLabelClassNames",value:function(){return(0,n.Z)({label:!0},this.getHeading(),!0)}},{key:"getBackgroundStyles",value:function(){if(this.layout.startsWith("cover")){return{backgroundImage:"".concat("linear-gradient(90deg, #1d1d1d 0%, rgb(29,29,29, 0) 100%)",", url(").concat(this.imageSrc,")"),backgroundSize:this.backgroundSize}}}},{key:"render",value:function(){return(0,s.h)("a",{class:this.getComponentClassNames(),href:this.href,draggable:!1},(0,s.h)("div",{class:"first"},(0,s.h)("img",{class:"image image--rounded",src:this.imageSrc,alt:this.imageAlt,draggable:!1})),(0,s.h)("div",{class:"second",style:this.getBackgroundStyles()},!this.date&&!this.stockAmount&&this.tagLabel&&(0,s.h)("sdx-tag",{class:"tag",label:this.tagLabel,theme:this.hasDarkBackground()?"standard":this.theme||this.tagTheme,"icon-name":this.tagIconName,background:this.hasDarkBackground()?"dark":"light"}),this.date&&(0,s.h)("sdx-time-counter",{class:"time-counter",theme:this.theme,date:this.date}),!!this.stockAmount&&(0,s.h)("sdx-stock-counter",{class:"stock-counter",theme:this.theme,amount:this.stockAmount,total:this.stockTotal}),this.layout.startsWith("product")&&!this.date&&!this.stockAmount&&!this.tagLabel&&(0,s.h)("div",{class:"reserved-space"}),(0,s.h)("div",{class:this.getLabelClassNames(),role:this.labelAriaLevel?"heading":void 0,"aria-level":this.labelAriaLevel},this.label),(0,s.h)("div",{class:"description"},(0,s.h)("slot",null)),"product-button"===this.layout&&(0,s.h)("sdx-button",{theme:"secondary","icon-name":this.buttonIconName,label:this.hrefLabel||(0,d.t)("Add to cart",this.el.lang)}),"product-button"!==this.layout&&(0,s.h)("a",{href:this.href,class:this.getLinkClassNames(),"aria-label":this.hrefAriaLabel},this.hrefLabel)))}},{key:"el",get:function(){return(0,s.g)(this)}}]),t}();c.style=':host,*,*:before,*:after{box-sizing:border-box}figure{margin:0}.image{width:100%}.image--unscaled{width:auto}.image--frame-light{padding:16px;border:1px solid #d6d6d6}.image--frame-dark{padding:16px;background-color:#eef3f6}.image--rounded{border-radius:12px}.sdx--dark-theme .image--frame-light{border-color:#5c5c5c}.sdx--dark-theme .image--frame-dark{background-color:#242424}a,a.link,button.link{position:relative;transition:color 200ms cubic-bezier(0.4, 0, 0.6, 1), text-decoration 200ms cubic-bezier(0.4, 0, 0.6, 1);outline:none;text-decoration:underline;text-underline-offset:5px;cursor:pointer;color:#086adb}a:hover,a:focus-visible,a.link:hover,a.link:focus-visible,button.link:hover,button.link:focus-visible{text-decoration-thickness:2px;color:#0048cf}a:focus,a.link:focus,button.link:focus{outline:none}a+a,a+a.link,a+button.link,a.link+a,a.link+a.link,a.link+button.link,button.link+a,button.link+a.link,button.link+button.link{margin-left:24px}a[class*=icon-],a--standalone,a--anchor,a.link[class*=icon-],a.link--standalone,a.link--anchor,button.link[class*=icon-],button.link--standalone,button.link--anchor{display:inline-block;text-decoration:underline transparent;margin-left:24px}a[class*=icon-]:hover,a[class*=icon-]:focus-visible,a--standalone:hover,a--standalone:focus-visible,a--anchor:hover,a--anchor:focus-visible,a.link[class*=icon-]:hover,a.link[class*=icon-]:focus-visible,a.link--standalone:hover,a.link--standalone:focus-visible,a.link--anchor:hover,a.link--anchor:focus-visible,button.link[class*=icon-]:hover,button.link[class*=icon-]:focus-visible,button.link--standalone:hover,button.link--standalone:focus-visible,button.link--anchor:hover,button.link--anchor:focus-visible{text-decoration:underline;text-decoration-thickness:2px}a[class*=icon-]:hover:not(.link--white,.link--dark),a[class*=icon-]:focus-visible:not(.link--white,.link--dark),a--standalone:hover:not(.link--white,.link--dark),a--standalone:focus-visible:not(.link--white,.link--dark),a--anchor:hover:not(.link--white,.link--dark),a--anchor:focus-visible:not(.link--white,.link--dark),a.link[class*=icon-]:hover:not(.link--white,.link--dark),a.link[class*=icon-]:focus-visible:not(.link--white,.link--dark),a.link--standalone:hover:not(.link--white,.link--dark),a.link--standalone:focus-visible:not(.link--white,.link--dark),a.link--anchor:hover:not(.link--white,.link--dark),a.link--anchor:focus-visible:not(.link--white,.link--dark),button.link[class*=icon-]:hover:not(.link--white,.link--dark),button.link[class*=icon-]:focus-visible:not(.link--white,.link--dark),button.link--standalone:hover:not(.link--white,.link--dark),button.link--standalone:focus-visible:not(.link--white,.link--dark),button.link--anchor:hover:not(.link--white,.link--dark),button.link--anchor:focus-visible:not(.link--white,.link--dark){color:#0048cf}a[class*=icon-]::before,a--standalone::before,a--anchor::before,a.link[class*=icon-]::before,a.link--standalone::before,a.link--anchor::before,button.link[class*=icon-]::before,button.link--standalone::before,button.link--anchor::before{margin-left:-24px;display:inline-block;font-family:sdx-icons;padding-right:6px;position:relative}a--standalone::before,a.link--standalone::before,button.link--standalone::before{content:"\\e004"}a--anchor::before,a.link--anchor::before,button.link--anchor::before{content:"\\e002"}a:not([href]){text-decoration:none}p a+a,p a+a.link,p a+button.link,p a.link+a,p a.link+a.link,p a.link+button.link,p button.link+a,p button.link+a.link,p button.link+button.link,.list a+a,.list a+a.link,.list a+button.link,.list a.link+a,.list a.link+a.link,.list a.link+button.link,.list button.link+a,.list button.link+a.link,.list button.link+button.link{margin-left:0}a.link--white,a.link--white:hover,a.link--white:focus-visible,button.link--white,button.link--white:hover,button.link--white:focus-visible{color:#fff;border-color:#fff}.link--dark,.bg--dark a,.bg--dark a.link,.bg--dark button.link{color:#fff}.link--dark:hover,.link--dark:focus-visible,.bg--dark a:hover,.bg--dark button.link:hover,.bg--dark a:focus-visible,.bg--dark button.link:focus-visible{color:#fff}.sdx--dark-theme a,.sdx--dark-theme a.link,.sdx--dark-theme button.link{color:#4294ff}.sdx--dark-theme a:hover:not(.link--white,.link--dark),.sdx--dark-theme a:focus-visible:not(.link--white,.link--dark),.sdx--dark-theme a.link:hover:not(.link--white,.link--dark),.sdx--dark-theme a.link:focus-visible:not(.link--white,.link--dark),.sdx--dark-theme button.link:hover:not(.link--white,.link--dark),.sdx--dark-theme button.link:focus-visible:not(.link--white,.link--dark){color:#5ca3ff}.sdx--dark-theme a.link--white,.sdx--dark-theme a.link--white:hover,.sdx--dark-theme a.link--white:focus-visible,.sdx--dark-theme button.link--white,.sdx--dark-theme button.link--white:hover,.sdx--dark-theme button.link--white:focus-visible{color:#fff;border-color:#fff}.text-body-1,.text-standard{line-height:24px;letter-spacing:-0.1px;font-size:18px}.text-body-2,.text-small{line-height:21px;letter-spacing:0;font-size:16px}h1,h2,h3,h4,h5,h6,p{margin:0;text-align:left;word-wrap:break-word}.h1,.h2,.h3,.h4,.h5,.h6,.hero,.d1,.d2,.d3{color:#015}.h1,.text-h1,h1{line-height:40px;letter-spacing:-1px;font-size:32px;font-weight:700;margin-bottom:24px}@media (min-width: 1024px){.h1,.text-h1,h1{line-height:48px;letter-spacing:-1.2px;font-size:40px}}@media (min-width: 1024px){.h1,.text-h1,h1{margin-bottom:32px}}.h2,.text-h2,h2{line-height:32px;letter-spacing:-0.75px;font-size:28px;font-weight:700;margin-bottom:20px}@media (min-width: 1024px){.h2,.text-h2,h2{line-height:40px;letter-spacing:-1px;font-size:32px}}@media (min-width: 1024px){.h2,.text-h2,h2{margin-bottom:24px}}.h3,.h4,.text-h3,.text-h4,h3,h4{margin-bottom:16px}@media (min-width: 1024px){.h3,.h4,.text-h3,.text-h4,h3,h4{margin-bottom:20px}}.h3,.text-h3,h3{line-height:32px;letter-spacing:-0.35px;font-size:24px;font-weight:600}@media (min-width: 1024px){.h3,.text-h3,h3{line-height:32px;letter-spacing:-0.75px;font-size:28px}}.h4,.text-h4,h4{line-height:24px;letter-spacing:-0.1px;font-size:20px;font-weight:600}@media (min-width: 1024px){.h4,.text-h4,h4{line-height:32px;letter-spacing:-0.35px;font-size:24px}}.text-h3.text-compact{line-height:31px}.text-h4.text-compact{line-height:27px}.h5,.h6,.text-h5,.text-h6,h5,h6{margin-bottom:8px}.h5,.text-h5,h5{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:600}.h6,.text-h6,h6{line-height:24px;letter-spacing:-0.1px;font-size:16px;font-weight:600}.paragraph,p{line-height:24px;letter-spacing:-0.1px;font-size:18px;margin-bottom:20px}@media (min-width: 1024px){.paragraph,p{margin-bottom:24px}}.paragraph:last-child,p:last-child{margin-bottom:0}.hero,.text-hero,.d1,.text-d1,.d2,.text-d2,.d3,.text-d3{font-weight:700}.hero,.text-hero{line-height:80px;letter-spacing:-1.75px;font-size:70px}@media (min-width: 1024px){.hero,.text-hero{line-height:104px;letter-spacing:-2px;font-size:96px}}.d1,.text-d1{line-height:64px;letter-spacing:-1.35px;font-size:54px}@media (min-width: 1024px){.d1,.text-d1{line-height:80px;letter-spacing:-1.75px;font-size:70px}}.d2,.text-d2{line-height:56px;letter-spacing:-1.2px;font-size:48px}@media (min-width: 1024px){.d2,.text-d2{line-height:64px;letter-spacing:-1.35px;font-size:54px}}.d3,.text-d3{line-height:48px;letter-spacing:-1.2px;font-size:40px}@media (min-width: 1024px){.d3,.text-d3{line-height:56px;letter-spacing:-1.2px;font-size:48px}}.text-b1{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:400}.text-b2{line-height:21px;letter-spacing:0;font-size:16px;font-weight:400}.text-sm,.text-smaller{line-height:18px;letter-spacing:0.1px;font-size:14px;font-weight:400}.text-compact{line-height:21px}.figcaption{line-height:18px;letter-spacing:0.1px;font-size:14px}.code{font-family:monospace;background-color:#f8fafb;border-radius:4px;border:1px solid #d6d6d6;color:#474747;font-size:16px;padding:0 6px}address{font-style:normal}strong{font-weight:600}em{font-style:italic}.sdx--dark-theme .code{background-color:#242424;color:#d6d6d6}.font{font-family:TheSans, sans-serif}.font--sans{font-family:TheSans, sans-serif}.font--serif{font-family:TheSerif, serif}.font--light{font-weight:300}.font--semi-light{font-weight:400}.font--semi-bold{font-weight:600}.sdx--dark-theme .h1,.sdx--dark-theme .h2,.sdx--dark-theme .h3,.sdx--dark-theme .h4,.sdx--dark-theme .h5,.sdx--dark-theme .h6,.sdx--dark-theme .hero,.sdx--dark-theme .d1,.sdx--dark-theme .d2,.sdx--dark-theme .d3{color:unset}.sdx--dark-theme .h1,.sdx--dark-theme .text-h1,.sdx--dark-theme h1,.sdx--dark-theme .h2,.sdx--dark-theme .text-h2,.sdx--dark-theme h2,.sdx--dark-theme .h3,.sdx--dark-theme .text-h3,.sdx--dark-theme h3,.sdx--dark-theme .h4,.sdx--dark-theme .text-h4,.sdx--dark-theme h4,.sdx--dark-theme .d1,.sdx--dark-theme .text-d1,.sdx--dark-theme .d2,.sdx--dark-theme .text-d2,.sdx--dark-theme .d3,.sdx--dark-theme .text-d3{font-weight:600}.sdx--dark-theme .p,.sdx--dark-theme .paragraph,.sdx--dark-theme p{font-weight:500}.sdx--dark-theme .h1,.sdx--dark-theme .text-h1,.sdx--dark-theme h1{letter-spacing:-0.8px}.sdx--dark-theme .h2,.sdx--dark-theme .text-h2,.sdx--dark-theme h2{letter-spacing:-0.6px}.sdx--dark-theme .h3,.sdx--dark-theme .text-h3,.sdx--dark-theme h3{letter-spacing:-0.5px}.sdx--dark-theme .h4,.sdx--dark-theme .text-h4,.sdx--dark-theme h4{letter-spacing:-0.2px}.sdx--dark-theme .h5,.sdx--dark-theme .text-h5,.sdx--dark-theme h5{letter-spacing:-0.1px}.sdx--dark-theme .h6,.sdx--dark-theme .text-h6,.sdx--dark-theme h6{letter-spacing:0px}.sdx--dark-theme .d1,.sdx--dark-theme .text-d1{letter-spacing:-1.4px}.sdx--dark-theme .d2,.sdx--dark-theme .text-d2{letter-spacing:-1px}.sdx--dark-theme .d3,.sdx--dark-theme .text-d3{letter-spacing:-0.9px}.sdx--dark-theme strong,.sdx--dark-theme b{color:#fff}.sdx--dark-theme code{background-color:#242424;border:1px solid #b1b9be;border-radius:4px;color:#cfd5d9;font-size:16px}:host{padding-top:0 !important;height:auto !important;display:inline !important}.component{display:flex;flex-direction:column;height:100%;background:#fff;border-radius:12px;overflow:hidden;text-decoration:none;border:1px solid transparent;box-shadow:0 4px 20px 0 transparent;transition:all 400ms cubic-bezier(0.4, 0, 0.2, 1);user-select:none}.component:hover.card,.component:hover.product,.component:hover.product-out-of-stock,.component:hover.product-button,.component:focus-visible.card,.component:focus-visible.product,.component:focus-visible.product-out-of-stock,.component:focus-visible.product-button{border-color:#666;box-shadow:0 4px 20px 0 rgba(51, 51, 51, 0.16)}.component:hover .image,.component:focus-visible .image{transition-duration:800ms;transform:scale(1.05)}.component:hover .link--standalone,.component:focus-visible .link--standalone{text-decoration:underline;text-decoration-thickness:2px}.component:hover .link--standalone:not(.link--white,.link--dark),.component:focus-visible .link--standalone:not(.link--white,.link--dark){color:#0048cf}.component .first{overflow:hidden}.component .first .image{display:block;aspect-ratio:4/3;object-fit:cover;transition:transform 600ms cubic-bezier(0.4, 0, 0.2, 1)}.component .second{flex:1;display:flex;flex-direction:column;padding:16px;hyphens:auto;min-height:153px}@media (min-width: 480px){.component .second{padding:24px}}.component .second .tag,.component .second .stock-counter,.component .second .time-counter,.component .second .reserved-space{height:44px}.component .second .tag{margin:-2px 0 2px 0}.component .second .time-counter{padding-top:6px}.component .second .label{margin-bottom:8px}.component .second .description{color:#474747;margin-bottom:16px;flex-grow:1}.component.split,.component.split-sidekick{background:#eef3f6;height:auto;flex-direction:column-reverse}@media (min-width: 768px){.component.split,.component.split-sidekick{flex-direction:row-reverse}}.component.split .first,.component.split .second,.component.split-sidekick .first,.component.split-sidekick .second{flex-basis:50%}.component.split .second,.component.split-sidekick .second{padding:24px 16px 40px}.component.split .second .description,.component.split-sidekick .second .description{color:#015}.component.split .second .description ::slotted(ul),.component.split-sidekick .second .description ::slotted(ul){line-height:32px}.component.split .image,.component.split-sidekick .image{border-radius:0;object-fit:scale-down;height:100%}.component.gradient-sidekick{background:radial-gradient(110% 220% at 0% 140%, #13a3f4 0%, rgba(22, 158, 255, 0.5) 40%, rgba(16, 136, 222, 0) 100%), radial-gradient(290% 800% at 220% -440%, #dd1122 30%, #001155 100%);border:0}.component.gradient-sidekick .first{display:none;visibility:hidden}.component.gradient-sidekick .label,.component.gradient-sidekick .description{color:#fff}.component.cover,.component.cover-sidekick{border:0}.component.cover .first,.component.cover-sidekick .first{display:none;visibility:hidden}.component.cover .second,.component.cover-sidekick .second{background-position:center}.component.cover .label,.component.cover .description,.component.cover-sidekick .label,.component.cover-sidekick .description{color:#fff;overflow-wrap:break-word}.component.cover .label ::slotted(ul),.component.cover .description ::slotted(ul),.component.cover-sidekick .label ::slotted(ul),.component.cover-sidekick .description ::slotted(ul){line-height:32px}@media (min-width: 480px){.component.cover .label,.component.cover .description,.component.cover-sidekick .label,.component.cover-sidekick .description{max-width:min(55%, 340px)}}.component.split{min-height:520px}@media (min-width: 768px){.component.split{min-height:0}}.component.cover .second{min-height:520px}@media (min-width: 768px){.component.split .second,.component.cover .second{min-height:480px}}@media (min-width: 1280px){.component.split .second,.component.cover .second{min-height:560px}}.component.split-sidekick .second,.component.gradient-sidekick .second,.component.cover-sidekick .second{min-height:340px}@media (min-width: 768px){.component.split-sidekick .second,.component.gradient-sidekick .second,.component.cover-sidekick .second{min-height:432px}}.component.split-sidekick{min-height:340px}@media (min-width: 768px){.component.split-sidekick{min-height:432px}}.component.split-sidekick .second{min-height:0}.component.split .second,.component.split-sidekick .second,.component.gradient-sidekick .second,.component.cover .second,.component.cover-sidekick .second{padding:24px}@media (min-width: 480px){.component.split .second,.component.split-sidekick .second,.component.gradient-sidekick .second,.component.cover .second,.component.cover-sidekick .second{padding:48px 32px 32px}}.component.product .image,.component.product-out-of-stock .image,.component.product-button .image{aspect-ratio:1/1;object-fit:contain}.component.product .description,.component.product-out-of-stock .description,.component.product-button .description{line-height:24px;letter-spacing:-0.1px;font-size:20px;font-weight:600;color:#015;margin-bottom:24px}@media (min-width: 1024px){.component.product .description,.component.product-out-of-stock .description,.component.product-button .description{line-height:32px;letter-spacing:-0.35px;font-size:24px}}.component.product sdx-button,.component.product-out-of-stock sdx-button,.component.product-button sdx-button{min-width:156px;min-height:48px}@media (min-width: 1024px){.component.product .first,.component.product-out-of-stock .first,.component.product-button .first{padding:32px}.component.product .second,.component.product-out-of-stock .second,.component.product-button .second{padding:0 32px 40px}.component.product .label,.component.product-out-of-stock .label,.component.product-button .label{margin-bottom:4px}.component.product .link--standalone,.component.product-out-of-stock .link--standalone,.component.product-button .link--standalone{transition:all 400ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0}.component.product:hover .link--standalone,.component.product:focus .link--standalone,.component.product-out-of-stock:hover .link--standalone,.component.product-out-of-stock:focus .link--standalone,.component.product-button:hover .link--standalone,.component.product-button:focus .link--standalone{opacity:1}}@media (max-width: 1023px){.component.product,.component.product-out-of-stock,.component.product-button{border-radius:0}.component.product .image,.component.product-out-of-stock .image,.component.product-button .image{transform:scale(1)}.component.product .label,.component.product .description,.component.product-out-of-stock .label,.component.product-out-of-stock .description,.component.product-button .label,.component.product-button .description{line-height:24px;letter-spacing:-0.1px;font-size:18px;font-weight:600}.component.product .second,.component.product-out-of-stock .second,.component.product-button .second{padding:16px 0 0}.component.product:hover,.component.product:focus,.component.product-out-of-stock:hover,.component.product-out-of-stock:focus,.component.product-button:hover,.component.product-button:focus{border-color:transparent;box-shadow:none}}.component.product.product-out-of-stock .image,.component.product-out-of-stock.product-out-of-stock .image,.component.product-button.product-out-of-stock .image{opacity:0.5}.component.sdx--dark-theme:not(.gradient){background-color:#222}@media (max-width: 1023px){.component.sdx--dark-theme:not(.gradient).product,.component.sdx--dark-theme:not(.gradient).product-out-of-stock,.component.sdx--dark-theme:not(.gradient).product-button{background-color:transparent}}.component.sdx--dark-theme:not(.gradient):hover.card,.component.sdx--dark-theme:not(.gradient):focus-visible.card{border-color:#b1b9be;box-shadow:0 4px 20px 0 rgba(230, 230, 230, 0.16)}.component.sdx--dark-theme:not(.gradient):hover .link--standalone:not(.link--white,.link--dark),.component.sdx--dark-theme:not(.gradient):focus-visible .link--standalone:not(.link--white,.link--dark){color:#5ca3ff}.component.sdx--dark-theme:not(.gradient) .second .label{color:#e6e6e6}.component.sdx--dark-theme:not(.gradient) .second .description{color:#d6d6d6}'}}]);
//# sourceMappingURL=421.ba2fffaa.chunk.js.map