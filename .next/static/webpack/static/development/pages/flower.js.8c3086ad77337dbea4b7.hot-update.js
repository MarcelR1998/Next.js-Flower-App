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
    className: "jsx-2710641531",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2710641531",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Comments"), user ? __jsx("div", {
    id: "commentForm",
    className: "jsx-2710641531",
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
    placeholder: "Comment publicly as ".concat(user.email),
    onChange: handleChange,
    className: "jsx-2710641531",
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
    className: "jsx-2710641531" + " " + "commentButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Comment")) : __jsx("div", {
    id: "commentForm",
    className: "jsx-2710641531",
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
    className: "jsx-2710641531",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("button", {
    disabled: true,
    className: "jsx-2710641531" + " " + "commentButton",
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
        className: "jsx-2710641531",
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
    id: "2710641531",
    __self: _this
  }, "#commentForm.jsx-2710641531{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}textarea.jsx-2710641531{resize:none;width:100%;}.commentButton.jsx-2710641531{background-color:deepskyblue;color:white;border:2px solid deepskyblue;border-radius:8px;margin-left:4px;padding:8px;cursor:pointer;}.commentButton.jsx-2710641531:disabled{-webkit-filter:opacity(0.5);filter:opacity(0.5);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHa0MsQUFJRCxBQUlpQixBQVVsQyxZQWJnQixXQUNmLE1BR2dCLFlBQ2lCLE9BUWpDLHNCQVBzQixJQVZQLFdBQ2YsR0FVb0IsZ0JBQ0osWUFDRyxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmNlbFxcRG9jdW1lbnRzXFxrb2Rwcm9qZWt0XFxhcmJldHNwcm92TWFyY2VsV2lsbEFuZFNraWxsXFxjb21wb25lbnRzXFxDb21tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoL3VzZVVzZXInXHJcblxyXG5jb25zdCBDb21tZW50cyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyQ29tbWVudCwgc2V0VXNlckNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7IHVzZXIsIGxvZ291dCB9ID0gdXNlVXNlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgc2V0SW5kZXgocHJvcHMuaW5kZXgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9GZXRjaGVzIGNvbW1lbnRzLCBib3RoIG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBhIGNvbW1lbnQgaXMgcG9zdGVkIGZyb20gY2xpZW50XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDb21tZW50cyhPYmplY3QuZW50cmllcyhkYXRhKSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzL01hcmNlbFIxOTk4LyR7aW5kZXh9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50OiBtZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckNvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgIHt1c2VyID8gPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHZhbHVlPXt1c2VyQ29tbWVudH0gcGxhY2Vob2xkZXI9e2BDb21tZW50IHB1YmxpY2x5IGFzICR7dXNlci5lbWFpbH1gfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ9eyF1c2VyQ29tbWVudH0gb25DbGljaz17KCkgPT4gcG9zdCh1c2VyQ29tbWVudCl9PkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiBwbGFjZWhvbGRlcj1cIlNpZ24gaW4gaW4gb3JkZXIgdG8gY29tbWVudC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudEJ1dHRvblwiIGRpc2FibGVkPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7bG9hZGVkID8gY29tbWVudHMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgdXNlclsxXVtpbmRleF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXNlclsxXVtpbmRleF0pLm1hcCgobXlDb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbW1lbnRbMV0uY29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlclswXSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCB1c2VyPXt1c2VyWzBdfSBjb21tZW50PXtteUNvbW1lbnRbMV0uY29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NvbW1lbnRGb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudEJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Comments.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJpbmRleCIsInNldEluZGV4IiwidXNlckNvbW1lbnQiLCJzZXRVc2VyQ29tbWVudCIsInVzZVVzZXIiLCJ1c2VyIiwibG9nb3V0IiwidXNlRWZmZWN0IiwiZmV0Y2hDb21tZW50cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicG9zdCIsIm1lc3NhZ2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tZW50IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsImVtYWlsIiwibWFwIiwibXlDb21tZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ1FDLHNEQUFRLENBQUMsRUFBRCxDQURoQjtBQUFBLE1BQ2pCQyxRQURpQjtBQUFBLE1BQ1BDLFdBRE87O0FBQUEsbUJBRUlGLHNEQUFRLENBQUMsS0FBRCxDQUZaO0FBQUEsTUFFakJHLE1BRmlCO0FBQUEsTUFFVEMsU0FGUzs7QUFBQSxtQkFHRUosc0RBQVEsQ0FBQyxJQUFELENBSFY7QUFBQSxNQUdqQkssS0FIaUI7QUFBQSxNQUdWQyxRQUhVOztBQUFBLG1CQUljTixzREFBUSxDQUFDLEVBQUQsQ0FKdEI7QUFBQSxNQUlqQk8sV0FKaUI7QUFBQSxNQUlKQyxjQUpJOztBQUFBLGlCQUtDQyxtRUFBTyxFQUxSO0FBQUEsTUFLaEJDLElBTGdCLFlB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LEVBQUMsSUFBckI7QUFBMEIsUUFBSSxFQUFDLEdBQS9CO0FBQW1DLGVBQVcsRUFBQyw4QkFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsRUFFRDtBQUFrQyxZQUFRLE1BQTFDO0FBQUEsd0NBQWtCLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQyxDQUxiLEVBV0tKLE1BQU0sR0FBR0YsUUFBUSxDQUFDcUMsR0FBVCxDQUFhLFVBQUE1QixJQUFJO0FBQUEsV0FDdkJBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUwsS0FBUixJQUNJYSxNQUFNLENBQUNDLE9BQVAsQ0FBZVQsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTCxLQUFSLENBQWYsRUFBK0JpQyxHQUEvQixDQUFtQyxVQUFDQyxTQUFELEVBQVlsQyxLQUFaO0FBQUEsYUFDL0JrQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFSLE9BQWIsR0FDSTtBQUFLLFdBQUcsRUFBRXJCLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUwsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFTLFlBQUksRUFBRUssSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFBd0IsZUFBTyxFQUFFNkIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhUixPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixHQUlNLElBTHlCO0FBQUEsS0FBbkMsQ0FESixHQVFJLElBVG1CO0FBQUEsR0FBakIsQ0FBSCxHQVVGLElBckJUO0FBQUE7QUFBQTtBQUFBLGs4TEFESjtBQWdESCxDQTNGRDs7R0FBTWpDLFE7VUFLdUJXLDJEOzs7S0FMdkJYLFE7QUE2RlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmbG93ZXIuanMuOGMzMDg2YWQ3NzMzN2RiZWE0YjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoL3VzZVVzZXInXHJcblxyXG5jb25zdCBDb21tZW50cyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyQ29tbWVudCwgc2V0VXNlckNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7IHVzZXIsIGxvZ291dCB9ID0gdXNlVXNlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgc2V0SW5kZXgocHJvcHMuaW5kZXgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9GZXRjaGVzIGNvbW1lbnRzLCBib3RoIG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBhIGNvbW1lbnQgaXMgcG9zdGVkIGZyb20gY2xpZW50XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDb21tZW50cyhPYmplY3QuZW50cmllcyhkYXRhKSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzL01hcmNlbFIxOTk4LyR7aW5kZXh9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50OiBtZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckNvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgIHt1c2VyID8gPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHZhbHVlPXt1c2VyQ29tbWVudH0gcGxhY2Vob2xkZXI9e2BDb21tZW50IHB1YmxpY2x5IGFzICR7dXNlci5lbWFpbH1gfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ9eyF1c2VyQ29tbWVudH0gb25DbGljaz17KCkgPT4gcG9zdCh1c2VyQ29tbWVudCl9PkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiBwbGFjZWhvbGRlcj1cIlNpZ24gaW4gaW4gb3JkZXIgdG8gY29tbWVudC5cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudEJ1dHRvblwiIGRpc2FibGVkPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7bG9hZGVkID8gY29tbWVudHMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgdXNlclsxXVtpbmRleF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXNlclsxXVtpbmRleF0pLm1hcCgobXlDb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbW1lbnRbMV0uY29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlclswXSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCB1c2VyPXt1c2VyWzBdfSBjb21tZW50PXtteUNvbW1lbnRbMV0uY29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NvbW1lbnRGb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudEJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC41KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyJdLCJzb3VyY2VSb290IjoiIn0=