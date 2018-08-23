module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Form/CatagoriesBtns.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/CatagoriesBtns.js";



var CatagoriesBtns = function CatagoriesBtns(_ref) {
  var onChooseNewsClick = _ref.onChooseNewsClick,
      onHeadlinesClick = _ref.onHeadlinesClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
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
      style: styles,
      className: "col-md-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
      className: "text-center text-success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, "Catagories"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      onClick: onHeadlinesClick,
      style: {
        color: "#fff",
        padding: "30px"
      },
      className: "btn btn-outline-success btn-lg float-left catagoriesLeft",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, "Top Headlines in the US"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      onClick: onChooseNewsClick,
      style: {
        color: "#fff",
        padding: "30px"
      },
      className: "btn btn-outline-success btn-lg float-right catagoriesRight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, "Choose Your News.."));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (CatagoriesBtns);

/***/ }),

/***/ "./components/Form/HeadlineSelect.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/HeadlineSelect.js";



var HeadlineSelect = function HeadlineSelect(_ref) {
  var onTopicSelect = _ref.onTopicSelect;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
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
      style: styles,
      className: "col-md-8 d-flex justify-content-center align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      id: "mainselection",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("select", {
      onChange: onTopicSelect,
      className: "p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      disabled: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    }, "Select an Option"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "politics",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    }, "Politics"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "business",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      }
    }, "Business"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "entertainment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      }
    }, "Entertainment"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "health",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, "Health"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "science",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, "Science"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "sports",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Sports"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("option", {
      value: "technology",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }, "Technology"))));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (HeadlineSelect);

/***/ }),

/***/ "./components/Form/Input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/Input.js";



var Input = function Input(_ref) {
  var onChange = _ref.onChange,
      query = _ref.query,
      onTopicSubmit = _ref.onTopicSubmit;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
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
          e.target.blur();
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

/***/ }),

/***/ "./components/Form/SubmitBtn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Form/SubmitBtn.js";



var SubmitBtn = function SubmitBtn(_ref) {
  var query = _ref.query,
      onTopicSubmit = _ref.onTopicSubmit;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
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

/***/ }),

/***/ "./components/Layout/BackBtn.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Layout/BackBtn.js";



var backBtn = function backBtn(_ref) {
  var onBackClick = _ref.onBackClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
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
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
      onClick: onBackClick,
      className: "float-right p-2 backBtn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
      className: "fas fa-arrow-left fa-2x text-light p-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      }
    }), " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
      className: "lead text-light",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      }
    }, "Catagories")));
  });
};

/* harmony default export */ __webpack_exports__["a"] = (backBtn);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/Layout/Navbar.js";


var Navbar = function Navbar(_ref) {
  var onBrandClick = _ref.onBrandClick;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar navbar-expand fixed-top navbar-dark bg-primary mb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    style: {
      textAlign: "center",
      color: "#fff"
    },
    className: "navbar-brand",
    onClick: onBrandClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, "Newzette")));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./components/News/LoadingWheel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/News/LoadingWheel.js";


var LoadingWheel = function LoadingWheel() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "spinnerA",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (LoadingWheel);

/***/ }),

/***/ "./components/News/NewsList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring__ = __webpack_require__("react-spring");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_spring___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_spring__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/components/News/NewsList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NewsList =
/*#__PURE__*/
function (_Component) {
  _inherits(NewsList, _Component);

  function NewsList() {
    _classCallCheck(this, NewsList);

    return _possibleConstructorReturn(this, (NewsList.__proto__ || Object.getPrototypeOf(NewsList)).apply(this, arguments));
  }

  _createClass(NewsList, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          news = _props.news,
          error = _props.error;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-8 d-flex flex-column justify-content-center align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      }, error === "" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      }, function (styles) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: styles,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 11
          }
        }, news.map(function (newsItem) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
            className: "list",
            key: newsItem.publishedAt,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
            className: "newsImage",
            href: newsItem.url,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
            className: "img-fluid img-thumbnail mb-3 mt-2",
            src: newsItem.urlToImage !== null ? newsItem.urlToImage : "http://www.pbs.org/program/lunchbox_plugins/s/photogallery/img/no-image-available.jpg",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            className: "source",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          }, newsItem.source.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            className: "title",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            }
          }, newsItem.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
            className: "description",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            }
          }, newsItem.description));
        }));
      }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_spring__["Spring"], {
        from: {
          opacity: 0
        },
        to: {
          opacity: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, function (styles) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
          style: styles,
          className: "alert alert-danger",
          role: "alert",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          }
        }, error);
      }));
    }
  }]);

  return NewsList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (NewsList);

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_News_NewsList__ = __webpack_require__("./components/News/NewsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_Navbar__ = __webpack_require__("./components/Layout/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form_Input__ = __webpack_require__("./components/Form/Input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Form_CatagoriesBtns__ = __webpack_require__("./components/Form/CatagoriesBtns.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Form_HeadlineSelect__ = __webpack_require__("./components/Form/HeadlineSelect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout_BackBtn__ = __webpack_require__("./components/Layout/BackBtn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Form_SubmitBtn__ = __webpack_require__("./components/Form/SubmitBtn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_News_LoadingWheel__ = __webpack_require__("./components/News/LoadingWheel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("isomorphic-unfetch");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__("jquery");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scss_style_scss__ = __webpack_require__("./scss/style.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__scss_style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__scss_style_scss__);
var _jsxFileName = "/Users/dmitriysharshiner/Desktop/newzette/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }














var Index =
/*#__PURE__*/
function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        mode: "catagories",
        query: "",
        headlineTopic: "",
        newsLoading: false,
        news: [],
        error: ""
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleTextInputChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          query: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleTopicSelectChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState({
          headlineTopic: e.target.value
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onTopicSubmit", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(topic) {
        var mode = _this.state.mode;

        if (mode === "topHeadlines") {
          _this.setState({
            newsLoading: true
          });

          __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()("https://newsapi.org/v2/top-headlines?country=us&category=".concat(topic, "&apiKey=5026a89ef4104655943e8a0c6697f480")).then(function (res) {
            return res.json();
          }).then(function (data) {
            return _this.setState({
              news: data.articles
            });
          });
          setTimeout(function () {
            _this.setState({
              newsLoading: false
            });
          }, 1500);
        } else {
          if (topic !== "") {
            _this.setState({
              newsLoading: true,
              query: ""
            });

            __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default()("https://newsapi.org/v2/everything?q=".concat(topic, "&apiKey=5026a89ef4104655943e8a0c6697f480")).then(function (res) {
              return res.json();
            }).then(function (data) {
              if (data.articles.length > 0) {
                return _this.setState({
                  error: "",
                  news: data.articles
                });
              } else {
                _this.setState({
                  error: "We wheren't able to find any news with that search..."
                });
              }
            });
            setTimeout(function () {
              _this.setState({
                newsLoading: false
              });
            }, 1500);
          } else {
            _this.setState({
              error: "Please enter a topic to search for"
            });
          }
        }
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onChooseNewsClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          mode: "chooseNews"
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onHeadlinesClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          mode: "topHeadlines"
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onBackToCatagoriesClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          mode: "catagories",
          query: "",
          headlineTopic: "",
          newsLoading: false,
          news: [],
          error: ""
        });
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/sw.js").catch(function (err) {
          return console.error("Service worker registration failed", err);
        });
      } else {
        console.log("Service worker not supported");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          query = _state.query,
          mode = _state.mode,
          headlineTopic = _state.headlineTopic,
          news = _state.news,
          newsLoading = _state.newsLoading,
          error = _state.error;
      var modeDisplay;
      var newsRender;

      if (mode === "catagories") {
        modeDisplay = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Form_CatagoriesBtns__["a" /* default */], {
          onHeadlinesClick: this.onHeadlinesClick,
          onChooseNewsClick: this.onChooseNewsClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        });
      } else if (mode === "chooseNews") {
        modeDisplay = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_Form_Input__["a" /* default */], {
          onChange: this.handleTextInputChange,
          query: query,
          onTopicSubmit: this.onTopicSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          }
        });
      } else if (mode === "topHeadlines") {
        modeDisplay = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_Form_HeadlineSelect__["a" /* default */], {
          onTopicSelect: this.handleTopicSelectChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 145
          }
        });
      }

      if (mode === "chooseNews" || mode === "topHeadlines") {
        if (newsLoading) {
          newsRender = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_News_LoadingWheel__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            }
          });
        } else {
          newsRender = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_News_NewsList__["a" /* default */], {
            news: news,
            error: error,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            }
          });
        }
      }

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout_Navbar__["a" /* default */], {
        onBrandClick: this.onBackToCatagoriesClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          height: "150px",
          marginTop: "100px"
        },
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, mode === "chooseNews" || mode === "topHeadlines" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_Layout_BackBtn__["a" /* default */], {
        onBackClick: this.onBackToCatagoriesClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }) : ""), modeDisplay), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }), mode === "chooseNews" || mode === "topHeadlines" ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_Form_SubmitBtn__["a" /* default */], {
        query: mode === "chooseNews" ? query : headlineTopic,
        onTopicSubmit: this.onTopicSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }) : "", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }), newsRender, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "col-md-2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      })));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./scss/style.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "isomorphic-unfetch":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "jquery":
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-spring":
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map