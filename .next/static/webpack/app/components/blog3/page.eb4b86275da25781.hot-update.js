"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/components/blog3/page",{

/***/ "(app-pages-browser)/./src/app/components/blog3/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/blog3/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Blog1 = ()=>{\n    _s();\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [commentInput, setCommentInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleAddComment = ()=>{\n        if (commentInput.trim() !== \"\") {\n            setComments([\n                ...comments,\n                commentInput\n            ]);\n            setCommentInput(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                height: 100,\n                width: 900,\n                src: \"/pa.png\",\n                alt: \"First Blog Post\",\n                className: \"  object-cover rounded-lg mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"5 of the Most Influential Machine Learning Papers of 2024\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-gray-700\",\n                children: \"Artificial intelligence (AI) research particularly in the machine learning (ML) domain continues to increase the amount of attention it receives worldwide. To give you an idea of the scientific hype around AI and ML, the number of works uploaded to the open-access pre-print archive ArXiv has nearly doubled since late 2023, with over 30K AI-related papers accessible in the repository at the end of 2024. As you may guess, most of them are ML-focused; after all, deep learning architectures, generative AI solutions, and almost all computer vision and natural language processing systems nowadays are, in essence, ML systems that learn from data to perform increasingly astonishing tasks. This article lists 5 of the most influential ML papers that largely shaped AI research trends throughout 2024. While the links provided are to their version in ArXiv repository these papers are published or in the publication process in top conferences or journals.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Vision Transformers Need Registers (T. Darcet et al.)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 100\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \" The paper received one of the latest Outstanding Paper Awards at the International Conference of Learning Representations (ICLR 2024) and, whilst is has only been published in ArXiv in recent months, it is quickly attracting high audiences and citations. The authors investigate vision transformers’ issue of occasionally generating high-value tokens—in less important image areas, like backgrounds. They address this by adding extra tokens to the input called register tokens, thereby improving model performance and enabling better results in visual tasks like object detection..\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 331\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Why Larger Language Models Do In-context Learning Differently? (Z. Shi et al.)\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 119\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \" The highly cited study released in late spring 2024 shows that small language models (SLMs) are more robust to noise and “less easily distracted” than their larger counterparts (LLMs), due to how they put emphasis on a narrower selection of hidden features — the features learned throughout the encoder and decoder layers of their transformer architecture — compared to LLMs. The study sheds light on a new level of understanding and interpreting the way these complex models operate.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 38,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold\",\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: commentInput,\n                                onChange: (e)=>setCommentInput(e.target.value),\n                                className: \"w-full border rounded-lg p-2\",\n                                placeholder: \"Write a comment...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAddComment,\n                                className: \"bg-blue-500 text-white px-4 py-2 rounded-lg mt-2\",\n                                children: \"Add Comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: comments.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"space-y-4\",\n                            children: comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-gray-100 p-4 rounded-lg\",\n                                    children: comment\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"No comments yet. Be the first to comment!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog3\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog1, \"FbbSVVnHIWQRFtG17N5tdzdfGBQ=\");\n_c = Blog1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog1);\nvar _c;\n$RefreshReg$(_c, \"Blog1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ibG9nMy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUVqQyxNQUFNRyxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1NLG1CQUFtQjtRQUN2QixJQUFJRixhQUFhRyxJQUFJLE9BQU8sSUFBSTtZQUM5QkosWUFBWTttQkFBSUQ7Z0JBQVVFO2FBQWE7WUFDdkNDLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCxrREFBS0E7Z0JBQ05ZLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ0xDLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQUdMLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDTTtnQkFBRU4sV0FBVTswQkFBcUI7Ozs7OzswQkFLOUIsOERBQUNPOzs7OzswQkFDTCw4REFBQ0Y7Z0JBQUdMLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQTBELDhEQUFDTzs7Ozs7MEJBQzlGLDhEQUFDRDswQkFBRTs7Ozs7OzBCQUVpVSw4REFBQ0M7Ozs7OzBCQUMzVSw4REFBQ0Y7Z0JBQUdMLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQW1GLDhEQUFDTzs7Ozs7MEJBQ3ZILDhEQUFDRDswQkFBRTs7Ozs7OzBCQUlHLDhEQUFDUDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNRO3dCQUFHUixXQUFVO2tDQUF5Qjs7Ozs7O2tDQUN2Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDUztnQ0FDQ0MsTUFBSztnQ0FDTEMsT0FBT2hCO2dDQUNQaUIsVUFBVSxDQUFDQyxJQUFNakIsZ0JBQWdCaUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO2dDQUMvQ1gsV0FBVTtnQ0FDVmUsYUFBWTs7Ozs7OzBDQUVkLDhEQUFDQztnQ0FDQ0MsU0FBU3BCO2dDQUNURyxXQUFVOzBDQUNYOzs7Ozs7Ozs7Ozs7a0NBSUgsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNaUCxTQUFTeUIsTUFBTSxHQUFHLGtCQUNqQiw4REFBQ0M7NEJBQUduQixXQUFVO3NDQUNYUCxTQUFTMkIsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ0M7b0NBQWV2QixXQUFVOzhDQUN2QnFCO21DQURNQzs7Ozs7Ozs7O3NEQU1iLDhEQUFDaEI7NEJBQUVOLFdBQVU7c0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QztHQXJFTVI7S0FBQUE7QUF1RU4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL2Jsb2czL3BhZ2UudHN4PzhiYzIiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBCbG9nMSA9ICgpID0+IHtcclxuICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSk7XHJcbiAgY29uc3QgW2NvbW1lbnRJbnB1dCwgc2V0Q29tbWVudElucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVBZGRDb21tZW50ID0gKCkgPT4ge1xyXG4gICAgaWYgKGNvbW1lbnRJbnB1dC50cmltKCkgIT09IFwiXCIpIHtcclxuICAgICAgc2V0Q29tbWVudHMoWy4uLmNvbW1lbnRzLCBjb21tZW50SW5wdXRdKTtcclxuICAgICAgc2V0Q29tbWVudElucHV0KFwiXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1heC13LTR4bCBteC1hdXRvIHAtNFwiPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgIHdpZHRoPXs5MDB9XHJcbiAgICAgICAgc3JjPVwiL3BhLnBuZ1wiXHJcbiAgICAgICAgYWx0PVwiRmlyc3QgQmxvZyBQb3N0XCJcclxuICAgICAgICBjbGFzc05hbWU9XCIgIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIG1iLTRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+NSBvZiB0aGUgTW9zdCBJbmZsdWVudGlhbCBNYWNoaW5lIExlYXJuaW5nIFBhcGVycyBvZiAyMDI0PC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgIEFydGlmaWNpYWwgaW50ZWxsaWdlbmNlIChBSSkgcmVzZWFyY2ggcGFydGljdWxhcmx5IGluIHRoZSBtYWNoaW5lIGxlYXJuaW5nIChNTCkgZG9tYWluIGNvbnRpbnVlcyB0byBpbmNyZWFzZSB0aGUgYW1vdW50IG9mIGF0dGVudGlvbiBpdCByZWNlaXZlcyB3b3JsZHdpZGUuIFRvIGdpdmUgeW91IGFuIGlkZWEgb2YgdGhlIHNjaWVudGlmaWMgaHlwZSBhcm91bmQgQUkgYW5kIE1MLCB0aGUgbnVtYmVyIG9mIHdvcmtzIHVwbG9hZGVkIHRvIHRoZSBvcGVuLWFjY2VzcyBwcmUtcHJpbnQgYXJjaGl2ZSBBclhpdiBoYXMgbmVhcmx5IGRvdWJsZWQgc2luY2UgbGF0ZSAyMDIzLCB3aXRoIG92ZXIgMzBLIEFJLXJlbGF0ZWQgcGFwZXJzIGFjY2Vzc2libGUgaW4gdGhlIHJlcG9zaXRvcnkgYXQgdGhlIGVuZCBvZiAyMDI0LiBBcyB5b3UgbWF5IGd1ZXNzLCBtb3N0IG9mIHRoZW0gYXJlIE1MLWZvY3VzZWQ7IGFmdGVyIGFsbCwgZGVlcCBsZWFybmluZyBhcmNoaXRlY3R1cmVzLCBnZW5lcmF0aXZlIEFJIHNvbHV0aW9ucywgYW5kIGFsbW9zdCBhbGwgY29tcHV0ZXIgdmlzaW9uIGFuZCBuYXR1cmFsIGxhbmd1YWdlIHByb2Nlc3Npbmcgc3lzdGVtcyBub3dhZGF5cyBhcmUsIGluIGVzc2VuY2UsIE1MIHN5c3RlbXMgdGhhdCBsZWFybiBmcm9tIGRhdGEgdG8gcGVyZm9ybSBpbmNyZWFzaW5nbHkgYXN0b25pc2hpbmcgdGFza3MuXHJcblxyXG5UaGlzIGFydGljbGUgbGlzdHMgNSBvZiB0aGUgbW9zdCBpbmZsdWVudGlhbCBNTCBwYXBlcnMgdGhhdCBsYXJnZWx5IHNoYXBlZCBBSSByZXNlYXJjaCB0cmVuZHMgdGhyb3VnaG91dCAyMDI0LiBXaGlsZSB0aGUgbGlua3MgcHJvdmlkZWQgYXJlIHRvIHRoZWlyIHZlcnNpb24gaW4gQXJYaXYgcmVwb3NpdG9yeSB0aGVzZSBwYXBlcnMgYXJlIHB1Ymxpc2hlZCBvciBpbiB0aGUgcHVibGljYXRpb24gcHJvY2VzcyBpbiB0b3AgY29uZmVyZW5jZXMgb3Igam91cm5hbHMuIFxyXG4gICAgICBcclxuICAgICAgPC9wPjxici8+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGRcIj5WaXNpb24gVHJhbnNmb3JtZXJzIE5lZWQgUmVnaXN0ZXJzIChULiBEYXJjZXQgZXQgYWwuKTwvaDE+PGJyLz5cclxuICAgICAgPHA+IFRoZSBwYXBlciByZWNlaXZlZCBvbmUgb2YgdGhlIGxhdGVzdCBPdXRzdGFuZGluZyBQYXBlciBBd2FyZHMgYXQgdGhlIEludGVybmF0aW9uYWwgQ29uZmVyZW5jZSBvZiBMZWFybmluZyBSZXByZXNlbnRhdGlvbnMgKElDTFIgMjAyNCkgYW5kLCB3aGlsc3QgaXMgaGFzIG9ubHkgYmVlbiBwdWJsaXNoZWQgaW4gQXJYaXYgaW4gcmVjZW50IG1vbnRocywgaXQgaXMgcXVpY2tseSBhdHRyYWN0aW5nIGhpZ2ggYXVkaWVuY2VzIGFuZCBjaXRhdGlvbnMuXHJcblxyXG5UaGUgYXV0aG9ycyBpbnZlc3RpZ2F0ZSB2aXNpb24gdHJhbnNmb3JtZXJz4oCZIGlzc3VlIG9mIG9jY2FzaW9uYWxseSBnZW5lcmF0aW5nIGhpZ2gtdmFsdWUgdG9rZW5z4oCUaW4gbGVzcyBpbXBvcnRhbnQgaW1hZ2UgYXJlYXMsIGxpa2UgYmFja2dyb3VuZHMuIFRoZXkgYWRkcmVzcyB0aGlzIGJ5IGFkZGluZyBleHRyYSB0b2tlbnMgdG8gdGhlIGlucHV0IGNhbGxlZCByZWdpc3RlciB0b2tlbnMsIHRoZXJlYnkgaW1wcm92aW5nIG1vZGVsIHBlcmZvcm1hbmNlIGFuZCBlbmFibGluZyBiZXR0ZXIgcmVzdWx0cyBpbiB2aXN1YWwgdGFza3MgbGlrZSBvYmplY3QgZGV0ZWN0aW9uLi48L3A+PGJyLz5cclxuPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPldoeSBMYXJnZXIgTGFuZ3VhZ2UgTW9kZWxzIERvIEluLWNvbnRleHQgTGVhcm5pbmcgRGlmZmVyZW50bHk/IChaLiBTaGkgZXQgYWwuKTwvaDE+PGJyLz5cclxuPHA+IFRoZSBoaWdobHkgY2l0ZWQgc3R1ZHkgcmVsZWFzZWQgaW4gbGF0ZSBzcHJpbmcgMjAyNCBzaG93cyB0aGF0IHNtYWxsIGxhbmd1YWdlIG1vZGVscyAoU0xNcykgYXJlIG1vcmUgcm9idXN0IHRvIG5vaXNlIGFuZCDigJxsZXNzIGVhc2lseSBkaXN0cmFjdGVk4oCdIHRoYW4gdGhlaXIgbGFyZ2VyIGNvdW50ZXJwYXJ0cyAoTExNcyksIGR1ZSB0byBob3cgdGhleSBwdXQgZW1waGFzaXMgb24gYSBuYXJyb3dlciBzZWxlY3Rpb24gb2YgaGlkZGVuIGZlYXR1cmVzIOKAlCB0aGUgZmVhdHVyZXMgbGVhcm5lZCB0aHJvdWdob3V0IHRoZSBlbmNvZGVyIGFuZCBkZWNvZGVyIGxheWVycyBvZiB0aGVpciB0cmFuc2Zvcm1lciBhcmNoaXRlY3R1cmUg4oCUIGNvbXBhcmVkIHRvIExMTXMuIFRoZSBzdHVkeSBzaGVkcyBsaWdodCBvbiBhIG5ldyBsZXZlbCBvZiB1bmRlcnN0YW5kaW5nIGFuZCBpbnRlcnByZXRpbmcgdGhlIHdheSB0aGVzZSBjb21wbGV4IG1vZGVscyBvcGVyYXRlLlxyXG4gIFxyXG48L3A+XHJcbiAgICAgIHsvKiBDb21tZW50cyBTZWN0aW9uICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LThcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZFwiPkNvbW1lbnRzPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtjb21tZW50SW5wdXR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29tbWVudElucHV0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciByb3VuZGVkLWxnIHAtMlwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV3JpdGUgYSBjb21tZW50Li4uXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUFkZENvbW1lbnR9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQtbGcgbXQtMlwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIEFkZCBDb21tZW50XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTZcIj5cclxuICAgICAgICAgIHtjb21tZW50cy5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgICAge2NvbW1lbnRzLm1hcCgoY29tbWVudCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTQgcm91bmRlZC1sZ1wiPlxyXG4gICAgICAgICAgICAgICAgICB7Y29tbWVudH1cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwXCI+Tm8gY29tbWVudHMgeWV0LiBCZSB0aGUgZmlyc3QgdG8gY29tbWVudCE8L3A+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nMTtcclxuIl0sIm5hbWVzIjpbIkltYWdlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsIkJsb2cxIiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsImNvbW1lbnRJbnB1dCIsInNldENvbW1lbnRJbnB1dCIsImhhbmRsZUFkZENvbW1lbnQiLCJ0cmltIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwid2lkdGgiLCJzcmMiLCJhbHQiLCJoMSIsInAiLCJiciIsImgyIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsZW5ndGgiLCJ1bCIsIm1hcCIsImNvbW1lbnQiLCJpbmRleCIsImxpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/blog3/page.tsx\n"));

/***/ })

});