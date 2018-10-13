webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_events__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__saved_events_saved_events__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_event_create_event__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messasges_messasges__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__me_me__ = __webpack_require__(199);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__events_events__["a" /* EventsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__saved_events_saved_events__["a" /* SavedEventsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__create_event_create_event__["a" /* CreateEventPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__messasges_messasges__["a" /* MessasgesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_6__me_me__["a" /* MePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/tabs/tabs.html"*/'<ion-tabs id="tabs-tabs1">\n  <ion-tab [root]="tab1Root" tabTitle="Events" tabIcon="checkmark-circle-outline" id="tabs-tab1"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Saved" tabIcon="heart-outline" id="tabs-tab2"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Create" tabIcon="add" id="tabs-tab3"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Messages" tabIcon="chatboxes" id="tabs-tab4"></ion-tab>\n  <ion-tab [root]="tab5Root" tabTitle="Me" tabIcon="person" id="tabs-tab5"></ion-tab>\n</ion-tabs>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function EventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventsPage.prototype.goToEvent = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */]);
    };
    EventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-events',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/events/events.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2">\n  <ion-list id="events-list3">\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToEvent()" id="events-list-item1">\n        <ion-icon name="football" item-left></ion-icon>\n        Soccer\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive">\n          Save\n        </button>\n        <button ion-button color="energized">\n          Yoin\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToEvent()" id="events-list-item2">\n        <ion-icon name="film" item-left></ion-icon>\n        Cinema\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive">\n          Save\n        </button>\n        <button ion-button color="energized">\n          Yoin\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToEvent()" id="events-list-item3">\n        <ion-icon name="basket" item-left></ion-icon>\n        Dinner\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="positive">\n          Save\n        </button>\n        <button ion-button color="energized">\n          Yoin\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/events/events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EventsPage);
    return EventsPage;
}());

//# sourceMappingURL=events.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SavedEventsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_event__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SavedEventsPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SavedEventsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SavedEventsPage.prototype.goToEvent = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__event_event__["a" /* EventPage */]);
    };
    SavedEventsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-saved-events',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/saved-events/saved-events.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Saved Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page3">\n  <ion-list id="savedEvents-list4">\n    <ion-item-sliding>\n      <ion-item color="none" on-click="goToEvent()" id="savedEvents-list-item4">\n        <ion-icon name="basketball" item-left></ion-icon>\n        Basket\n        <ion-note item-right></ion-note>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="assertive">\n          Remove\n        </button>\n        <button ion-button color="energized">\n          Yoin\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/saved-events/saved-events.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SavedEventsPage);
    return SavedEventsPage;
}());

//# sourceMappingURL=saved-events.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateEventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateEventPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function CreateEventPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CreateEventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-event',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/create-event/create-event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Create Event\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page4">\n  <form id="createEvent-form3">\n    <ion-item id="createEvent-input6">\n      <ion-label>\n        Title\n      </ion-label>\n      <ion-input type="text" placeholder="" name="title"></ion-input>\n    </ion-item>\n    <ion-item id="createEvent-select1">\n      <ion-label>\n        Type\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Soccer\n        </ion-option>\n        <ion-option>\n          Cinema\n        </ion-option>\n        <ion-option>\n          Dinner\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="createEvent-input7">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder="" name="date"></ion-input>\n    </ion-item>\n    <ion-item id="createEvent-input8">\n      <ion-label>\n        Details\n      </ion-label>\n      <ion-input type="text" placeholder="" name="details"></ion-input>\n    </ion-item>\n  </form>\n  <button id="createEvent-button4" ion-button color="stable" block>\n    Create\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/create-event/create-event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], CreateEventPage);
    return CreateEventPage;
}());

//# sourceMappingURL=create-event.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessasgesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessasgesPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MessasgesPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MessasgesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messasges',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/messasges/messasges.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Messasges\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page5">\n  <ion-list id="messasges-list5">\n    <ion-item color="none" id="messasges-list-item5">\n      <ion-icon name="person" item-left></ion-icon>\n      Martin Nilsson\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/messasges/messasges.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MessasgesPage);
    return MessasgesPage;
}());

//# sourceMappingURL=messasges.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MePage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function MePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    MePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-me',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/me/me.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Me\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page6">\n  <img src="assets/img/YU4ofCqQQTvqknEMUpL6_IMG_0782.jpg" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="me-form6">\n    <ion-item id="me-input12">\n      <ion-label>\n        Mats Paulsen\n      </ion-label>\n      <ion-input type="text" placeholder="" name="name"></ion-input>\n    </ion-item>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/me/me.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], MePage);
    return MePage;
}());

//# sourceMappingURL=me.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_events_events__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_saved_events_saved_events__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_event_event__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messasges_messasges__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_me_me__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_saved_events_saved_events__["a" /* SavedEventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_messasges_messasges__["a" /* MessasgesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_events_events__["a" /* EventsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_saved_events_saved_events__["a" /* SavedEventsPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_create_event_create_event__["a" /* CreateEventPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_event_event__["a" /* EventPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_messasges_messasges__["a" /* MessasgesPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_me_me__["a" /* MePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_chat_chat__["a" /* ChatPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/mats/git/yoin/src/app/app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/mats/git/yoin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function LoginPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Login\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page7">\n  <form id="login-form1">\n    <ion-list id="login-list1">\n      <ion-item id="login-input1">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="login-input2">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="password" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <div class="spacer" style="height:40px;" id="login-spacer1"></div>\n    <button id="login-button1" ion-button color="stable" block>\n      Log in\n    </button>\n    <button id="login-button2" ion-button clear color="positive" block href-inappbrowser="/signup">\n      Or create an account\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Signup\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page8">\n  <form id="signup-form2">\n    <ion-list id="signup-list2">\n      <ion-item id="signup-input3">\n        <ion-label>\n          Name\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input4">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="signup-input5">\n        <ion-label>\n          Password\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="signup-button3" ion-button color="stable" block>\n      Sign up\n    </button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function ChatPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/chat/chat.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Chat\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page10">\n  <ion-list id="chat-list6">\n    <ion-item id="chat-list-item-container1">\n      <div id="chat-markdown2" class="show-list-numbers-and-dots">\n        <p style="margin-top:0px;color:#000000;">\n          Some friendly\n          <strong>\n            markdown\n          </strong>\n        </p>\n      </div>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/chat/chat.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], ChatPage);
    return ChatPage;
}());

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventPage = /** @class */ (function () {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    function EventPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-event',template:/*ion-inline-start:"/Users/mats/git/yoin/src/pages/event/event.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Event\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page9">\n  <form id="event-form4">\n    <ion-item id="event-input9">\n      <ion-label>\n        Title\n      </ion-label>\n      <ion-input type="text" placeholder="" name="title"></ion-input>\n    </ion-item>\n    <ion-item id="event-select2">\n      <ion-label>\n        Type\n      </ion-label>\n      <ion-select name="">\n        <ion-option>\n          Soccer\n        </ion-option>\n        <ion-option>\n          Cinema\n        </ion-option>\n        <ion-option>\n          Dinner\n        </ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item id="event-input10">\n      <ion-label>\n        Date\n      </ion-label>\n      <ion-input type="date" placeholder="" name="date"></ion-input>\n    </ion-item>\n    <ion-item id="event-input11">\n      <ion-label>\n        Details\n      </ion-label>\n      <ion-input type="text" placeholder="" name="details"></ion-input>\n    </ion-item>\n  </form>\n  <button id="event-button5" ion-button color="energized" block>\n    Yoin\n  </button>\n</ion-content>'/*ion-inline-end:"/Users/mats/git/yoin/src/pages/event/event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], EventPage);
    return EventPage;
}());

//# sourceMappingURL=event.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map