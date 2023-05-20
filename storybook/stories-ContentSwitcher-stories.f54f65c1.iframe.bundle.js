/*! For license information please see stories-ContentSwitcher-stories.f54f65c1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkde_migration=self.webpackChunkde_migration||[]).push([[681],{"./src/stories/ContentSwitcher.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DefaultSwitcher:()=>DefaultSwitcher,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ContentSwitcher_stories});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const HiddenInput=({hiddenInputItem})=>(0,jsx_runtime.jsx)("input",{id:hiddenInputItem.inputId,name:hiddenInputItem.inputName,"data-content-switcher":hiddenInputItem.inputAttribute,type:hiddenInputItem.inputType,checked:hiddenInputItem.inputChecked});HiddenInput.displayName="HiddenInput";const ContentSwitcher_HiddenInput=HiddenInput;try{HiddenInput.displayName="HiddenInput",HiddenInput.__docgenInfo={description:"",displayName:"HiddenInput",props:{hiddenInputItem:{defaultValue:null,description:"",name:"hiddenInputItem",required:!0,type:{name:"{ inputId: string; inputName: string; inputAttribute: string; inputType: string; inputChecked: boolean; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentSwitcher/HiddenInput.tsx#HiddenInput"]={docgenInfo:HiddenInput.__docgenInfo,name:"HiddenInput",path:"src/components/ContentSwitcher/HiddenInput.tsx#HiddenInput"})}catch(__react_docgen_typescript_loader_error){}const SliderLabel=({sliderLabelItem})=>(0,jsx_runtime.jsx)("label",{htmlFor:sliderLabelItem.forText,"data-content-switcher":sliderLabelItem.labelAttribute,children:(0,jsx_runtime.jsxs)("div",{children:[sliderLabelItem.labelHead?(0,jsx_runtime.jsxs)("span",{className:"h-4",children:[sliderLabelItem.labelHead,(0,jsx_runtime.jsx)("br",{})]}):"",(0,jsx_runtime.jsx)("span",{className:"p-1",children:sliderLabelItem.labelSubhead})]})});SliderLabel.displayName="SliderLabel";const ContentSwitcher_SliderLabel=SliderLabel;try{SliderLabel.displayName="SliderLabel",SliderLabel.__docgenInfo={description:"",displayName:"SliderLabel",props:{sliderLabelItem:{defaultValue:null,description:"",name:"sliderLabelItem",required:!0,type:{name:"{ labelAttribute: string; labelHead: string; labelSubhead: string; forText: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentSwitcher/SliderLabel.tsx#SliderLabel"]={docgenInfo:SliderLabel.__docgenInfo,name:"SliderLabel",path:"src/components/ContentSwitcher/SliderLabel.tsx#SliderLabel"})}catch(__react_docgen_typescript_loader_error){}const SwitcherContent=({switcherContentItem})=>(0,jsx_runtime.jsxs)("div",{"data-content-switcher":switcherContentItem.contentAttribute,className:"content-switcher--content",children:[(0,jsx_runtime.jsx)("h3",{children:switcherContentItem.contentHeading}),(0,jsx_runtime.jsx)("p",{children:switcherContentItem.contentPara})]});SwitcherContent.displayName="SwitcherContent";const ContentSwitcher_SwitcherContent=SwitcherContent;try{SwitcherContent.displayName="SwitcherContent",SwitcherContent.__docgenInfo={description:"",displayName:"SwitcherContent",props:{switcherContentItem:{defaultValue:null,description:"",name:"switcherContentItem",required:!0,type:{name:"{ contentAttribute: string; contentHeading: string; contentPara: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentSwitcher/SwitcherContent.tsx#SwitcherContent"]={docgenInfo:SwitcherContent.__docgenInfo,name:"SwitcherContent",path:"src/components/ContentSwitcher/SwitcherContent.tsx#SwitcherContent"})}catch(__react_docgen_typescript_loader_error){}const ContentSwitcherComponent=({hiddenInputs,sliderLabels,switcherContents})=>(0,jsx_runtime.jsxs)("div",{className:"content-switcher",children:[hiddenInputs.map((hiddenInputItem=>(0,jsx_runtime.jsx)(ContentSwitcher_HiddenInput,{hiddenInputItem}))),(0,jsx_runtime.jsxs)("div",{className:"content-switcher--pill",children:[sliderLabels.map((sliderLabelItem=>(0,jsx_runtime.jsx)(ContentSwitcher_SliderLabel,{sliderLabelItem}))),(0,jsx_runtime.jsx)("div",{className:"content-switcher--slider"})]}),switcherContents.map((switcherContentItem=>(0,jsx_runtime.jsx)(ContentSwitcher_SwitcherContent,{switcherContentItem})))]});ContentSwitcherComponent.displayName="ContentSwitcherComponent";try{ContentSwitcherComponent.displayName="ContentSwitcherComponent",ContentSwitcherComponent.__docgenInfo={description:"",displayName:"ContentSwitcherComponent",props:{hiddenInputs:{defaultValue:null,description:"",name:"hiddenInputs",required:!0,type:{name:"{ inputId: string; inputName: string; inputAttribute: string; inputType: string; inputChecked: boolean; }[]"}},sliderLabels:{defaultValue:null,description:"",name:"sliderLabels",required:!0,type:{name:"{ labelAttribute: string; labelHead: string; labelSubhead: string; forText: string; }[]"}},switcherContents:{defaultValue:null,description:"",name:"switcherContents",required:!0,type:{name:"{ contentAttribute: string; contentHeading: string; contentPara: string; }[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/ContentSwitcher/ContentSwitcherComponent.tsx#ContentSwitcherComponent"]={docgenInfo:ContentSwitcherComponent.__docgenInfo,name:"ContentSwitcherComponent",path:"src/components/ContentSwitcher/ContentSwitcherComponent.tsx#ContentSwitcherComponent"})}catch(__react_docgen_typescript_loader_error){}const ContentSwitcher_stories={component:ContentSwitcherComponent},DefaultSwitcher={args:{hiddenInputs:[{inputId:"switch-right-1",inputName:"switch-1",inputAttribute:"input-right",inputType:"radio",inputChecked:!0},{inputId:"switch-left-1",inputName:"switch-1",inputAttribute:"input-left",inputType:"radio",inputChecked:!0}],sliderLabels:[{forText:"switch-left-1",labelAttribute:"label-left",labelHead:"Prepaid",labelSubhead:"Residential"},{forText:"switch-right-1",labelAttribute:"label-right",labelHead:"Prepaid",labelSubhead:"Business"}],switcherContents:[{contentAttribute:"content-left",contentHeading:"Left Content",contentPara:"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."},{contentAttribute:"content-right",contentHeading:"Right Content",contentPara:"consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudexercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officiadeserunt mollit anim id est laborum."}]}};DefaultSwitcher.parameters={...DefaultSwitcher.parameters,docs:{...DefaultSwitcher.parameters?.docs,source:{originalSource:"{\n  args: {\n    hiddenInputs: hiddenInputData,\n    sliderLabels: sliderLabelData,\n    switcherContents: switcherContentData\n  }\n}",...DefaultSwitcher.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultSwitcher"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);