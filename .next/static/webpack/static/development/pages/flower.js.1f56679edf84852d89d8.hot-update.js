webpackHotUpdate("static\\development\\pages\\flower.js",{

/***/ "./components/Comments.js":
/*!********************************!*\
  !*** ./components/Comments.js ***!
  \********************************/
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
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");









var _jsxFileName = "C:\\Users\\Marcel\\Documents\\kodprojekt\\arbetsprovMarcelWillAndSkill\\components\\Comments.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Comments = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Comments, _React$Component);

  var _super = _createSuper(Comments);

  function Comments() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Comments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      comments: [],
      loaded: false,
      index: null,
      userComment: ""
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "fetchComments", /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var res, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch('https://flowers-mock-data.firebaseio.com/comments.json');

            case 2:
              res = _context.sent;
              _context.next = 5;
              return res.json();

            case 5:
              data = _context.sent;

              _this.setState({
                comments: Object.entries(data),
                loaded: true
              });

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      _this.setState({
        userComment: e.target.value
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "post", /*#__PURE__*/function () {
      var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(message) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(message !== "")) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return fetch("https://flowers-mock-data.firebaseio.com/comments/MarcelR1998/".concat(_this.state.index, ".json"), {
                  method: 'post',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    comment: message
                  })
                }).then(function (res) {
                  console.log(res);

                  _this.fetchComments();

                  _this.setState({
                    userComment: ""
                  });
                })["catch"](function (err) {
                  return console.error(err);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Comments, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.fetchComments();
                this.setState({
                  index: this.props.index
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }() //Fetches comments, both on page load and when a comment is posted from client

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "jsx-1212496929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "jsx-1212496929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }
      }, "Comments"), __jsx("div", {
        id: "commentForm",
        className: "jsx-1212496929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }
      }, __jsx("textarea", {
        id: "",
        cols: "30",
        rows: "2",
        value: this.state.userComment,
        onChange: this.handleChange,
        className: "jsx-1212496929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }
      }), __jsx("button", {
        onClick: function onClick() {
          return _this2.post(_this2.state.userComment);
        },
        className: "jsx-1212496929",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 21
        }
      }, "Comment")), this.state.loaded ? this.state.comments.map(function (user) {
        return user[1][_this2.state.index] ? Object.entries(user[1][_this2.state.index]).map(function (myComment, index) {
          return myComment[1].comment ? __jsx("div", {
            key: user[0] + index,
            className: "jsx-1212496929",
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 33
            }
          }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_11__["default"], {
            user: user[0],
            comment: myComment[1].comment,
            __self: _this2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 37
            }
          })) : null;
        }) : null;
      }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
        id: "1212496929",
        __self: this
      }, "#commentForm.jsx-1212496929{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}textarea.jsx-1212496929{resize:none;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdFNEIsQUFHa0MsQUFJRCxZQUNELFdBQ2YsbURBTGUsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmNlbFxcRG9jdW1lbnRzXFxrb2Rwcm9qZWt0XFxhcmJldHNwcm92TWFyY2VsV2lsbEFuZFNraWxsXFxjb21wb25lbnRzXFxDb21tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcblxyXG5jbGFzcyBDb21tZW50cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgICBzdGF0ZSA9IHtcclxuICAgICAgICBjb21tZW50czogW10sXHJcbiAgICAgICAgbG9hZGVkOiBmYWxzZSxcclxuICAgICAgICBpbmRleDogbnVsbCxcclxuICAgICAgICB1c2VyQ29tbWVudDogXCJcIixcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLmZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgaW5kZXg6IHRoaXMucHJvcHMuaW5kZXgsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9GZXRjaGVzIGNvbW1lbnRzLCBib3RoIG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBhIGNvbW1lbnQgaXMgcG9zdGVkIGZyb20gY2xpZW50XHJcbiAgICBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgY29tbWVudHM6IE9iamVjdC5lbnRyaWVzKGRhdGEpLFxyXG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgdXNlckNvbW1lbnQ6IGUudGFyZ2V0LnZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBwb3N0ID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy9NYXJjZWxSMTk5OC8ke3RoaXMuc3RhdGUuaW5kZXh9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50OiBtZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckNvbW1lbnQ6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29tbWVudEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJDb21tZW50fSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvc3QodGhpcy5zdGF0ZS51c2VyQ29tbWVudCl9PkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge3RoaXMuc3RhdGUubG9hZGVkID8gdGhpcy5zdGF0ZS5jb21tZW50cy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclsxXVt0aGlzLnN0YXRlLmluZGV4XSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXNlclsxXVt0aGlzLnN0YXRlLmluZGV4XSkubWFwKChteUNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBteUNvbW1lbnRbMV0uY29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXJbMF0gKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IHVzZXI9e3VzZXJbMF19IGNvbW1lbnQ9e215Q29tbWVudFsxXS5jb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjY29tbWVudEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Comments.js */"));
    }
  }]);

  return Comments;
}(react__WEBPACK_IMPORTED_MODULE_10___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Comments);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwiY29tbWVudHMiLCJsb2FkZWQiLCJpbmRleCIsInVzZXJDb21tZW50IiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsInNldFN0YXRlIiwiT2JqZWN0IiwiZW50cmllcyIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1lc3NhZ2UiLCJzdGF0ZSIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbW1lbnQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImZldGNoQ29tbWVudHMiLCJlcnIiLCJlcnJvciIsInByb3BzIiwiaGFuZGxlQ2hhbmdlIiwicG9zdCIsIm1hcCIsInVzZXIiLCJteUNvbW1lbnQiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFTUEsUTs7Ozs7Ozs7Ozs7Ozs7OztnTkFDTTtBQUNKQyxjQUFRLEVBQUUsRUFETjtBQUVKQyxZQUFNLEVBQUUsS0FGSjtBQUdKQyxXQUFLLEVBQUUsSUFISDtBQUlKQyxpQkFBVyxFQUFFO0FBSlQsSzs7c1pBZVE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDTUMsS0FBSyxDQUFDLHdEQUFELENBRFg7O0FBQUE7QUFDTkMsaUJBRE07QUFBQTtBQUFBLHFCQUVPQSxHQUFHLENBQUNDLElBQUosRUFGUDs7QUFBQTtBQUVOQyxrQkFGTTs7QUFHWixvQkFBS0MsUUFBTCxDQUFjO0FBQ1ZSLHdCQUFRLEVBQUVTLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSCxJQUFmLENBREE7QUFFVk4sc0JBQU0sRUFBRTtBQUZFLGVBQWQ7O0FBSFk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSzs7dU5BU0QsVUFBQ1UsQ0FBRCxFQUFPO0FBQ2xCLFlBQUtI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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLENBREosR0FJTSxJQUxvQztBQUFBLFNBQTlDLENBREosR0FRSSxJQVR5QztBQUFBLE9BQTVCLENBQXBCLEdBVUksSUFoQlQ7QUFBQTtBQUFBO0FBQUEsZ3ZKQURKO0FBOEJIOzs7O0VBbEZrQmEsNkNBQUssQ0FBQ0MsUzs7QUFxRmRwQyx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZmxvd2VyLmpzLjFmNTY2NzllZGY4NDg1MmQ4OWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5cclxuY2xhc3MgQ29tbWVudHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7XHJcbiAgICAgICAgY29tbWVudHM6IFtdLFxyXG4gICAgICAgIGxvYWRlZDogZmFsc2UsXHJcbiAgICAgICAgaW5kZXg6IG51bGwsXHJcbiAgICAgICAgdXNlckNvbW1lbnQ6IFwiXCIsXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGluZGV4OiB0aGlzLnByb3BzLmluZGV4LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vRmV0Y2hlcyBjb21tZW50cywgYm90aCBvbiBwYWdlIGxvYWQgYW5kIHdoZW4gYSBjb21tZW50IGlzIHBvc3RlZCBmcm9tIGNsaWVudFxyXG4gICAgZmV0Y2hDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIGNvbW1lbnRzOiBPYmplY3QuZW50cmllcyhkYXRhKSxcclxuICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIHVzZXJDb21tZW50OiBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vZmxvd2Vycy1tb2NrLWRhdGEuZmlyZWJhc2Vpby5jb20vY29tbWVudHMvTWFyY2VsUjE5OTgvJHt0aGlzLnN0YXRlLmluZGV4fS5qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudDogbWVzc2FnZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJDb21tZW50OiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyQ29tbWVudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3N0KHRoaXMuc3RhdGUudXNlckNvbW1lbnQpfT5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlZCA/IHRoaXMuc3RhdGUuY29tbWVudHMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJbMV1bdGhpcy5zdGF0ZS5pbmRleF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHVzZXJbMV1bdGhpcy5zdGF0ZS5pbmRleF0pLm1hcCgobXlDb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXlDb21tZW50WzFdLmNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyWzBdICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCB1c2VyPXt1c2VyWzBdfSBjb21tZW50PXtteUNvbW1lbnRbMV0uY29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NvbW1lbnRGb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiXSwic291cmNlUm9vdCI6IiJ9