"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/components/blog1/page",{

/***/ "(app-pages-browser)/./src/app/components/blog1/page.tsx":
/*!*******************************************!*\
  !*** ./src/app/components/blog1/page.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst Blog1 = ()=>{\n    _s();\n    const [comments, setComments] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [commentInput, setCommentInput] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const handleAddComment = ()=>{\n        if (commentInput.trim() !== \"\") {\n            setComments([\n                ...comments,\n                commentInput\n            ]);\n            setCommentInput(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                height: 100,\n                width: 900,\n                src: \"/bb.png\",\n                alt: \"First Blog Post\",\n                className: \" object-cover rounded-lg mb-4\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-3xl font-bold\",\n                children: \"Tools for Visualizing Machine Learning Models\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-gray-700\",\n                children: \"5 Tools for Visualizing Machine Learning Models By Iv\\xe1n Palomares Carrascosa on December 18, 2024 in Resources 0 Post Share 5 Tools for Visualizing Machine Learning Models 5 Tools for Visualizing Machine Learning Models Image by Editor | Midjourney Machine learning (ML) models are built upon data. They are like the ready-to-use artifacts resulting from making sense of a dataset to uncover patterns, make predictions, or automate decisions. Whilst visualizing data is undoubtedly important across many data science processes like exploratory analysis and feature engineering, the idea of visualizing an ML model is not as straightforward: it entails understanding its structure, performance, and behavior to make decisions, often requiring specialized tools and techniques. This article lists 5 tools you might not know to help you visualize and gain insight into the nature and operation of your ML models\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"TensorBoard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Tensor Board is a commonly used tool for visualizing advanced ML models primarily neural network-based models built with TensorFlow. Focused on experimentation the tool supports graph-based model architecture visualization tracking of training metrics like loss and accuracy, and model weights visualizations like histograms, among others. By using the appropriate design patterns like wrappers and the Keras API, TensorBoard can be also used to visualize aspects of classical ML models built with other libraries like scikit-learn. This is a fairly balanced and multi-purpose model visualization tool overall.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Yellowbrick\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Yellowbrick is a Python library for model diagnostics and evaluation. It extends scikit-learn to support model selection, by offering an assortment of sophisticated and highly customizable metric visualizations like learning curves residual plots and ROC curves. It is a very powerful tool for enhanced model evaluation but it might not be as popular as others, hence the supporting documentation available is comparatively limited.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-2xl font-semibold\",\n                        children: \"Comments\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: commentInput,\n                                onChange: (e)=>setCommentInput(e.target.value),\n                                className: \"w-full border rounded-lg p-2\",\n                                placeholder: \"Write a comment...\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleAddComment,\n                                className: \"bg-blue-500 text-white px-4 py-2 rounded-lg mt-2\",\n                                children: \"Add Comment\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-6\",\n                        children: comments.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"space-y-4\",\n                            children: comments.map((comment, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"bg-gray-100 p-4 rounded-lg\",\n                                    children: comment\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-gray-500\",\n                            children: \"No comments yet. Be the first to comment!\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\srt\\\\Desktop\\\\next\\\\bloghac\\\\my-app\\\\src\\\\app\\\\components\\\\blog1\\\\page.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog1, \"FbbSVVnHIWQRFtG17N5tdzdfGBQ=\");\n_c = Blog1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog1);\nvar _c;\n$RefreshReg$(_c, \"Blog1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9ibG9nMS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQytCO0FBQ0w7QUFDTztBQUVqQyxNQUFNRyxRQUFROztJQUNaLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBVyxFQUFFO0lBQ3JELE1BQU0sQ0FBQ0ksY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBRWpELE1BQU1NLG1CQUFtQjtRQUN2QixJQUFJRixhQUFhRyxJQUFJLE9BQU8sSUFBSTtZQUM5QkosWUFBWTttQkFBSUQ7Z0JBQVVFO2FBQWE7WUFDdkNDLGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDWCxrREFBS0E7Z0JBQ05ZLFFBQVE7Z0JBQ1JDLE9BQU87Z0JBQ0xDLEtBQUk7Z0JBQ0pDLEtBQUk7Z0JBQ0pKLFdBQVU7Ozs7OzswQkFFWiw4REFBQ0s7Z0JBQUdMLFdBQVU7MEJBQXFCOzs7Ozs7MEJBQ25DLDhEQUFDTTtnQkFBRU4sV0FBVTswQkFBcUI7Ozs7OzswQkFZbEMsOERBQUNPOzs7OzswQkFDRCw4REFBQ0Y7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFHSiw4REFBQ0Q7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7MEJBQUU7Ozs7OzswQkFLSCw4REFBQ1A7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDUTt3QkFBR1IsV0FBVTtrQ0FBeUI7Ozs7OztrQ0FDdkMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ1M7Z0NBQ0NDLE1BQUs7Z0NBQ0xDLE9BQU9oQjtnQ0FDUGlCLFVBQVUsQ0FBQ0MsSUFBTWpCLGdCQUFnQmlCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztnQ0FDL0NYLFdBQVU7Z0NBQ1ZlLGFBQVk7Ozs7OzswQ0FFZCw4REFBQ0M7Z0NBQ0NDLFNBQVNwQjtnQ0FDVEcsV0FBVTswQ0FDWDs7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWlAsU0FBU3lCLE1BQU0sR0FBRyxrQkFDakIsOERBQUNDOzRCQUFHbkIsV0FBVTtzQ0FDWFAsU0FBUzJCLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNDO29DQUFldkIsV0FBVTs4Q0FDdkJxQjttQ0FETUM7Ozs7Ozs7OztzREFNYiw4REFBQ2hCOzRCQUFFTixXQUFVO3NDQUFnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekM7R0E3RU1SO0tBQUFBO0FBK0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9ibG9nMS9wYWdlLnRzeD84MTlkIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgQmxvZzEgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2NvbW1lbnRzLCBzZXRDb21tZW50c10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IFtjb21tZW50SW5wdXQsIHNldENvbW1lbnRJbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkQ29tbWVudCA9ICgpID0+IHtcclxuICAgIGlmIChjb21tZW50SW5wdXQudHJpbSgpICE9PSBcIlwiKSB7XHJcbiAgICAgIHNldENvbW1lbnRzKFsuLi5jb21tZW50cywgY29tbWVudElucHV0XSk7XHJcbiAgICAgIHNldENvbW1lbnRJbnB1dChcIlwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTRcIj5cclxuICAgICAgPEltYWdlXHJcbiAgICAgIGhlaWdodD17MTAwfVxyXG4gICAgICB3aWR0aD17OTAwfVxyXG4gICAgICAgIHNyYz1cIi9iYi5wbmdcIlxyXG4gICAgICAgIGFsdD1cIkZpcnN0IEJsb2cgUG9zdFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPVwiIG9iamVjdC1jb3ZlciByb3VuZGVkLWxnIG1iLTRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkXCI+VG9vbHMgZm9yIFZpc3VhbGl6aW5nIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxzPC9oMT5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgIDUgVG9vbHMgZm9yIFZpc3VhbGl6aW5nIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxzXHJcbkJ5IEl2w6FuIFBhbG9tYXJlcyBDYXJyYXNjb3NhIG9uIERlY2VtYmVyIDE4LCAyMDI0IGluIFJlc291cmNlcyAwXHJcbiBQb3N0IFNoYXJlXHJcbjUgVG9vbHMgZm9yIFZpc3VhbGl6aW5nIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxzXHJcbjUgVG9vbHMgZm9yIFZpc3VhbGl6aW5nIE1hY2hpbmUgTGVhcm5pbmcgTW9kZWxzXHJcbkltYWdlIGJ5IEVkaXRvciB8IE1pZGpvdXJuZXlcclxuXHJcbk1hY2hpbmUgbGVhcm5pbmcgKE1MKSBtb2RlbHMgYXJlIGJ1aWx0IHVwb24gZGF0YS4gVGhleSBhcmUgbGlrZSB0aGUgcmVhZHktdG8tdXNlIGFydGlmYWN0cyByZXN1bHRpbmcgZnJvbSBtYWtpbmcgc2Vuc2Ugb2YgYSBkYXRhc2V0IHRvIHVuY292ZXIgcGF0dGVybnMsIG1ha2UgcHJlZGljdGlvbnMsIG9yIGF1dG9tYXRlIGRlY2lzaW9ucy4gV2hpbHN0IHZpc3VhbGl6aW5nIGRhdGEgaXMgdW5kb3VidGVkbHkgaW1wb3J0YW50IGFjcm9zcyBtYW55IGRhdGEgc2NpZW5jZSBwcm9jZXNzZXMgbGlrZSBleHBsb3JhdG9yeSBhbmFseXNpcyBhbmQgZmVhdHVyZSBlbmdpbmVlcmluZywgdGhlIGlkZWEgb2YgdmlzdWFsaXppbmcgYW4gTUwgbW9kZWwgaXMgbm90IGFzIHN0cmFpZ2h0Zm9yd2FyZDogaXQgZW50YWlscyB1bmRlcnN0YW5kaW5nIGl0cyBzdHJ1Y3R1cmUsIHBlcmZvcm1hbmNlLCBhbmQgYmVoYXZpb3IgdG8gbWFrZSBkZWNpc2lvbnMsIG9mdGVuIHJlcXVpcmluZyBzcGVjaWFsaXplZCB0b29scyBhbmQgdGVjaG5pcXVlcy5cclxuXHJcblRoaXMgYXJ0aWNsZSBsaXN0cyA1IHRvb2xzIHlvdSBtaWdodCBub3Qga25vdyB0byBoZWxwIHlvdSB2aXN1YWxpemUgYW5kIGdhaW4gaW5zaWdodCBpbnRvIHRoZSBuYXR1cmUgYW5kIG9wZXJhdGlvbiBvZiB5b3VyIE1MIG1vZGVsc1xyXG4gICAgICA8L3A+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxoMT5UZW5zb3JCb2FyZDwvaDE+XHJcbiAgICAgIDxwID5UZW5zb3IgQm9hcmQgaXMgYSBjb21tb25seSB1c2VkIHRvb2wgZm9yIHZpc3VhbGl6aW5nIGFkdmFuY2VkIE1MIG1vZGVscyBwcmltYXJpbHkgbmV1cmFsIG5ldHdvcmstYmFzZWQgbW9kZWxzIGJ1aWx0IHdpdGggVGVuc29yRmxvdy4gRm9jdXNlZCBvbiBleHBlcmltZW50YXRpb24gdGhlIHRvb2wgc3VwcG9ydHMgZ3JhcGgtYmFzZWQgbW9kZWwgYXJjaGl0ZWN0dXJlIHZpc3VhbGl6YXRpb24gdHJhY2tpbmcgb2YgdHJhaW5pbmcgbWV0cmljcyBsaWtlIGxvc3MgYW5kIGFjY3VyYWN5LCBhbmQgbW9kZWwgd2VpZ2h0cyB2aXN1YWxpemF0aW9ucyBsaWtlIGhpc3RvZ3JhbXMsIGFtb25nIG90aGVycy4gQnkgdXNpbmcgdGhlIGFwcHJvcHJpYXRlIGRlc2lnbiBwYXR0ZXJucyBsaWtlIHdyYXBwZXJzIGFuZCB0aGUgS2VyYXMgQVBJLCBUZW5zb3JCb2FyZCBjYW4gYmUgYWxzbyB1c2VkIHRvIHZpc3VhbGl6ZSBhc3BlY3RzIG9mIGNsYXNzaWNhbCBNTCBtb2RlbHMgYnVpbHQgd2l0aCBvdGhlciBsaWJyYXJpZXMgbGlrZSBzY2lraXQtbGVhcm4uIFRoaXMgaXMgYSBmYWlybHkgYmFsYW5jZWQgYW5kIG11bHRpLXB1cnBvc2UgbW9kZWwgdmlzdWFsaXphdGlvbiB0b29sIG92ZXJhbGwuXHJcblxyXG4gICAgICA8L3A+XHJcbiAgICAgIDxoMT5ZZWxsb3dicmljazwvaDE+XHJcbiAgICAgIDxwPlllbGxvd2JyaWNrIGlzIGEgUHl0aG9uIGxpYnJhcnkgZm9yIG1vZGVsIGRpYWdub3N0aWNzIGFuZCBldmFsdWF0aW9uLiBJdCBleHRlbmRzIHNjaWtpdC1sZWFybiB0byBzdXBwb3J0IG1vZGVsIHNlbGVjdGlvbiwgYnkgb2ZmZXJpbmcgYW4gYXNzb3J0bWVudCBvZiBzb3BoaXN0aWNhdGVkIGFuZCBoaWdobHkgY3VzdG9taXphYmxlIG1ldHJpYyB2aXN1YWxpemF0aW9ucyBsaWtlIGxlYXJuaW5nIGN1cnZlcyByZXNpZHVhbCBwbG90cyBhbmQgUk9DIGN1cnZlcy4gSXQgaXMgYSB2ZXJ5IHBvd2VyZnVsIHRvb2wgZm9yIGVuaGFuY2VkIG1vZGVsIGV2YWx1YXRpb24gYnV0IGl0IG1pZ2h0IG5vdCBiZSBhcyBwb3B1bGFyIGFzIG90aGVycywgaGVuY2UgdGhlIHN1cHBvcnRpbmcgZG9jdW1lbnRhdGlvbiBhdmFpbGFibGUgaXMgY29tcGFyYXRpdmVseSBsaW1pdGVkLlxyXG5cclxuPC9wPlxyXG5cclxuICAgICAgey8qIENvbW1lbnRzIFNlY3Rpb24gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkXCI+Q29tbWVudHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2NvbW1lbnRJbnB1dH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRDb21tZW50SW5wdXQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIHJvdW5kZWQtbGcgcC0yXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXcml0ZSBhIGNvbW1lbnQuLi5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkQ29tbWVudH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBweC00IHB5LTIgcm91bmRlZC1sZyBtdC0yXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQWRkIENvbW1lbnRcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNlwiPlxyXG4gICAgICAgICAge2NvbW1lbnRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgICB7Y29tbWVudHMubWFwKChjb21tZW50LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtNCByb3VuZGVkLWxnXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtjb21tZW50fVxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5ObyBjb21tZW50cyB5ZXQuIEJlIHRoZSBmaXJzdCB0byBjb21tZW50ITwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2cxO1xyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJSZWFjdCIsInVzZVN0YXRlIiwiQmxvZzEiLCJjb21tZW50cyIsInNldENvbW1lbnRzIiwiY29tbWVudElucHV0Iiwic2V0Q29tbWVudElucHV0IiwiaGFuZGxlQWRkQ29tbWVudCIsInRyaW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsImFsdCIsImgxIiwicCIsImJyIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayIsImxlbmd0aCIsInVsIiwibWFwIiwiY29tbWVudCIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/blog1/page.tsx\n"));

/***/ })

});