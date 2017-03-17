'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var page_1 = require("ui/page");
var config_service_1 = require("../services/config.service");
var bluetooth_service_1 = require("../services/bluetooth.service");
var AppComponent = (function () {
    function AppComponent(page, icon, config, ble) {
        this.page = page;
        this.icon = icon;
        this.config = config;
        this.ble = ble;
        page.actionBarHidden = true;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        'selector': 'app',
        'templateUrl': 'views/app.html'
    }),
    __metadata("design:paramtypes", [page_1.Page,
        nativescript_ngx_fonticon_1.TNSFontIconService,
        config_service_1.ConfigService,
        bluetooth_service_1.BluetoothService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map