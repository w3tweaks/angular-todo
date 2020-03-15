(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todos_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos/components/complete-all/complete-all.component */ "./src/app/todos/components/complete-all/complete-all.component.ts");
/* harmony import */ var _todos_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos/components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 26, vars: 0, consts: [[1, "todoapp"], [1, "header"], ["enctype", "application/x-www-form-urlencoded", "role", "form", "novalidate", ""], ["placeholder", "What needs to be done", "autofocus", "", 1, "new-todo"], [1, "main"], [1, "footer"], [1, "todo-count"], [1, "filters"], ["href", "#", 1, "selected"], ["href", "#"], [1, "clear-completed"], [1, "info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "todos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-complete-all");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-todos-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "footer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Clear completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Double-click to edit a todo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_todos_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_1__["CompleteAllComponent"], _todos_components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodosListComponent"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-root',
                templateUrl: './app.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm2015/store-devtools.js");
/* harmony import */ var _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todos/todos.module */ "./src/app/todos/todos.module.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot([], {
                runtimeChecks: {
                    strictStateImmutability: true,
                    strictActionImmutability: true
                }
            }),
            !_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                maxAge: 25,
            }) : [],
            _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"], _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot([], {
                        runtimeChecks: {
                            strictStateImmutability: true,
                            strictActionImmutability: true
                        }
                    }),
                    !_app_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production ? _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({
                        maxAge: 25,
                    }) : [],
                    _todos_todos_module__WEBPACK_IMPORTED_MODULE_6__["TodosModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/todos/components/complete-all/complete-all.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/todos/components/complete-all/complete-all.component.ts ***!
  \*************************************************************************/
/*! exports provided: CompleteAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteAllComponent", function() { return CompleteAllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/todos/services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




function CompleteAllComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CompleteAllComponent_ng_container_0_Template_input_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.toggleCompleteAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mark all as complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class CompleteAllComponent {
    constructor(changeDetectorRef, todosService) {
        this.changeDetectorRef = changeDetectorRef;
        this.todosService = todosService;
        this.multipleTodosExist = false;
    }
    ngOnInit() {
        this.subscription = this.todosService.allTodos$.subscribe(todos => {
            this.multipleTodosExist = todos && todos.length > 1;
            this.changeDetectorRef.markForCheck();
        });
    }
    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
    toggleCompleteAll() {
        this.todosService.toggleAllCompleted();
    }
}
CompleteAllComponent.ɵfac = function CompleteAllComponent_Factory(t) { return new (t || CompleteAllComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"])); };
CompleteAllComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompleteAllComponent, selectors: [["app-complete-all"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "click"], ["for", "toggle-all", "title", "Mark all as complete", 1, "toggle-all-label"]], template: function CompleteAllComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CompleteAllComponent_ng_container_0_Template, 4, 0, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.multipleTodosExist);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".toggle-all-label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbHJhamNoaW5uYWl5YW4vRG9jdW1lbnRzL2NvZGluZy1hc3Nlc3NtZW50LW1hc3Rlci1sYWJjb3JwL3NyYy9hcHAvdG9kb3MvY29tcG9uZW50cy9jb21wbGV0ZS1hbGwvY29tcGxldGUtYWxsLmNvbXBvbmVudC5zY3NzIiwiYXBwL3RvZG9zL2NvbXBvbmVudHMvY29tcGxldGUtYWxsL2NvbXBsZXRlLWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRiIsImZpbGUiOiJhcHAvdG9kb3MvY29tcG9uZW50cy9jb21wbGV0ZS1hbGwvY29tcGxldGUtYWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZ2dsZS1hbGwtbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iLCIudG9nZ2xlLWFsbC1sYWJlbCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompleteAllComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                selector: 'app-complete-all',
                styleUrls: [
                    './complete-all.component.scss',
                ],
                templateUrl: './complete-all.component.html',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _app_todos_services_todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/components/todo-list/todo-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/todos/components/todo-list/todo-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


class TodosListComponent {
}
TodosListComponent.ɵfac = function TodosListComponent_Factory(t) { return new (t || TodosListComponent)(); };
TodosListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TodosListComponent, selectors: [["app-todos-list"]], decls: 6, vars: 0, consts: [[1, "todo-list"], [1, "view"], ["type", "checkbox", 1, "toggle"], [1, "destroy"]], template: function TodosListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".no-matches[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-bottom: 1rem;\n  margin-left: 2rem;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aW1hbHJhamNoaW5uYWl5YW4vRG9jdW1lbnRzL2NvZGluZy1hc3Nlc3NtZW50LW1hc3Rlci1sYWJjb3JwL3NyYy9hcHAvdG9kb3MvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5zY3NzIiwiYXBwL3RvZG9zL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0YiLCJmaWxlIjoiYXBwL3RvZG9zL2NvbXBvbmVudHMvdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1tYXRjaGVzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cbiIsIi5uby1tYXRjaGVzIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-todos-list',
                styleUrls: [
                    './todo-list.component.scss',
                ],
                templateUrl: './todo-list.component.html',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/todos/services/todos.service.ts":
/*!*************************************************!*\
  !*** ./src/app/todos/services/todos.service.ts ***!
  \*************************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _state_todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/todo.actions */ "./src/app/todos/state/todo.actions.ts");
/* harmony import */ var _state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/todo.selectors */ "./src/app/todos/state/todo.selectors.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");





class TodosService {
    constructor(store) {
        this.store = store;
        this.allTodos$ = this.store.select(_state_todo_selectors__WEBPACK_IMPORTED_MODULE_2__["allTodos"]);
    }
    addTodo(text) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["addTodo"]({ text }));
    }
    removeTodo(index) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["removeTodo"]({ index }));
    }
    toggleComplete(index) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toggleCompleted"]({ index }));
    }
    toggleAllCompleted() {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["toggleAllCompleted"]());
    }
    updateTodo(index, text) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["updateTodo"]({ index, text }));
    }
    changeFilterMode(mode) {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["changeFilterMode"]({ mode }));
    }
    clearCompleted() {
        this.store.dispatch(_state_todo_actions__WEBPACK_IMPORTED_MODULE_1__["clearCompleted"]());
    }
}
TodosService.ɵfac = function TodosService_Factory(t) { return new (t || TodosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
TodosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosService, factory: TodosService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/todos/state/todo.actions.ts":
/*!*********************************************!*\
  !*** ./src/app/todos/state/todo.actions.ts ***!
  \*********************************************/
/*! exports provided: addTodo, removeTodo, editTodo, updateTodo, toggleCompleted, toggleAllCompleted, changeFilterMode, clearCompleted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodo", function() { return removeTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTodo", function() { return editTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodo", function() { return updateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleCompleted", function() { return toggleCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleAllCompleted", function() { return toggleAllCompleted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeFilterMode", function() { return changeFilterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCompleted", function() { return clearCompleted; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");

const addTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Add Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removeTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Remove Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const editTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Edit Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateTodo = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Update Todo', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Toggle Completed', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const toggleAllCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Toggle All Completed');
const changeFilterMode = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Change Filter Mode', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const clearCompleted = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos] Clear Completed');


/***/ }),

/***/ "./src/app/todos/state/todo.selectors.ts":
/*!***********************************************!*\
  !*** ./src/app/todos/state/todo.selectors.ts ***!
  \***********************************************/
/*! exports provided: todosSelector, allTodos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosSelector", function() { return todosSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allTodos", function() { return allTodos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _todos_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.reducer */ "./src/app/todos/state/todos.reducer.ts");


const todosSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('todos');
const allTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(todosSelector, _todos_reducer__WEBPACK_IMPORTED_MODULE_1__["todos"]);


/***/ }),

/***/ "./src/app/todos/state/todos.reducer.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/state/todos.reducer.ts ***!
  \**********************************************/
/*! exports provided: initialState, todosReducer, filterMode, todos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterMode", function() { return filterMode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todos", function() { return todos; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _todo_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.actions */ "./src/app/todos/state/todo.actions.ts");


const initialState = {
    filterMode: 'All',
    todos: [],
};
function todosReducer(state, action) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["addTodo"], (existingState, { text }) => (Object.assign(Object.assign({}, existingState), { todos: [{ text, completed: false }, ...existingState.todos] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["removeTodo"], (existingState, { index }) => {
        const updatedTodos = [...existingState.todos];
        updatedTodos.splice(index, 1);
        return Object.assign(Object.assign({}, existingState), { todos: updatedTodos });
    }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["changeFilterMode"], (existingState, { mode }) => (Object.assign(Object.assign({}, existingState), { filterMode: mode }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todo_actions__WEBPACK_IMPORTED_MODULE_1__["clearCompleted"], (existingState) => (Object.assign(Object.assign({}, existingState), { todos: [...existingState.todos.filter(todo => !todo.completed)] }))))(state, action);
}
const filterMode = (state) => state.filterMode;
const todos = (state) => state.todos;


/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/complete-all/complete-all.component */ "./src/app/todos/components/complete-all/complete-all.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/todos/components/todo-list/todo-list.component.ts");
/* harmony import */ var _services_todos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/todos.service */ "./src/app/todos/services/todos.service.ts");
/* harmony import */ var _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state/todos.reducer */ "./src/app/todos/state/todos.reducer.ts");










const DECLARATIONS = [
    _components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
    _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"],
];
class TodosModule {
}
TodosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TodosModule });
TodosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function TodosModule_Factory(t) { return new (t || TodosModule)(); }, providers: [
        _services_todos_service__WEBPACK_IMPORTED_MODULE_6__["TodosService"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('todos', _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__["todosReducer"]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TodosModule, { declarations: [_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"]], exports: [_components_complete_all_complete_all_component__WEBPACK_IMPORTED_MODULE_4__["CompleteAllComponent"],
        _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodosListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](TodosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    ...DECLARATIONS,
                ],
                exports: [
                    ...DECLARATIONS,
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature('todos', _state_todos_reducer__WEBPACK_IMPORTED_MODULE_7__["todosReducer"]),
                ],
                providers: [
                    _services_todos_service__WEBPACK_IMPORTED_MODULE_6__["TodosService"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vimalrajchinnaiyan/Documents/coding-assessment-master-labcorp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map