webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mazes_mazes_component__ = __webpack_require__("../../../../../src/app/mazes/mazes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mazes_maze_start_maze_start_component__ = __webpack_require__("../../../../../src/app/mazes/maze-start/maze-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mazes_maze_detail_maze_detail_component__ = __webpack_require__("../../../../../src/app/mazes/maze-detail/maze-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mazes_maze_user_maze_user_component__ = __webpack_require__("../../../../../src/app/mazes/maze-user/maze-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/mazes', pathMatch: 'full' },
    { path: 'usermaze', component: __WEBPACK_IMPORTED_MODULE_5__mazes_maze_user_maze_user_component__["a" /* MazeUserComponent */] },
    { path: 'mazes', component: __WEBPACK_IMPORTED_MODULE_2__mazes_mazes_component__["a" /* MazesComponent */], children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_3__mazes_maze_start_maze_start_component__["a" /* MazeStartComponent */] },
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_4__mazes_maze_detail_maze_detail_component__["a" /* MazeDetailComponent */] }
        ] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mazes_mazes_component__ = __webpack_require__("../../../../../src/app/mazes/mazes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mazes_maze_start_maze_start_component__ = __webpack_require__("../../../../../src/app/mazes/maze-start/maze-start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mazes_maze_list_maze_list_component__ = __webpack_require__("../../../../../src/app/mazes/maze-list/maze-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mazes_maze_list_maze_item_maze_item_component__ = __webpack_require__("../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mazes_maze_detail_maze_detail_component__ = __webpack_require__("../../../../../src/app/mazes/maze-detail/maze-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mazes_maze_user_maze_user_component__ = __webpack_require__("../../../../../src/app/mazes/maze-user/maze-user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__mazes_mazes_component__["a" /* MazesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__mazes_maze_start_maze_start_component__["a" /* MazeStartComponent */],
            __WEBPACK_IMPORTED_MODULE_8__mazes_maze_list_maze_list_component__["a" /* MazeListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__mazes_maze_list_maze_item_maze_item_component__["a" /* MazeItemComponent */],
            __WEBPACK_IMPORTED_MODULE_10__mazes_maze_detail_maze_detail_component__["a" /* MazeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_11__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_12__mazes_maze_user_maze_user_component__["a" /* MazeUserComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"navbar-header\">\n\t\t\t<a class=\"navbar-brand\">Route Analyzer</a>\n\t\t</div>\n\t\t\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/mazes']\">Sample Maze</a></li>\n\t\t\t\t<li routerLinkActive=\"active\"><a [routerLink]=\"['/usermaze']\">User Maze</a></li>\t\t\t\t\t\t\t\t\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze-detail/maze-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\n\tbackground-color: green;\t\n}\n.blocker {\n\tbackground-color: red;\t\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/maze-detail/maze-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xs-5\"></div>\n\t<div class=\"col-xs-2\"><button class=\"btn btn-primary\" (click)=\"solveMaze()\">Find Shortest Path</button></div>\n\t<div class=\"col-xs-5\"></div>\n</div>\n<hr>\n<div class=\"row\">\t\t\n\t<div class=\"col-xs-12\" *ngIf=\"maze.totalStepsToSolve\">\t\t\n\t\t<span>Total Steps taken to solve the maze is {{ maze.totalStepsToSolve }}</span>\t\t\n\t</div>\n\t<div class=\"col-xs-12\">\n\t\t<table border=\"1\">\n\t\t\t<tr *ngFor=\"let mazeRow of maze.mazeElements\">\n\t\t\t\t<td *ngFor=\"let mazeEl of mazeRow\"> \n\t\t\t\t\t<!--span [ngClass]=\"{blocker: mazeEl === '#'}\">{{mazeEl}}</span-->\n\t\t\t\t\t<span [ngClass]=\"{selected: mazeEl === '@'}\">{{mazeEl}}</span>\n\t\t\t\t</td>\n\t\t\t</tr>\n\t\t</table>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/mazes/maze-detail/maze-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maze_model__ = __webpack_require__("../../../../../src/app/mazes/maze.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maze_service__ = __webpack_require__("../../../../../src/app/mazes/maze.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MazeDetailComponent = (function () {
    function MazeDetailComponent(mazeService, route) {
        this.mazeService = mazeService;
        this.route = route;
    }
    MazeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.
            subscribe(function (params) {
            _this.id = +params['id'];
            _this.maze = _this.mazeService.getMaze(_this.id);
        });
    };
    MazeDetailComponent.prototype.solveMaze = function () {
        var _this = this;
        this.mazeService.solveMaze(this.maze)
            .subscribe(function (response) {
            _this.maze.totalStepsToSolve = JSON.parse(response['_body']).numberOfSteps;
            var mazeElements = _this.mazeService.getMaze(_this.id).mazeElements;
            _this.maze.mazeElements = _this.mazeService.transformStringShortestPathToMazeEl(mazeElements, JSON.parse(response['_body']).shortestPath);
            _this.mazeService.updateMaze(_this.id, new __WEBPACK_IMPORTED_MODULE_2__maze_model__["a" /* Maze */](_this.maze.name, _this.maze.mazeElements, _this.maze.totalStepsToSolve));
        }, function (error) { return console.log(error); });
    };
    return MazeDetailComponent;
}());
MazeDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maze-detail',
        template: __webpack_require__("../../../../../src/app/mazes/maze-detail/maze-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/maze-detail/maze-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__maze_service__["a" /* MazeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__maze_service__["a" /* MazeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], MazeDetailComponent);

var _a, _b;
//# sourceMappingURL=maze-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.html":
/***/ (function(module, exports) {

module.exports = "<a style=\"cursor: pointer\" \n\t[routerLink]=\"[index]\"\n\trouterLinkActive=\"active\"\n\tclass=\"list-group-item clearfix\">\n\t<div class=\"pull-left\">\n\t\t<h4 class=\"list-group-item-heading\">{{ maze.name }}</h4>\n\t\t<!--p class=\"list-group-item-text\">{{ maze.description }}</p-->\n\t</div>\n</a>"

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maze_model__ = __webpack_require__("../../../../../src/app/mazes/maze.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MazeItemComponent = (function () {
    function MazeItemComponent() {
    }
    MazeItemComponent.prototype.ngOnInit = function () {
    };
    return MazeItemComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__maze_model__["a" /* Maze */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__maze_model__["a" /* Maze */]) === "function" && _a || Object)
], MazeItemComponent.prototype, "maze", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], MazeItemComponent.prototype, "index", void 0);
MazeItemComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maze-item',
        template: __webpack_require__("../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/maze-list/maze-item/maze-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MazeItemComponent);

var _a;
//# sourceMappingURL=maze-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-list.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar\">\n\t<div class=\"container-fluid\">\n\t\t<div class=\"collapse navbar-collapse\">\n\t\t\t<ul class=\"nav navbar-nav\" *ngFor=\"let curMaze of mazes, let i = index\">\n\t\t\t\t<li><app-maze-item \n\t\t\t\t\t\t[maze]=\"curMaze\"\n\t\t\t\t\t\t[index]=\"i\">\n\t\t\t\t\t</app-maze-item>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/mazes/maze-list/maze-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maze_service__ = __webpack_require__("../../../../../src/app/mazes/maze.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MazeListComponent = (function () {
    function MazeListComponent(mazeService) {
        this.mazeService = mazeService;
    }
    MazeListComponent.prototype.ngOnInit = function () {
        this.mazes = this.mazeService.getMazes();
    };
    return MazeListComponent;
}());
MazeListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maze-list',
        template: __webpack_require__("../../../../../src/app/mazes/maze-list/maze-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/maze-list/maze-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__maze_service__["a" /* MazeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__maze_service__["a" /* MazeService */]) === "function" && _a || Object])
], MazeListComponent);

var _a;
//# sourceMappingURL=maze-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze-start/maze-start.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/maze-start/maze-start.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  Please select a maze!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/mazes/maze-start/maze-start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MazeStartComponent = (function () {
    function MazeStartComponent() {
    }
    MazeStartComponent.prototype.ngOnInit = function () {
    };
    return MazeStartComponent;
}());
MazeStartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maze-start',
        template: __webpack_require__("../../../../../src/app/mazes/maze-start/maze-start.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/maze-start/maze-start.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MazeStartComponent);

//# sourceMappingURL=maze-start.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze-user/maze-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selected {\r\n\tbackground-color: green;\t\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/maze-user/maze-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-xs-12\">\t\t\r\n\t\t\t<textarea rows=\"20\" cols=\"150\" ([ngModel])=\"udMaze\" #mazeTxtArea>\t\t\t\r\n\t\t\t</textarea>\r\n\t</div>\r\n</div>\r\n<div class=\"row\">\r\n\t<div class=\"col-xs-5\"></div>\r\n\t<div class=\"col-xs-2\"><button class=\"btn btn-primary\" (click)=\"solveMaze(mazeTxtArea.value)\">Find Shortest Path</button></div>\r\n\t<div class=\"col-xs-5\"></div>\r\n</div>\r\n<hr>\r\n<div class=\"row\">\t\t\r\n\t<div class=\"col-xs-12\" *ngIf=\"maze.totalStepsToSolve\">\t\t\r\n\t\t<span>Total Steps taken to solve the maze is {{ maze.totalStepsToSolve }}</span>\t\t\r\n\t</div>\r\n\t<div class=\"col-xs-12\">\r\n\t\t<table border=\"1\">\r\n\t\t\t<tr *ngFor=\"let mazeRow of maze.mazeElements\">\r\n\t\t\t\t<td *ngFor=\"let mazeEl of mazeRow\"> \r\n\t\t\t\t\t<!--span [ngClass]=\"{blocker: mazeEl === '#'}\">{{mazeEl}}</span-->\r\n\t\t\t\t\t<span [ngClass]=\"{selected: mazeEl === '@'}\">{{mazeEl}}</span>\r\n\t\t\t\t</td>\r\n\t\t\t</tr>\r\n\t\t</table>\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/mazes/maze-user/maze-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maze_model__ = __webpack_require__("../../../../../src/app/mazes/maze.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maze_service__ = __webpack_require__("../../../../../src/app/mazes/maze.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MazeUserComponent = (function () {
    function MazeUserComponent(mazeService) {
        this.mazeService = mazeService;
        this.udMaze = "";
    }
    MazeUserComponent.prototype.ngOnInit = function () {
        this.maze = new __WEBPACK_IMPORTED_MODULE_1__maze_model__["a" /* Maze */]('User Defined', [[]], 0);
    };
    MazeUserComponent.prototype.solveMaze = function (udMaze) {
        var _this = this;
        console.log(udMaze);
        var udMazeElements = [[]];
        udMazeElements[0] = [];
        var indexX = 0;
        var indexY = 0;
        for (var i = 0; i < udMaze.length; i++) {
            if (/\s/.test(udMaze.charAt(i))) {
                indexX++;
                indexY = 0;
                udMazeElements[indexX] = [];
            }
            else {
                udMazeElements[indexX][indexY++] = udMaze.charAt(i);
            }
        }
        this.maze.mazeElements = udMazeElements;
        this.mazeService.solveMaze(this.maze)
            .subscribe(function (response) {
            _this.maze.totalStepsToSolve = JSON.parse(response['_body']).numberOfSteps;
            var mazeElements = udMazeElements;
            mazeElements = _this.mazeService.transformStringShortestPathToMazeEl(mazeElements, JSON.parse(response['_body']).shortestPath);
            _this.maze.mazeElements = mazeElements;
        }, function (error) { return console.log(error); });
    };
    return MazeUserComponent;
}());
MazeUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-maze-user',
        template: __webpack_require__("../../../../../src/app/mazes/maze-user/maze-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/maze-user/maze-user.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__maze_service__["a" /* MazeService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__maze_service__["a" /* MazeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__maze_service__["a" /* MazeService */]) === "function" && _a || Object])
], MazeUserComponent);

var _a;
//# sourceMappingURL=maze-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maze; });
var Maze = (function () {
    function Maze(name, mazeElements, totalStepsToSolve) {
        this.name = name;
        this.mazeElements = mazeElements;
        this.totalStepsToSolve = totalStepsToSolve;
    }
    return Maze;
}());

//# sourceMappingURL=maze.model.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/maze.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maze_model__ = __webpack_require__("../../../../../src/app/mazes/maze.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MazeService = (function () {
    //mazeSelected = new EventEmitter<Maze>();
    function MazeService(http) {
        this.http = http;
        this.mazes = [
            new __WEBPACK_IMPORTED_MODULE_2__maze_model__["a" /* Maze */]("Maze 1", [
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
                ["#", "A", ".", ".", ".", "#", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", "#", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", ".", "#", "B", "#"],
                ["#", ".", "#", ".", "#", "#", ".", "#", ".", "#"],
                ["#", ".", ".", ".", ".", "#", ".", ".", ".", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
            ], 0),
            new __WEBPACK_IMPORTED_MODULE_2__maze_model__["a" /* Maze */]("Maze 2", [
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "B", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
                ["#", "#", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", ".", "#", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", "#", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#"],
                ["#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", "#"],
                ["#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#"],
                ["#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", "#"],
                ["#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#"],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#"],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", "#", "#", "#", "#", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "A", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
            ], 0),
            new __WEBPACK_IMPORTED_MODULE_2__maze_model__["a" /* Maze */]("Maze 3", [
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
                ["#", "A", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#"],
                ["#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#"],
                ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#"],
                ["#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#"],
                ["#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#"],
                ["#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#"],
                ["#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#"],
                ["#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#"],
                ["#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#"],
                ["#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#"],
                ["#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", ".", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#", ".", "#", ".", "#", "#", "#", "#", "#", ".", "#", "#", "#", "#", "#", "#", "#", ".", "#", "#", "#"],
                ["#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", "#", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", "#", ".", ".", ".", ".", ".", ".", ".", ".", ".", "#", ".", "#", ".", ".", ".", ".", "B", "#"],
                ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#", "#"]
            ], 0)
        ];
    }
    MazeService.prototype.solveMaze = function (maze) {
        console.log(maze.mazeElements);
        return this.http.post('/api/getShortestPath/v1', maze.mazeElements);
    };
    MazeService.prototype.getMazes = function () {
        return this.mazes.slice();
    };
    MazeService.prototype.getMaze = function (index) {
        return this.mazes[index];
    };
    MazeService.prototype.updateMazeElements = function (index, mazeElements) {
        this.mazes[index].mazeElements = mazeElements;
    };
    MazeService.prototype.updateMaze = function (index, maze) {
        this.mazes[index] = maze;
    };
    MazeService.prototype.transformStringShortestPathToMazeEl = function (mazeElements, shortestPath) {
        console.log(shortestPathCoordinates);
        var coordinates = shortestPath.split("->");
        var shortestPathCoordinates = coordinates.slice(1, coordinates.length - 2);
        shortestPathCoordinates.forEach(function (shortestPathCoordinate, index) {
            var coordinate = shortestPathCoordinate.substr(1, shortestPathCoordinate.length - 2).split(",");
            mazeElements[coordinate[0]][coordinate[1]] = '@';
        });
        return mazeElements;
    };
    return MazeService;
}());
MazeService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MazeService);

var _a;
//# sourceMappingURL=maze.service.js.map

/***/ }),

/***/ "../../../../../src/app/mazes/mazes.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mazes/mazes.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<app-maze-list></app-maze-list>\n\t</div>\n</div>\n<div class=\"row\">\n\t<div class=\"col-md-12\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/mazes/mazes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MazesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maze_service__ = __webpack_require__("../../../../../src/app/mazes/maze.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MazesComponent = (function () {
    function MazesComponent() {
    }
    MazesComponent.prototype.ngOnInit = function () {
    };
    return MazesComponent;
}());
MazesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-mazes',
        template: __webpack_require__("../../../../../src/app/mazes/mazes.component.html"),
        styles: [__webpack_require__("../../../../../src/app/mazes/mazes.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__maze_service__["a" /* MazeService */]]
    }),
    __metadata("design:paramtypes", [])
], MazesComponent);

//# sourceMappingURL=mazes.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map