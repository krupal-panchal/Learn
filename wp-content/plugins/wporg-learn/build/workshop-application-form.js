!function(){"use strict";var o=window.wp.blocks,r=window.wp.i18n,e=window.wp.element,n=window.wp.components;(0,o.registerBlockType)("wporg-learn/workshop-application-form",{title:(0,r.__)("Workshop Application Form","wporg-learn"),description:(0,r.__)("Render a form for applying to present a workshop.","wporg-learn"),category:"widgets",icon:"forms",supports:{html:!1},edit:function(){return(0,e.createElement)(n.Placeholder,{label:(0,r.__)("Workshop Application Form","wporg-learn"),instructions:(0,r.__)("This will render a form on the front end.","wporg-learn")})},save:()=>null})}();