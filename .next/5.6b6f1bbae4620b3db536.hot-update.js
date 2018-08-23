webpackHotUpdate(5,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_News_NewsList__ = __webpack_require__("./components/News/NewsList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout_Navbar__ = __webpack_require__("./components/Layout/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Form_Input__ = __webpack_require__("./components/Form/Input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Form_CatagoriesBtns__ = __webpack_require__("./components/Form/CatagoriesBtns.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_Form_HeadlineSelect__ = __webpack_require__("./components/Form/HeadlineSelect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_Layout_BackBtn__ = __webpack_require__("./components/Layout/BackBtn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_Form_SubmitBtn__ = __webpack_require__("./components/Form/SubmitBtn.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_News_LoadingWheel__ = __webpack_require__("./components/News/LoadingWheel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_isomorphic_unfetch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.6b6f1bbae4620b3db536.hot-update.js.map