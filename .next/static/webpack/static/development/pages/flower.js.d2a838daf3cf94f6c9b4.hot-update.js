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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Comment */ "./components/Comment.js");
/* harmony import */ var _utils_auth_useUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/auth/useUser */ "./utils/auth/useUser.js");



var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcel\\Documents\\kodprojekt\\arbetsprovMarcelWillAndSkill\\components\\Comments.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




var Comments = function Comments(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      comments = _useState[0],
      setComments = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      index = _useState3[0],
      setIndex = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      userComment = _useState4[0],
      setUserComment = _useState4[1];

  var _useUser = Object(_utils_auth_useUser__WEBPACK_IMPORTED_MODULE_5__["useUser"])(),
      user = _useUser.user,
      logout = _useUser.logout;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchComments();
    setIndex(props.index);
  }, []); //Fetches comments, both on page load and when a comment is posted from client

  var fetchComments = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
              setComments(Object.entries(data));
              setLoaded(true);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchComments() {
      return _ref.apply(this, arguments);
    };
  }();

  var handleChange = function handleChange(e) {
    setUserComment(e.target.value);
  };

  var post = /*#__PURE__*/function () {
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
              return fetch("https://flowers-mock-data.firebaseio.com/comments/MarcelR1998/".concat(index, ".json"), {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  comment: message
                })
              }).then(function (res) {
                console.log(res);
                fetchComments();
                setUserComment("");
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

    return function post(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Comments"), user ? __jsx("div", {
    id: "commentForm",
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  }, __jsx("textarea", {
    id: "",
    cols: "30",
    rows: "2",
    value: userComment,
    placeholder: "Comment publicly as MarcelR1998",
    onChange: handleChange,
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }), __jsx("button", {
    disabled: !userComment,
    onClick: function onClick() {
      return post(userComment);
    },
    className: "jsx-4157930053" + " " + "commentButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Comment")) : __jsx("div", {
    id: "commentForm",
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 22
    }
  }, __jsx("textarea", {
    id: "",
    cols: "30",
    rows: "2",
    placeholder: "Sign in in order to comment.",
    readOnly: true,
    className: "jsx-4157930053",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("button", {
    disabled: true,
    className: "jsx-4157930053" + " " + "commentButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 21
    }
  }, "Comment")), loaded ? comments.map(function (user) {
    return user[1][index] ? Object.entries(user[1][index]).map(function (myComment, index) {
      return myComment[1].comment ? __jsx("div", {
        key: user[0] + index,
        className: "jsx-4157930053",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 29
        }
      }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: user[0],
        comment: myComment[1].comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 33
        }
      })) : null;
    }) : null;
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4157930053",
    __self: _this
  }, "#commentForm.jsx-4157930053{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-bottom:1em;}textarea.jsx-4157930053{resize:none;width:100%;}.commentButton.jsx-4157930053{background-color:deepskyblue;color:white;border:2px solid deepskyblue;border-radius:8px;margin-left:4px;padding:8px;cursor:pointer;}.commentButton.jsx-4157930053:disabled{-webkit-filter:opacity(0.4) cursor:auto;filter:opacity(0.4) cursor:auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHa0MsQUFLRCxBQUlpQixBQVVqQixZQWJELFdBQ2YsTUFHZ0IsWUFDaUIsNkJBQ1gsRUFRdEIsRUFuQmUsV0FDTyxHQVdGLGVBVnBCLENBV2dCLFlBQ0csZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxNYXJjZWxcXERvY3VtZW50c1xca29kcHJvamVrdFxcYXJiZXRzcHJvdk1hcmNlbFdpbGxBbmRTa2lsbFxcY29tcG9uZW50c1xcQ29tbWVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC91c2VVc2VyJ1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlckNvbW1lbnQsIHNldFVzZXJDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZVVzZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgIHNldEluZGV4KHByb3BzLmluZGV4KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vRmV0Y2hlcyBjb21tZW50cywgYm90aCBvbiBwYWdlIGxvYWQgYW5kIHdoZW4gYSBjb21tZW50IGlzIHBvc3RlZCBmcm9tIGNsaWVudFxyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgc2V0Q29tbWVudHMoT2JqZWN0LmVudHJpZXMoZGF0YSkpO1xyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0ID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy9NYXJjZWxSMTk5OC8ke2luZGV4fS5qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudDogbWVzc2FnZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJDb21tZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxyXG4gICAgICAgICAgICB7dXNlciA/IDxkaXYgaWQ9XCJjb21tZW50Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiB2YWx1ZT17dXNlckNvbW1lbnR9IHBsYWNlaG9sZGVyPXtgQ29tbWVudCBwdWJsaWNseSBhcyBNYXJjZWxSMTk5OGB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnRCdXR0b25cIiBkaXNhYmxlZD17IXVzZXJDb21tZW50fSBvbkNsaWNrPXsoKSA9PiBwb3N0KHVzZXJDb21tZW50KX0+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGlkPVwiY29tbWVudEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHBsYWNlaG9sZGVyPVwiU2lnbiBpbiBpbiBvcmRlciB0byBjb21tZW50LlwiIHJlYWRPbmx5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtsb2FkZWQgPyBjb21tZW50cy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICB1c2VyWzFdW2luZGV4XSA/IChcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh1c2VyWzFdW2luZGV4XSkubWFwKChteUNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29tbWVudFsxXS5jb21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyWzBdICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IHVzZXI9e3VzZXJbMF19IGNvbW1lbnQ9e215Q29tbWVudFsxXS5jb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjY29tbWVudEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudEJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC40KVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Comments.js */"));
};

_s(Comments, "ToFae+AXG/KNlOqCKics7xVx750=", false, function () {
  return [_utils_auth_useUser__WEBPACK_IMPORTED_MODULE_5__["useUser"]];
});

_c = Comments;
/* harmony default export */ __webpack_exports__["default"] = (Comments);

var _c;

$RefreshReg$(_c, "Comments");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJpbmRleCIsInNldEluZGV4IiwidXNlckNvbW1lbnQiLCJzZXRVc2VyQ29tbWVudCIsInVzZVVzZXIiLCJ1c2VyIiwibG9nb3V0IiwidXNlRWZmZWN0IiwiZmV0Y2hDb21tZW50cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicG9zdCIsIm1lc3NhZ2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tZW50IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1hcCIsIm15Q29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNqQkMsUUFEaUI7QUFBQSxNQUNQQyxXQURPOztBQUFBLG1CQUVJRixzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRWpCRyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBQUEsbUJBR0VKLHNEQUFRLENBQUMsSUFBRCxDQUhWO0FBQUEsTUFHakJLLEtBSGlCO0FBQUEsTUFHVkMsUUFIVTs7QUFBQSxtQkFJY04sc0RBQVEsQ0FBQyxFQUFELENBSnRCO0FBQUEsTUFJakJPLFdBSmlCO0FBQUEsTUFJSkMsY0FKSTs7QUFBQSxpQkFLQ0MsbUVBQU8sRUFMUjtBQUFBLE1BS2hCQyxJQUxnQixZQUtoQkEsSUFM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QUFBbUMsZUFBVyxFQUFDLDhCQUEvQztBQUE4RSxZQUFRLE1BQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURDLEVBRUQ7QUFBa0MsWUFBUSxNQUExQztBQUFBLHdDQUFrQixlQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkMsQ0FMYixFQVdLSixNQUFNLEdBQUdGLFFBQVEsQ0FBQ29DLEdBQVQsQ0FBYSxVQUFBM0IsSUFBSTtBQUFBLFdBQ3ZCQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFMLEtBQVIsSUFDSWEsTUFBTSxDQUFDQyxPQUFQLENBQWVULElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUwsS0FBUixDQUFmLEVBQStCZ0MsR0FBL0IsQ0FBbUMsVUFBQ0MsU0FBRCxFQUFZakMsS0FBWjtBQUFBLGFBQy9CaUMsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhUCxPQUFiLEdBQ0k7QUFBSyxXQUFHLEVBQUVyQixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVMLEtBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNJLE1BQUMsZ0RBQUQ7QUFBUyxZQUFJLEVBQUVLLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQXdCLGVBQU8sRUFBRTRCLFNBQVMsQ0FBQyxDQUFELENBQVQsQ0FBYVAsT0FBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLENBREosR0FJTSxJQUx5QjtBQUFBLEtBQW5DLENBREosR0FRSSxJQVRtQjtBQUFBLEdBQWpCLENBQUgsR0FVRixJQXJCVDtBQUFBO0FBQUE7QUFBQSxvbU1BREo7QUFrREgsQ0E3RkQ7O0dBQU1qQyxRO1VBS3VCVywyRDs7O0tBTHZCWCxRO0FBK0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZmxvd2VyLmpzLmQyYTgzOGRhZjNjZjk0ZjZjOWI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VVc2VyIH0gZnJvbSAnLi4vdXRpbHMvYXV0aC91c2VVc2VyJ1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlckNvbW1lbnQsIHNldFVzZXJDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgeyB1c2VyLCBsb2dvdXQgfSA9IHVzZVVzZXIoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgIHNldEluZGV4KHByb3BzLmluZGV4KVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIC8vRmV0Y2hlcyBjb21tZW50cywgYm90aCBvbiBwYWdlIGxvYWQgYW5kIHdoZW4gYSBjb21tZW50IGlzIHBvc3RlZCBmcm9tIGNsaWVudFxyXG4gICAgY29uc3QgZmV0Y2hDb21tZW50cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy5qc29uJyk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgc2V0Q29tbWVudHMoT2JqZWN0LmVudHJpZXMoZGF0YSkpO1xyXG4gICAgICAgIHNldExvYWRlZCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJDb21tZW50KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0ID0gYXN5bmMgKG1lc3NhZ2UpID0+IHtcclxuICAgICAgICBpZiAobWVzc2FnZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mbG93ZXJzLW1vY2stZGF0YS5maXJlYmFzZWlvLmNvbS9jb21tZW50cy9NYXJjZWxSMTk5OC8ke2luZGV4fS5qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudDogbWVzc2FnZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJDb21tZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxyXG4gICAgICAgICAgICB7dXNlciA/IDxkaXYgaWQ9XCJjb21tZW50Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiB2YWx1ZT17dXNlckNvbW1lbnR9IHBsYWNlaG9sZGVyPXtgQ29tbWVudCBwdWJsaWNseSBhcyBNYXJjZWxSMTk5OGB9IG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNvbW1lbnRCdXR0b25cIiBkaXNhYmxlZD17IXVzZXJDb21tZW50fSBvbkNsaWNrPXsoKSA9PiBwb3N0KHVzZXJDb21tZW50KX0+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj4gOiA8ZGl2IGlkPVwiY29tbWVudEZvcm1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHBsYWNlaG9sZGVyPVwiU2lnbiBpbiBpbiBvcmRlciB0byBjb21tZW50LlwiIHJlYWRPbmx5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtsb2FkZWQgPyBjb21tZW50cy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICB1c2VyWzFdW2luZGV4XSA/IChcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh1c2VyWzFdW2luZGV4XSkubWFwKChteUNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29tbWVudFsxXS5jb21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyWzBdICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IHVzZXI9e3VzZXJbMF19IGNvbW1lbnQ9e215Q29tbWVudFsxXS5jb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjY29tbWVudEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudEJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC40KVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiXSwic291cmNlUm9vdCI6IiJ9