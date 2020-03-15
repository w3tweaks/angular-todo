(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/styles.scss":
  /*!********************************************************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/dist/cjs.js??ref--15-3!./src/assets/scss/styles.scss ***!
    \********************************************************************************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsNode_modulesSassLoaderDistCjsJsSrcAssetsScssStylesScss(module, exports) {
    module.exports = [[module.i, "@charset \"UTF-8\";\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\nbutton {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: none;\n  font-size: 100%;\n  vertical-align: baseline;\n  font-family: inherit;\n  font-weight: inherit;\n  color: inherit;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\nbody {\n  font: 14px \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 1.4em;\n  background: #f5f5f5;\n  color: #4d4d4d;\n  min-width: 230px;\n  max-width: 550px;\n  margin: 0 auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  font-weight: 300;\n}\n:focus {\n  outline: 0;\n}\n.hidden {\n  display: none;\n}\n.todoapp {\n  background: #fff;\n  margin: 130px 0 40px 0;\n  position: relative;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);\n}\n.todoapp input::-webkit-input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::-moz-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp input::input-placeholder {\n  font-style: italic;\n  font-weight: 300;\n  color: #e6e6e6;\n}\n.todoapp h1 {\n  position: absolute;\n  top: -155px;\n  width: 100%;\n  font-size: 100px;\n  font-weight: 100;\n  text-align: center;\n  color: rgba(175, 47, 47, 0.15);\n  -webkit-text-rendering: optimizeLegibility;\n  -moz-text-rendering: optimizeLegibility;\n  text-rendering: optimizeLegibility;\n}\n.new-todo,\n.edit {\n  position: relative;\n  margin: 0;\n  width: 100%;\n  font-size: 24px;\n  font-family: inherit;\n  font-weight: inherit;\n  line-height: 1.4em;\n  border: 0;\n  color: inherit;\n  padding: 6px;\n  border: 1px solid #999;\n  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.new-todo {\n  padding: 16px 16px 16px 60px;\n  border: none;\n  background: rgba(0, 0, 0, 0.003);\n  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);\n}\n.main {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #e6e6e6;\n}\n.toggle-all {\n  text-align: center;\n  border: none;\n  /* Mobile Safari */\n  opacity: 0;\n  position: absolute;\n}\n.toggle-all + label {\n  width: 60px;\n  height: 34px;\n  font-size: 0;\n  position: absolute;\n  top: -52px;\n  left: -13px;\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.toggle-all + label:before {\n  content: \"❯\";\n  font-size: 22px;\n  color: #e6e6e6;\n  padding: 10px 27px 10px 27px;\n}\n.toggle-all[checked=true] + label:before {\n  color: #737373;\n}\n.todo-list {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.todo-list li {\n  position: relative;\n  font-size: 24px;\n  border-bottom: 1px solid #ededed;\n}\n.todo-list li:last-child {\n  border-bottom: none;\n}\n.todo-list li.editing {\n  border-bottom: none;\n  padding: 0;\n}\n.todo-list li.editing .edit {\n  display: block;\n  width: 506px;\n  padding: 12px 16px;\n  margin: 0 0 0 43px;\n}\n.todo-list li.editing .view {\n  display: none;\n}\n.todo-list li .toggle {\n  text-align: center;\n  width: 40px;\n  /* auto, since non-WebKit browsers doesn't support input styling */\n  height: auto;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto 0;\n  border: none;\n  /* Mobile Safari */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n}\n.todo-list li .toggle {\n  opacity: 0;\n}\n.todo-list li .toggle + label {\n  /*\n  \tFirefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433\n  \tIE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/\n  */\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center left;\n}\n.todo-list li .toggle[checked=true] + label {\n  background-image: url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E\");\n}\n.todo-list li label {\n  word-break: break-all;\n  padding: 15px 15px 15px 60px;\n  display: block;\n  line-height: 1.2;\n  -webkit-transition: color 0.4s;\n  transition: color 0.4s;\n}\n.todo-list li.completed label {\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n.todo-list li .destroy {\n  display: none;\n  position: absolute;\n  top: 0;\n  right: 10px;\n  bottom: 0;\n  width: 40px;\n  height: 40px;\n  margin: auto 0;\n  font-size: 30px;\n  color: #cc9a9a;\n  margin-bottom: 11px;\n  -webkit-transition: color 0.2s ease-out;\n  transition: color 0.2s ease-out;\n}\n.todo-list li .destroy:hover {\n  color: #af5b5e;\n}\n.todo-list li .destroy:after {\n  content: \"×\";\n}\n.todo-list li:hover .destroy {\n  display: block;\n}\n.todo-list li .edit {\n  display: none;\n}\n.todo-list li.editing:last-child {\n  margin-bottom: -1px;\n}\n.footer {\n  color: #777;\n  padding: 10px 15px;\n  height: 20px;\n  text-align: center;\n  border-top: 1px solid #e6e6e6;\n}\n.footer:before {\n  content: \"\";\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  height: 50px;\n  overflow: hidden;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);\n}\n.todo-count {\n  float: left;\n  text-align: left;\n}\n.todo-count strong {\n  font-weight: 300;\n}\n.filters {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  position: absolute;\n  right: 0;\n  left: 0;\n}\n.filters li {\n  display: inline;\n}\n.filters li a {\n  color: inherit;\n  margin: 3px;\n  padding: 3px 7px;\n  text-decoration: none;\n  border: 1px solid transparent;\n  border-radius: 3px;\n}\n.filters li a:hover {\n  border-color: rgba(175, 47, 47, 0.1);\n}\n.filters li a.selected {\n  border-color: rgba(175, 47, 47, 0.2);\n}\n.clear-completed,\nhtml .clear-completed:active {\n  float: right;\n  position: relative;\n  line-height: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.clear-completed:hover {\n  text-decoration: underline;\n}\n.info {\n  margin: 65px auto 0;\n  color: #bfbfbf;\n  font-size: 10px;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);\n  text-align: center;\n}\n.info p {\n  line-height: 1;\n}\n.info a {\n  color: inherit;\n  text-decoration: none;\n  font-weight: 400;\n}\n.info a:hover {\n  text-decoration: underline;\n}\n/*\n\tHack to remove background from Mobile Safari.\n\tCan't use it globally since it destroys checkboxes in Firefox\n*/\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .toggle-all,\n.todo-list li .toggle {\n    background: none;\n  }\n\n  .todo-list li .toggle {\n    height: 40px;\n  }\n}\n@media (max-width: 430px) {\n  .footer {\n    height: 50px;\n  }\n\n  .filters {\n    bottom: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIiwiL1VzZXJzL3ZpbWFscmFqY2hpbm5haXlhbi9Eb2N1bWVudHMvY29kaW5nLWFzc2Vzc21lbnQtbWFzdGVyLWxhYmNvcnAvc3JjL2Fzc2V0cy9zY3NzL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7RUFFQyxTQUFBO0VBQ0EsVUFBQTtBREVEO0FDQ0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtPQUFBLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBREVEO0FDQ0E7RUFDQyx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QURFRDtBQ0NBO0VBQ0MsVUFBQTtBREVEO0FDQ0E7RUFDQyxhQUFBO0FERUQ7QUNDQTtFQUNDLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRFQUFBO0FERUQ7QUNFQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEQ0Q7QUNFQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEQ0Q7QUNFQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FEQ0Q7QUNFQTtFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBDQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtBRENEO0FDRUE7O0VBRUMsa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlEQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FEQ0Q7QUNFQTtFQUNDLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0RBQUE7QURDRDtBQ0VBO0VBQ0Msa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7QURDRDtBQ0VBO0VBQ0Msa0JBQUE7RUFDQSxZQUFBO0VBQWMsa0JBQUE7RUFDZCxVQUFBO0VBQ0Esa0JBQUE7QURFRDtBQ0NBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7QURFRDtBQ0NBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QURFRDtBQ0NBO0VBQ0MsY0FBQTtBREVEO0FDQ0E7RUFDQyxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FERUQ7QUNDQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0FERUQ7QUNDQTtFQUNDLG1CQUFBO0FERUQ7QUNDQTtFQUNDLG1CQUFBO0VBQ0EsVUFBQTtBREVEO0FDQ0E7RUFDQyxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QURFRDtBQ0NBO0VBQ0MsYUFBQTtBREVEO0FDQ0E7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFBYyxrQkFBQTtFQUNkLHdCQUFBO0VBQ0EscUJBQUE7T0FBQSxnQkFBQTtBREdEO0FDQUE7RUFDQyxVQUFBO0FER0Q7QUNBQTtFQUNDOzs7R0FBQTtFQUlBLG9VQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtBREdEO0FDQUE7RUFDQyx5YUFBQTtBREdEO0FDQUE7RUFDQyxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtBREdEO0FDQUE7RUFDQyxjQUFBO0VBQ0EsNkJBQUE7QURHRDtBQ0FBO0VBQ0MsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0VBQUEsK0JBQUE7QURHRDtBQ0FBO0VBQ0MsY0FBQTtBREdEO0FDQUE7RUFDQyxZQUFBO0FER0Q7QUNBQTtFQUNDLGNBQUE7QURHRDtBQ0FBO0VBQ0MsYUFBQTtBREdEO0FDQUE7RUFDQyxtQkFBQTtBREdEO0FDQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtBREdEO0FDQUE7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0SkFBQTtBREdEO0FDSUE7RUFDQyxXQUFBO0VBQ0EsZ0JBQUE7QURERDtBQ0lBO0VBQ0MsZ0JBQUE7QURERDtBQ0lBO0VBQ0MsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7QURERDtBQ0lBO0VBQ0MsZUFBQTtBREREO0FDSUE7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0FEREQ7QUNJQTtFQUNDLG9DQUFBO0FEREQ7QUNJQTtFQUNDLG9DQUFBO0FEREQ7QUNJQTs7RUFFQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBREREO0FDSUE7RUFDQywwQkFBQTtBREREO0FDSUE7RUFDQyxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBREREO0FDSUE7RUFDQyxjQUFBO0FEREQ7QUNJQTtFQUNDLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FEREQ7QUNJQTtFQUNDLDBCQUFBO0FEREQ7QUNJQTs7O0NBQUE7QUFJQTtFQUNDOztJQUVDLGdCQUFBO0VEREE7O0VDSUQ7SUFDQyxZQUFBO0VEREE7QUFDRjtBQ0lBO0VBQ0M7SUFDQyxZQUFBO0VERkE7O0VDS0Q7SUFDQyxZQUFBO0VERkE7QUFDRiIsImZpbGUiOiJhc3NldHMvc2Nzcy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmh0bWwsXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgZm9udC1zaXplOiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmJvZHkge1xuICBmb250OiAxNHB4IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbWluLXdpZHRoOiAyMzBweDtcbiAgbWF4LXdpZHRoOiA1NTBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG46Zm9jdXMge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG9hcHAge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBtYXJnaW46IDEzMHB4IDAgNDBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAyNXB4IDUwcHggMCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi50b2RvYXBwIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBpbnB1dDo6aW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZTZlNmU2O1xufVxuXG4udG9kb2FwcCBoMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMTU1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEwMHB4O1xuICBmb250LXdlaWdodDogMTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiByZ2JhKDE3NSwgNDcsIDQ3LCAwLjE1KTtcbiAgLXdlYmtpdC10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAtbW96LXRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG59XG5cbi5uZXctdG9kbyxcbi5lZGl0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICBib3JkZXI6IDA7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM5OTk7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4ubmV3LXRvZG8ge1xuICBwYWRkaW5nOiAxNnB4IDE2cHggMTZweCA2MHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wMDMpO1xuICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XG59XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLnRvZ2dsZS1hbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogbm9uZTtcbiAgLyogTW9iaWxlIFNhZmFyaSAqL1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50b2dnbGUtYWxsICsgbGFiZWwge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBmb250LXNpemU6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNTJweDtcbiAgbGVmdDogLTEzcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi50b2dnbGUtYWxsICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCLina9cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogI2U2ZTZlNjtcbiAgcGFkZGluZzogMTBweCAyN3B4IDEwcHggMjdweDtcbn1cblxuLnRvZ2dsZS1hbGxbY2hlY2tlZD10cnVlXSArIGxhYmVsOmJlZm9yZSB7XG4gIGNvbG9yOiAjNzM3MzczO1xufVxuXG4udG9kby1saXN0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZGVkO1xufVxuXG4udG9kby1saXN0IGxpOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLmVkaXQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwNnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIG1hcmdpbjogMCAwIDAgNDNweDtcbn1cblxuLnRvZG8tbGlzdCBsaS5lZGl0aW5nIC52aWV3IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogNDBweDtcbiAgLyogYXV0bywgc2luY2Ugbm9uLVdlYktpdCBicm93c2VycyBkb2Vzbid0IHN1cHBvcnQgaW5wdXQgc3R5bGluZyAqL1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIG1hcmdpbjogYXV0byAwO1xuICBib3JkZXI6IG5vbmU7XG4gIC8qIE1vYmlsZSBTYWZhcmkgKi9cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuICBvcGFjaXR5OiAwO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUgKyBsYWJlbCB7XG4gIC8qXG4gIFx0RmlyZWZveCByZXF1aXJlcyBgI2AgdG8gYmUgZXNjYXBlZCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTkyMjQzM1xuICBcdElFIGFuZCBFZGdlIHJlcXVpcmVzICpldmVyeXRoaW5nKiB0byBiZSBlc2NhcGVkIHRvIHJlbmRlciwgc28gd2UgZG8gdGhhdCBpbnN0ZWFkIG9mIGp1c3QgdGhlIGAjYCAtIGh0dHBzOi8vZGV2ZWxvcGVyLm1pY3Jvc29mdC5jb20vZW4tdXMvbWljcm9zb2Z0LWVkZ2UvcGxhdGZvcm0vaXNzdWVzLzcxNTc0NTkvXG4gICovXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzZWRlZGVkJTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlW2NoZWNrZWQ9dHJ1ZV0gKyBsYWJlbCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCUzQ3N2ZyUyMHhtbG5zJTNEJTIyaHR0cCUzQS8vd3d3LnczLm9yZy8yMDAwL3N2ZyUyMiUyMHdpZHRoJTNEJTIyNDAlMjIlMjBoZWlnaHQlM0QlMjI0MCUyMiUyMHZpZXdCb3glM0QlMjItMTAlMjAtMTglMjAxMDAlMjAxMzUlMjIlM0UlM0NjaXJjbGUlMjBjeCUzRCUyMjUwJTIyJTIwY3klM0QlMjI1MCUyMiUyMHIlM0QlMjI1MCUyMiUyMGZpbGwlM0QlMjJub25lJTIyJTIwc3Ryb2tlJTNEJTIyJTIzYmRkYWQ1JTIyJTIwc3Ryb2tlLXdpZHRoJTNEJTIyMyUyMi8lM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzVkYzJhZiUyMiUyMGQlM0QlMjJNNzIlMjAyNUw0MiUyMDcxJTIwMjclMjA1NmwtNCUyMDQlMjAyMCUyMDIwJTIwMzQtNTJ6JTIyLyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi50b2RvLWxpc3QgbGkgbGFiZWwge1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzO1xufVxuXG4udG9kby1saXN0IGxpLmNvbXBsZXRlZCBsYWJlbCB7XG4gIGNvbG9yOiAjZDlkOWQ5O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IGF1dG8gMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogI2NjOWE5YTtcbiAgbWFyZ2luLWJvdHRvbTogMTFweDtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLW91dDtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTpob3ZlciB7XG4gIGNvbG9yOiAjYWY1YjVlO1xufVxuXG4udG9kby1saXN0IGxpIC5kZXN0cm95OmFmdGVyIHtcbiAgY29udGVudDogXCLDl1wiO1xufVxuXG4udG9kby1saXN0IGxpOmhvdmVyIC5kZXN0cm95IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi50b2RvLWxpc3QgbGkgLmVkaXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmc6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb290ZXIge1xuICBjb2xvcjogIzc3NztcbiAgcGFkZGluZzogMTBweCAxNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi5mb290ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDAgLTNweCAjZjZmNmY2LCAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMTZweCAwIC02cHggI2Y2ZjZmNiwgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRvZG8tY291bnQge1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvZG8tY291bnQgc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZpbHRlcnMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG59XG5cbi5maWx0ZXJzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmlsdGVycyBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogM3B4O1xuICBwYWRkaW5nOiAzcHggN3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XG59XG5cbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xuICBib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMik7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQsXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW5mbyB7XG4gIG1hcmdpbjogNjVweCBhdXRvIDA7XG4gIGNvbG9yOiAjYmZiZmJmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBwIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5pbmZvIGEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5mbyBhOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qXG5cdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxuXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XG4qL1xuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzogMCkge1xuICAudG9nZ2xlLWFsbCxcbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgfVxuXG4gIC50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG5cbiAgLmZpbHRlcnMge1xuICAgIGJvdHRvbTogMTBweDtcbiAgfVxufSIsImh0bWwsXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG5idXR0b24ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0YmFja2dyb3VuZDogbm9uZTtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG5cdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuXHRmb250LXdlaWdodDogaW5oZXJpdDtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG5cdC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmJvZHkge1xuXHRmb250OiAxNHB4ICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcblx0Y29sb3I6ICM0ZDRkNGQ7XG5cdG1pbi13aWR0aDogMjMwcHg7XG5cdG1heC13aWR0aDogNTUwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuOmZvY3VzIHtcblx0b3V0bGluZTogMDtcbn1cblxuLmhpZGRlbiB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvYXBwIHtcblx0YmFja2dyb3VuZDogI2ZmZjtcblx0bWFyZ2luOiAxMzBweCAwIDQwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRib3gtc2hhZG93OiAwIDJweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgMjVweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4udG9kb2FwcCBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG5cdGZvbnQtc3R5bGU6IGl0YWxpYztcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0Y29sb3I6ICNlNmU2ZTY7XG59XG5cbi50b2RvYXBwIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaW5wdXQ6OmlucHV0LXBsYWNlaG9sZGVyIHtcblx0Zm9udC1zdHlsZTogaXRhbGljO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRjb2xvcjogI2U2ZTZlNjtcbn1cblxuLnRvZG9hcHAgaDEge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTE1NXB4O1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAxMDBweDtcblx0Zm9udC13ZWlnaHQ6IDEwMDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRjb2xvcjogcmdiYSgxNzUsIDQ3LCA0NywgMC4xNSk7XG5cdC13ZWJraXQtdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblx0LW1vei10ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuXHR0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xufVxuXG4ubmV3LXRvZG8sXG4uZWRpdCB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0bWFyZ2luOiAwO1xuXHR3aWR0aDogMTAwJTtcblx0Zm9udC1zaXplOiAyNHB4O1xuXHRmb250LWZhbWlseTogaW5oZXJpdDtcblx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XG5cdGxpbmUtaGVpZ2h0OiAxLjRlbTtcblx0Ym9yZGVyOiAwO1xuXHRjb2xvcjogaW5oZXJpdDtcblx0cGFkZGluZzogNnB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjOTk5O1xuXHRib3gtc2hhZG93OiBpbnNldCAwIC0xcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcblx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLm5ldy10b2RvIHtcblx0cGFkZGluZzogMTZweCAxNnB4IDE2cHggNjBweDtcblx0Ym9yZGVyOiBub25lO1xuXHRiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDAzKTtcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAtMnB4IDFweCByZ2JhKDAsMCwwLDAuMDMpO1xufVxuXG4ubWFpbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMjtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICNlNmU2ZTY7XG59XG5cbi50b2dnbGUtYWxsIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXI6IG5vbmU7IC8qIE1vYmlsZSBTYWZhcmkgKi9cblx0b3BhY2l0eTogMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xufVxuXG4udG9nZ2xlLWFsbCArIGxhYmVsIHtcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogMzRweDtcblx0Zm9udC1zaXplOiAwO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogLTUycHg7XG5cdGxlZnQ6IC0xM3B4O1xuXHQtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcblx0dHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufVxuXG4udG9nZ2xlLWFsbCArIGxhYmVsOmJlZm9yZSB7XG5cdGNvbnRlbnQ6ICfina8nO1xuXHRmb250LXNpemU6IDIycHg7XG5cdGNvbG9yOiAjZTZlNmU2O1xuXHRwYWRkaW5nOiAxMHB4IDI3cHggMTBweCAyN3B4O1xufVxuXG4udG9nZ2xlLWFsbFtjaGVja2VkPXRydWVdICsgbGFiZWw6YmVmb3JlIHtcblx0Y29sb3I6ICM3MzczNzM7XG59XG5cbi50b2RvLWxpc3Qge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGZvbnQtc2l6ZTogMjRweDtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi50b2RvLWxpc3QgbGk6bGFzdC1jaGlsZCB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyB7XG5cdGJvcmRlci1ib3R0b206IG5vbmU7XG5cdHBhZGRpbmc6IDA7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZyAuZWRpdCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogNTA2cHg7XG5cdHBhZGRpbmc6IDEycHggMTZweDtcblx0bWFyZ2luOiAwIDAgMCA0M3B4O1xufVxuXG4udG9kby1saXN0IGxpLmVkaXRpbmcgLnZpZXcge1xuXHRkaXNwbGF5OiBub25lO1xufVxuXG4udG9kby1saXN0IGxpIC50b2dnbGUge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHdpZHRoOiA0MHB4O1xuXHQvKiBhdXRvLCBzaW5jZSBub24tV2ViS2l0IGJyb3dzZXJzIGRvZXNuJ3Qgc3VwcG9ydCBpbnB1dCBzdHlsaW5nICovXG5cdGhlaWdodDogYXV0bztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGJvcmRlcjogbm9uZTsgLyogTW9iaWxlIFNhZmFyaSAqL1xuXHQtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSB7XG5cdG9wYWNpdHk6IDA7XG59XG5cbi50b2RvLWxpc3QgbGkgLnRvZ2dsZSArIGxhYmVsIHtcblx0Lypcblx0XHRGaXJlZm94IHJlcXVpcmVzIGAjYCB0byBiZSBlc2NhcGVkIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTIyNDMzXG5cdFx0SUUgYW5kIEVkZ2UgcmVxdWlyZXMgKmV2ZXJ5dGhpbmcqIHRvIGJlIGVzY2FwZWQgdG8gcmVuZGVyLCBzbyB3ZSBkbyB0aGF0IGluc3RlYWQgb2YganVzdCB0aGUgYCNgIC0gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvNzE1NzQ1OS9cblx0Ki9cblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0EvL3d3dy53My5vcmcvMjAwMC9zdmclMjIlMjB3aWR0aCUzRCUyMjQwJTIyJTIwaGVpZ2h0JTNEJTIyNDAlMjIlMjB2aWV3Qm94JTNEJTIyLTEwJTIwLTE4JTIwMTAwJTIwMTM1JTIyJTNFJTNDY2lyY2xlJTIwY3glM0QlMjI1MCUyMiUyMGN5JTNEJTIyNTAlMjIlMjByJTNEJTIyNTAlMjIlMjBmaWxsJTNEJTIybm9uZSUyMiUyMHN0cm9rZSUzRCUyMiUyM2VkZWRlZCUyMiUyMHN0cm9rZS13aWR0aCUzRCUyMjMlMjIvJTNFJTNDL3N2ZyUzRScpO1xuXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDtcbn1cblxuLnRvZG8tbGlzdCBsaSAudG9nZ2xlW2NoZWNrZWQ9dHJ1ZV0gKyBsYWJlbCB7XG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBLy93d3cudzMub3JnLzIwMDAvc3ZnJTIyJTIwd2lkdGglM0QlMjI0MCUyMiUyMGhlaWdodCUzRCUyMjQwJTIyJTIwdmlld0JveCUzRCUyMi0xMCUyMC0xOCUyMDEwMCUyMDEzNSUyMiUzRSUzQ2NpcmNsZSUyMGN4JTNEJTIyNTAlMjIlMjBjeSUzRCUyMjUwJTIyJTIwciUzRCUyMjUwJTIyJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjBzdHJva2UlM0QlMjIlMjNiZGRhZDUlMjIlMjBzdHJva2Utd2lkdGglM0QlMjIzJTIyLyUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzNWRjMmFmJTIyJTIwZCUzRCUyMk03MiUyMDI1TDQyJTIwNzElMjAyNyUyMDU2bC00JTIwNCUyMDIwJTIwMjAlMjAzNC01MnolMjIvJTNFJTNDL3N2ZyUzRScpO1xufVxuXG4udG9kby1saXN0IGxpIGxhYmVsIHtcblx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA2MHB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0bGluZS1oZWlnaHQ6IDEuMjtcblx0dHJhbnNpdGlvbjogY29sb3IgMC40cztcbn1cblxuLnRvZG8tbGlzdCBsaS5jb21wbGV0ZWQgbGFiZWwge1xuXHRjb2xvcjogI2Q5ZDlkOTtcblx0dGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3kge1xuXHRkaXNwbGF5OiBub25lO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMDtcblx0cmlnaHQ6IDEwcHg7XG5cdGJvdHRvbTogMDtcblx0d2lkdGg6IDQwcHg7XG5cdGhlaWdodDogNDBweDtcblx0bWFyZ2luOiBhdXRvIDA7XG5cdGZvbnQtc2l6ZTogMzBweDtcblx0Y29sb3I6ICNjYzlhOWE7XG5cdG1hcmdpbi1ib3R0b206IDExcHg7XG5cdHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1vdXQ7XG59XG5cbi50b2RvLWxpc3QgbGkgLmRlc3Ryb3k6aG92ZXIge1xuXHRjb2xvcjogI2FmNWI1ZTtcbn1cblxuLnRvZG8tbGlzdCBsaSAuZGVzdHJveTphZnRlciB7XG5cdGNvbnRlbnQ6ICfDlyc7XG59XG5cbi50b2RvLWxpc3QgbGk6aG92ZXIgLmRlc3Ryb3kge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLnRvZG8tbGlzdCBsaSAuZWRpdCB7XG5cdGRpc3BsYXk6IG5vbmU7XG59XG5cbi50b2RvLWxpc3QgbGkuZWRpdGluZzpsYXN0LWNoaWxkIHtcblx0bWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLmZvb3RlciB7XG5cdGNvbG9yOiAjNzc3O1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdGhlaWdodDogMjBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRib3JkZXItdG9wOiAxcHggc29saWQgI2U2ZTZlNjtcbn1cblxuLmZvb3RlcjpiZWZvcmUge1xuXHRjb250ZW50OiAnJztcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMDtcblx0Ym90dG9tOiAwO1xuXHRsZWZ0OiAwO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgOHB4IDAgLTNweCAjZjZmNmY2LFxuXHQgICAgICAgICAgICAwIDlweCAxcHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXG5cdCAgICAgICAgICAgIDAgMTZweCAwIC02cHggI2Y2ZjZmNixcblx0ICAgICAgICAgICAgMCAxN3B4IDJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnRvZG8tY291bnQge1xuXHRmbG9hdDogbGVmdDtcblx0dGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLnRvZG8tY291bnQgc3Ryb25nIHtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmZpbHRlcnMge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0cmlnaHQ6IDA7XG5cdGxlZnQ6IDA7XG59XG5cbi5maWx0ZXJzIGxpIHtcblx0ZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmlsdGVycyBsaSBhIHtcblx0Y29sb3I6IGluaGVyaXQ7XG5cdG1hcmdpbjogM3B4O1xuXHRwYWRkaW5nOiAzcHggN3B4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG59XG5cbi5maWx0ZXJzIGxpIGE6aG92ZXIge1xuXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMSk7XG59XG5cbi5maWx0ZXJzIGxpIGEuc2VsZWN0ZWQge1xuXHRib3JkZXItY29sb3I6IHJnYmEoMTc1LCA0NywgNDcsIDAuMik7XG59XG5cbi5jbGVhci1jb21wbGV0ZWQsXG5odG1sIC5jbGVhci1jb21wbGV0ZWQ6YWN0aXZlIHtcblx0ZmxvYXQ6IHJpZ2h0O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGxpbmUtaGVpZ2h0OiAyMHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNsZWFyLWNvbXBsZXRlZDpob3ZlciB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uaW5mbyB7XG5cdG1hcmdpbjogNjVweCBhdXRvIDA7XG5cdGNvbG9yOiAjYmZiZmJmO1xuXHRmb250LXNpemU6IDEwcHg7XG5cdHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyBwIHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5cbi5pbmZvIGEge1xuXHRjb2xvcjogaW5oZXJpdDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmb250LXdlaWdodDogNDAwO1xufVxuXG4uaW5mbyBhOmhvdmVyIHtcblx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi8qXG5cdEhhY2sgdG8gcmVtb3ZlIGJhY2tncm91bmQgZnJvbSBNb2JpbGUgU2FmYXJpLlxuXHRDYW4ndCB1c2UgaXQgZ2xvYmFsbHkgc2luY2UgaXQgZGVzdHJveXMgY2hlY2tib3hlcyBpbiBGaXJlZm94XG4qL1xuQG1lZGlhIHNjcmVlbiBhbmQgKC13ZWJraXQtbWluLWRldmljZS1waXhlbC1yYXRpbzowKSB7XG5cdC50b2dnbGUtYWxsLFxuXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdH1cblxuXHQudG9kby1saXN0IGxpIC50b2dnbGUge1xuXHRcdGhlaWdodDogNDBweDtcblx0fVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDMwcHgpIHtcblx0LmZvb3RlciB7XG5cdFx0aGVpZ2h0OiA1MHB4O1xuXHR9XG5cblx0LmZpbHRlcnMge1xuXHRcdGJvdHRvbTogMTBweDtcblx0fVxufVxuIl19 */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/assets/scss/styles.scss":
  /*!*************************************!*\
    !*** ./src/assets/scss/styles.scss ***!
    \*************************************/

  /*! no static exports found */

  /***/
  function srcAssetsScssStylesScss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/dist/cjs.js??ref--15-3!./styles.scss */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/assets/scss/styles.scss");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!*******************************************!*\
    !*** multi ./src/assets/scss/styles.scss ***!
    \*******************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/vimalrajchinnaiyan/Documents/coding-assessment-master-labcorp/src/assets/scss/styles.scss */
    "./src/assets/scss/styles.scss");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map