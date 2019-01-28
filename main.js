(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: " <cba-views></cba-views>",
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _cba_views_cba_views_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cba-views/cba-views.module */ "./src/app/cba-views/cba-views.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _cba_views_cba_views_module__WEBPACK_IMPORTED_MODULE_6__["CBAViewsModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_7__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_8__["InMemoryDataService"], {
                    dataEncapsulation: false,
                    passThruUnknownUrl: true,
                }),
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cba-views/cba-views.module.ts":
/*!***********************************************!*\
  !*** ./src/app/cba-views/cba-views.module.ts ***!
  \***********************************************/
/*! exports provided: CBAViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CBAViewsModule", function() { return CBAViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_cba_views_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/cba-views.service */ "./src/app/cba-views/services/cba-views.service.ts");
/* harmony import */ var _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/http-error-handler.service */ "./src/app/cba-views/services/http-error-handler.service.ts");
/* harmony import */ var _components_options_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/options/options.component */ "./src/app/cba-views/components/options/options.component.ts");
/* harmony import */ var _components_warrants_warrants_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/warrants/warrants.component */ "./src/app/cba-views/components/warrants/warrants.component.ts");
/* harmony import */ var _components_cba_views_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cba-views.component */ "./src/app/cba-views/components/cba-views.component.ts");










var CBAViewsModule = /** @class */ (function () {
    function CBAViewsModule() {
    }
    CBAViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]],
            exports: [_components_cba_views_component__WEBPACK_IMPORTED_MODULE_9__["CBAViewsComponent"]],
            declarations: [_components_options_options_component__WEBPACK_IMPORTED_MODULE_7__["OptionsComponent"], _components_warrants_warrants_component__WEBPACK_IMPORTED_MODULE_8__["WarrantsComponent"], _components_cba_views_component__WEBPACK_IMPORTED_MODULE_9__["CBAViewsComponent"]],
            providers: [_services_cba_views_service__WEBPACK_IMPORTED_MODULE_5__["CBAViewsService"], _services_http_error_handler_service__WEBPACK_IMPORTED_MODULE_6__["HttpErrorHandler"]],
        })
    ], CBAViewsModule);
    return CBAViewsModule;
}());



/***/ }),

/***/ "./src/app/cba-views/components/cba-views.component.html":
/*!***************************************************************!*\
  !*** ./src/app/cba-views/components/cba-views.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer-wrapper\">   <div class=\"wrapper-fluid\">\n    <mat-tab-group animationDuration=\"0ms\">\n      <mat-tab label=\"Warrants\"><app-warrants></app-warrants></mat-tab>\n      <mat-tab label=\"Options\"><app-options></app-options></mat-tab>\n    </mat-tab-group>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cba-views/components/cba-views.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/cba-views/components/cba-views.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer-wrapper {\n  background-color: #f3f3f3;\n  min-height: 100%; }\n  .outer-wrapper .wrapper-fluid {\n    width: 90%;\n    margin: 0 auto; }\n  .outer-wrapper .wrapper-fluid /deep/ .mat-tab-header {\n      border: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJ2aW5kZXIuc2luZ2gvRG9jdW1lbnRzL0NvZGUvY2JhLXRlc3Qvc3JjL2FwcC9jYmEtdmlld3MvY29tcG9uZW50cy9jYmEtdmlld3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsZ0JBQWdCLEVBQUE7RUFGbEI7SUFLSSxVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBTmxCO01BUU0sWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2JhLXZpZXdzL2NvbXBvbmVudHMvY2JhLXZpZXdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyLXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuXG4gIC53cmFwcGVyLWZsdWlkIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC9kZWVwLyAubWF0LXRhYi1oZWFkZXIge1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/cba-views/components/cba-views.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/cba-views/components/cba-views.component.ts ***!
  \*************************************************************/
/*! exports provided: CBAViewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CBAViewsComponent", function() { return CBAViewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CBAViewsComponent = /** @class */ (function () {
    function CBAViewsComponent() {
    }
    CBAViewsComponent.prototype.ngOnInit = function () { };
    CBAViewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cba-views',
            template: __webpack_require__(/*! ./cba-views.component.html */ "./src/app/cba-views/components/cba-views.component.html"),
            styles: [__webpack_require__(/*! ./cba-views.component.scss */ "./src/app/cba-views/components/cba-views.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CBAViewsComponent);
    return CBAViewsComponent;
}());



/***/ }),

/***/ "./src/app/cba-views/components/options/options.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/cba-views/components/options/options.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading-wrapper clearfix\">\n    <div class=\"heading-content\"> Call Options</div>\n  </div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <!-- code Column -->\n  <ng-container matColumnDef=\"code\">\n    <th mat-header-cell *matHeaderCellDef> Code </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.code}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"bid\">\n    <th mat-header-cell *matHeaderCellDef> bid ($)</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.bid}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"offer\">\n    <th mat-header-cell *matHeaderCellDef> offer  ($)</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.offer}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"openInterest\">\n    <th mat-header-cell *matHeaderCellDef> open Int. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.openInterest}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"volume\">\n    <th mat-header-cell *matHeaderCellDef> volume </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.volume}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"lastTrade\">\n    <th mat-header-cell *matHeaderCellDef> last trade ($)</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.lastTrade}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"strikePrice\">\n    <th mat-header-cell *matHeaderCellDef> strike price ($)</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.strikePrice}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Group header -->\n    <ng-container matColumnDef=\"groupHeader\">\n      <td colspan=\"999\" mat-cell *matCellDef=\"let groupBy\"><strong>Expiry: {{groupBy.expiryDate|date:'EEEE, d MMM y'}}</strong></td>\n    </ng-container>\n\n    <tr mat-row *matRowDef=\"let row; columns: ['groupHeader']; when: isGroup\">\n</table>\n"

/***/ }),

/***/ "./src/app/cba-views/components/options/options.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/cba-views/components/options/options.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-cell.cdk-column-groupHeader {\n  color: black;\n  background-color: #f3f3f3; }\n  .mat-cell.cdk-column-groupHeader strong {\n    font-weight: normal; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJ2aW5kZXIuc2luZ2gvRG9jdW1lbnRzL0NvZGUvY2JhLXRlc3Qvc3JjL2FwcC9jYmEtdmlld3MvY29tcG9uZW50cy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCLEVBQUE7RUFGM0I7SUFJSSxtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NiYS12aWV3cy9jb21wb25lbnRzL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY2VsbC5jZGstY29sdW1uLWdyb3VwSGVhZGVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xuICBzdHJvbmcge1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/cba-views/components/options/options.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/cba-views/components/options/options.component.ts ***!
  \*******************************************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_cba_views_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cba-views.service */ "./src/app/cba-views/services/cba-views.service.ts");




var OptionsComponent = /** @class */ (function () {
    function OptionsComponent(viewsService) {
        this.viewsService = viewsService;
        this.displayedColumns = [
            'code',
            'bid',
            'offer',
            'openInterest',
            'volume',
            'lastTrade',
            'strikePrice',
        ];
    }
    OptionsComponent.prototype.ngOnInit = function () {
        this._populateOptions();
    };
    OptionsComponent.prototype._populateOptions = function () {
        var _this = this;
        this.viewsService.getOptions().subscribe(function (options) {
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this._transformTableData(options));
        });
    };
    OptionsComponent.prototype._transformTableData = function (optionsDetails) {
        var rows = [];
        optionsDetails.forEach(function (optionDetail) {
            rows.push({ expiryDate: optionDetail.expiryDate, isGroupBy: true });
            rows = rows.concat(optionDetail.options);
        });
        return rows;
    };
    OptionsComponent.prototype.isGroup = function (index, item) {
        return item.isGroupBy;
    };
    OptionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/cba-views/components/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/cba-views/components/options/options.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cba_views_service__WEBPACK_IMPORTED_MODULE_3__["CBAViewsService"]])
    ], OptionsComponent);
    return OptionsComponent;
}());



/***/ }),

/***/ "./src/app/cba-views/components/warrants/warrants.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/cba-views/components/warrants/warrants.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"heading-wrapper clearfix\">\n  <div class=\"heading-content\"> Barrier Instalment</div>\n  <div class=\"filter-wrapper\">\n    <mat-form-field>\n      <mat-select\n        placeholder=\"Type\"\n        (selectionChange)=\"applyFilters($event.value)\"\n      >\n        <mat-option *ngFor=\"let filter of filters\" [value]=\"filter.type\">{{\n          filter.type\n        }}</mat-option>\n        <mat-option [value]=\"\">All</mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n</div>\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"code\">\n    <th mat-header-cell *matHeaderCellDef>Code</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.code }}</td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"issuer\">\n    <th mat-header-cell *matHeaderCellDef>issuer</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.issuer }}</td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"exercisePrice\">\n    <th mat-header-cell *matHeaderCellDef>Exercise Price ($)</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.exercisePrice }}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"multiplier\">\n    <th mat-header-cell *matHeaderCellDef>multiplier</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.multiplier }}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"bid\">\n    <th mat-header-cell *matHeaderCellDef>bid ($)</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.bid }}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"offer\">\n    <th mat-header-cell *matHeaderCellDef>offer ($)</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.offer }}</td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"volume\">\n    <th mat-header-cell *matHeaderCellDef>volume</th>\n    <td mat-cell *matCellDef=\"let element\">{{ element.volume }}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n</table>\n"

/***/ }),

/***/ "./src/app/cba-views/components/warrants/warrants.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/cba-views/components/warrants/warrants.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading-wrapper .filter-wrapper {\n  float: right; }\n\n.heading-wrapper .mat-form-field .mat-form-field-wrapper {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oYXJ2aW5kZXIuc2luZ2gvRG9jdW1lbnRzL0NvZGUvY2JhLXRlc3Qvc3JjL2FwcC9jYmEtdmlld3MvY29tcG9uZW50cy93YXJyYW50cy93YXJyYW50cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVJLFlBQVksRUFBQTs7QUFGaEI7RUFNTSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYmEtdmlld3MvY29tcG9uZW50cy93YXJyYW50cy93YXJyYW50cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRpbmctd3JhcHBlciB7XG4gIC5maWx0ZXItd3JhcHBlciB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICB9XG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/cba-views/components/warrants/warrants.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/cba-views/components/warrants/warrants.component.ts ***!
  \*********************************************************************/
/*! exports provided: WarrantsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantsComponent", function() { return WarrantsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_cba_views_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cba-views.service */ "./src/app/cba-views/services/cba-views.service.ts");




var WarrantsComponent = /** @class */ (function () {
    function WarrantsComponent(viewsService) {
        this.viewsService = viewsService;
        this.displayedColumns = [
            'code',
            'issuer',
            'exercisePrice',
            'multiplier',
            'bid',
            'offer',
            'volume',
        ];
    }
    WarrantsComponent.prototype.ngOnInit = function () {
        this._populateWarrants();
        this._populateFilters();
    };
    WarrantsComponent.prototype._populateWarrants = function () {
        var _this = this;
        this.viewsService
            .getWarrants()
            .subscribe(function (warrants) {
            return (_this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](warrants));
        });
    };
    WarrantsComponent.prototype._populateFilters = function () {
        var _this = this;
        this.viewsService
            .getFilters()
            .subscribe(function (filters) { return (_this.filters = filters); });
    };
    WarrantsComponent.prototype.applyFilters = function (filterValue) {
        this.dataSource.filter = filterValue;
    };
    WarrantsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warrants',
            template: __webpack_require__(/*! ./warrants.component.html */ "./src/app/cba-views/components/warrants/warrants.component.html"),
            styles: [__webpack_require__(/*! ./warrants.component.scss */ "./src/app/cba-views/components/warrants/warrants.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cba_views_service__WEBPACK_IMPORTED_MODULE_3__["CBAViewsService"]])
    ], WarrantsComponent);
    return WarrantsComponent;
}());



/***/ }),

/***/ "./src/app/cba-views/services/cba-views.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/cba-views/services/cba-views.service.ts ***!
  \*********************************************************/
/*! exports provided: CBAViewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CBAViewsService", function() { return CBAViewsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http-error-handler.service */ "./src/app/cba-views/services/http-error-handler.service.ts");





var CBAViewsService = /** @class */ (function () {
    function CBAViewsService(http, httpErrorHandler) {
        this.http = http;
        this.handleError = httpErrorHandler.createHandleError('CBAViewsService');
    }
    CBAViewsService.prototype.getWarrants = function () {
        return this.http.get('api/warrants').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp.default.warrants; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getWarrants', [])));
    };
    CBAViewsService.prototype.getFilters = function () {
        return this.http.get('api/warrants').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp.default.filter; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getFilters', [])));
    };
    CBAViewsService.prototype.getOptions = function () {
        return this.http.get('api/options').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (resp) { return resp.default.optionDetails; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getOptions', [])));
    };
    CBAViewsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _http_error_handler_service__WEBPACK_IMPORTED_MODULE_4__["HttpErrorHandler"]])
    ], CBAViewsService);
    return CBAViewsService;
}());



/***/ }),

/***/ "./src/app/cba-views/services/http-error-handler.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/cba-views/services/http-error-handler.service.ts ***!
  \******************************************************************/
/*! exports provided: HttpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorHandler", function() { return HttpErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



/** Handles HttpClient errors */
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        var _this = this;
        /** Create curried handleError function that already knows the service name */
        this.createHandleError = function (serviceName) {
            if (serviceName === void 0) { serviceName = ''; }
            return function (operation, result) {
                if (operation === void 0) { operation = 'operation'; }
                if (result === void 0) { result = {}; }
                return _this.handleError(serviceName, operation, result);
            };
        };
    }
    /**
     * Returns a function that handles Http operation failures.
     * This error handler lets the app continue to run as if no error occurred.
     * @param serviceName = name of the data service that attempted the operation
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    HttpErrorHandler.prototype.handleError = function (serviceName, operation, result) {
        if (serviceName === void 0) { serviceName = ''; }
        if (operation === void 0) { operation = 'operation'; }
        if (result === void 0) { result = {}; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            var message = (error.error instanceof ErrorEvent) ?
                error.error.message :
                "server returned code " + error.status;
            console.log(serviceName + ": " + operation + " failed: " + message);
            // Let the app keep running by returning a safe result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _assets_data_options_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/data/options.json */ "./src/assets/data/options.json");
var _assets_data_options_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/options.json */ "./src/assets/data/options.json", 1);
/* harmony import */ var _assets_data_warrants_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/data/warrants.json */ "./src/assets/data/warrants.json");
var _assets_data_warrants_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/data/warrants.json */ "./src/assets/data/warrants.json", 1);


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        return { options: _assets_data_options_json__WEBPACK_IMPORTED_MODULE_0___namespace, warrants: _assets_data_warrants_json__WEBPACK_IMPORTED_MODULE_1___namespace };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
            ],
            declarations: [],
            providers: [],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/assets/data/options.json":
/*!**************************************!*\
  !*** ./src/assets/data/options.json ***!
  \**************************************/
/*! exports provided: filter, optionDetails, default */
/***/ (function(module) {

module.exports = {"filter":[],"optionDetails":[{"expiryDate":"2019-01-10T00:00:00","options":[{"code":"XJOJP9","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5425,"expiryDate":"2019-01-10T00:00:00"},{"code":"XJOJR9","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5450,"expiryDate":"2019-01-10T00:00:00"},{"code":"XPOER9","type":"Put","bid":1.23,"offer":1.2,"openInterest":0,"volume":300,"lastTrade":1.23,"strikePrice":5460,"expiryDate":"2019-01-10T00:00:00"},{"code":"XJOJZ9","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5550,"expiryDate":"2019-01-10T00:00:00"},{"code":"XJOK29","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5575,"expiryDate":"2019-01-10T00:00:00"},{"code":"XPOAR2","type":"Put","bid":2.23,"offer":2.22,"openInterest":0,"volume":350,"lastTrade":2.23,"strikePrice":5460,"expiryDate":"2019-01-10T00:00:00"}]},{"expiryDate":"2019-01-17T00:00:00","options":[{"code":"XJOX77","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5200,"expiryDate":"2019-01-17T00:00:00"},{"code":"XJOWO7","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5225,"expiryDate":"2019-01-17T00:00:00"},{"code":"XPO37","type":"Put","bid":1.1,"offer":1,"openInterest":0,"volume":100,"lastTrade":1.05,"strikePrice":5225,"expiryDate":"2019-01-17T00:00:00"},{"code":"XPDWO7","type":"Put","bid":0.99,"offer":0.98,"openInterest":0,"volume":230,"lastTrade":0.99,"strikePrice":5225,"expiryDate":"2019-01-17T00:00:00"},{"code":"XJOXD7","type":"Call","bid":0.99,"offer":1,"openInterest":0,"volume":200,"lastTrade":1,"strikePrice":5250,"expiryDate":"2019-01-17T00:00:00"}]}]};

/***/ }),

/***/ "./src/assets/data/warrants.json":
/*!***************************************!*\
  !*** ./src/assets/data/warrants.json ***!
  \***************************************/
/*! exports provided: filter, warrants, default */
/***/ (function(module) {

module.exports = {"filter":[{"type":"Barrier Index Call","expiryDates":["2029-12-31T00:00:00"]},{"type":"Barrier Index Pull","expiryDates":["2029-12-31T00:00:00"]}],"warrants":[{"code":"XJOKCC","type":"Barrier Index Call","issuer":"CitiWarrants (CGM Australia)","exercisePrice":4500,"multiplier":100,"bid":0.99,"offer":1,"volume":400,"expiryDate":"2029-12-31T00:00:00"},{"code":"XJOKOC","type":"Barrier Index Call","issuer":"CitiWarrants (CGM Australia)","exercisePrice":5224.9365,"multiplier":100,"bid":1.2,"offer":1.3,"volume":1000,"expiryDate":"2029-12-31T00:00:00"},{"code":"XJOLOM","type":"Barrier Index Call","issuer":"CitiWarrants (CGM Australia)","exercisePrice":5295.5867,"multiplier":100,"bid":3.5,"offer":3.54,"volume":50,"expiryDate":"2029-12-31T00:00:00"},{"code":"XJOLOH","type":"Barrier Index Pull","issuer":"CitiWarrants (CGM Australia)","exercisePrice":5548.1042,"multiplier":100,"bid":4.1,"offer":4.2,"volume":600,"expiryDate":"2029-12-31T00:00:00"},{"code":"XJOKOG","type":"Barrier Index Call","issuer":"CitiWarrants (CGM Australia)","exercisePrice":4200.9494,"multiplier":100,"bid":1.1,"offer":1.2,"volume":750,"expiryDate":"2029-12-31T00:00:00"},{"code":"XJOLOJ","type":"Barrier Index Pull","issuer":"CitiWarrants (CGM Australia)","exercisePrice":5391.09,"multiplier":100,"bid":2.3,"offer":2.34,"volume":1200,"expiryDate":"2029-12-31T00:00:00"}]};

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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/harvinder.singh/Documents/Code/cba-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map