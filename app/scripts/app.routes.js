'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("nativescript-angular/router");
var dashboard_component_1 = require("./components/pages/dashboard.component");
var order_component_1 = require("./components/pages/order.component");
var control_component_1 = require("./components/pages/control.component");
var appRoutes = [
    {
        'path': '',
        'redirectTo': '/dashboard',
        'pathMatch': 'full'
    },
    {
        'path': 'dashboard',
        'component': dashboard_component_1.DashboardComponent
    },
    {
        'path': 'order',
        'component': order_component_1.OrderComponent
    },
    {
        'path': 'control',
        'component': control_component_1.ControlComponent
    }
];
exports.ROUTING = router_1.NativeScriptRouterModule
    .forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map