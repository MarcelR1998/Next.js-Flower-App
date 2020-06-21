webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Flowers.js":
/*!*******************************!*\
  !*** ./components/Flowers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);







var _jsxFileName = "C:\\Users\\Marcel\\Documents\\kodprojekt\\arbetsprovMarcelWillAndSkill\\components\\Flowers.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Flowers = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Flowers, _React$Component);

  var _super = _createSuper(Flowers);

  function Flowers() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Flowers);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      search: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "onchange", function (e) {
      _this.setState({
        search: e.target.value
      });

      console.log(_this.user);
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "renderFlowerCard", function (flower) {
      var search = _this.state.search;

      if (search !== "" && flower.common_name.toLowerCase().indexOf(search.toLowerCase()) === -1 && flower.latin_name.toLowerCase().indexOf(search.toLowerCase()) === -1 && flower.blooming_season.toLowerCase().indexOf(search.toLowerCase()) === -1) {
        return null;
      }

      return __jsx("li", {
        key: flower.common_name,
        className: "jsx-1300652480",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 16
        }
      }, __jsx("a", {
        href: "http://localhost:3000/flower?flower=".concat(flower.common_name),
        className: "jsx-1300652480" + " " + "cardLink",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 13
        }
      }, flower.cover_image ? __jsx("img", {
        src: flower.cover_image,
        alt: "",
        className: "jsx-1300652480",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 39
        }
      }) : null, __jsx("div", {
        className: "jsx-1300652480" + " " + "cardContent",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 17
        }
      }, __jsx("h3", {
        className: "jsx-1300652480" + " " + "cardTitle",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }
      }, flower.common_name), __jsx("p", {
        className: "jsx-1300652480",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }
      }, flower.latin_name), flower.sun ? __jsx("span", {
        className: "jsx-1300652480" + " " + "badge sun",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 35
        }
      }, "Sun | ") : __jsx("span", {
        className: "jsx-1300652480" + " " + "badge shade",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 79
        }
      }, "Shade | "), __jsx("span", {
        className: "jsx-1300652480" + " " + "badge season",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, flower.blooming_season))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1300652480",
        __self: Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)
      }, "li.jsx-1300652480{list-style:none;}.cardContent.jsx-1300652480{display:inline;height:128px;margin:0;}img.jsx-1300652480{height:128px;padding-right:1em;}.cardLink.jsx-1300652480{background-color:#fbfbfb;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:1em;margin-bottom:1em;-webkit-transition:0.2s;transition:0.2s;}.cardLink.jsx-1300652480:hover{-webkit-transform:scale(1.04);-ms-transform:scale(1.04);transform:scale(1.04);}a.jsx-1300652480{color:black;-webkit-text-decoration:none;text-decoration:none;}.cardTitle.jsx-1300652480{margin:0;}.badge.jsx-1300652480{font-size:0.6em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXEZsb3dlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUdxQyxBQUdELEFBS0YsQUFJWSxBQVFILEFBR1YsQUFJSCxBQUdPLFNBRnBCLEdBSnlCLENBZkgsRUFMTCxDQUhqQixBQThCQSxTQWpCaUIsR0FUSixHQUtiLE1BSkEseUJBbUJBLGdCQUpBLHFCQU5nQixZQUNNLGtCQUNGLHdDQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmNlbFxcRG9jdW1lbnRzXFxrb2Rwcm9qZWt0XFxhcmJldHNwcm92TWFyY2VsV2lsbEFuZFNraWxsXFxjb21wb25lbnRzXFxGbG93ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmxvd2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICB9XHJcblxyXG4gICAgLyogICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICBvbmNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmxvd2VyQ2FyZCA9IGZsb3dlciA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2ggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2ggIT09IFwiXCIgJiYgZmxvd2VyLmNvbW1vbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5sYXRpbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5ibG9vbWluZ19zZWFzb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtmbG93ZXIuY29tbW9uX25hbWV9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkTGlua1wiIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvZmxvd2VyP2Zsb3dlcj0ke2Zsb3dlci5jb21tb25fbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtmbG93ZXIuY292ZXJfaW1hZ2UgPyA8aW1nIHNyYz17Zmxvd2VyLmNvdmVyX2ltYWdlfSBhbHQ9XCJcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPntmbG93ZXIuY29tbW9uX25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57Zmxvd2VyLmxhdGluX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmbG93ZXIuc3VuID8gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2Ugc3VuXCI+U3VuIHwgPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNoYWRlXCI+U2hhZGUgfCA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNlYXNvblwiPntmbG93ZXIuYmxvb21pbmdfc2Vhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkQ29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmRMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC4zMyk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZExpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZFRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9saT5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy51c2VyID8gPHA+aGVqc2FuIGR1IMOkciBpbmxvZ2dhZDwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmxvd2VyLi4uXCIgaWQ9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uY2hhbmdlfSBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcChmbG93ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZsb3dlckNhcmQoZmxvd2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dlcnM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Flowers.js */"));
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Flowers, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-1633098220",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }
      }, this.user ? __jsx("p", {
        className: "jsx-1633098220",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 30
        }
      }, "hejsan du \xE4r inloggad") : null, __jsx("input", {
        type: "text",
        placeholder: "Search flower...",
        id: "search",
        value: this.search,
        onChange: this.onchange,
        autoComplete: "off",
        className: "jsx-1633098220",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }
      }), __jsx("ul", {
        className: "jsx-1633098220" + " " + "list-group",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }, this.props.data.map(function (flower) {
        return _this2.renderFlowerCard(flower);
      })), __jsx("br", {
        className: "jsx-1633098220",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 17
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1633098220",
        __self: this
      }, "ul.jsx-1633098220{padding-inline-start:0;padding-left:0px;}#search.jsx-1633098220{padding:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXEZsb3dlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUY0QixBQUc0QyxBQUtYLFlBQ2hCLFdBTHFCLGlCQUNyQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmNlbFxcRG9jdW1lbnRzXFxrb2Rwcm9qZWt0XFxhcmJldHNwcm92TWFyY2VsV2lsbEFuZFNraWxsXFxjb21wb25lbnRzXFxGbG93ZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmxvd2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICB9XHJcblxyXG4gICAgLyogICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICBvbmNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmxvd2VyQ2FyZCA9IGZsb3dlciA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2ggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2ggIT09IFwiXCIgJiYgZmxvd2VyLmNvbW1vbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5sYXRpbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5ibG9vbWluZ19zZWFzb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtmbG93ZXIuY29tbW9uX25hbWV9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkTGlua1wiIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvZmxvd2VyP2Zsb3dlcj0ke2Zsb3dlci5jb21tb25fbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtmbG93ZXIuY292ZXJfaW1hZ2UgPyA8aW1nIHNyYz17Zmxvd2VyLmNvdmVyX2ltYWdlfSBhbHQ9XCJcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPntmbG93ZXIuY29tbW9uX25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57Zmxvd2VyLmxhdGluX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmbG93ZXIuc3VuID8gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2Ugc3VuXCI+U3VuIHwgPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNoYWRlXCI+U2hhZGUgfCA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNlYXNvblwiPntmbG93ZXIuYmxvb21pbmdfc2Vhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkQ29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmRMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC4zMyk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZExpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZFRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9saT5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy51c2VyID8gPHA+aGVqc2FuIGR1IMOkciBpbmxvZ2dhZDwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmxvd2VyLi4uXCIgaWQ9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uY2hhbmdlfSBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcChmbG93ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZsb3dlckNhcmQoZmxvd2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dlcnM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Flowers.js */"));
    }
  }]);

  return Flowers;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Flowers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zsb3dlcnMuanMiXSwibmFtZXMiOlsiRmxvd2VycyIsInNlYXJjaCIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJmbG93ZXIiLCJzdGF0ZSIsImNvbW1vbl9uYW1lIiwidG9Mb3dlckNhc2UiLCJpbmRleE9mIiwibGF0aW5fbmFtZSIsImJsb29taW5nX3NlYXNvbiIsImNvdmVyX2ltYWdlIiwic3VuIiwib25jaGFuZ2UiLCJwcm9wcyIsImRhdGEiLCJtYXAiLCJyZW5kZXJGbG93ZXJDYXJkIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLE87Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ007QUFDSkMsWUFBTSxFQUFFO0FBREosSzs7bU5BUUcsVUFBQUMsQ0FBQyxFQUFJO0FBQ1osWUFBS0MsUUFBTCxDQUFjO0FBQUVGLGNBQU0sRUFBRUMsQ0FBQyxDQUFDRSxNQUFGLENBQVNDO0FBQW5CLE9BQWQ7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQUtDLElBQWpCO0FBQ0gsSzs7Mk5BRWtCLFVBQUFDLE1BQU0sRUFBSTtBQUFBLFVBQ2pCUixNQURpQixHQUNOLE1BQUtTLEtBREMsQ0FDakJULE1BRGlCOztBQUd6QixVQUFJQSxNQUFNLEtBQUssRUFBWCxJQUFpQlEsTUFBTSxDQUFDRSxXQUFQLENBQW1CQyxXQUFuQixHQUFpQ0MsT0FBakMsQ0FBeUNaLE1BQU0sQ0FBQ1csV0FBUCxFQUF6QyxNQUFtRSxDQUFDLENBQXJGLElBQ0dILE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQkYsV0FBbEIsR0FBZ0NDLE9BQWhDLENBQXdDWixNQUFNLENBQUNXLFdBQVAsRUFBeEMsTUFBa0UsQ0FBQyxDQUR0RSxJQUVHSCxNQUFNLENBQUNNLGVBQVAsQ0FBdUJILFdBQXZCLEdBQXFDQyxPQUFyQyxDQUE2Q1osTUFBTSxDQUFDVyxXQUFQLEVBQTdDLE1BQXVFLENBQUMsQ0FGL0UsRUFHRTtBQUNFLGVBQU8sSUFBUDtBQUNIOztBQUNELGFBQU87QUFBSSxXQUFHLEVBQUVILE1BQU0sQ0FBQ0UsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0g7QUFBd0IsWUFBSSxnREFBeUNGLE1BQU0sQ0FBQ0UsV0FBaEQsQ0FBNUI7QUFBQSw0Q0FBYSxVQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDS0YsTUFBTSxDQUFDTyxXQUFQLEdBQXFCO0FBQUssV0FBRyxFQUFFUCxNQUFNLENBQUNPLFdBQWpCO0FBQThCLFdBQUcsRUFBQyxFQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBckIsR0FBK0QsSUFEcEUsRUFFSTtBQUFBLDRDQUFlLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJO0FBQUEsNENBQWMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTJCUCxNQUFNLENBQUNFLFdBQWxDLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSUYsTUFBTSxDQUFDSyxVQUFYLENBRkosRUFHS0wsTUFBTSxDQUFDUSxHQUFQLEdBQWE7QUFBQSw0Q0FBZ0IsV0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBYixHQUF5RDtBQUFBLDRDQUFnQixhQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUg5RCxFQUlJO0FBQUEsNENBQWdCLGNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBZ0NSLE1BQU0sQ0FBQ00sZUFBdkMsQ0FKSixDQUZKLENBREc7QUFBQTtBQUFBO0FBQUEsaStMQUFQO0FBK0NILEs7Ozs7Ozs7NkJBRVE7QUFBQTs7QUFFTCxhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLLEtBQUtQLElBQUwsR0FBWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBQVosR0FBMkMsSUFEaEQsRUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLG1CQUFXLEVBQUMsa0JBQS9CO0FBQWtELFVBQUUsRUFBQyxRQUFyRDtBQUE4RCxhQUFLLEVBQUUsS0FBS1AsTUFBMUU7QUFBa0YsZ0JBQVEsRUFBRSxLQUFLaUIsUUFBakc7QUFBMkcsb0JBQVksRUFBQyxLQUF4SDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGSixFQUdJO0FBQUEsNENBQWMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ssS0FBS0MsS0FBTCxDQUFXQyxJQUFYLENBQWdCQyxHQUFoQixDQUFvQixVQUFBWixNQUFNO0FBQUEsZUFDdkIsTUFBSSxDQUFDYSxnQkFBTCxDQUFzQmIsTUFBdEIsQ0FEdUI7QUFBQSxPQUExQixDQURMLENBSEosRUFRSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSjtBQUFBO0FBQUE7QUFBQSxnMUtBREo7QUF1Qkg7Ozs7RUFqR2lCYyw0Q0FBSyxDQUFDQyxTOztBQW9HYnhCLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5mYzA0OTk2OTVjZmE1YjE0ZmZhYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRmxvd2VycyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBzZWFyY2g6IFwiXCIsXHJcbiAgICB9XHJcblxyXG4gICAgLyogICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gdGhpcy5jb250ZXh0O1xyXG4gICAgICAgIH0gKi9cclxuXHJcbiAgICBvbmNoYW5nZSA9IGUgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyRmxvd2VyQ2FyZCA9IGZsb3dlciA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBzZWFyY2ggfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgICAgIGlmIChzZWFyY2ggIT09IFwiXCIgJiYgZmxvd2VyLmNvbW1vbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5sYXRpbl9uYW1lLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2gudG9Mb3dlckNhc2UoKSkgPT09IC0xXHJcbiAgICAgICAgICAgICYmIGZsb3dlci5ibG9vbWluZ19zZWFzb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PT0gLTFcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiA8bGkga2V5PXtmbG93ZXIuY29tbW9uX25hbWV9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkTGlua1wiIGhyZWY9e2BodHRwOi8vbG9jYWxob3N0OjMwMDAvZmxvd2VyP2Zsb3dlcj0ke2Zsb3dlci5jb21tb25fbmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIHtmbG93ZXIuY292ZXJfaW1hZ2UgPyA8aW1nIHNyYz17Zmxvd2VyLmNvdmVyX2ltYWdlfSBhbHQ9XCJcIiAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRUaXRsZVwiPntmbG93ZXIuY29tbW9uX25hbWV9PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8cD57Zmxvd2VyLmxhdGluX25hbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIHtmbG93ZXIuc3VuID8gPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2Ugc3VuXCI+U3VuIHwgPC9zcGFuPiA6IDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNoYWRlXCI+U2hhZGUgfCA8L3NwYW4+fVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHNlYXNvblwiPntmbG93ZXIuYmxvb21pbmdfc2Vhc29ufTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jYXJkQ29udGVudHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMjhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhcmRMaW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIGJveC1zaGFkb3c6IDBweCA3cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsMC4zMyk7ICovXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZExpbms6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY2FyZFRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9saT5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7dGhpcy51c2VyID8gPHA+aGVqc2FuIGR1IMOkciBpbmxvZ2dhZDwvcD4gOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZmxvd2VyLi4uXCIgaWQ9XCJzZWFyY2hcIiB2YWx1ZT17dGhpcy5zZWFyY2h9IG9uQ2hhbmdlPXt0aGlzLm9uY2hhbmdlfSBhdXRvQ29tcGxldGU9XCJvZmZcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLm1hcChmbG93ZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckZsb3dlckNhcmQoZmxvd2VyKVxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAjc2VhcmNoIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dlcnM7Il0sInNvdXJjZVJvb3QiOiIifQ==