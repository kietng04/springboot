import{r as k,_ as y,R as o,b as p,c as F,P as e}from"./index-JGnOvRDz.js";var n=k.forwardRef(function(a,r){var i,c=a.children,l=a.as,d=l===void 0?"div":l,t=a.className,s=a.invalid,b=a.tooltip,m=a.valid,f=y(a,["children","as","className","invalid","tooltip","valid"]);return o.createElement(d,p({className:F((i={},i["invalid-".concat(b?"tooltip":"feedback")]=s,i["valid-".concat(b?"tooltip":"feedback")]=m,i),t)},f,{ref:r}),c)});n.propTypes={as:e.elementType,children:e.node,className:e.string,invalid:e.bool,tooltip:e.bool,valid:e.bool};n.displayName="CFormFeedback";var v=function(a){var r=a.describedby,i=a.feedback,c=a.feedbackInvalid,l=a.feedbackValid,d=a.invalid,t=a.tooltipFeedback,s=a.valid;return o.createElement(o.Fragment,null,i&&(s||d)&&o.createElement(n,p({},d&&{id:r},{invalid:d,tooltip:t,valid:s}),i),c&&o.createElement(n,{id:r,invalid:!0,tooltip:t},c),l&&o.createElement(n,{valid:!0,tooltip:t},l))};v.propTypes={describedby:e.string,feedback:e.oneOfType([e.node,e.string]),feedbackValid:e.oneOfType([e.node,e.string]),feedbackInvalid:e.oneOfType([e.node,e.string]),invalid:e.bool,tooltipFeedback:e.bool,valid:e.bool};v.displayName="CFormControlValidation";export{v as C,n as a};
