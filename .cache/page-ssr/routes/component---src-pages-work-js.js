exports.id = 624;
exports.ids = [624];
exports.modules = {

/***/ 6162:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
var _interopRequireDefault=__webpack_require__(4836);__webpack_unused_export__=true;exports.Z=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(6115));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(7867));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(3212));var _extends2=_interopRequireDefault(__webpack_require__(434));var _react=_interopRequireDefault(__webpack_require__(1835));var _propTypes=_interopRequireDefault(__webpack_require__(5697));var _excluded=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"];var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;logDeprecationNotice("resolutions","the gatsby-image v2 prop \"fixed\"");delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;logDeprecationNotice("sizes","the gatsby-image v2 prop \"fluid\"");delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string?} Returns image src or undefined it not given.
 */var getImageCacheKey=function getImageCacheKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var srcData=getCurrentSrcData(fluid||fixed||[]);return srcData&&srcData.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);return imageCache[cacheKey]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);var cacheKey=getImageCacheKey(convertedProps);if(cacheKey){imageCache[cacheKey]=true;}};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),srcSet&&/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,_excluded);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn,isHydrated:false};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){this.setState({isHydrated:isBrowser});if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var imageVariants=fluid||fixed;// Abort early if missing image data (#25371)
if(!imageVariants){return null;}var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};// Initial client render state needs to match SSR until hydration finishes.
// Once hydration completes, render again to update to the correct image.
// `imageVariants` is always an Array type at this point due to `convertProps()`
var image=!this.state.isHydrated?imageVariants[0]:getCurrentSrcData(imageVariants);if(fluid){return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:image.width,height:image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:image.width,opacity:!this.state.imgLoaded?1:0,height:image.height},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:image.width,height:image.height,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});function requireFixedOrFluid(originalPropTypes){return function(props,propName,componentName){var _PropTypes$checkPropT;if(!props.fixed&&!props.fluid){throw new Error("The prop `fluid` or `fixed` is marked as required in `"+componentName+"`, but their values are both `undefined`.");}_propTypes.default.checkPropTypes((_PropTypes$checkPropT={},_PropTypes$checkPropT[propName]=originalPropTypes,_PropTypes$checkPropT),props,"prop",componentName);};}// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:requireFixedOrFluid(_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)])),fluid:requireFixedOrFluid(_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)])),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.Z=_default;

/***/ }),

/***/ 3031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ HTMLContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1835);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
const HTMLContent=({content,className,...props})=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",Object.assign({},props,{className:className,dangerouslySetInnerHTML:{__html:content}}));HTMLContent.propTypes={content:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node),className:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().string)};

/***/ }),

/***/ 4573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1835);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This component exists purirely to obfuscate the
 * site email from web crawlers. I doubt it has much
 * effect, but even if one crawler is avoided, it's worth it.
 */const Email=()=>{let firstname='michael';let lastname='nilsson';return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,firstname,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",{style:{display:'none'}}),"@",lastname,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span",null,null),".dev");};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);

/***/ }),

/***/ 2008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Layout)
});

// EXTERNAL MODULE: external "/Users/kqdj771/hack/micnil.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1835);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(4718);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(1650);
;// CONCATENATED MODULE: ./src/utils/theme.js
const theme={backgroundPrimary:'#fff',backgroundSecondary:'#f2f2f2',borderSecondary:'#00000026',textAccent:'#1eaedb',textSecondary:'#8c8c8c',textNeutral:'#444'};/* harmony default export */ const utils_theme = (theme);
;// CONCATENATED MODULE: ./src/components/Menu.js
const MenuItems=styled_components_esm["default"].div.withConfig({displayName:"Menu__MenuItems",componentId:"sc-1e9gng-0"})(["& ul{list-style:none;display:flex;padding:0;margin:0;}& a{color:",";text-decoration:none;vertical-align:bottom;:hover{text-decoration:none;color:",";}}text-transform:uppercase;letter-spacing:0.2em;display:flex;font-size:0.8rem;font-weight:700;"],({theme})=>theme.textNeutral,({theme})=>theme.textAccent);const MenuItem=styled_components_esm["default"].li.withConfig({displayName:"Menu__MenuItem",componentId:"sc-1e9gng-1"})(["padding:0 0.8rem;margin-bottom:0;"]);MenuItems.defaultProps={theme:{textAccent:'teal',textNeutral:'#444'}};const Menu=({children})=>/*#__PURE__*/index_js_default().createElement(MenuItems,null,/*#__PURE__*/index_js_default().createElement("ul",null,index_js_default().Children.map(children,(child,index)=>/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(MenuItem,null,child),index_js_default().Children.count(children)>index+1&&/*#__PURE__*/index_js_default().createElement("span",{style:{fontStyle:'italic',userSelect:'none'}},"/")))));/* harmony default export */ const components_Menu = (Menu);
// EXTERNAL MODULE: ./src/components/Email.js
var Email = __webpack_require__(4573);
// EXTERNAL MODULE: ./src/components/Content.js
var Content = __webpack_require__(3031);
;// CONCATENATED MODULE: ./src/components/Header.js
const BrandTitle=styled_components_esm["default"].h1.withConfig({displayName:"Header__BrandTitle",componentId:"sc-181w12y-0"})(["margin:0px 0px 7px 0px;color:rgba(0,0,0,0.75);line-height:1em;@media print{font-size:35px;}"]);const StyledPrintHeader=styled_components_esm["default"].header.withConfig({displayName:"Header__StyledPrintHeader",componentId:"sc-181w12y-1"})(["display:none;@media print{display:flex;justify-content:space-between;align-items:center;padding:0.9em;border-bottom:1px solid rgba(0,0,0,0.15);}p{margin:0em 2em 0em 0em;font-size:16px;}"]);const ContactInfo=styled_components_esm["default"].div.withConfig({displayName:"Header__ContactInfo",componentId:"sc-181w12y-2"})(["display:flex;flex-direction:column;font-size:15px;white-space:nowrap;& ul{list-style:none;padding:0;margin:0;}& li{margin:0;padding:0;}"]);const Column=styled_components_esm["default"].div.withConfig({displayName:"Header__Column",componentId:"sc-181w12y-3"})(["display:flex;flex-direction:column;"]);/**
 * Header that is only visible when page is printed.
 */const PrintHeader=({siteTitle,phone,url,address,about})=>/*#__PURE__*/index_js_default().createElement(StyledPrintHeader,null,/*#__PURE__*/index_js_default().createElement(Column,null,/*#__PURE__*/index_js_default().createElement(BrandTitle,null,siteTitle),/*#__PURE__*/index_js_default().createElement(Content/* HTMLContent */.p,{content:about})),/*#__PURE__*/index_js_default().createElement(ContactInfo,null,/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,phone),/*#__PURE__*/index_js_default().createElement("li",null,address),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement(Email/* default */.Z,null)),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:url},url)))));PrintHeader.propTypes={siteTitle:(prop_types_default()).string,phone:(prop_types_default()).string,address:(prop_types_default()).string,url:(prop_types_default()).string,about:(prop_types_default()).string};PrintHeader.defaultProps={siteTitle:``,phone:``,address:``,url:``,about:``};const BrandLink=(0,styled_components_esm["default"])(gatsby_browser_entry.Link).withConfig({displayName:"Header__BrandLink",componentId:"sc-181w12y-4"})(["display:none;@media only screen and (min-width:768px){display:initial;}:hover{text-decoration:none;}"]);const Nav=styled_components_esm["default"].nav.withConfig({displayName:"Header__Nav",componentId:"sc-181w12y-5"})(["background-color:",";max-width:960px;display:flex;margin:auto;padding:1rem;justify-content:space-evenly;align-items:flex-end;border-bottom:1px solid rgba(0,0,0,0.15);@media print{display:none !important;}"],({theme})=>theme.backgroundPrimary);Nav.defaultProps={theme:{backgroundPrimary:'#fff'}};const activeStyles={fontWeight:'700'};/**
 * The site header and navbar - will not be visible when
 * page is printed.
 */const Header=({siteTitle})=>/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement(Nav,null,/*#__PURE__*/index_js_default().createElement(components_Menu,null,/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:'/',activeStyle:activeStyles},"About"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:'/work',activeStyle:activeStyles},"Work"),/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:'/cv',activeStyle:activeStyles},"CV")),/*#__PURE__*/index_js_default().createElement(BrandLink,{to:"/"},/*#__PURE__*/index_js_default().createElement(BrandTitle,null,siteTitle))));Header.propTypes={siteTitle:(prop_types_default()).string};Header.defaultProps={siteTitle:``};/* harmony default export */ const components_Header = (Header);
;// CONCATENATED MODULE: ./src/components/Footer.js
const Container=styled_components_esm["default"].footer.withConfig({displayName:"Footer__Container",componentId:"sc-kxa5a7-0"})(["max-width:960px;margin-right:auto;margin-left:auto;background-color:",";border-top:1px solid ",";padding:1rem;text-align:center;@media print{display:none !important;}"],({theme})=>theme.backgroundPrimary,({theme})=>theme.borderSecondary);Container.defaultProps={theme:{backgroundPrimary:'#fff',borderSecondary:'#000'}};const Footer=({author})=>/*#__PURE__*/index_js_default().createElement(Container,null,/*#__PURE__*/index_js_default().createElement("span",null,"\xA9 ",new Date().getFullYear()," \u2022 ",author,". All rights reserved."));Footer.propTypes={author:(prop_types_default()).string};/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/components/Layout.js
const GlobalStyle=(0,styled_components_esm.createGlobalStyle)(["html{height:100%;}body{height:100%;background-color:",";}"],({theme})=>theme.backgroundSecondary||'#fff');const PageContainer=styled_components_esm["default"].main.withConfig({displayName:"Layout__PageContainer",componentId:"sc-5q8dxh-0"})(["width:100%;max-width:960px;margin:auto;background-color:",";overflow:hidden;"],({theme})=>theme.backgroundPrimary);PageContainer.defaultProps={theme:{backgroundPrimary:'#fff'}};const Layout=({children})=>{const{site,markdownRemark}=(0,gatsby_browser_entry.useStaticQuery)("812306126");const{phone,title,address,url}=site.siteMetadata;const about=markdownRemark.html;return/*#__PURE__*/index_js_default().createElement(styled_components_esm.ThemeProvider,{theme:utils_theme},/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(components_Header,{siteTitle:title}),/*#__PURE__*/index_js_default().createElement(PrintHeader,{siteTitle:title,phone:phone,address:address,url:url,about:about}),/*#__PURE__*/index_js_default().createElement(PageContainer,null,children),/*#__PURE__*/index_js_default().createElement(components_Footer,{author:site.siteMetadata.author}),/*#__PURE__*/index_js_default().createElement(GlobalStyle,null)));};Layout.propTypes={children:(prop_types_default()).node.isRequired};/* harmony default export */ const components_Layout = (Layout);

/***/ }),

/***/ 1755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1835);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4593);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
function SEO({description,lang,meta,keywords,title}){const{site}=(0,gatsby__WEBPACK_IMPORTED_MODULE_2__.useStaticQuery)("63159454");const metaDescription=description||site.siteMetadata.description;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__.Helmet,{htmlAttributes:{lang},title:title,titleTemplate:`%s | ${site.siteMetadata.title}`,meta:[{name:`description`,content:metaDescription},{property:`og:title`,content:title},{property:`og:description`,content:metaDescription},{property:`og:type`,content:`website`}].concat(keywords.length>0?{name:`keywords`,content:keywords.join(`, `)}:[]).concat(meta)});}SEO.defaultProps={lang:`en`,meta:[],keywords:[]};SEO.propTypes={description:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),lang:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),meta:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().array),keywords:prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_3___default().string)),title:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);

/***/ }),

/***/ 1139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ work)
});

// EXTERNAL MODULE: external "/Users/kqdj771/hack/micnil.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1835);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/components/Layout.js + 4 modules
var Layout = __webpack_require__(2008);
// EXTERNAL MODULE: ./src/components/Seo.js
var Seo = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/components/work/PostHeader.js
const Tag=styled_components_esm["default"].span.withConfig({displayName:"PostHeader__Tag",componentId:"sc-enkxia-0"})(["color:",";text-transform:uppercase;font-style:italic;font-size:0.8em;"],({theme})=>theme.textSecondary||'#888');const Header=styled_components_esm["default"].header.withConfig({displayName:"PostHeader__Header",componentId:"sc-enkxia-1"})(["display:flex;flex-direction:row;justify-content:space-between;h3{margin-bottom:0em;}"]);const Subtitle=styled_components_esm["default"].em.withConfig({displayName:"PostHeader__Subtitle",componentId:"sc-enkxia-2"})(["color:",";"],({theme})=>theme.textSecondary||'#888');const TagList=({children})=>/*#__PURE__*/index_js_default().createElement("div",null,children.map((tag,i)=>/*#__PURE__*/index_js_default().createElement(Tag,{key:tag},tag,i<children.length-1&&',  ')));function PostHeader({title,tags,year}){return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Header,null,/*#__PURE__*/index_js_default().createElement("h3",null,title),/*#__PURE__*/index_js_default().createElement(TagList,null,tags)),/*#__PURE__*/index_js_default().createElement(Subtitle,null,"Started: ",year));}PostHeader.propTypes={title:(prop_types_default()).string,tags:prop_types_default().arrayOf((prop_types_default()).string),year:(prop_types_default()).number};/* harmony default export */ const work_PostHeader = (PostHeader);
// EXTERNAL MODULE: ./src/components/Content.js
var Content = __webpack_require__(3031);
;// CONCATENATED MODULE: ./src/components/work/WorkContent.js
const WorkContent=(0,styled_components_esm["default"])(Content/* HTMLContent */.p).withConfig({displayName:"WorkContent",componentId:"sc-rqziof-0"})(["margin-top:0.5em;a + em{display:block;text-align:center;}iframe{display:block;margin:auto;margin-bottom:1em;}"]);/* harmony default export */ const work_WorkContent = (WorkContent);
// EXTERNAL MODULE: ./node_modules/gatsby-image/index.js
var gatsby_image = __webpack_require__(6162);
;// CONCATENATED MODULE: ./src/components/BorderlessButton.js
const StyledBorderlessButton=styled_components_esm["default"].button.withConfig({displayName:"BorderlessButton__StyledBorderlessButton",componentId:"sc-1919ln0-0"})(["color:",";align-self:flex-start;font-family:inherit;font-size:100%;margin:0;border:none;background:none;cursor:pointer;"],({theme})=>theme.textAccent);StyledBorderlessButton.defaultProps={theme:{textAccent:'teal'}};const BorderlessButton=({children,onClick})=>{return/*#__PURE__*/index_js_default().createElement(StyledBorderlessButton,{onClick:onClick},children);};BorderlessButton.propTypes={onClick:(prop_types_default()).func};/* harmony default export */ const components_BorderlessButton = (BorderlessButton);
;// CONCATENATED MODULE: ./src/components/work/Excerpt.js
const Column=styled_components_esm["default"].div.withConfig({displayName:"Excerpt__Column",componentId:"sc-egjott-0"})(["display:flex;flex-direction:column;"]);const Row=styled_components_esm["default"].div.withConfig({displayName:"Excerpt__Row",componentId:"sc-egjott-1"})(["display:flex;flex-direction:row;"]);const ColumnWithSpaceBetween=(0,styled_components_esm["default"])(Column).withConfig({displayName:"Excerpt__ColumnWithSpaceBetween",componentId:"sc-egjott-2"})(["justify-content:space-between;flex:3;"]);function Excerpt({title,content,thumbnail,tags,onClickReadMore,startYear}){return/*#__PURE__*/index_js_default().createElement(Column,null,/*#__PURE__*/index_js_default().createElement(work_PostHeader,{title:title,tags:tags,year:startYear}),/*#__PURE__*/index_js_default().createElement(Row,null,/*#__PURE__*/index_js_default().createElement(ColumnWithSpaceBetween,null,/*#__PURE__*/index_js_default().createElement(work_WorkContent,{content:content}),/*#__PURE__*/index_js_default().createElement(components_BorderlessButton,{onClick:onClickReadMore},"Read more")),thumbnail&&/*#__PURE__*/index_js_default().createElement(gatsby_image/* default */.Z,{style:{flex:'1'},fluid:thumbnail.childImageSharp.fluid})));}Excerpt.propTypes={title:(prop_types_default()).string,content:(prop_types_default()).string,thumbnail:(prop_types_default()).object,tags:prop_types_default().arrayOf((prop_types_default()).string),onClickReadMore:(prop_types_default()).func,startYear:(prop_types_default()).number};/* harmony default export */ const work_Excerpt = (Excerpt);
;// CONCATENATED MODULE: ./src/components/work/Post.js
const StyledPost=styled_components_esm["default"].article.withConfig({displayName:"Post__StyledPost",componentId:"sc-1pxgb00-0"})(["border-top:1px solid rgba(25,17,34,0.075);padding:1em;@media only screen and (min-width:768px){margin:2em;border-radius:4px;box-shadow:rgba(25,17,34,0.075) 0px 3px 10px;}"]);const Post=({title,tags,year,content,excerpt,thumbnail})=>{const{0:readMore,1:setReadMore}=(0,index_js_.useState)(false);const postElement=(0,index_js_.useRef)(null);return/*#__PURE__*/index_js_default().createElement(StyledPost,{ref:postElement},readMore?/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(work_PostHeader,{title:title,tags:tags,year:year}),/*#__PURE__*/index_js_default().createElement(work_WorkContent,{content:content}),/*#__PURE__*/index_js_default().createElement(components_BorderlessButton,{onClick:()=>{setReadMore(false);postElement.current.scrollIntoView({behavior:'smooth'});}},"Read less")):/*#__PURE__*/index_js_default().createElement(work_Excerpt,{title:title,content:excerpt,thumbnail:thumbnail,tags:tags,startYear:year,onClickReadMore:()=>setReadMore(true)}));};Post.propTypes={title:(prop_types_default()).string,content:(prop_types_default()).string,excerpt:(prop_types_default()).string,thumbnail:(prop_types_default()).object,tags:prop_types_default().arrayOf((prop_types_default()).string),year:(prop_types_default()).number};/* harmony default export */ const work_Post = (Post);
;// CONCATENATED MODULE: ./src/pages/work.js
const PageHeader=styled_components_esm["default"].div.withConfig({displayName:"work__PageHeader",componentId:"sc-73kdvf-0"})(["margin:2em;"]);const WorkPage=({data})=>{const posts=data.allMarkdownRemark.edges.map(edge=>{const{node}=edge;return/*#__PURE__*/index_js_default().createElement(work_Post,{key:node.fileAbsolutePath,filePath:node.fileAbsolutePath,title:node.frontmatter.title,tags:node.frontmatter.tags,year:node.frontmatter.start,content:node.html,excerpt:node.excerpt,thumbnail:node.frontmatter.thumbnail});});return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Seo/* default */.Z,{title:"Work",keywords:['portfolio','work','projects']}),/*#__PURE__*/index_js_default().createElement(PageHeader,null,/*#__PURE__*/index_js_default().createElement("h4",null,' ',"Presenting a selection of projects I am, or have been, working on.")),posts);};const query="4169005565";/* harmony default export */ const work = (WorkPage);

/***/ }),

/***/ 434:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3212:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ })

};
;
//# sourceMappingURL=component---src-pages-work-js.js.map