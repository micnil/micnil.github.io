(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Kfvu:function(e,n,t){"use strict";var a=t("TqRt");n.__esModule=!0,n.OutboundLink=c,n.trackCustomEvent=function(e){var n=e.category,t=e.action,a=e.label,l=e.value,i=e.nonInteraction,o=void 0!==i&&i,r=e.transport,c=e.hitCallback,d=e.callbackTimeout,m=void 0===d?1e3:d;if("undefined"!=typeof window&&window.ga){var u={eventCategory:n,eventAction:t,eventLabel:a,eventValue:l,nonInteraction:o,transport:r};c&&"function"==typeof c&&(u.hitCallback=function(e,n){void 0===n&&(n=1e3);var t=!1,a=function(){t||(t=!0,e())};return setTimeout(a,n),a}(c,m)),window.ga("send","event",u)}};var l=a(t("pVnL")),i=a(t("8OQS")),o=a(t("q1tI")),r=a(t("17x9"));function c(e){var n=e.eventCategory,t=e.eventAction,a=e.eventLabel,r=e.eventValue,c=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,l.default)({},c,{onClick:function(l){"function"==typeof e.onClick&&e.onClick(l);var i=!0;return(0!==l.button||l.altKey||l.ctrlKey||l.metaKey||l.shiftKey||l.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:n||"Outbound Link",eventAction:t||"click",eventLabel:a||e.href,eventValue:r,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}c.propTypes={href:r.default.string,target:r.default.string,eventCategory:r.default.string,eventAction:r.default.string,eventLabel:r.default.string,eventValue:r.default.number,onClick:r.default.func}},Lnxd:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));t("bWfx"),t("ioFf"),t("V+eJ"),t("91GP");var a=t("q1tI"),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=a.createContext&&a.createContext(l),o=function(){return(o=Object.assign||function(e){for(var n,t=1,a=arguments.length;t<a;t++)for(var l in n=arguments[t])Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l]);return e}).apply(this,arguments)},r=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)n.indexOf(a[l])<0&&(t[a[l]]=e[a[l]])}return t};function c(e){return function(n){return a.createElement(d,o({attr:o({},e.attr)},n),function e(n){return n&&n.map((function(n,t){return a.createElement(n.tag,o({key:t},n.attr),e(n.child))}))}(e.child))}}function d(e){var n=function(n){var t,l=e.size||n.size||"1em";n.className&&(t=n.className),e.className&&(t=(t?t+" ":"")+e.className);var i=e.attr,c=e.title,d=r(e,["attr","title"]);return a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,d,{className:t,style:o({color:e.color||n.color},n.style,e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==i?a.createElement(i.Consumer,null,(function(e){return n(e)})):n(l)}},RXBc:function(e,n,t){"use strict";t.r(n),t.d(n,"query",(function(){return L}));var a=t("q1tI"),l=t.n(a),i=t("vOnD"),o=t("7oih"),r=t("9CUm"),c=t("KE4F"),d=t("wu9k"),m=t("9eSz"),u=t.n(m),s=t("Kfvu"),f=t("ma3e"),p=i.c.div.withConfig({displayName:"Contact__StyledContact",componentId:"rmm329-0"})(["width:100%;display:flex;"]),h=i.c.div.withConfig({displayName:"Contact__Column",componentId:"rmm329-1"})(["display:flex;flex-direction:column;padding:1.1em;"]),g=i.c.div.withConfig({displayName:"Contact__SocialLinks",componentId:"rmm329-2"})(["display:flex;align-items:center;& ul{list-style:none;padding:0;margin:0;justify-content:space-around;align-items:center;flex-wrap:wrap;}& li{display:flex;align-items:center;margin-left:0.7em;}& svg{margin-right:0.1em;}@media only screen and (min-width:768px){& ul{display:initial;}}"]),v=i.c.div.withConfig({displayName:"Contact__ProfileContainerDesktop",componentId:"rmm329-3"})(["width:100%;margin:2rem 0rem 2rem 2rem;display:none;@media only screen and (min-width:768px){display:block;flex:1 0.5 400px;}"]),w=i.c.div.withConfig({displayName:"Contact__ProfileContainerMobile",componentId:"rmm329-4"})(["width:4em;display:inline-block;flex:0 1 250px;@media only screen and (min-width:768px){display:none;}"]),y=Object(i.c)(u.a).withConfig({displayName:"Contact__RoundImg",componentId:"rmm329-5"})(["border-radius:50%;"]),b=function(e){return l.a.createElement(p,null,l.a.createElement(v,null,l.a.createElement(y,{fluid:e.image.fluid})),l.a.createElement(h,null,l.a.createElement(c.a,{content:e.body}),l.a.createElement(g,null,l.a.createElement(w,null,l.a.createElement(y,{fluid:e.image.fluid})),l.a.createElement("ul",null,e.twitterHandle&&l.a.createElement("li",null,l.a.createElement(f.e,null),l.a.createElement(s.OutboundLink,{href:e.twitterUrl},e.twitterHandle)),e.githubHandle&&l.a.createElement("li",null,l.a.createElement(f.b,null),l.a.createElement(s.OutboundLink,{href:e.githubUrl},e.githubHandle)),e.stackOverflowHandle&&l.a.createElement("li",null,l.a.createElement(f.d,null),l.a.createElement(s.OutboundLink,{href:e.stackOverflowUrl},e.stackOverflowHandle)),e.linkedinHandle&&l.a.createElement("li",null,l.a.createElement(f.c,null),l.a.createElement(s.OutboundLink,{href:e.linkedinUrl},e.linkedinHandle)),l.a.createElement("li",null,l.a.createElement(f.a,null),l.a.createElement(d.a,null))))))},E=i.c.pre.withConfig({displayName:"CodeBlock__Preformatted",componentId:"lwyj0j-0"})(["display:block;background-color:rgb(43,62,80);margin-top:2em;padding:0.5em;box-shadow:0px 10px 25px;overflow:hidden;@media only screen and (min-width:615px){padding:1em;border-radius:5px;margin:2em;}"]),k=i.c.code.withConfig({displayName:"CodeBlock__Terminal",componentId:"lwyj0j-1"})(["display:inline-block;color:rgb(248,248,242);line-height:1.3em;font-size:60%;@media only screen and (min-width:400px){font-size:70%;}@media only screen and (min-width:450px){font-size:80%;}@media only screen and (min-width:500px){font-size:90%;}@media only screen and (min-width:615px){font-size:100%;}"]),C=i.c.span.withConfig({displayName:"CodeBlock__Dot",componentId:"lwyj0j-2"})(["height:8px;width:8px;border-radius:50%;display:inline-block;margin-right:0.5em;margin-bottom:0.8em;background-color:",";@media only screen and (min-width:615px){height:12px;width:12px;}"],(function(e){return e.color||"palevioletred"})),x=function(e){var n=e.children;return l.a.createElement(E,null,l.a.createElement(k,null,l.a.createElement("div",null,l.a.createElement(C,{color:"#ff5f56"}),l.a.createElement(C,{color:"#ffbd2e"}),l.a.createElement(C,{color:"#27c93f"})),n))},_=i.c.span.withConfig({displayName:"GitMessage__Yellow",componentId:"vd69ov-0"})(["color:rgb(255,204,0);"]),O=i.c.span.withConfig({displayName:"GitMessage__Grey",componentId:"vd69ov-1"})(["color:rgb(174,174,170);"]),N=function(){return l.a.createElement(x,null,l.a.createElement(_,null,">"),l.a.createElement("span",null," git log -1\n"),l.a.createElement(O,null,"commit daff16378c079fb52c1bd27dc6f630988b0d222a"),l.a.createElement("span",null,"\nAuthor: Michael Nilsson <"),l.a.createElement(_,null,l.a.createElement(d.a,null)),l.a.createElement("span",null,">\nDate:   Sun Mar 3 19:20:58 2019 +0200\n\n    [#2157] "),l.a.createElement(_,null,"Add introduction to Michael Nilsson"),l.a.createElement("span",null," 🚀\n\n    Explain that Michael is a Swedish software developer, that enjoys\n    solving interesting problems both professionally and as a hobby.\n    Promote his interests in new technology, and that he is driven by\n    building innovative solutions. Mention that he has a strong \n    background in "),l.a.createElement(_,null,"web technologies"),l.a.createElement("span",null,", "),l.a.createElement(_,null,".NET"),l.a.createElement("span",null," and "),l.a.createElement(_,null,"computer graphics"),l.a.createElement("span",null,". \n\n    Also point out that he has a "),l.a.createElement(_,null,"Master of Science in Media Technology"),l.a.createElement("span",null,"."))},I=i.c.div.withConfig({displayName:"pages__MobileOnlyGreeting",componentId:"moi1bl-0"})(["text-align:center;@media only screen and (min-width:768px){display:none;}& h1{margin-bottom:0px;margin-top:1em;}"]),L="2399743444";n.default=function(e){var n=e.data;return l.a.createElement(o.a,null,l.a.createElement(r.a,{title:"Home",keywords:["software","developer","portfolio"]}),l.a.createElement(I,null,l.a.createElement("h1",null,"Hello, I'm Michael")),l.a.createElement(N,null),l.a.createElement(b,{body:n.content.html,image:n.photo.childImageSharp,twitterHandle:"micnil_",twitterUrl:"https://twitter.com/micnil_",githubHandle:"micnil",githubUrl:"https://github.com/micnil",linkedinHandle:"nilssondev",linkedinUrl:"https://www.linkedin.com/in/nilssonmichael",stackOverflowHandle:"micnil",stackOverflowUrl:"https://stackoverflow.com/users/3346060/micnil"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-65f2ab19524629e3a62f.js.map