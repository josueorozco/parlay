webpackJsonp([1],{"./app/containers/NotFoundPage/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,o,r){var a=t&&t.defaultProps,u=arguments.length-3;if(n||0===u||(n={}),n&&a)for(var i in a)void 0===n[i]&&(n[i]=a[i]);else n||(n=a||{});if(1===u)n.children=r;else if(u>1){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+3];n.children=s}return{$$typeof:e,type:t,key:void 0===o?null:""+o,ref:null,props:n,_owner:null}}}(),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("./node_modules/react/react.js"),f=o(l),c=n("./node_modules/react-intl/lib/index.es.js"),p=n("./app/containers/NotFoundPage/messages.js"),d=o(p),y=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),s(t,[{key:"render",value:function(){return i("h1",{},void 0,f.default.createElement(c.FormattedMessage,d.default.header))}}]),t}(f.default.PureComponent);t.default=y},"./app/containers/NotFoundPage/messages.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("./node_modules/react-intl/lib/index.es.js");t.default=(0,o.defineMessages)({header:{id:"app.components.NotFoundPage.header",defaultMessage:"This is NotFoundPage component !"}})}});