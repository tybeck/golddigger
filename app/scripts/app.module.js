'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var router_1 = require("nativescript-angular/router");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var app_routes_1 = require("./app.routes");
var app_component_1 = require("./components/app.component");
var navigation_component_1 = require("./components/navigation.component");
var dashboard_component_1 = require("./components/pages/dashboard.component");
var order_component_1 = require("./components/pages/order.component");
var control_component_1 = require("./components/pages/control.component");
var config_service_1 = require("./services/config.service");
var bluetooth_service_1 = require("./services/bluetooth.service");
require("./rxjs-extensions");
console.log('ngmodule...');
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        'declarations': [
            app_component_1.AppComponent,
            dashboard_component_1.DashboardComponent,
            order_component_1.OrderComponent,
            control_component_1.ControlComponent,
            navigation_component_1.NavigationComponent
        ],
        'providers': [
            config_service_1.ConfigService,
            bluetooth_service_1.BluetoothService
        ],
        'bootstrap': [
            app_component_1.AppComponent
        ],
        'imports': [
            nativescript_module_1.NativeScriptModule,
            router_1.NativeScriptRouterModule,
            nativescript_ngx_fonticon_1.TNSFontIconModule.forRoot({
                'fa': 'font-awesome.css'
            }),
            app_routes_1.ROUTING
        ],
        'schemas': [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map