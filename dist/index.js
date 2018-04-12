"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTouchClass = exports.default = void 0;
var isTouch = 'ontouchstart' in document.documentElement || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
var _default = isTouch;
exports.default = _default;

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

exports.setTouchClass = setTouchClass;