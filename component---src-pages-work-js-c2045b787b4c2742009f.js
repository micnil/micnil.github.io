(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{226:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(8),o=a(222),l=a(221),s=i.c.span.withConfig({displayName:"PostHeader__Tag",componentId:"enkxia-0"})(["color:",";text-transform:uppercase;font-style:italic;font-size:0.8em;"],function(e){return e.theme.textSecondary||"#888"}),d=i.c.header.withConfig({displayName:"PostHeader__Header",componentId:"enkxia-1"})(["display:flex;flex-direction:row;justify-content:space-between;h3{margin-bottom:0em;}"]),c=i.c.em.withConfig({displayName:"PostHeader__Subtitle",componentId:"enkxia-2"})(["color:",";"],function(e){return e.theme.textSecondary||"#888"}),u=function(e){var t=e.children;return n.a.createElement("div",null,t.map(function(e,a){return n.a.createElement(s,{key:e},e,a<t.length-1&&",  ")}))};var f=function(e){var t=e.title,a=e.tags,r=e.year;return n.a.createElement(n.a.Fragment,null,n.a.createElement(d,null,n.a.createElement("h3",null,t),n.a.createElement(u,null,a)),n.a.createElement(c,null,"Started: ",r))},m=a(107),g=Object(i.c)(m.a).withConfig({displayName:"WorkContent",componentId:"rqziof-0"})(["margin-top:0.5em;a + em{display:block;text-align:center;}iframe{display:block;margin:auto;margin-bottom:1em;}"]),p=a(228),h=a.n(p),b=i.c.button.withConfig({displayName:"BorderlessButton__StyledBorderlessButton",componentId:"sc-1919ln0-0"})(["color:",";align-self:flex-start;font-family:inherit;font-size:100%;margin:0;border:none;background:none;cursor:pointer;"],function(e){return e.theme.textAccent});b.defaultProps={theme:{textAccent:"teal"}};var y=function(e){var t=e.children,a=e.onClick;return n.a.createElement(b,{onClick:a},t)},S=i.c.div.withConfig({displayName:"Excerpt__Column",componentId:"egjott-0"})(["display:flex;flex-direction:column;"]),v=i.c.div.withConfig({displayName:"Excerpt__Row",componentId:"egjott-1"})(["display:flex;flex-direction:row;"]),w=Object(i.c)(S).withConfig({displayName:"Excerpt__ColumnWithSpaceBetween",componentId:"egjott-2"})(["justify-content:space-between;flex:2;"]);var E=function(e){var t=e.title,a=e.content,r=e.thumbnail,i=e.tags,o=e.onClickReadMore,l=e.startYear;return n.a.createElement(S,null,n.a.createElement(f,{title:t,tags:i,year:l}),n.a.createElement(v,null,n.a.createElement(w,null,n.a.createElement(g,{content:a}),n.a.createElement(y,{onClick:o},"Read more")),r&&n.a.createElement(h.a,{style:{flex:"1"},fluid:r.childImageSharp.fluid})))},x=i.c.article.withConfig({displayName:"Post__StyledPost",componentId:"sc-1pxgb00-0"})(["border-top:1px solid rgba(25,17,34,0.075);padding:1em;@media only screen and (min-width:768px){margin:2em;border-radius:4px;box-shadow:rgba(25,17,34,0.075) 0px 3px 10px;}"]),I=function(e){var t=e.title,a=e.tags,i=e.year,o=e.content,l=e.excerpt,s=e.thumbnail,d=Object(r.useState)(!1),c=d[0],u=d[1],m=Object(r.useRef)(null);return n.a.createElement(x,{ref:m},c?n.a.createElement(n.a.Fragment,null,n.a.createElement(f,{title:t,tags:a,year:i}),n.a.createElement(g,{content:o}),n.a.createElement(y,{onClick:function(){u(!1),m.current.scrollIntoView({behavior:"smooth"})}},"Read less")):n.a.createElement(E,{title:t,content:l,thumbnail:s,tags:a,startYear:i,onClickReadMore:function(){return u(!0)}}))};a.d(t,"query",function(){return k});var C=i.c.div.withConfig({displayName:"work__PageHeader",componentId:"sc-73kdvf-0"})(["margin:2em;"]),k="715034897";t.default=function(e){var t=e.data.allMarkdownRemark.edges.map(function(e){var t=e.node;return n.a.createElement(I,{key:t.fileAbsolutePath,filePath:t.fileAbsolutePath,title:t.frontmatter.title,tags:t.frontmatter.tags,year:t.frontmatter.start,content:t.html,excerpt:t.excerpt,thumbnail:t.frontmatter.thumbnail})});return n.a.createElement(o.a,null,n.a.createElement(l.a,{title:"Work",keywords:["portfolio","work","projects"]}),n.a.createElement(C,null,n.a.createElement("h4",null," Presenting a selection of projects I am, or have been, working on.")),t)}},228:function(e,t,a){"use strict";a(10),a(11),a(4),a(106),a(158),a(229);var r=a(24);t.__esModule=!0,t.default=void 0;var n,i=r(a(82)),o=r(a(81)),l=r(a(159)),s=r(a(156)),d=r(a(0)),c=r(a(43)),u=function(e){var t=(0,s.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=v([].concat(t.fluid))),t.fixed&&(t.fixed=v([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function S(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))})}function v(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),[].concat(t,a)}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function E(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function x(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"})),n);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)}).join("")+"<img "+d+o+l+a+r+t+i+n+s+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},k=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=d.default.createElement(L,(0,s.default)({src:t},n));return a.length>1?d.default.createElement("picture",null,r(a),i):i},L=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,s.default)({sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,s.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});L.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,l=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,v=e.itemProp,x=e.loading,I=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,s.default)({opacity:R?1:0,transition:O?"opacity "+b+"ms":"none"},l),_="boolean"==typeof h?"lightgray":h,P={transitionDelay:b+"ms"},V=(0,s.default)({opacity:this.state.imgLoaded?0:1},O&&P,{},l,{},f),j={title:t,alt:this.state.isVisible?"":a,style:V,className:m};if(g){var N=g,T=N[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),_&&d.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&P)}),T.base64&&d.default.createElement(k,{src:T.base64,spreadProps:j,imageVariants:N,generateSources:E}),T.tracedSVG&&d.default.createElement(k,{src:T.tracedSVG,spreadProps:j,imageVariants:N,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(N),d.default.createElement(L,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:x},T,{imageVariants:N}))}}))}if(p){var W=p,q=W[0],M=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},i);return"inherit"===i.display&&delete M.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},_&&d.default.createElement(y,{title:t,style:(0,s.default)({backgroundColor:_,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},O&&P)}),q.base64&&d.default.createElement(k,{src:q.base64,spreadProps:j,imageVariants:W,generateSources:E}),q.tracedSVG&&d.default.createElement(k,{src:q.tracedSVG,spreadProps:j,imageVariants:W,generateSources:w}),this.state.isVisible&&d.default.createElement("picture",null,S(W),d.default.createElement(L,{alt:a,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:x,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,s.default)({alt:a,title:t,loading:x},q,{imageVariants:W}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:O,sizes:z,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=R;t.default=_},229:function(e,t,a){"use strict";a(230)("fixed",function(e){return function(){return e(this,"tt","","")}})},230:function(e,t,a){var r=a(1),n=a(12),i=a(44),o=/"/g,l=function(e,t,a,r){var n=String(i(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),l+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-work-js-c2045b787b4c2742009f.js.map