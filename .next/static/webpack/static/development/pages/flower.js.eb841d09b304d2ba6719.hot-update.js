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



var _this = undefined,
    _jsxFileName = "C:\\Users\\Marcel\\Documents\\kodprojekt\\arbetsprovMarcelWillAndSkill\\components\\Comments.js",
    _s = $RefreshSig$();



var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



var Comments = function Comments() {
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _this.fetchComments();

    setIndex(_this.props.index);
  }, []); //Fetches comments, both on page load and when a comment is posted from client

  fetchComments = /*#__PURE__*/function () {
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

  handleChange = function handleChange(e) {
    setUserComment(e.target.value);
  };

  post = /*#__PURE__*/function () {
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
    className: "jsx-1212496929",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("h2", {
    className: "jsx-1212496929",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, "Comments"), __jsx("div", {
    id: "commentForm",
    className: "jsx-1212496929",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("textarea", {
    id: "",
    cols: "30",
    rows: "2",
    value: _this.state.userComment,
    onChange: _this.handleChange,
    className: "jsx-1212496929",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: function onClick() {
      return _this.post(_this.state.userComment);
    },
    className: "jsx-1212496929",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "Comment")), _this.state.loaded ? _this.state.comments.map(function (user) {
    return user[1][_this.state.index] ? Object.entries(user[1][_this.state.index]).map(function (myComment, index) {
      return myComment[1].comment ? __jsx("div", {
        key: user[0] + index,
        className: "jsx-1212496929",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 29
        }
      }, __jsx(_Comment__WEBPACK_IMPORTED_MODULE_4__["default"], {
        user: user[0],
        comment: myComment[1].comment,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 33
        }
      })) : null;
    }) : null;
  }) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1212496929",
    __self: _this
  }, "#commentForm.jsx-1212496929{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}textarea.jsx-1212496929{resize:none;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcTWFyY2VsXFxEb2N1bWVudHNcXGtvZHByb2pla3RcXGFyYmV0c3Byb3ZNYXJjZWxXaWxsQW5kU2tpbGxcXGNvbXBvbmVudHNcXENvbW1lbnRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEd0IsQUFHa0MsQUFJRCxZQUNELFdBQ2YsbURBTGUsV0FDZiIsImZpbGUiOiJDOlxcVXNlcnNcXE1hcmNlbFxcRG9jdW1lbnRzXFxrb2Rwcm9qZWt0XFxhcmJldHNwcm92TWFyY2VsV2lsbEFuZFNraWxsXFxjb21wb25lbnRzXFxDb21tZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21tZW50IGZyb20gJy4vQ29tbWVudCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb21tZW50cyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb21tZW50cywgc2V0Q29tbWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRlZCwgc2V0TG9hZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtpbmRleCwgc2V0SW5kZXhdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdXNlckNvbW1lbnQsIHNldFVzZXJDb21tZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgc2V0SW5kZXgodGhpcy5wcm9wcy5pbmRleClcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICAvL0ZldGNoZXMgY29tbWVudHMsIGJvdGggb24gcGFnZSBsb2FkIGFuZCB3aGVuIGEgY29tbWVudCBpcyBwb3N0ZWQgZnJvbSBjbGllbnRcclxuICAgIGZldGNoQ29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmxvd2Vycy1tb2NrLWRhdGEuZmlyZWJhc2Vpby5jb20vY29tbWVudHMuanNvbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgICAgIHNldENvbW1lbnRzKE9iamVjdC5lbnRyaWVzKGRhdGEpKTtcclxuICAgICAgICBzZXRMb2FkZWQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgICAgICBzZXRVc2VyQ29tbWVudChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9zdCA9IGFzeW5jIChtZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vZmxvd2Vycy1tb2NrLWRhdGEuZmlyZWJhc2Vpby5jb20vY29tbWVudHMvTWFyY2VsUjE5OTgvJHt0aGlzLnN0YXRlLmluZGV4fS5qc29uYCwge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY29tbWVudDogbWVzc2FnZSB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaENvbW1lbnRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlckNvbW1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5Db21tZW50czwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJjb21tZW50Rm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiXCIgY29scz1cIjMwXCIgcm93cz1cIjJcIiB2YWx1ZT17dGhpcy5zdGF0ZS51c2VyQ29tbWVudH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB0aGlzLnBvc3QodGhpcy5zdGF0ZS51c2VyQ29tbWVudCl9PkNvbW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLmxvYWRlZCA/IHRoaXMuc3RhdGUuY29tbWVudHMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICAgICAgdXNlclsxXVt0aGlzLnN0YXRlLmluZGV4XSA/IChcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh1c2VyWzFdW3RoaXMuc3RhdGUuaW5kZXhdKS5tYXAoKG15Q29tbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXlDb21tZW50WzFdLmNvbW1lbnQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXJbMF0gKyBpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbW1lbnQgdXNlcj17dXNlclswXX0gY29tbWVudD17bXlDb21tZW50WzFdLmNvbW1lbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICApIDogbnVsbFxyXG4gICAgICAgICAgICApKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICNjb21tZW50Rm9ybXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50czsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\Marcel\\\\Documents\\\\kodprojekt\\\\arbetsprovMarcelWillAndSkill\\\\components\\\\Comments.js */"));
};

_s(Comments, "K1hC0AwUMiXOSjjOW1r/SDYxRCk=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRzIiwidXNlU3RhdGUiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwibG9hZGVkIiwic2V0TG9hZGVkIiwiaW5kZXgiLCJzZXRJbmRleCIsInVzZXJDb21tZW50Iiwic2V0VXNlckNvbW1lbnQiLCJ1c2VFZmZlY3QiLCJmZXRjaENvbW1lbnRzIiwicHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwiT2JqZWN0IiwiZW50cmllcyIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInBvc3QiLCJtZXNzYWdlIiwic3RhdGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJjb21tZW50IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJlcnJvciIsIm1hcCIsInVzZXIiLCJteUNvbW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2FDLHNEQUFRLENBQUMsRUFBRCxDQURyQjtBQUFBLE1BQ1pDLFFBRFk7QUFBQSxNQUNGQyxXQURFOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVaRyxNQUZZO0FBQUEsTUFFSkMsU0FGSTs7QUFBQSxtQkFHT0osc0RBQVEsQ0FBQyxJQUFELENBSGY7QUFBQSxNQUdaSyxLQUhZO0FBQUEsTUFHTEMsUUFISzs7QUFBQSxtQkFJbUJOLHNEQUFRLENBQUMsRUFBRCxDQUozQjtBQUFBLE1BSVpPLFdBSlk7QUFBQSxNQUlDQyxjQUpEOztBQU1uQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1osU0FBSSxDQUFDQyxhQUFMOztBQUNBSixZQUFRLENBQUMsS0FBSSxDQUFDSyxLQUFMLENBQVdOLEtB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MEMrQixHQUExQyxDQUE4QyxVQUFDRSxTQUFELEVBQVlqQyxLQUFaO0FBQUEsYUFDMUNpQyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWFSLE9BQWIsR0FDSTtBQUFLLFdBQUcsRUFBRU8sSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVaEMsS0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0ksTUFBQyxnREFBRDtBQUFTLFlBQUksRUFBRWdDLElBQUksQ0FBQyxDQUFELENBQW5CO0FBQXdCLGVBQU8sRUFBRUMsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhUixPQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosQ0FESixHQUlNLElBTG9DO0FBQUEsS0FBOUMsQ0FESixHQVFJLElBVHlDO0FBQUEsR0FBNUIsQ0FBcEIsR0FVSSxJQWhCVDtBQUFBO0FBQUE7QUFBQSxvL0lBREo7QUErQkgsQ0F6RUQ7O0dBQU0vQixROztLQUFBQSxRO0FBMkVTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZmxvd2VyLmpzLmViODQxZDA5YjMwNGQyYmE2NzE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29tbWVudCBmcm9tICcuL0NvbW1lbnQnO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgQ29tbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3VzZXJDb21tZW50LCBzZXRVc2VyQ29tbWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgIHNldEluZGV4KHRoaXMucHJvcHMuaW5kZXgpXHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgLy9GZXRjaGVzIGNvbW1lbnRzLCBib3RoIG9uIHBhZ2UgbG9hZCBhbmQgd2hlbiBhIGNvbW1lbnQgaXMgcG9zdGVkIGZyb20gY2xpZW50XHJcbiAgICBmZXRjaENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzLmpzb24nKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgICBzZXRDb21tZW50cyhPYmplY3QuZW50cmllcyhkYXRhKSk7XHJcbiAgICAgICAgc2V0TG9hZGVkKHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlckNvbW1lbnQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvc3QgPSBhc3luYyAobWVzc2FnZSkgPT4ge1xyXG4gICAgICAgIGlmIChtZXNzYWdlICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGBodHRwczovL2Zsb3dlcnMtbW9jay1kYXRhLmZpcmViYXNlaW8uY29tL2NvbW1lbnRzL01hcmNlbFIxOTk4LyR7dGhpcy5zdGF0ZS5pbmRleH0uanNvbmAsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbW1lbnQ6IG1lc3NhZ2UgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hDb21tZW50cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFVzZXJDb21tZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+Q29tbWVudHM8L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiY29tbWVudEZvcm1cIj5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cIlwiIGNvbHM9XCIzMFwiIHJvd3M9XCIyXCIgdmFsdWU9e3RoaXMuc3RhdGUudXNlckNvbW1lbnR9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5wb3N0KHRoaXMuc3RhdGUudXNlckNvbW1lbnQpfT5Db21tZW50PC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5sb2FkZWQgPyB0aGlzLnN0YXRlLmNvbW1lbnRzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICAgIHVzZXJbMV1bdGhpcy5zdGF0ZS5pbmRleF0gPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModXNlclsxXVt0aGlzLnN0YXRlLmluZGV4XSkubWFwKChteUNvbW1lbnQsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG15Q29tbWVudFsxXS5jb21tZW50ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXt1c2VyWzBdICsgaW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb21tZW50IHVzZXI9e3VzZXJbMF19IGNvbW1lbnQ9e215Q29tbWVudFsxXS5jb21tZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgKSA6IG51bGxcclxuICAgICAgICAgICAgKSkgOiBudWxsfVxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAjY29tbWVudEZvcm17XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tbWVudHM7Il0sInNvdXJjZVJvb3QiOiIifQ==