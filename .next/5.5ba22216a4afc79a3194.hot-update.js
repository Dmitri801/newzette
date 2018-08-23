webpackHotUpdate(5,{

/***/ "./components/Form/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("./node_modules/react-spring/dist/web.js");
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/Input.js";



var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      query = _ref.query,
      onTopicSubmit = _ref.onTopicSubmit;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["a" /* Spring */], {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, function (styles) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      style: styles,
      className: "col-md-8 input-effect",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("input", {
      style: {
        border: "none",
        background: "transparent",
        width: "100%",
        fontSize: "30px",
        fontWeight: "bold"
      },
      className: "effect-18",
      type: "text",
      onChange: onChange,
      onKeyPress: function onKeyPress(e) {
        if (e.key === "Enter") {
          onTopicSubmit(query);
          console.log(e);
        }
      },
      value: query,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("label", {
      style: {
        fontSize: "30px"
      },
      className: "text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      }
    }, "Choose Your News.."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "focus-border",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ })

})
//# sourceMappingURL=5.5ba22216a4afc79a3194.hot-update.js.map