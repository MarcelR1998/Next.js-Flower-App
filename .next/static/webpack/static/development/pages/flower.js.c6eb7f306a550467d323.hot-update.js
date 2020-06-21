webpackHotUpdate("static\\development\\pages\\flower.js",{

/***/ "./pages/flower.js":
/*!*************************!*\
  !*** ./pages/flower.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Comments__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Comments */ "./components/Comments.js");
/* harmony import */ var _components_Share__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Share */ "./components/Share.js");
/* harmony import */ var _components_UserStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/UserStatus */ "./components/UserStatus.js");









var _jsxFileName = "C:\\Users\\Marcel\\Documents\\kodprojekt\\arbetsprovMarcelWillAndSkill\\pages\\flower.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Flower = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Flower, _React$Component);

  var _super = _createSuper(Flower);

  function Flower() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Flower);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      searchTerm: "",
      data: [],
      loaded: false
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Flower, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('https://flowers-mock-data.firebaseio.com/flowers.json');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                this.setState({
                  searchTerm: decodeURIComponent(window.location.search.slice(8)),
                  data: data,
                  loaded: true
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var index = null;

      if (this.state.loaded) {
        index = this.state.data.map(function (flower) {
          return flower.common_name;
        }).indexOf(this.state.searchTerm);
      }

      return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-2879659786" + " " + "centerLayout",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 17
        }
      }, __jsx(_components_UserStatus__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }
      }), this.state.data.filter(function (flower) {
        return flower.common_name == _this2.state.searchTerm;
      }).map(function (flower) {
        return __jsx("div", {
          key: flower.common_name,
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 29
          }
        }, __jsx("img", {
          src: flower.cover_image,
          alt: "",
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 33
          }
        }), __jsx("h1", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 33
          }
        }, flower.common_name), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 33
          }
        }, "Latin name: ", flower.latin_name), __jsx("p", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 33
          }
        }, flower.notes, "."), flower.sun ? __jsx("p", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 47
          }
        }, "This plant thrives in the sun.") : __jsx("p", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 87
          }
        }, "It should rather be planted in the shade."), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 33
          }
        }, "Blooming season: ", flower.blooming_season), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 33
          }
        }, "Height: ", flower.height > 1 ? __jsx("span", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 66
          }
        }, "Between ", flower.height[1].numberInt, "\" and ", flower.height[2].numberInt, "\".") : __jsx("span", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 43
          }
        }, flower.height[1].numberInt, "\"")), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 33
          }
        }, "Soil:"), __jsx("ul", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }
        }, flower.soil.map(function (item) {
          return __jsx("li", {
            key: item,
            className: "jsx-2879659786",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 41
            }
          }, __jsx("p", {
            className: "jsx-2879659786",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 45
            }
          }, item));
        })), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 33
          }
        }, "Planting depth: ", flower.depth.numberInt, "\""), __jsx("h4", {
          className: "jsx-2879659786",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 33
          }
        }, "Spacing: ", flower.spacing.numberInt, "\""), __jsx(_components_Share__WEBPACK_IMPORTED_MODULE_13__["default"], {
          flower: flower.common_name,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 33
          }
        }), __jsx(_components_Comments__WEBPACK_IMPORTED_MODULE_12__["default"], {
          index: index,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 33
          }
        }));
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "2879659786",
        __self: this
      }, "img.jsx-2879659786{max-width:100%;max-height:400px;margin-top:1em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXHBhZ2VzXFxmbG93ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERnQyxBQUd3QyxlQUNFLGlCQUNGLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXHBhZ2VzXFxmbG93ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IENvbW1lbnRzIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tbWVudHMnXHJcbmltcG9ydCBTaGFyZSBmcm9tICcuLi9jb21wb25lbnRzL1NoYXJlJ1xyXG5pbXBvcnQgVXNlclN0YXR1cyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJTdGF0dXMnO1xyXG5cclxuY2xhc3MgRmxvd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRlID0ge1xyXG4gICAgICAgIHNlYXJjaFRlcm06IFwiXCIsXHJcbiAgICAgICAgZGF0YTogW10sXHJcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9mbG93ZXJzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgc2VhcmNoVGVybTogZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoOCkpLFxyXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS5sb2FkZWQpIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGlzLnN0YXRlLmRhdGEubWFwKGZsb3dlciA9PiBmbG93ZXIuY29tbW9uX25hbWUpLmluZGV4T2YodGhpcy5zdGF0ZS5zZWFyY2hUZXJtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlckxheW91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxVc2VyU3RhdHVzIC8+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLmRhdGEuZmlsdGVyKGZsb3dlciA9PiBmbG93ZXIuY29tbW9uX25hbWUgPT0gdGhpcy5zdGF0ZS5zZWFyY2hUZXJtKS5tYXAoZmxvd2VyID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtmbG93ZXIuY29tbW9uX25hbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtmbG93ZXIuY292ZXJfaW1hZ2V9IGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntmbG93ZXIuY29tbW9uX25hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+TGF0aW4gbmFtZToge2Zsb3dlci5sYXRpbl9uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Zsb3dlci5ub3Rlc30uPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmbG93ZXIuc3VuID8gPHA+VGhpcyBwbGFudCB0aHJpdmVzIGluIHRoZSBzdW4uPC9wPiA6IDxwPkl0IHNob3VsZCByYXRoZXIgYmUgcGxhbnRlZCBpbiB0aGUgc2hhZGUuPC9wPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+Qmxvb21pbmcgc2Vhc29uOiB7Zmxvd2VyLmJsb29taW5nX3NlYXNvbn08L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhlaWdodDoge2Zsb3dlci5oZWlnaHQgPiAxID8gPHNwYW4+QmV0d2VlbiB7Zmxvd2VyLmhlaWdodFsxXS5udW1iZXJJbnR9XCIgYW5kIHtmbG93ZXIuaGVpZ2h0WzJdLm51bWJlckludH1cIi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IDxzcGFuPntmbG93ZXIuaGVpZ2h0WzFdLm51bWJlckludH1cIjwvc3Bhbj59PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U29pbDo8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zsb3dlci5zb2lsLm1hcChpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlBsYW50aW5nIGRlcHRoOiB7Zmxvd2VyLmRlcHRoLm51bWJlckludH1cIjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlNwYWNpbmc6IHtmbG93ZXIuc3BhY2luZy5udW1iZXJJbnR9XCI8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaGFyZSBmbG93ZXI9e2Zsb3dlci5jb21tb25fbmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudHMgaW5kZXg9e2luZGV4fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dlcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\pages\\\\flower.js */")));
    }
  }]);

  return Flower;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Flower);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9mbG93ZXIuanMiXSwibmFtZXMiOlsiRmxvd2VyIiwic2VhcmNoVGVybSIsImRhdGEiLCJsb2FkZWQiLCJmZXRjaCIsInJlcyIsImpzb24iLCJzZXRTdGF0ZSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJpbmRleCIsInN0YXRlIiwibWFwIiwiZmxvd2VyIiwiY29tbW9uX25hbWUiLCJpbmRleE9mIiwiZmlsdGVyIiwiY292ZXJfaW1hZ2UiLCJsYXRpbl9uYW1lIiwibm90ZXMiLCJzdW4iLCJibG9vbWluZ19zZWFzb24iLCJoZWlnaHQiLCJudW1iZXJJbnQiLCJzb2lsIiwiaXRlbSIsImRlcHRoIiwic3BhY2luZyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNNO0FBQ0pDLGdCQUFVLEVBQUUsRUFEUjtBQUVKQyxVQUFJLEVBQUUsRUFGRjtBQUdKQyxZQUFNLEVBQUU7QUFISixLOzs7Ozs7Ozs7Ozs7Ozs7dUJBT2NDLEtBQUssQ0FBQyx1REFBRCxDOzs7QUFBakJDLG1COzt1QkFDYUEsR0FBRyxDQUFDQyxJQUFKLEU7OztBQUFiSixvQjtBQUNOLHFCQUFLSyxRQUFMLENBQWM7QUFDVk4sNEJBQVUsRUFBRU8sa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLENBQUQsQ0FEcEI7QUFFVlYsc0JBQUksRUFBRUEsSUFGSTtBQUdWQyx3QkFBTSxFQUFFO0FBSEUsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFPSztBQUFBOztBQUVMLFVBQUlVLEtBQUssR0FBRyxJQUFaOztBQUVBLFVBQUksS0FBS0MsS0FBTCxD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QUFNLENBQUNhLEtBQVAsQ0FBYUgsU0FBbEMsT0FuQkosRUFvQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUFjVixNQUFNLENBQUNjLE9BQVAsQ0FBZUosU0FBN0IsT0FwQkosRUFxQkksTUFBQywwREFBRDtBQUFPLGdCQUFNLEVBQUVWLE1BQU0sQ0FBQ0MsV0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQXJCSixFQXNCSSxNQUFDLDZEQUFEO0FBQVUsZUFBSyxFQUFFSixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBdEJKLENBRG9GO0FBQUEsT0FBeEYsQ0FIUjtBQUFBO0FBQUE7QUFBQSw4MUpBREosQ0FESjtBQTBDSDs7OztFQW5FZ0JrQiw2Q0FBSyxDQUFDQyxTOztBQXNFWmhDLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmbG93ZXIuanMuYzZlYjdmMzA2YTU1MDQ2N2QzMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5pbXBvcnQgQ29tbWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9Db21tZW50cydcclxuaW1wb3J0IFNoYXJlIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmUnXHJcbmltcG9ydCBVc2VyU3RhdHVzIGZyb20gJy4uL2NvbXBvbmVudHMvVXNlclN0YXR1cyc7XHJcblxyXG5jbGFzcyBGbG93ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgc2VhcmNoVGVybTogXCJcIixcclxuICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2Zsb3dlcnMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBzZWFyY2hUZXJtOiBkZWNvZGVVUklDb21wb25lbnQod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zbGljZSg4KSksXHJcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlLmxvYWRlZCkge1xyXG4gICAgICAgICAgICBpbmRleCA9IHRoaXMuc3RhdGUuZGF0YS5tYXAoZmxvd2VyID0+IGZsb3dlci5jb21tb25fbmFtZSkuaW5kZXhPZih0aGlzLnN0YXRlLnNlYXJjaFRlcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyTGF5b3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFVzZXJTdGF0dXMgLz5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuZGF0YS5maWx0ZXIoZmxvd2VyID0+IGZsb3dlci5jb21tb25fbmFtZSA9PSB0aGlzLnN0YXRlLnNlYXJjaFRlcm0pLm1hcChmbG93ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Zsb3dlci5jb21tb25fbmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Zsb3dlci5jb3Zlcl9pbWFnZX0gYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2Zsb3dlci5jb21tb25fbmFtZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5MYXRpbiBuYW1lOiB7Zmxvd2VyLmxhdGluX25hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57Zmxvd2VyLm5vdGVzfS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Zsb3dlci5zdW4gPyA8cD5UaGlzIHBsYW50IHRocml2ZXMgaW4gdGhlIHN1bi48L3A+IDogPHA+SXQgc2hvdWxkIHJhdGhlciBiZSBwbGFudGVkIGluIHRoZSBzaGFkZS48L3A+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5CbG9vbWluZyBzZWFzb246IHtmbG93ZXIuYmxvb21pbmdfc2Vhc29ufTwvaDQ+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSGVpZ2h0OiB7Zmxvd2VyLmhlaWdodCA+IDEgPyA8c3Bhbj5CZXR3ZWVuIHtmbG93ZXIuaGVpZ2h0WzFdLm51bWJlckludH1cIiBhbmQge2Zsb3dlci5oZWlnaHRbMl0ubnVtYmVySW50fVwiLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogPHNwYW4+e2Zsb3dlci5oZWlnaHRbMV0ubnVtYmVySW50fVwiPC9zcGFuPn08L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5Tb2lsOjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zmxvd2VyLnNvaWwubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UGxhbnRpbmcgZGVwdGg6IHtmbG93ZXIuZGVwdGgubnVtYmVySW50fVwiPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+U3BhY2luZzoge2Zsb3dlci5zcGFjaW5nLm51bWJlckludH1cIjwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNoYXJlIGZsb3dlcj17Zmxvd2VyLmNvbW1vbl9uYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50cyBpbmRleD17aW5kZXh9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvd2VyOyJdLCJzb3VyY2VSb290IjoiIn0=