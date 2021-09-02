(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[6],{960:function(e,t,n){e.exports={input:"Input_input__Ysc6v",decorator:"Input_decorator__3rzsA",inputHighlight:"Input_inputHighlight__2n5sm",iconBefore:"Input_iconBefore__1UWjn",iconAfter:"Input_iconAfter__1sW0K",small:"Input_small__2VA6C",multiline:"Input_multiline__MYDnI",decoratorIcon:"Input_decoratorIcon__IAyt-",invalid:"Input_invalid__KQdnm",invalidTooltip:"Input_invalidTooltip__TzgBO"}},971:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"calcAriaLabel",{enumerable:!0,get:function(){return g.calcAriaLabel}}),Object.defineProperty(t,"extractInputProps",{enumerable:!0,get:function(){return g.extractInputProps}}),t.InputBase=t.Input=t.default=void 0;var r=y(n(378)),o=n(385),u=n(951),a=y(n(968)),i=y(n(934)),c=y(n(34)),l=y(n(939)),s=y(n(383)),p=y(n(967)),f=n(978),d=y(n(960)),v=y(n(979)),b=y(n(980)),g=n(982),h=n(3);function y(e){return e&&e.__esModule?e:{default:e}}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){P(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var w=(0,r.default)({name:"Input",propTypes:{css:c.default.object,"data-webos-voice-group-label":c.default.string,"data-webos-voice-intent":c.default.string,"data-webos-voice-label":c.default.string,disabled:c.default.bool,dismissOnEnter:c.default.bool,iconAfter:c.default.string,iconBefore:c.default.string,invalid:c.default.bool,invalidMessage:c.default.string,onBlur:c.default.func,onChange:c.default.func,onClick:c.default.func,onFocus:c.default.func,onKeyDown:c.default.func,placeholder:c.default.string,rtl:c.default.bool,size:c.default.string,type:c.default.string,value:c.default.oneOfType([c.default.string,c.default.number])},defaultProps:{disabled:!1,dismissOnEnter:!1,invalid:!1,placeholder:"",size:"small",type:"text"},styles:{css:d.default,className:"decorator",publicClassNames:["decorator","input","inputHighlight"]},handlers:{onChange:function(e,t){var n=t.onChange;n&&n({value:e.target.value})}},computed:{"aria-label":function(e){var t=e.placeholder,n=e.type,r=e.value,o=null==r||""===r?t:"";return(0,g.calcAriaLabel)(o,n,r)},className:function(e){var t=e.invalid,n=e.size;return e.styler.append({invalid:t},n)},dir:function(e){var t=e.value,n=e.placeholder;return(0,u.isRtlText)(t||n)?"rtl":"ltr"},invalidTooltip:function(e){var t=e.css,n=e.invalid,r=e.invalidMessage,o=void 0===r?(0,l.default)("Please enter a valid value."):r,u=e.rtl;if(n&&o){var a=u?"left":"right";return(0,h.jsx)(p.default,{arrowAnchor:"top",className:t.invalidTooltip,direction:a,children:o})}},value:function(e){var t=e.value;return"number"===typeof t?t:t||""}},render:function(e){var t=e.css,n=e.dir,r=e.disabled,o=e.iconAfter,u=e.iconBefore,a=e.invalidTooltip,i=e.onChange,c=e.placeholder,l=e.size,s=e.type,p=e.value,d=j(e,["css","dir","disabled","iconAfter","iconBefore","invalidTooltip","onChange","placeholder","size","type","value"]),b=(0,g.extractInputProps)(d),y=(0,f.extractVoiceProps)(d);return delete d.dismissOnEnter,delete d.invalid,delete d.invalidMessage,delete d.rtl,(0,h.jsxs)("div",m(m({},d),{},{disabled:r,children:[(0,h.jsx)(v.default,{position:"before",size:l,children:u}),(0,h.jsx)("span",{className:t.inputHighlight,children:p||c}),(0,h.jsx)("input",m(m(m({},b),y),{},{"aria-disabled":r,className:t.input,dir:n,disabled:r,onChange:i,placeholder:c,tabIndex:-1,type:s,value:p})),(0,h.jsx)(v.default,{position:"after",size:l,children:o}),a]}))}});t.InputBase=w;var _=(0,i.default)((0,o.I18nContextDecorator)({rtlProp:"rtl"},(0,a.default)((0,b.default)((0,s.default)(w)))));t.Input=_;var D=_;t.default=D},978:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractVoiceProps=void 0;t.extractVoiceProps=function(e){var t={};return Object.keys(e).forEach((function(n){0===n.indexOf("data-webos-voice-")&&(t[n]=e[n],delete e[n])})),t}},979:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InputDecoratorIconBase=t.InputDecoratorIcon=t.default=void 0;var r=l(n(378)),o=l(n(935)),u=l(n(34)),a=l(n(953)),i=l(n(960)),c=n(3);function l(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var v=(0,r.default)({name:"InputDecoratorIcon",propTypes:{position:u.default.oneOf(["before","after"]).isRequired,children:u.default.oneOfType([u.default.string,u.default.object])},styles:{css:i.default,className:"decoratorIcon"},computed:{className:function(e){var t=e.position;return e.styler.append("icon"+("before"===t?"Before":"After"))}},render:function(e){var t=e.children,n=d(e,["children"]);return delete n.position,t?(0,c.jsx)(a.default,p(p({},n),{},{children:t})):null}});t.InputDecoratorIconBase=v;var b=(0,o.default)(["children","small"])(v);t.InputDecoratorIcon=b;var g=b;t.default=g},980:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InputSpotlightDecorator=t.default=void 0;var r=n(93),o=d(n(51)),u=n(94),a=n(257),i=d(n(395)),c=d(n(157)),l=d(n(34)),s=n(2),p=n(981),f=n(3);function d(e){return e&&e.__esModule?e:{default:e}}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=j(e);if(t){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?P(e):t}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var w=function(e){return e.currentTarget!==e.target},_=/text|password|search|tel|url/,D=function(e,t){return!_.test(e.type)||e.selectionStart===t},I=(0,r.handle)((0,r.forwardWithPrevent)("onKeyDown"),(0,r.call)("onKeyDown")),T=(0,o.default)({noLockPointer:!1},(function(e,t){var n,o,d=e.noLockPointer,v=(0,c.default)({emulateMouse:!1},t),g=(0,r.forward)("onBlur"),m=(0,r.forward)("onMouseDown"),j=(0,r.forward)("onFocus"),_=(0,r.forward)("onKeyUp");return o=n=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(l,e);var t,n,o,c=O(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).updateFocus=function(e){!t.state.node||a.Spotlight.getCurrent()===t.state.node||!t.paused.isPaused()&&a.Spotlight.isPaused()||t.state.node.focus(),t.state.focused!==e.focused&&("input"===t.state.focused?((0,r.forward)("onActivate",{type:"onActivate"},t.props),d||(0,p.lockPointer)(t.state.node),t.paused.pause()):"input"===e.focused&&((0,r.forward)("onDeactivate",{type:"onDeactivate"},t.props),d||(0,p.releasePointer)(e.node),t.paused.resume()))},t.focus=function(e,n){t.setState({focused:e,node:n})},t.blur=function(){t.setState((function(e){return e.focused||e.node?{focused:null,node:null}:null}))},t.focusDecorator=function(e){t.focus("decorator",e)},t.focusInput=function(e){t.focus("input",e.querySelector("input"))},t.onBlur=function(e){t.props.autoFocus?w(e)&&("input"===t.state.focused&&t.state.node===e.target&&e.currentTarget!==e.relatedTarget?(t.blur(),g(e,t.props)):(t.focusDecorator(e.currentTarget),e.stopPropagation(),t.blur())):w(e)?a.Spotlight.getPointerMode()?(t.blur(),g(e,t.props)):(t.focusDecorator(e.currentTarget),e.stopPropagation()):e.currentTarget.contains(e.relatedTarget)||(g(e,t.props),t.blur())},t.onMouseDown=function(e){var n=t.props,r=n.disabled,o=n.spotlightDisabled;t.setDownTarget(e),r||o||t.focusInput(e.currentTarget),m(e,t.props)},t.onFocus=function(e){j(e,t.props),w(e)||!t.props.autoFocus||null!==t.state.focused||a.Spotlight.getPointerMode()||(t.focusInput(e.currentTarget),e.stopPropagation())},t.onKeyUp=function(e){var n=t.props.dismissOnEnter,r=e.currentTarget,o=e.keyCode;e.target===t.downTarget&&(t.downTarget=null,"input"===t.state.focused&&n&&(0,u.is)("enter",o)?(t.focusDecorator(r),e.preventDefault()):"input"!==t.state.focused&&(0,u.is)("enter",o)&&t.focusInput(r)),_(e,t.props)},t.state={focused:null,node:null},t.paused=new i.default("InputSpotlightDecorator"),t.handleKeyDown=I.bind(P(t)),t}return t=l,(n=[{key:"componentDidUpdate",value:function(e,t){this.updateFocus(t)}},{key:"componentWillUnmount",value:function(){if(this.paused.resume(),"input"===this.state.focused){var e=this.props.onSpotlightDisappear;e&&e(),d||(0,p.releasePointer)(this.state.node)}}},{key:"onKeyDown",value:function(e){var t=e.currentTarget,n=e.keyCode,o=e.target;if(this.setDownTarget(e),"input"===this.state.focused){var i=(0,u.is)("down",n),c=(0,u.is)("left",n),l=(0,u.is)("right",n),s=(0,u.is)("up",n),p=c&&D(o,0)||l&&D(o,o.value.length)||s||i;if((s||i)&&"number"===o.type&&e.preventDefault(),p){var f=(0,a.getDirection)(n),d=a.Spotlight.getPointerMode,v=a.Spotlight.move,b=a.Spotlight.setPointerMode;d()&&b(!1),(0,r.stopImmediate)(e),this.paused.resume(),v(f)?this.blur():this.focusDecorator(t)}else(c||l)&&(0,r.stopImmediate)(e)}}},{key:"setDownTarget",value:function(e){var t=e.repeat,n=e.target;t||(this.downTarget=n)}},{key:"render",value:function(){var e=Object.assign({},this.props);return delete e.autoFocus,delete e.onActivate,delete e.onDeactivate,(0,f.jsx)(v,b(b({},e),{},{onBlur:this.onBlur,onMouseDown:this.onMouseDown,onFocus:this.onFocus,onKeyDown:this.handleKeyDown,onKeyUp:this.onKeyUp}))}}])&&h(t.prototype,n),o&&h(t,o),l}(s.Component),n.displayName="InputSpotlightDecorator",n.propTypes={autoFocus:l.default.bool,disabled:l.default.bool,dismissOnEnter:l.default.bool,onActivate:l.default.func,onDeactivate:l.default.func,onSpotlightDisappear:l.default.func,spotlightDisabled:l.default.bool},o}));t.InputSpotlightDecorator=T;var x=T;t.default=x},981:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.releasePointer=t.lockPointer=void 0;var r,o=n(93),u=!1,a=function(e){var t=e.target;return r&&t!==r},i=function(){return u&&r},c=function(e){return(0,o.returnsTrue)((function(){return u=e}))},l=(0,o.handle)(a,o.preventDefault,o.stop,c(!0)),s=(0,o.handle)(i,o.preventDefault,o.stop),p=(0,o.handle)(i,o.stop,o.preventDefault,c(!1),(function(){return r.blur()})),f=(0,o.handle)(a,o.stop,c(!0));t.lockPointer=function(e){r=e,document.addEventListener("mousedown",l,{capture:!0}),document.addEventListener("mouseup",s,{capture:!0}),document.addEventListener("touchstart",f,{capture:!0}),document.addEventListener("touchend",p,{capture:!0}),document.addEventListener("click",p,{capture:!0})};t.releasePointer=function(e){e===r&&(r=null,document.removeEventListener("mousedown",l,{capture:!0}),document.removeEventListener("mouseup",s,{capture:!0}),document.removeEventListener("touchstart",f,{capture:!0}),document.removeEventListener("touchend",p,{capture:!0}),document.removeEventListener("click",p,{capture:!0}))}},982:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.extractInputProps=t.calcAriaLabel=void 0;var r,o=(r=n(939))&&r.__esModule?r:{default:r};t.calcAriaLabel=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=(0,o.default)("Input field");if("password"===t&&n){var u=n.length>1?(0,o.default)("characters"):(0,o.default)("character");n="".concat(n.length," ").concat(u)}return"".concat(e," ").concat(n," ").concat(r)};t.extractInputProps=function(e){var t={};return Object.keys(e).forEach((function(n){switch(n){case"autoComplete":case"list":case"maxLength":case"minLength":case"pattern":case"required":case"size":t[n]=e[n],delete e[n]}})),t}}}]);
//# sourceMappingURL=6.6c8712a5.chunk.js.map