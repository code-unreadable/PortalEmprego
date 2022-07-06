var p=Object.defineProperty,m=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var o=(t,s,e)=>s in t?p(t,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[s]=e,a=(t,s)=>{for(var e in s||(s={}))_.call(s,e)&&o(t,e,s[e]);if(i)for(var e of i(s))v.call(s,e)&&o(t,e,s[e]);return t},n=(t,s)=>m(t,g(s));import{W as h}from"./ToolsSettings.a9d9524e.js";import{c as f,d as y}from"./index.8900b7f9.js";import"./context.04ada340.js";import{n as I}from"./vueComponentNormalizer.87056a83.js";import{B as k}from"./HighlightToggle.47bdd2a8.js";import{G as x,a as z}from"./Row.13b6f3f1.js";import{W as C,a as w,b}from"./Header.f9af4a65.js";import{W,a as A}from"./Steps.39febb57.js";import"./default-i18n.abde8d59.js";import"./isArrayLikeObject.a4a9229a.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Radio.99a9886d.js";import"./Logo.1a5e022a.js";var l="images/yoast-logo-small.d61ba0ec.png",$="images/rank-math-seo-logo-small.ca2c09ed.png",S="svg/seopress-free-logo-small.ac91e892.svg",D="svg/seopress-pro-logo-small.6e7e5cab.svg",P=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"aioseo-wizard-import"},[e("wizard-header"),e("wizard-container",[e("wizard-body",{scopedSlots:t._u([{key:"footer",fn:function(){return[e("div",{staticClass:"go-back"},[e("router-link",{staticClass:"no-underline",attrs:{to:t.getPrevLink}},[t._v("\u2190")]),t._v(" \xA0 "),e("router-link",{attrs:{to:t.getPrevLink}},[t._v(t._s(t.strings.goBack))])],1),e("div",{staticClass:"spacer"}),e("base-button",{attrs:{type:"gray"},on:{click:t.skipStep}},[t._v(t._s(t.strings.skipThisStep))]),e("base-button",{attrs:{type:"blue",loading:t.loading},on:{click:t.saveAndContinue}},[t._v(t._s(t.strings.importDataAndContinue)+" \u2192")])]},proxy:!0}])},[e("wizard-steps"),e("div",{staticClass:"header"},[t._v(" "+t._s(t.strings.importData)+" ")]),e("div",{staticClass:"description"},[t._v(t._s(t.strings.weHaveDetected))]),e("div",{staticClass:"plugins"},[e("grid-row",t._l(t.getPlugins,function(r,c){return e("grid-column",{key:c,attrs:{md:"6"}},[e("base-highlight-toggle",{attrs:{type:"checkbox",round:"",active:t.isActive(r),name:r.name,value:t.getValue(r)},on:{input:function(d){return t.updateValue(d,r)}}},[t.pluginImages[r.slug]?e("img",{staticClass:"icon",class:r.slug,attrs:{alt:r.name+" Plugin Icon",src:t.pluginImages[r.slug]}}):t._e(),t.pluginImages[r.slug]?t._e():e("span",{staticClass:"icon dashicons dashicons-admin-plugins"}),t._v(" "+t._s(r.name)+" ")])],1)}),1)],1)],1),e("wizard-close-and-exit")],1)],1)},L=[];const U={components:{BaseHighlightToggle:k,GridColumn:x,GridRow:z,WizardBody:C,WizardCloseAndExit:W,WizardContainer:w,WizardHeader:b,WizardSteps:A},mixins:[h],data(){return{loading:!1,stage:"import",strings:{importData:"Import data from your current plugins",weHaveDetected:this.$t.sprintf("We have detected other SEO plugins installed on your website. Select which plugins you would like to import data to %1$s.","AIOSEO"),importDataAndContinue:"Import Data and Continue"},pluginImages:{"yoast-seo":this.$getImgUrl(l),"yoast-seo-premium":this.$getImgUrl(l),"rank-math-seo":this.$getImgUrl($),seopress:this.$getImgUrl(S),"seopress-pro":this.$getImgUrl(D)},selected:[]}},watch:{selected(t){this.updateImporters(t.map(s=>s.slug))}},computed:{getPlugins(){return this.$aioseo.importers.filter(t=>t.canImport)}},methods:n(a(a({},f("wizard",["updateImporters"])),y("wizard",["saveWizard"])),{updateValue(t,s){if(t){this.selected.push(s);return}const e=this.selected.findIndex(r=>r.value===s.value);e!==-1&&this.$delete(this.selected,e)},getValue(t){return this.selected.includes(t)},isActive(t){return this.selected.findIndex(e=>e.slug===t.slug)!==-1},saveAndContinue(){this.loading=!0,this.saveWizard("importers").then(()=>{this.$router.push(this.getNextLink)})},skipStep(){this.saveWizard(),this.$router.push(this.getNextLink)}})},u={};var B=I(U,P,L,!1,E,null,null,null);function E(t){for(let s in u)this[s]=u[s]}var Y=function(){return B.exports}();export{Y as default};
