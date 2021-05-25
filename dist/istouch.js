(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.istouch = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setTouchClass = _exports["default"] = void 0;
  // prettier-ignore
  var isTouch = 'ontouchstart' in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
  var _default = isTouch;
  _exports["default"] = _default;

  var setTouchClass = function setTouchClass() {
    var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.documentElement;
    var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      touch: 'touch',
      notouch: 'no-touch'
    };

    if (isTouch) {
      el.classList.remove(classNames.notouch);
      el.classList.add(classNames.touch);
    } else {
      el.classList.remove(classNames.touch);
      el.classList.add(classNames.notouch);
    }
  };

  _exports.setTouchClass = setTouchClass;
});
