"use strict";(self.webpackChunkmyportfolio=self.webpackChunkmyportfolio||[]).push([[845],{3845:(e,o,t)=>{t.d(o,{A:()=>k});var a=t(5043),r=t(8387),l=t(8610),i=t(1546),n=t(9662),c=t(579);const s=(0,n.A)((0,c.jsx)("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var p=t(5849),d=t(6803),m=t(7467),v=t(4535),u=t(6262),y=t(2445),g=t(8206),h=t(2532),f=t(2372);function b(e){return(0,f.Ay)("MuiChip",e)}const $=(0,h.A)("MuiChip",["root","sizeSmall","sizeMedium","colorDefault","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),C=(0,v.Ay)("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e,{color:a,iconColor:r,clickable:l,onDelete:i,size:n,variant:c}=t;return[{[`& .${$.avatar}`]:o.avatar},{[`& .${$.avatar}`]:o[`avatar${(0,d.A)(n)}`]},{[`& .${$.avatar}`]:o[`avatarColor${(0,d.A)(a)}`]},{[`& .${$.icon}`]:o.icon},{[`& .${$.icon}`]:o[`icon${(0,d.A)(n)}`]},{[`& .${$.icon}`]:o[`iconColor${(0,d.A)(r)}`]},{[`& .${$.deleteIcon}`]:o.deleteIcon},{[`& .${$.deleteIcon}`]:o[`deleteIcon${(0,d.A)(n)}`]},{[`& .${$.deleteIcon}`]:o[`deleteIconColor${(0,d.A)(a)}`]},{[`& .${$.deleteIcon}`]:o[`deleteIcon${(0,d.A)(c)}Color${(0,d.A)(a)}`]},o.root,o[`size${(0,d.A)(n)}`],o[`color${(0,d.A)(a)}`],l&&o.clickable,l&&"default"!==a&&o[`clickableColor${(0,d.A)(a)})`],i&&o.deletable,i&&"default"!==a&&o[`deletableColor${(0,d.A)(a)}`],o[c],o[`${c}${(0,d.A)(a)}`]]}})((0,u.A)((e=>{let{theme:o}=e;const t="light"===o.palette.mode?o.palette.grey[700]:o.palette.grey[300];return{maxWidth:"100%",fontFamily:o.typography.fontFamily,fontSize:o.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(o.vars||o).palette.text.primary,backgroundColor:(o.vars||o).palette.action.selected,borderRadius:16,whiteSpace:"nowrap",transition:o.transitions.create(["background-color","box-shadow"]),cursor:"unset",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${$.disabled}`]:{opacity:(o.vars||o).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${$.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:o.vars?o.vars.palette.Chip.defaultAvatarColor:t,fontSize:o.typography.pxToRem(12)},[`& .${$.avatarColorPrimary}`]:{color:(o.vars||o).palette.primary.contrastText,backgroundColor:(o.vars||o).palette.primary.dark},[`& .${$.avatarColorSecondary}`]:{color:(o.vars||o).palette.secondary.contrastText,backgroundColor:(o.vars||o).palette.secondary.dark},[`& .${$.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:o.typography.pxToRem(10)},[`& .${$.icon}`]:{marginLeft:5,marginRight:-6},[`& .${$.deleteIcon}`]:{WebkitTapHighlightColor:"transparent",color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.26)`:(0,i.X4)(o.palette.text.primary,.26),fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / 0.4)`:(0,i.X4)(o.palette.text.primary,.4)}},variants:[{props:{size:"small"},style:{height:24,[`& .${$.icon}`]:{fontSize:18,marginLeft:4,marginRight:-4},[`& .${$.deleteIcon}`]:{fontSize:16,marginRight:4,marginLeft:-4}}},...Object.entries(o.palette).filter((0,y.A)(["contrastText"])).map((e=>{let[t]=e;return{props:{color:t},style:{backgroundColor:(o.vars||o).palette[t].main,color:(o.vars||o).palette[t].contrastText,[`& .${$.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[t].contrastTextChannel} / 0.7)`:(0,i.X4)(o.palette[t].contrastText,.7),"&:hover, &:active":{color:(o.vars||o).palette[t].contrastText}}}}})),{props:e=>e.iconColor===e.color,style:{[`& .${$.icon}`]:{color:o.vars?o.vars.palette.Chip.defaultIconColor:t}}},{props:e=>e.iconColor===e.color&&"default"!==e.color,style:{[`& .${$.icon}`]:{color:"inherit"}}},{props:{onDelete:!0},style:{[`&.${$.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:(0,i.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}}},...Object.entries(o.palette).filter((0,y.A)(["dark"])).map((e=>{let[t]=e;return{props:{color:t,onDelete:!0},style:{[`&.${$.focusVisible}`]:{background:(o.vars||o).palette[t].dark}}}})),{props:{clickable:!0},style:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:(0,i.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.action.selectedChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))`:(0,i.X4)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)},"&:active":{boxShadow:(o.vars||o).shadows[1]}}},...Object.entries(o.palette).filter((0,y.A)(["dark"])).map((e=>{let[t]=e;return{props:{color:t,clickable:!0},style:{[`&:hover, &.${$.focusVisible}`]:{backgroundColor:(o.vars||o).palette[t].dark}}}})),{props:{variant:"outlined"},style:{backgroundColor:"transparent",border:o.vars?`1px solid ${o.vars.palette.Chip.defaultBorder}`:`1px solid ${"light"===o.palette.mode?o.palette.grey[400]:o.palette.grey[700]}`,[`&.${$.clickable}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${$.focusVisible}`]:{backgroundColor:(o.vars||o).palette.action.focus},[`& .${$.avatar}`]:{marginLeft:4},[`& .${$.avatarSmall}`]:{marginLeft:2},[`& .${$.icon}`]:{marginLeft:4},[`& .${$.iconSmall}`]:{marginLeft:2},[`& .${$.deleteIcon}`]:{marginRight:5},[`& .${$.deleteIconSmall}`]:{marginRight:3}}},...Object.entries(o.palette).filter((0,y.A)()).map((e=>{let[t]=e;return{props:{variant:"outlined",color:t},style:{color:(o.vars||o).palette[t].main,border:`1px solid ${o.vars?`rgba(${o.vars.palette[t].mainChannel} / 0.7)`:(0,i.X4)(o.palette[t].main,.7)}`,[`&.${$.clickable}:hover`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[t].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:(0,i.X4)(o.palette[t].main,o.palette.action.hoverOpacity)},[`&.${$.focusVisible}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette[t].mainChannel} / ${o.vars.palette.action.focusOpacity})`:(0,i.X4)(o.palette[t].main,o.palette.action.focusOpacity)},[`& .${$.deleteIcon}`]:{color:o.vars?`rgba(${o.vars.palette[t].mainChannel} / 0.7)`:(0,i.X4)(o.palette[t].main,.7),"&:hover, &:active":{color:(o.vars||o).palette[t].main}}}}}))]}}))),S=(0,v.Ay)("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,o)=>{const{ownerState:t}=e,{size:a}=t;return[o.label,o[`label${(0,d.A)(a)}`]]}})({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap",variants:[{props:{variant:"outlined"},style:{paddingLeft:11,paddingRight:11}},{props:{size:"small"},style:{paddingLeft:8,paddingRight:8}},{props:{size:"small",variant:"outlined"},style:{paddingLeft:7,paddingRight:7}}]});function A(e){return"Backspace"===e.key||"Delete"===e.key}const k=a.forwardRef((function(e,o){const t=(0,g.b)({props:e,name:"MuiChip"}),{avatar:i,className:n,clickable:v,color:u="default",component:y,deleteIcon:h,disabled:f=!1,icon:$,label:k,onClick:x,onDelete:I,onKeyDown:z,onKeyUp:w,size:R="medium",variant:O="filled",tabIndex:T,skipFocusWhenDisabled:L=!1,...M}=t,N=a.useRef(null),V=(0,p.A)(N,o),D=e=>{e.stopPropagation(),I&&I(e)},j=!(!1===v||!x)||v,P=j||I?m.A:y||"div",E={...t,component:P,disabled:f,size:R,color:u,iconColor:a.isValidElement($)&&$.props.color||u,onDelete:!!I,clickable:j,variant:O},X=(e=>{const{classes:o,disabled:t,size:a,color:r,iconColor:i,onDelete:n,clickable:c,variant:s}=e,p={root:["root",s,t&&"disabled",`size${(0,d.A)(a)}`,`color${(0,d.A)(r)}`,c&&"clickable",c&&`clickableColor${(0,d.A)(r)}`,n&&"deletable",n&&`deletableColor${(0,d.A)(r)}`,`${s}${(0,d.A)(r)}`],label:["label",`label${(0,d.A)(a)}`],avatar:["avatar",`avatar${(0,d.A)(a)}`,`avatarColor${(0,d.A)(r)}`],icon:["icon",`icon${(0,d.A)(a)}`,`iconColor${(0,d.A)(i)}`],deleteIcon:["deleteIcon",`deleteIcon${(0,d.A)(a)}`,`deleteIconColor${(0,d.A)(r)}`,`deleteIcon${(0,d.A)(s)}Color${(0,d.A)(r)}`]};return(0,l.A)(p,b,o)})(E),B=P===m.A?{component:y||"div",focusVisibleClassName:X.focusVisible,...I&&{disableRipple:!0}}:{};let F=null;I&&(F=h&&a.isValidElement(h)?a.cloneElement(h,{className:(0,r.A)(h.props.className,X.deleteIcon),onClick:D}):(0,c.jsx)(s,{className:(0,r.A)(X.deleteIcon),onClick:D}));let W=null;i&&a.isValidElement(i)&&(W=a.cloneElement(i,{className:(0,r.A)(X.avatar,i.props.className)}));let K=null;return $&&a.isValidElement($)&&(K=a.cloneElement($,{className:(0,r.A)(X.icon,$.props.className)})),(0,c.jsxs)(C,{as:P,className:(0,r.A)(X.root,n),disabled:!(!j||!f)||void 0,onClick:x,onKeyDown:e=>{e.currentTarget===e.target&&A(e)&&e.preventDefault(),z&&z(e)},onKeyUp:e=>{e.currentTarget===e.target&&I&&A(e)&&I(e),w&&w(e)},ref:V,tabIndex:L&&f?-1:T,ownerState:E,...B,...M,children:[W||K,(0,c.jsx)(S,{className:(0,r.A)(X.label),ownerState:E,children:k}),F]})}))},9662:(e,o,t)=>{t.d(o,{A:()=>h});var a=t(5043),r=t(8387),l=t(8610),i=t(6803),n=t(4535),c=t(6262),s=t(8206),p=t(2532),d=t(2372);function m(e){return(0,d.Ay)("MuiSvgIcon",e)}(0,p.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var v=t(579);const u=(0,n.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:t}=e;return[o.root,"inherit"!==t.color&&o[`color${(0,i.A)(t.color)}`],o[`fontSize${(0,i.A)(t.fontSize)}`]]}})((0,c.A)((e=>{let{theme:o}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:o.transitions?.create?.("fill",{duration:(o.vars??o).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:o.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:o.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:o.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((o.vars??o).palette).filter((e=>{let[,o]=e;return o&&o.main})).map((e=>{let[t]=e;return{props:{color:t},style:{color:(o.vars??o).palette?.[t]?.main}}})),{props:{color:"action"},style:{color:(o.vars??o).palette?.action?.active}},{props:{color:"disabled"},style:{color:(o.vars??o).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}}))),y=a.forwardRef((function(e,o){const t=(0,s.b)({props:e,name:"MuiSvgIcon"}),{children:n,className:c,color:p="inherit",component:d="svg",fontSize:y="medium",htmlColor:g,inheritViewBox:h=!1,titleAccess:f,viewBox:b="0 0 24 24",...$}=t,C=a.isValidElement(n)&&"svg"===n.type,S={...t,color:p,component:d,fontSize:y,instanceFontSize:e.fontSize,inheritViewBox:h,viewBox:b,hasSvgAsChild:C},A={};h||(A.viewBox=b);const k=(e=>{const{color:o,fontSize:t,classes:a}=e,r={root:["root","inherit"!==o&&`color${(0,i.A)(o)}`,`fontSize${(0,i.A)(t)}`]};return(0,l.A)(r,m,a)})(S);return(0,v.jsxs)(u,{as:d,className:(0,r.A)(k.root,c),focusable:"false",color:g,"aria-hidden":!f||void 0,role:f?"img":void 0,ref:o,...A,...$,...C&&n.props,ownerState:S,children:[C?n.props.children:n,f?(0,v.jsx)("title",{children:f}):null]})}));y.muiName="SvgIcon";const g=y;function h(e,o){function t(t,a){return(0,v.jsx)(g,{"data-testid":`${o}Icon`,ref:a,...t,children:e})}return t.muiName=g.muiName,a.memo(a.forwardRef(t))}}}]);
//# sourceMappingURL=845.6c7900ef.chunk.js.map