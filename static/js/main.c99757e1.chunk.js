(this["webpackJsonpColor-Palette"]=this["webpackJsonpColor-Palette"]||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){e.exports=t.p+"static/media/mintbean.cf18b629.png"},14:function(e,a,t){"use strict";t.r(a);var o=t(0),r=t.n(o),c=t(5),l=t.n(c),n=(t(11),t(12),t(1)),m=t(2),s=t(3),i=function(e){return r.a.createElement("div",{style:{backgroundColor:e.color,width:"125px",height:"125px",border:"1px solid #000",margin:"3px"}},r.a.createElement("h4",{style:{color:"white"}},e.color))},u=function(e){return r.a.createElement("div",{className:"row mx-3"},Array.isArray(e.colors)?e.colors.map((function(e){return r.a.createElement(i,{color:e.toHexString(),key:e})})):r.a.createElement(i,{color:e.colors.toHexString(),key:e.colors}))},p=t(13),d=function(){var e=Object(o.useState)({color:"",scheme:"analagous"}),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(o.useState)([]),i=Object(s.a)(l,2),d=i[0],h=i[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"row mx-1"},r.a.createElement("button",{type:"button",className:"btn btn-secondary mx-auto",onClick:function(){var e=p.random();switch(t.scheme){case"analogous":h(p(e).analogous());break;case"monochromatic":h(p(e).monochromatic());break;case"splitcomplement":h(p(e).splitcomplement());break;case"triad":h(p(e).triad());break;case"tetrad":h(p(e).tetrad());break;case"complement":h([p(e).complement(),e]);break;default:h(p(e).analogous())}}},"Generate Random Color Scheme"),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){switch(e.preventDefault(),t.scheme){case"analogous":h(p(t.color).analogous());break;case"monochromatic":h(p(t.color).monochromatic());break;case"splitcomplement":h(p(t.color).splitcomplement());break;case"triad":h(p(t.color).triad());break;case"tetrad":h(p(t.color).tetrad());break;case"complement":h(p(t.color).complement());break;default:h(p(t.color).analogous())}},onChange:function(e){c(Object(m.a)(Object(m.a)({},t),{},Object(n.a)({},e.target.name,e.target.value)))}},r.a.createElement("div",{className:"form-check mx-3 form-check-inline"},r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",id:"analagous",value:"analogous"}),r.a.createElement("label",{htmlFor:"radio"},"Analagous")),r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",value:"monochromatic"}),r.a.createElement("label",{htmlFor:"radio"},"Monochromatic")),r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",value:"splitcomplement"}),r.a.createElement("label",{htmlFor:"radio"},"Split Complement")),r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",value:"triad"}),r.a.createElement("label",{htmlFor:"radio"},"Triad")),r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",value:"tetrad"}),r.a.createElement("label",{htmlFor:"radio"},"Tetrad")),r.a.createElement("div",{className:"mx-2"},r.a.createElement("input",{className:"form-check-input",type:"radio",name:"scheme",value:"complement"}),r.a.createElement("label",{htmlFor:"radio"},"Complement"))),r.a.createElement("div",{className:"row mx-3"},r.a.createElement("label",{htmlFor:"input"},"Enter Your Base Color:"),r.a.createElement("input",{type:"text",name:"color",value:t.color,required:!0}),r.a.createElement("button",{type:"submit",className:" mx-3 btn btn-primary"},"Generate Color Scheme")))),r.a.createElement(u,{colors:d}))},h={fontFamily:"sans-serif",fontSize:"50px",textAlign:"center",margin:"6rem 0",color:"blue"};var b=function(){return r.a.createElement("div",null,r.a.createElement("h1",{style:h},"Color Scheme Generator"),r.a.createElement("h6",{style:{textAlign:"center"}},"Enter a color name, hex color, RGB or RBGA color to generate a color scheme. You can also choose the color scheme you want to use. Click the random color scheme generator button if you don't have a color in mind!"),r.a.createElement("br",null),r.a.createElement(d,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))},6:function(e,a,t){e.exports=t(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c99757e1.chunk.js.map