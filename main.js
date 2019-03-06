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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");




var routes = [
    {
        path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__["ChatComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " .app-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  box-sizing: border-box;\r\n} \r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUM7RUFDQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5hcHAtY29udGVudCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn0gXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container fullscreen>\r\n  <mat-sidenav #sidenav>\r\n    <mat-nav-list>\r\n      <a mat-list-item href=\"https://luixaviles.com\" target=\"_blank\">\r\n        <mat-icon mat-list-icon>person</mat-icon>\r\n        <span mat-line>Author</span>\r\n      </a>\r\n      <a mat-list-item href=\"https://github.com/luixaviles/socket-io-typescript-chat\" target=\"_blank\">\r\n        <mat-icon mat-list-icon>code</mat-icon>\r\n        <span mat-line>Source Code</span>\r\n      </a>\r\n      <a mat-list-item href=\"https://medium.com/dailyjs/real-time-apps-with-typescript-integrating-web-sockets-node-angular-e2b57cbd1ec1\" target=\"_blank\">\r\n        <mat-icon mat-list-icon>web</mat-icon>\r\n        <span mat-line>Blog Post</span>\r\n      </a>\r\n    </mat-nav-list>\r\n  </mat-sidenav>\r\n\r\n  <div>\r\n    <mat-toolbar color=\"primary\">\r\n      <button mat-icon-button (click)=\"sidenav.toggle()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n      <span>Unity Chat</span>\r\n    </mat-toolbar>\r\n\r\n    <div class=\"app-content\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</mat-sidenav-container>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.initModel = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcc-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat/chat.module */ "./src/app/chat/chat.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _chat_chat_module__WEBPACK_IMPORTED_MODULE_6__["ChatModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n[mat-fab] {\r\n    position: absolute;\r\n    right: 2%;\r\n    top: 35px;\r\n    z-index: 1;\r\n}\r\n\r\n.chat-container {\r\n    position: fixed;\r\n    width: 100%; \r\n    height: 100%;  \r\n}\r\n\r\n.chat-input {\r\n    padding-top: 20px;\r\n    width: 80%; \r\n}\r\n\r\n.chat-list {\r\n    overflow: auto;\r\n    position: fixed;\r\n    top: 90px;\r\n    left: 25px;\r\n    right: 25px;\r\n    bottom: 120px;\r\n}\r\n\r\n.chat-list-item-other {\r\n    margin-top: 2px;\r\n    margin-bottom: 2px;\r\n    margin-right: 100px;\r\n    border-radius: 5px;\r\n    background-color: #E8EAF6;\r\n}\r\n\r\n.chat-list-item-me {\r\n  margin-top: 4px;\r\n  margin-bottom: 4px;\r\n  margin-left: 100px;\r\n  border-radius: 5px;\r\n  color: white;\r\n  background-color: rgb(39, 119, 194);\r\n}\r\n\r\n.main-card {\r\n    height: 100%;  \r\n}\r\n\r\n.chat-footer-container {\r\n    position:fixed;\r\n    bottom:25px;\r\n    left:25px;\r\n    right:25px;\r\n}\r\n\r\n.chat-notification {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1DQUFtQztBQUNyQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5bbWF0LWZhYl0ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDIlO1xyXG4gICAgdG9wOiAzNXB4O1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmNoYXQtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGhlaWdodDogMTAwJTsgIFxyXG59XHJcblxyXG4uY2hhdC1pbnB1dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiA4MCU7IFxyXG59XHJcblxyXG4uY2hhdC1saXN0IHtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA5MHB4O1xyXG4gICAgbGVmdDogMjVweDtcclxuICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgYm90dG9tOiAxMjBweDtcclxufVxyXG5cclxuLmNoYXQtbGlzdC1pdGVtLW90aGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFQUY2O1xyXG59XHJcblxyXG4uY2hhdC1saXN0LWl0ZW0tbWUge1xyXG4gIG1hcmdpbi10b3A6IDRweDtcclxuICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDM5LCAxMTksIDE5NCk7XHJcbn1cclxuXHJcbi5tYWluLWNhcmQge1xyXG4gICAgaGVpZ2h0OiAxMDAlOyAgXHJcbn1cclxuXHJcbi5jaGF0LWZvb3Rlci1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgICBib3R0b206MjVweDtcclxuICAgIGxlZnQ6MjVweDtcclxuICAgIHJpZ2h0OjI1cHg7XHJcbn1cclxuXHJcbi5jaGF0LW5vdGlmaWNhdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-fab (click)=\"onClickUserInfo()\">\r\n  <mat-icon>person</mat-icon>\r\n</button>\r\n<div class=\"chat-container\">\r\n  <mat-card class=\"main-card\">\r\n    <mat-list class=\"chat-list\">\r\n      <mat-list-item *ngFor=\"let message of messages\" [ngClass]=\"message.sender.type=='candidate' ? 'chat-list-item' : 'chat-list-item-me'\">\r\n        <img mat-list-avatar [src]=\"message.sender.pictureUrl\">\r\n        <h4 mat-line>\r\n          <b>{{message.sender.name}}</b>\r\n        </h4>\r\n        <p mat-line *ngIf=\"message.action === undefined\">\r\n          <span> {{message.messageBody}} </span>\r\n        </p>\r\n        <!-- <p mat-line *ngIf=\"message.action === action.JOINED\" class=\"chat-notification\">\r\n          <span> <b>{{message.from.name}}</b> joined to the conversation. </span>\r\n        </p> -->\r\n        <!-- <p mat-line *ngIf=\"message.action === action.RENAME\" class=\"chat-notification\">\r\n          <span> <b>{{message.content.previousUsername}}</b> is now <b>{{message.content.username}}</b> </span>\r\n        </p> -->\r\n      </mat-list-item>\r\n    </mat-list>\r\n    <div class=\"chat-footer-container\">\r\n      <mat-icon>message</mat-icon>\r\n      <mat-form-field class=\"chat-input\">\r\n        <input matInput \r\n               #inputMessage \r\n               maxlength=\"140\" \r\n               placeholder=\"Type your message\" \r\n               [(ngModel)]=\"messageContent\" \r\n               (keyup.enter)=\"sendMessage(messageContent)\">\r\n        <mat-hint align=\"end\">{{inputMessage.value.length}}/140</mat-hint>\r\n      </mat-form-field>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n\r\n<!-- [ngClass]=\"[(message.action === undefined && message.from.id === user.id)? 'chat-list-item': '']\" -->"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_model_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/model/action */ "./src/app/chat/shared/model/action.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/socket.service */ "./src/app/chat/shared/services/socket.service.ts");
/* harmony import */ var _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-user/dialog-user-type */ "./src/app/chat/dialog-user/dialog-user-type.ts");







var AVATAR_URL = 'https://api.adorable.io/avatars/285';
var ChatComponent = /** @class */ (function () {
    function ChatComponent(socketService, dialog) {
        this.socketService = socketService;
        this.dialog = dialog;
        this.action = _shared_model_action__WEBPACK_IMPORTED_MODULE_4__["Action"];
        this.messages = [];
        this.defaultDialogUserParams = {
            disableClose: true,
            data: {
                title: 'Welcome',
                dialogType: _dialog_user_dialog_user_type__WEBPACK_IMPORTED_MODULE_6__["DialogUserType"].NEW
            }
        };
        var chat = socketService.getChat();
        console.log('YOYO');
        this.me = chat.participants.me;
        this.other = chat.participants.other;
        this.messages = [];
    }
    ChatComponent.prototype.ngOnInit = function () {
        // this.initModel();
        // Using timeout due to https://github.com/angular/angular/issues/14748
        // setTimeout(() => {
        //   this.openUserPopup(this.defaultDialogUserParams);
        // }, 0);
        var _this = this;
        this.socketService.getEventListener().subscribe(function (event) {
            if (event.type == 'message') {
                console.log(event.data.message);
                var data = event.data.message;
                _this.messages.push(data);
            }
            else if (event.type == 'messagesFetched') {
                event.data.map(function (message) {
                    _this.messages.push(message);
                });
                console.log('my messages nigga: ', _this.messages);
            }
        });
    };
    ChatComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // subscribing to any changes in the list of items / messages
        this.matListItems.changes.subscribe(function (elements) {
            _this.scrollToBottom();
        });
    };
    // auto-scroll fix: inspired by this stack overflow post
    // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style
    ChatComponent.prototype.scrollToBottom = function () {
        try {
            this.matList.nativeElement.scrollTop = this.matList.nativeElement.scrollHeight;
        }
        catch (err) {
        }
    };
    // private initModel(): void {
    //   const randomId = this.getRandomId();
    //   this.user = {
    //     id: randomId,
    //     avatar: `${AVATAR_URL}/${randomId}.png`
    //   };
    // }
    // private getRandomId(): number {
    //   return Math.floor(Math.random() * (1000000)) + 1;
    // }
    // public onClickUserInfo() {
    //   this.openUserPopup({
    //     data: {
    //       username: this.user.name,
    //       title: 'Edit Details',
    //       dialogType: DialogUserType.EDIT
    //     }
    //   });
    // }
    // private openUserPopup(params): void {
    //   this.dialogRef = this.dialog.open(DialogUserComponent, params);
    //   this.dialogRef.afterClosed().subscribe(paramsDialog => {
    //     if (!paramsDialog) {
    //       return;
    //     }
    //     this.user.name = paramsDialog.username;
    //     if (paramsDialog.dialogType === DialogUserType.NEW) {
    //       this.sendNotification(paramsDialog, Action.JOINED);
    //     } else if (paramsDialog.dialogType === DialogUserType.EDIT) {
    //       this.sendNotification(paramsDialog, Action.RENAME);
    //     }
    //   });
    // }
    ChatComponent.prototype.initializeMessageWith = function (content) {
        return {
            messageBody: content,
            sender: this.me,
            createdAt: new Date()
        };
    };
    ChatComponent.prototype.sendMessage = function (message) {
        if (!message) {
            return;
        }
        var content = this.initializeMessageWith(message);
        this.socketService.broadcast(content);
        this.messageContent = null;
    };
    // public sendNotification(params: any, action: Action): void {
    //   let message: Message;
    //   if (action === Action.JOINED) {
    //     message = {
    //       from: this.user,
    //       action: action
    //     }
    //   } else if (action === Action.RENAME) {
    //     message = {
    //       action: action,
    //       content: {
    //         username: this.user.name,
    //         previousUsername: params.previousUsername
    //       }
    //     };
    //   }
    //   // this.socketService.send(message);
    // }
    ChatComponent.prototype.bubbleClass = function (message) {
        var sender = this.isMy(message) ? 'me' : 'other';
        console.log(sender);
        return "chat-list-item-" + sender;
    };
    ChatComponent.prototype.isMy = function (message) {
        // console.log(_.isEqual(message.sender, this.me));
        return lodash__WEBPACK_IMPORTED_MODULE_3__["isEqual"](message.sender.ID, this.me.ID);
        // return true;ddd
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatList"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatComponent.prototype, "matList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListItem"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
    ], ChatComponent.prototype, "matListItems", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcc-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_5__["SocketService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/material/material.module */ "./src/app/shared/material/material.module.ts");
/* harmony import */ var _chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/socket.service */ "./src/app/chat/shared/services/socket.service.ts");
/* harmony import */ var _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog-user/dialog-user.component */ "./src/app/chat/dialog-user/dialog-user.component.ts");









var ChatModule = /** @class */ (function () {
    function ChatModule() {
    }
    ChatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            declarations: [_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"], _dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_8__["DialogUserComponent"]],
            providers: [_shared_services_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]],
            entryComponents: [_dialog_user_dialog_user_component__WEBPACK_IMPORTED_MODULE_8__["DialogUserComponent"]]
        })
    ], ChatModule);
    return ChatModule;
}());



/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user-type.ts":
/*!******************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user-type.ts ***!
  \******************************************************/
/*! exports provided: DialogUserType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserType", function() { return DialogUserType; });
var DialogUserType;
(function (DialogUserType) {
    DialogUserType[DialogUserType["NEW"] = 0] = "NEW";
    DialogUserType[DialogUserType["EDIT"] = 1] = "EDIT";
})(DialogUserType || (DialogUserType = {}));


/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user.component.css":
/*!************************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-dialog-content {\r\n    overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9kaWFsb2ctdXNlci9kaWFsb2ctdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY2hhdC9kaWFsb2ctdXNlci9kaWFsb2ctdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user.component.html":
/*!*************************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{params.title}}</h2>\r\n\r\n<mat-dialog-content>\r\n  <mat-form-field>\r\n    <input matInput name=\"username\" placeholder=\"Consultant ID\" \r\n           [(ngModel)]=\"params.username\" (keyup.enter)=\"onSave()\" [formControl]=\"usernameFormControl\" required>\r\n    <mat-error>This field is required</mat-error>\r\n    <mat-hint>Please type your consultant ID</mat-hint>\r\n  </mat-form-field>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions *ngIf=\"params?.typeDialog === 'new-user'\" [attr.align]=\"'end'\">\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close (click)=\"onSave()\" [disabled]=\"usernameFormControl.hasError('required')\">Chat!</button>\r\n</mat-dialog-actions>\r\n\r\n<mat-dialog-actions *ngIf=\"params?.typeDialog === 'edit-user'\" [attr.align]=\"'end'\">\r\n  <button mat-button mat-dialog-close color=\"secondary\">Close</button>\r\n  <button mat-raised-button color=\"primary\" mat-dialog-close (click)=\"onSave()\">Save</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/chat/dialog-user/dialog-user.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/chat/dialog-user/dialog-user.component.ts ***!
  \***********************************************************/
/*! exports provided: DialogUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogUserComponent", function() { return DialogUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");




var DialogUserComponent = /** @class */ (function () {
    function DialogUserComponent(dialogRef, params) {
        this.dialogRef = dialogRef;
        this.params = params;
        this.usernameFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]);
        this.previousUsername = params.username ? params.username : undefined;
    }
    DialogUserComponent.prototype.ngOnInit = function () {
    };
    DialogUserComponent.prototype.onSave = function () {
        this.dialogRef.close({
            username: this.params.username,
            dialogType: this.params.dialogType,
            previousUsername: this.previousUsername
        });
    };
    DialogUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'tcc-dialog-user',
            template: __webpack_require__(/*! ./dialog-user.component.html */ "./src/app/chat/dialog-user/dialog-user.component.html"),
            styles: [__webpack_require__(/*! ./dialog-user.component.css */ "./src/app/chat/dialog-user/dialog-user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogUserComponent);
    return DialogUserComponent;
}());



/***/ }),

/***/ "./src/app/chat/shared/model/action.ts":
/*!*********************************************!*\
  !*** ./src/app/chat/shared/model/action.ts ***!
  \*********************************************/
/*! exports provided: Action */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
var Action;
(function (Action) {
    Action[Action["JOINED"] = 0] = "JOINED";
    Action[Action["LEFT"] = 1] = "LEFT";
    Action[Action["RENAME"] = 2] = "RENAME";
})(Action || (Action = {}));


/***/ }),

/***/ "./src/app/chat/shared/services/socket.service.ts":
/*!********************************************************!*\
  !*** ./src/app/chat/shared/services/socket.service.ts ***!
  \********************************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/esm5/http.js");



// const SERVER_URL = 'ws://localhost:3000';
var SocketService = /** @class */ (function () {
    function SocketService(http) {
        var _this = this;
        this.http = http;
        this.listener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.SERVER_URL = 'https://unity-mobile-node.herokuapp.com';
        this.SERVER_URL_WS = 'ws://unity-mobile-node.herokuapp.com';
        this.roomId = 'etNG3V61LWS6Pzkeb_omuZGMVAOLd1_70tRQblVizWQ~';
        this.socket = new WebSocket(this.SERVER_URL_WS);
        this.socket.onopen = function () {
            _this.listener.emit({ 'type': 'open', 'data': event });
            _this.join(_this.roomId);
            _this.http.get(_this.SERVER_URL + "/messages?roomId=etNG3V61LWS6Pzkeb_omuZGMVAOLd1_70tRQblVizWQ~")
                .subscribe(function (data) {
                console.log(data);
                _this.listener.emit({ 'type': 'messagesFetched', 'data': data });
            });
        };
        this.socket.onmessage = function (e) {
            _this.listener.emit({ 'type': 'message', 'data': JSON.parse(e.data) });
        };
    }
    SocketService.prototype.getChat = function () {
        var me = {
            name: 'Sanjiv Patel',
            type: 'consultant',
            ID: '2',
            pictureUrl: 'https://unsplash.it/100/100?image=837',
            coverUrl: ''
        };
        var other = {
            name: 'Pertemps',
            type: 'candidate',
            ID: '',
            pictureUrl: 'https://media.glassdoor.com/sql/12354/pertemps-squarelogo-1501599154775.png',
            coverUrl: 'https://unsplash.it/400/400?image=531',
        };
        var messages = [];
        var chat = {
            room: this.roomId,
            participants: {
                me: me,
                other: other
            },
            messages: messages.sort(function (a, b) {
                return a.date - b.date;
            })
        };
        return chat;
    };
    SocketService.prototype.join = function (room) {
        this.socket.send(JSON.stringify({ join: room }));
    };
    SocketService.prototype.broadcast = function (data) {
        this.socket.send(JSON.stringify({ room: this.roomId, message: data }));
    };
    SocketService.prototype.close = function () {
        this.socket.close();
    };
    SocketService.prototype.getEventListener = function () {
        return this.listener;
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/shared/material/material.module.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            ],
            declarations: [],
            providers: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material/material.module */ "./src/app/shared/material/material.module.ts");




var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            exports: [
                _material_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]
            ],
            declarations: []
        })
    ], SharedModule);
    return SharedModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\gitlab\unity-web-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map