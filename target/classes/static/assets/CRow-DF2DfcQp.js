import{r as u,_ as g,R as y,b as d,c as h,P as e}from"./index-Zb9hwM-9.js";var b=["xxl","xl","lg","md","sm","xs"],x=u.forwardRef(function(n,l){var i=n.children,p=n.className,a=g(n,["children","className"]),s=[];return b.forEach(function(t){var o=a[t];delete a[t];var r=t==="xs"?"":"-".concat(t);(typeof o=="number"||typeof o=="string")&&s.push("col".concat(r,"-").concat(o)),typeof o=="boolean"&&s.push("col".concat(r)),o&&typeof o=="object"&&((typeof o.span=="number"||typeof o.span=="string")&&s.push("col".concat(r,"-").concat(o.span)),typeof o.span=="boolean"&&s.push("col".concat(r)),(typeof o.order=="number"||typeof o.order=="string")&&s.push("order".concat(r,"-").concat(o.order)),typeof o.offset=="number"&&s.push("offset".concat(r,"-").concat(o.offset)))}),y.createElement("div",d({className:h(s.length>0?s:"col",p)},a,{ref:l}),i)}),m=e.oneOfType([e.bool,e.number,e.string,e.oneOf(["auto"])]),c=e.oneOfType([m,e.shape({span:m,offset:e.oneOfType([e.number,e.string]),order:e.oneOfType([e.oneOf(["first","last"]),e.number,e.string])})]);x.propTypes={children:e.node,className:e.string,xs:c,sm:c,md:c,lg:c,xl:c,xxl:c};x.displayName="CCol";var N=["xxl","xl","lg","md","sm","xs"],v=u.forwardRef(function(n,l){var i=n.children,p=n.className,a=g(n,["children","className"]),s=[];return N.forEach(function(t){var o=a[t];delete a[t];var r=t==="xs"?"":"-".concat(t);typeof o=="object"&&(o.cols&&s.push("row-cols".concat(r,"-").concat(o.cols)),typeof o.gutter=="number"&&s.push("g".concat(r,"-").concat(o.gutter)),typeof o.gutterX=="number"&&s.push("gx".concat(r,"-").concat(o.gutterX)),typeof o.gutterY=="number"&&s.push("gy".concat(r,"-").concat(o.gutterY)))}),y.createElement("div",d({className:h("row",s,p)},a,{ref:l}),i)}),f=e.shape({cols:e.oneOfType([e.oneOf(["auto"]),e.number,e.string]),gutter:e.oneOfType([e.string,e.number]),gutterX:e.oneOfType([e.string,e.number]),gutterY:e.oneOfType([e.string,e.number])});v.propTypes={children:e.node,className:e.string,xs:f,sm:f,md:f,lg:f,xl:f,xxl:f};v.displayName="CRow";export{v as C,x as a};
