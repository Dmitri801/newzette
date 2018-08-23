webpackHotUpdate(5,{

/***/ "./components/Form/SubmitBtn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("./node_modules/react-spring/dist/web.js");
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/SubmitBtn.js";



var SubmitBtn = function SubmitBtn(_ref) {
  var query = _ref.query,
      onTopicSubmit = _ref.onTopicSubmit;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["a" /* Spring */], {
    delay: 400,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, function (styles) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "col-md-8",
      style: styles,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      onClick: function onClick() {
        return onTopicSubmit(query);
      },
      className: "btn btn-success btn-block btn-lg text-light submitBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "Get"));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (SubmitBtn);

/***/ })

})
//# sourceMappingURL=5.02e29340d69b60634193.hot-update.js.map