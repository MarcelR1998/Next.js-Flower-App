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
    className: "jsx-2025610538",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-2025610538",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, "Comments"), user ? __jsx("div", {
    id: "commentForm",
    className: "jsx-2025610538",
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
    className: "jsx-2025610538",
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
    className: "jsx-2025610538" + " " + "commentButton",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, "Comment")) : __jsx("div", {
    id: "commentForm",
    className: "jsx-2025610538",
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
    value: "",
    className: "jsx-2025610538",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }), __jsx("button", {
    disabled: true,
    className: "jsx-2025610538" + " " + "commentButton",
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
        className: "jsx-2025610538",
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
    id: "2025610538",
    __self: _this
  }, "#commentForm.jsx-2025610538{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;margin-bottom:1em;}textarea.jsx-2025610538{resize:none;width:100%;}.commentButton.jsx-2025610538{background-color:deepskyblue;color:white;border:2px solid deepskyblue;border-radius:8px;margin-left:4px;padding:8px;cursor:pointer;}.commentButton.jsx-2025610538:disabled{-webkit-filter:opacity(0.4);filter:opacity(0.4);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFd0IsQUFHa0MsQUFLRCxBQUlpQixBQVVsQyxZQWJnQixXQUNmLE1BR2dCLFlBQ2lCLE9BUWpDLHNCQVBzQixJQVhQLFdBQ08sR0FXRixlQVZwQixDQVdnQixZQUNHLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lbnQgZnJvbSAnLi9Db21tZW50JztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gJy4uL3V0aWxzL2F1dGgvdXNlVXNlcidcclxuXHJcbmNvbnN0IENvbW1lbnRzID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb21tZW50LCBzZXRVc2VyQ29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHsgdXNlciwgbG9nb3V0IH0gPSB1c2VVc2VyKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICBzZXRJbmRleChwcm9wcy5pbmRleClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL0ZldGNoZXMgY29tbWVudHMsIGJvdGggb24gcGFnZSBsb2FkIGFuZCB3aGVuIGEgY29tbWVudCBpcyBwb3N0ZWQgZnJvbSBjbGllbnRcclxuICAgIGNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmxvd2Vycy1tb2NrLWRhdGEuZmlyZWJhc2Vpby5jb20vY29tbWVudHMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldENvbW1lbnRzKE9iamVjdC5lbnRyaWVzKGRhdGEpKTtcclxuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyQ29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcG9zdCA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vZmxvd2Vycy1tb2NrLWRhdGEuZmlyZWJhc2Vpby5jb20vY29tbWVudHMvTWFyY2VsUjE5OTgvJHtpbmRleH0uanNvbmAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnQ6IG1lc3NhZ2UgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoQ29tbWVudHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRVc2VyQ29tbWVudChcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPkNvbW1lbnRzPC9oMj5cclxuICAgICAgICAgICAge3VzZXIgPyA8ZGl2IGlkPVwiY29tbWVudEZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIyXCIgdmFsdWU9e3VzZXJDb21tZW50fSBwbGFjZWhvbGRlcj17YENvbW1lbnQgcHVibGljbHkgYXMgTWFyY2VsUjE5OThgfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ9eyF1c2VyQ29tbWVudH0gb25DbGljaz17KCkgPT4gcG9zdCh1c2VyQ29tbWVudCl9PkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+IDogPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiBwbGFjZWhvbGRlcj1cIlNpZ24gaW4gaW4gb3JkZXIgdG8gY29tbWVudC5cIiB2YWx1ZT1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjb21tZW50QnV0dG9uXCIgZGlzYWJsZWQ+Q29tbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtsb2FkZWQgPyBjb21tZW50cy5tYXAodXNlciA9PiAoXHJcbiAgICAgICAgICAgICAgICB1c2VyWzFdW2luZGV4XSA/IChcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh1c2VyWzFdW2luZGV4XSkubWFwKChteUNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29tbWVudFsxXS5jb21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyWzBdICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IHVzZXI9e3VzZXJbMF19IGNvbW1lbnQ9e215Q29tbWVudFsxXS5jb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjY29tbWVudEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b257XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGVlcHNreWJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuY29tbWVudEJ1dHRvbjpkaXNhYmxlZHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IG9wYWNpdHkoMC40KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Comments.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJpbmRleCIsInNldEluZGV4IiwidXNlckNvbW1lbnQiLCJzZXRVc2VyQ29tbWVudCIsInVzZVVzZXIiLCJ1c2VyIiwibG9nb3V0IiwidXNlRWZmZWN0IiwiZmV0Y2hDb21tZW50cyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJPYmplY3QiLCJlbnRyaWVzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwicG9zdCIsIm1lc3NhZ2UiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tZW50IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1hcCIsIm15Q29tbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEVBQUQsQ0FEaEI7QUFBQSxNQUNqQkMsUUFEaUI7QUFBQSxNQUNQQyxXQURPOztBQUFBLG1CQUVJRixzREFBUSxDQUFDLEtBQUQsQ0FGWjtBQUFBLE1BRWpCRyxNQUZpQjtBQUFBLE1BRVRDLFNBRlM7O0FBQUEsbUJBR0VKLHNEQUFRLENBQUMsSUFBRCxDQUhWO0FBQUEsTUFHakJLLEtBSGlCO0FBQUEsTUFHVkMsUUFIVTs7QUFBQSxtQkFJY04sc0RBQVEsQ0FBQyxFQUFELENBSnRCO0FBQUEsTUFJakJPLFdBSmlCO0FBQUEsTUFJSkMsY0FKSTs7QUFBQSxpQkFLQ0MsbUVBQU8sRUFMUjtBQUFBLE1BS2hCQyxJQUxnQixZQUtoQkEsSUFM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QUFBbUMsZUFBVyxFQUFDLDhCQUEvQztBQUE4RSxTQUFLLEVBQUMsRUFBcEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREMsRUFFRDtBQUFrQyxZQUFRLE1BQTFDO0FBQUEsd0NBQWtCLGVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGQyxDQUxiLEVBV0tKLE1BQU0sR0FBR0YsUUFBUSxDQUFDb0MsR0FBVCxDQUFhLFVBQUEzQixJQUFJO0FBQUEsV0FDdkJBLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUUwsS0FBUixJQUNJYSxNQUFNLENBQUNDLE9BQVAsQ0FBZVQsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRTCxLQUFSLENBQWYsRUFBK0JnQyxHQUEvQixDQUFtQyxVQUFDQyxTQUFELEVBQVlqQyxLQUFaO0FBQUEsYUFDL0JpQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFQLE9BQWIsR0FDSTtBQUFLLFdBQUcsRUFBRXJCLElBQUksQ0FBQyxDQUFELENBQUosR0FBVUwsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFTLFlBQUksRUFBRUssSUFBSSxDQUFDLENBQUQsQ0FBbkI7QUFBd0IsZUFBTyxFQUFFNEIsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhUCxPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixHQUlNLElBTHlCO0FBQUEsS0FBbkMsQ0FESixHQVFJLElBVG1CO0FBQUEsR0FBakIsQ0FBSCxHQVVGLElBckJUO0FBQUE7QUFBQTtBQUFBLGdpTUFESjtBQWlESCxDQTVGRDs7R0FBTWpDLFE7VUFLdUJXLDJEOzs7S0FMdkJYLFE7QUE4RlNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxmbG93ZXIuanMuYTRlNzkxZjk4NGIyNjJmMTQ5OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVVzZXIgfSBmcm9tICcuLi91dGlscy9hdXRoL3VzZVVzZXInXHJcblxyXG5jb25zdCBDb21tZW50cyA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2luZGV4LCBzZXRJbmRleF0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt1c2VyQ29tbWVudCwgc2V0VXNlckNvbW1lbnRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCB7IHVzZXIsIGxvZ291dCB9ID0gdXNlVXNlcigpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgc2V0SW5kZXgocHJvcHMuaW5kZXgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9GZXRjaGVzIGNvbW1lbnRzLCBib3RoIG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBhIGNvbW1lbnQgaXMgcG9zdGVkIGZyb20gY2xpZW50XHJcbiAgICBjb25zdCBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDb21tZW50cyhPYmplY3QuZW50cmllcyhkYXRhKSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc3QgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzL01hcmNlbFIxOTk4LyR7aW5kZXh9Lmpzb25gLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb21tZW50OiBtZXNzYWdlIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckNvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgIHt1c2VyID8gPGRpdiBpZD1cImNvbW1lbnRGb3JtXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJcIiBjb2xzPVwiMzBcIiByb3dzPVwiMlwiIHZhbHVlPXt1c2VyQ29tbWVudH0gcGxhY2Vob2xkZXI9e2BDb21tZW50IHB1YmxpY2x5IGFzIE1hcmNlbFIxOTk4YH0gb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudEJ1dHRvblwiIGRpc2FibGVkPXshdXNlckNvbW1lbnR9IG9uQ2xpY2s9eygpID0+IHBvc3QodXNlckNvbW1lbnQpfT5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PiA6IDxkaXYgaWQ9XCJjb21tZW50Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIyXCIgcGxhY2Vob2xkZXI9XCJTaWduIGluIGluIG9yZGVyIHRvIGNvbW1lbnQuXCIgdmFsdWU9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY29tbWVudEJ1dHRvblwiIGRpc2FibGVkPkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7bG9hZGVkID8gY29tbWVudHMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgdXNlclsxXVtpbmRleF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXNlclsxXVtpbmRleF0pLm1hcCgobXlDb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBteUNvbW1lbnRbMV0uY29tbWVudCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dXNlclswXSArIGluZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29tbWVudCB1c2VyPXt1c2VyWzBdfSBjb21tZW50PXtteUNvbW1lbnRbMV0uY29tbWVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICkgOiBudWxsXHJcbiAgICAgICAgICAgICkpIDogbnVsbH1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgI2NvbW1lbnRGb3Jte1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5jb21tZW50QnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRlZXBza3libHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCBkZWVwc2t5Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNvbW1lbnRCdXR0b246ZGlzYWJsZWR7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDAuNClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiXSwic291cmNlUm9vdCI6IiJ9