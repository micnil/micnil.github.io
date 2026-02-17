"use strict";
exports.id = 576;
exports.ids = [576];
exports.modules = {

/***/ 3031:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 5606:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cv)
});

// EXTERNAL MODULE: external "/Users/kqdj771/hack/micnil.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(1835);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js + 4 modules
var Layout = __webpack_require__(2008);
// EXTERNAL MODULE: ./src/components/Seo.js
var Seo = __webpack_require__(1755);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.esm.js + 4 modules
var styled_components_esm = __webpack_require__(1650);
// EXTERNAL MODULE: ./src/components/Content.js
var Content = __webpack_require__(3031);
;// CONCATENATED MODULE: ./src/components/cv/Section.js
const CvSection=styled_components_esm["default"].section.withConfig({displayName:"Section__CvSection",componentId:"sc-ie1wtg-0"})(["padding:0.9em;h2{text-transform:capitalize;@media print{font-size:22px;margin-bottom:0.5em;}}@media print{padding:0em 0.9em 1.7em 0.9em;page-break-inside:avoid;:last-child{padding:0em;}:first-child{margin-top:1em;}}@media only screen and (min-width:768px){padding:1.5em;}"]);const CvRow=styled_components_esm["default"].div.withConfig({displayName:"Section__CvRow",componentId:"sc-ie1wtg-1"})(["display:flex;"]);const CvYear=styled_components_esm["default"].div.attrs(()=>({'data-testid':'year'})).withConfig({displayName:"Section__CvYear",componentId:"sc-ie1wtg-2"})(["display:flex;flex-direction:column;flex:1;color:",";@media print{font-size:15px;}"],({theme})=>theme.textSecondary);CvYear.defaultProps={theme:{borderSecondary:'#000',textSecondary:'#888'}};const BorderBox=styled_components_esm["default"].div.withConfig({displayName:"Section__BorderBox",componentId:"sc-ie1wtg-3"})(["flex:6;padding-left:0.5em;border-left:1px solid ",";"],({theme})=>theme.borderSecondary);const CvContent=(0,styled_components_esm["default"])(Content/* HTMLContent */.p).attrs(()=>({'data-testid':'content'})).withConfig({displayName:"Section__CvContent",componentId:"sc-ie1wtg-4"})(["margin-bottom:10px;& p{margin-bottom:0px;}& li{margin-bottom:0px;}@media print{flex:6;& p{font-size:16px;}& li{font-size:16px;}& a{text-decoration:inherit;color:inherit;font-weight:inherit;}}"]);function compareDates(a,b){return new Date(b.start)-new Date(a.start);}function entryRenderer(entry){const dateOptionsMonthYear={month:'short',year:'numeric'};const dateOptionsyear={year:'numeric'};const isRange=entry.end!==entry.start;const isCurrent=!entry.end;let startLabel=null;let endLabel=null;const dateOptions=entry.start.length>4?dateOptionsMonthYear:dateOptionsyear;startLabel=new Date(entry.start).toLocaleString('en-En',dateOptions);startLabel+=isCurrent||isRange?'–':'';endLabel=isCurrent?'Present':isRange?new Date(entry.end).toLocaleString('en-En',dateOptions):null;return/*#__PURE__*/index_js_default().createElement(CvRow,{key:entry.filePath},/*#__PURE__*/index_js_default().createElement(CvYear,null,/*#__PURE__*/index_js_default().createElement("span",null,startLabel),/*#__PURE__*/index_js_default().createElement("span",null,endLabel)),/*#__PURE__*/index_js_default().createElement(BorderBox,null,/*#__PURE__*/index_js_default().createElement(CvContent,{content:entry.content})));}function simpleEntryRenderer(entry){return/*#__PURE__*/index_js_default().createElement(CvContent,{key:entry.filePath,content:entry.content});}const Section=({section,entries,entryRenderer})=>{const rows=[...entries].sort(compareDates).map(entry=>{return entryRenderer(entry);});return/*#__PURE__*/index_js_default().createElement(CvSection,{key:section},/*#__PURE__*/index_js_default().createElement("h2",null,section),rows);};const SectionWithoutYear=props=>{return/*#__PURE__*/index_js_default().createElement(Section,Object.assign({},props,{entryRenderer:simpleEntryRenderer}));};const SectionWithYear=props=>{return/*#__PURE__*/index_js_default().createElement(Section,Object.assign({},props,{entryRenderer:entryRenderer}));};const entryPropTypes={filePath:(prop_types_default()).string,start:(prop_types_default()).string,end:(prop_types_default()).string,content:(prop_types_default()).string};const sectionPropTypes={section:(prop_types_default()).string,entries:prop_types_default().arrayOf(prop_types_default().shape(entryPropTypes))};SectionWithoutYear.propTypes=sectionPropTypes;SectionWithYear.propTypes=sectionPropTypes;Section.propTypes={...sectionPropTypes,entryRenderer:(prop_types_default()).func};/* harmony default export */ const cv_Section = ((/* unused pure expression or super */ null && (Section)));
;// CONCATENATED MODULE: ./src/pages/cv.js
const CvPage=({data})=>{let cvMap={};let listMap={};for(const edge of data.allMarkdownRemark.edges){let mapToUpdate=edge.node.frontmatter.type==='list'?listMap:cvMap;const section=edge.node.frontmatter.section;const entry={...edge.node.frontmatter,content:edge.node.html,filePath:edge.node.fileAbsolutePath};mapToUpdate[section]=mapToUpdate[section]||[];mapToUpdate[section]=[...mapToUpdate[section],entry];}const sections=Object.entries(cvMap).map(([section,entries])=>/*#__PURE__*/index_js_default().createElement(SectionWithYear,{key:section,section:section,entries:entries}));const lists=Object.entries(listMap).map(([section,entries])=>/*#__PURE__*/index_js_default().createElement(SectionWithoutYear,{key:section,section:section,entries:entries}));return/*#__PURE__*/index_js_default().createElement(Layout/* default */.Z,null,/*#__PURE__*/index_js_default().createElement(Seo/* default */.Z,{title:"CV",keywords:['portfolio','cv']}),sections,lists);};const query="3607151626";/* harmony default export */ const cv = (CvPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-cv-js.js.map