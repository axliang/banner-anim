webpackJsonp([8],{

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(91);


/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rc_banner_anim__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rc_queue_anim__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rc_tween_one__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_index_less__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_index_less__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__assets_index_less__);





// use jsx to render html, do not modify simple.html








var animType = __WEBPACK_IMPORTED_MODULE_5_rc_banner_anim__["a" /* default */].animType,
    setAnimCompToTagComp = __WEBPACK_IMPORTED_MODULE_5_rc_banner_anim__["a" /* default */].setAnimCompToTagComp;


animType.custom = function (elem, type, direction, animData) {
  console.log('custom animType, type:' + type); // eslint-disable-line no-console
  var _y = void 0;
  var props = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, elem.props);
  var children = props.children;
  if (type === 'enter') {
    _y = direction === 'next' ? '100%' : '-100%';
  } else {
    _y = direction === 'next' ? '-10%' : '10%';
    children = __WEBPACK_IMPORTED_MODULE_8_react___default.a.Children.toArray(children).map(setAnimCompToTagComp);
  }
  return __WEBPACK_IMPORTED_MODULE_8_react___default.a.cloneElement(elem, __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, props, {
    animation: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, animData, {
      y: _y,
      type: type === 'enter' ? 'from' : 'to'
    })
  }), children);
};

var Element = __WEBPACK_IMPORTED_MODULE_5_rc_banner_anim__["a" /* default */].Element;

var BgElement = Element.BgElement;

var Demo = function (_React$Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(Demo, _React$Component);

  function Demo() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Demo);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, (Demo.__proto__ || Object.getPrototypeOf(Demo)).apply(this, arguments));
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Demo, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_rc_banner_anim__["a" /* default */],
        { type: 'custom' },
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          Element,
          { key: 'aaa',
            prefixCls: 'banner-user-elem'
          },
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(BgElement, {
            key: 'bg',
            className: 'bg',
            style: {
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/IhCNTqPpLeTNnwr.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          }),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_rc_queue_anim__["a" /* default */],
            { name: 'QueueAnim' },
            __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
              'h1',
              { key: 'h1' },
              'Ant Motion Demo'
            ),
            __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
              'p',
              { key: 'p' },
              'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_rc_tween_one__["a" /* default */],
            { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
            'Ant Motion Demo.Ant Motion Demo'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
          Element,
          { key: 'bbb',
            prefixCls: 'banner-user-elem'
          },
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(BgElement, {
            key: 'bg',
            className: 'bg',
            style: {
              backgroundImage: 'url(https://os.alipayobjects.com/rmsportal/uaQVvDrCwryVlbb.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }
          }),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_rc_queue_anim__["a" /* default */],
            { name: 'QueueAnim' },
            __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
              'h1',
              { key: 'h1' },
              'Ant Motion Demo'
            ),
            __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
              'p',
              { key: 'p' },
              'Ant Motion Demo.Ant Motion Demo.Ant Motion Demo.Ant Motion Demo'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_7_rc_tween_one__["a" /* default */],
            { animation: { y: 50, opacity: 0, type: 'from', delay: 200 }, name: 'TweenOne' },
            'Ant Motion Demo.Ant Motion Demo'
          )
        )
      );
    }
  }]);

  return Demo;
}(__WEBPACK_IMPORTED_MODULE_8_react___default.a.Component);

__WEBPACK_IMPORTED_MODULE_9_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_8_react___default.a.createElement(Demo, null), document.getElementById('__react-content'));

/***/ })

},[181]);
//# sourceMappingURL=customAnimType.js.map