"use strict";(self.webpackChunkdocumentations=self.webpackChunkdocumentations||[]).push([[9884],{9613:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=m(n),c=r,k=s["".concat(l,".").concat(c)]||s[c]||u[c]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5006:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u}});var a=n(5443),r=n(3010),i=(n(9496),n(9613)),o=["components"],p={id:"mapping",title:"Mapping",sidebar_label:"Mapping",sidebar_position:2},l=void 0,m={unversionedId:"fundamentals/mapping",id:"fundamentals/mapping",title:"Mapping",description:"Mapping",source:"@site/docs/fundamentals/mapping.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/mapping",permalink:"/docs/fundamentals/mapping",draft:!1,editUrl:"https://github.com/nartc/mapper/tree/main/packages/documentations/docs/fundamentals/mapping.mdx",tags:[],version:"current",lastUpdatedBy:"Chau Tran",lastUpdatedAt:1656654741,formattedLastUpdatedAt:"7/1/2022",sidebarPosition:2,frontMatter:{id:"mapping",title:"Mapping",sidebar_label:"Mapping",sidebar_position:2},sidebar:"docs",previous:{title:"Mapper",permalink:"/docs/fundamentals/mapper"},next:{title:"Naming Conventions",permalink:"/docs/fundamentals/naming-convention"}},d={},u=[{value:"Mapping",id:"mapping",level:2},{value:"MappingProperty",id:"mappingproperty",level:2},{value:"MappingTransformation",id:"mappingtransformation",level:2}],s={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mapping"},"Mapping"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mapping")," is a contract between a ",(0,i.kt)("inlineCode",{parentName:"p"},"Source")," model and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")," model. ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping")," is created by invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"createMap()"),". Within a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapper"),", a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapping")," is ",(0,i.kt)("strong",{parentName:"p"},"unidirectional")," and ",(0,i.kt)("strong",{parentName:"p"},"unique"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"createMap(mapper, Source, Destination); // Mapping<Source, Destination>\ncreateMap(mapper, Destination, Source); // Mapping<Destination, Source>\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"We can also create a Mapping between the same model (identifier). Read more about ",(0,i.kt)("a",{parentName:"p",href:"../misc/self-mapping"},"Self Mapping")))),(0,i.kt)("h2",{id:"mappingproperty"},"MappingProperty"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MappingProperty")," is a set of information about a particular property on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Destination")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Property path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#mappingtransformation"},"MappingTransformation")," of that property"),(0,i.kt)("li",{parentName:"ul"},"Nested metadata modifier of the property and its counterpart on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Source")," (e.g: ",(0,i.kt)("inlineCode",{parentName:"li"},"Bio#birthday")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"Date"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BioDto#birthday")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"String"),". So the data stored on ",(0,i.kt)("inlineCode",{parentName:"li"},"MappingProperty")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"[String, Date]"),")")),(0,i.kt)("h2",{id:"mappingtransformation"},"MappingTransformation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MappingTransformation")," is the instruction of how ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapper")," should map the property. ",(0,i.kt)("inlineCode",{parentName:"p"},"MappingTransformation")," operates based on different types of ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformationType")),(0,i.kt)("p",null,"There are currently 10 ",(0,i.kt)("inlineCode",{parentName:"p"},"TransformationType")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"member map function"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ignore"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ignore()")),(0,i.kt)("td",{parentName:"tr",align:null},"Ignore a member on the ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MapFrom"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapFrom()")),(0,i.kt)("td",{parentName:"tr",align:null},"Customize instruction for a member with a ",(0,i.kt)("inlineCode",{parentName:"td"},"Selector")," or a ",(0,i.kt)("a",{parentName:"td",href:"../mapping-configuration/for-member/map-from#value-resolver"},"Resolver"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Condition"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"condition()")),(0,i.kt)("td",{parentName:"tr",align:null},"If the member on the ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination")," matches with another member on the ",(0,i.kt)("inlineCode",{parentName:"td"},"Source"),", this will conditionally map the member on the ",(0,i.kt)("inlineCode",{parentName:"td"},"Source")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination")," if some predicate is evaluated to truthy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FromValue"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fromValue()")),(0,i.kt)("td",{parentName:"tr",align:null},"Map a raw value to the member")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MapWith"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapWith()")),(0,i.kt)("td",{parentName:"tr",align:null},"In some cases where nested models do not work automatically, this is to specify the nested ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination")," of the member as well as the nested ",(0,i.kt)("inlineCode",{parentName:"td"},"Source"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ConvertUsing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"convertUsing()")),(0,i.kt)("td",{parentName:"tr",align:null},"Map a member using ",(0,i.kt)("a",{parentName:"td",href:"../mapping-configuration/for-member/convert-using"},"Converters"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MapInitialize"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapInitialize()")),(0,i.kt)("td",{parentName:"tr",align:null},"This is used internally to initialize the ",(0,i.kt)("inlineCode",{parentName:"td"},"MappingProperty")," with the ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination")," metadata")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"NullSubstitution"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"nullSubstitution()")),(0,i.kt)("td",{parentName:"tr",align:null},"If the member on ",(0,i.kt)("inlineCode",{parentName:"td"},"Source")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"null"),", this will substitute the ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," value with a different value for that member on ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"UndefinedSubstitution"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefinedSubstitution()")),(0,i.kt)("td",{parentName:"tr",align:null},"If the member on ",(0,i.kt)("inlineCode",{parentName:"td"},"Source")," is ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined"),", this will substitute the ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," value with a different value for that member on ",(0,i.kt)("inlineCode",{parentName:"td"},"Destination"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MapWithArguments"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapWithArguments()")),(0,i.kt)("td",{parentName:"tr",align:null},"This can be used to map with extra arguments where the arguments come in at runtime when ",(0,i.kt)("inlineCode",{parentName:"td"},"map()")," is invoked")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MapDefer"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"mapDefer()")),(0,i.kt)("td",{parentName:"tr",align:null},"This can be used to defer a ",(0,i.kt)("inlineCode",{parentName:"td"},"TransformationType")," with the ",(0,i.kt)("inlineCode",{parentName:"td"},"Source"),". For example, if ",(0,i.kt)("inlineCode",{parentName:"td"},"Source")," has data A, we want ",(0,i.kt)("inlineCode",{parentName:"td"},"MapFrom")," but if ",(0,i.kt)("inlineCode",{parentName:"td"},"Source")," has B, we want to ",(0,i.kt)("inlineCode",{parentName:"td"},"Ignore"))))))}c.isMDXComponent=!0}}]);