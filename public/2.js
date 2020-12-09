(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Projects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  metaInfo: {
    title: 'Projects'
  },
  data: function data() {
    return {
      projects: [{
        name: 'Browser.is',
        web_link: 'https://browser.is',
        github_link: 'https://github.com/captenmasin/browser.is',
        image: '../../img/projects/browser_is.png',
        description: 'A small application for grabbing the current browser/device/location information. Great for debugging issues clients have raised',
        live: true
      }, {
        name: 'Skipr',
        github_link: 'https://github.com/captenmasin/YT-Intro-Skipper',
        description: 'Easily auto-skip YouTube intros depending on the channel or the title',
        live: false
      }, {
        name: 'MyBoard',
        live: false,
        description: 'An easy way to manage a set of links/images/videos in public or shared boards'
      }, {
        name: 'LifeLogr',
        live: false,
        description: 'A more personal social website, keep track of your days and how you\'re feeling'
      }, {
        name: 'Novogamer',
        live: false,
        description: 'A gaming news platform with a focus on real user reviews'
      }, {
        name: 'Nucleon',
        live: false,
        description: 'An easy to use, customizable, Laravel-based CMS'
      }]
    };
  },
  mounted: function mounted() {
    this.$Lazyload.$on('error', function (_ref, formCache) {
      var bindType = _ref.bindType,
          el = _ref.el,
          naturalHeight = _ref.naturalHeight,
          naturalWidth = _ref.naturalWidth,
          $parent = _ref.$parent,
          src = _ref.src,
          loading = _ref.loading,
          error = _ref.error;
      console.log(el, src);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "h1",
      { staticClass: "text-3xl md:text-5xl text-yellow-300 mt-10 mb-8" },
      [_vm._v("\n        Here's a list of things I've made\n    ")]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex flex-wrap -mx-2 pb-10 space-y-4 md:space-y-0" },
      _vm._l(_vm.projects, function(project) {
        return _c(
          "div",
          { staticClass: "flex w-full md:w-4/12 xl:w-3/12 mb-4 px-2" },
          [
            _c("div", { staticClass: "flex flex-col w-full text-white" }, [
              _c(
                "div",
                { staticClass: "w-full aspect-ratio-16/9 relative mb-2" },
                [
                  project.image
                    ? _c(
                        "a",
                        {
                          staticClass: "absolute top-0 right-0 w-full h-full",
                          attrs: { href: project.web_link, target: "_blank" }
                        },
                        [
                          _c("img", {
                            staticClass: "absolute top-0 right-0 w-full h-full",
                            attrs: {
                              alt: "Screenshot of " + project.name,
                              src: project.image
                            }
                          })
                        ]
                      )
                    : _c(
                        "div",
                        {
                          staticClass:
                            "bg-black bg-opacity-50 absolute top-0 right-0 w-full h-full flex align-center justify-center"
                        },
                        [_vm._m(0, true)]
                      )
                ]
              ),
              _vm._v(" "),
              _c("h2", { staticClass: "text-xl" }, [
                _vm._v(
                  "\n                    " +
                    _vm._s(project.name) +
                    "\n                "
                )
              ]),
              _vm._v(" "),
              _c("ul", { staticClass: "text-sm space-y-1 mb-2 mt-1" }, [
                project.web_link
                  ? _c("li", [
                      _c(
                        "a",
                        {
                          staticClass:
                            "hover:bg-red-100 hover:text-yellow-800 py-2",
                          attrs: { href: project.web_link }
                        },
                        [
                          _vm._v(
                            "\n                            " +
                              _vm._s(project.web_link) +
                              "\n                        "
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                project.github_link
                  ? _c("li", [
                      _c(
                        "a",
                        {
                          staticClass:
                            "hover:bg-red-100 hover:text-yellow-800 py-2",
                          attrs: { href: project.github_link }
                        },
                        [
                          _vm._v(
                            "\n                            Github Repo\n                        "
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ]),
              _vm._v(" "),
              project.description
                ? _c("p", { staticClass: "font-sans text-xs" }, [
                    _vm._v(
                      "\n                    " +
                        _vm._s(project.description) +
                        "\n                "
                    )
                  ])
                : _vm._e()
            ])
          ]
        )
      }),
      0
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex text-3xl md:text-xl lg:text-3xl text-yellow-300 transform -rotate-45 text-center items-center"
      },
      [
        _vm._v("\n                            Coming"),
        _c("br"),
        _vm._v("soon!\n                        ")
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Projects.vue":
/*!*****************************************!*\
  !*** ./resources/js/Pages/Projects.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=42e41223& */ "./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Projects.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/Pages/Projects.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=42e41223& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Projects.vue?vue&type=template&id=42e41223&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_42e41223___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);