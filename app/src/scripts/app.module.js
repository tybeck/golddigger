'use strict';
var core_1 = require('@angular/core');
var nativescript_module_1 = require('nativescript-angular/nativescript.module');
var router_1 = require('nativescript-angular/router');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./components/app.component');
var dashboard_component_1 = require('./components/pages/dashboard.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            'declarations': [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent
            ],
            'bootstrap': [
                app_component_1.AppComponent
            ],
            'imports': [
                router_1.NativeScriptRouterModule,
                nativescript_module_1.NativeScriptModule,
                app_routes_1.ROUTING
            ],
            'schemas': [
                core_1.NO_ERRORS_SCHEMA
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDO0FBRWIscUJBR08sZUFBZSxDQUFDLENBQUE7QUFFdkIsb0NBRU8sMENBQTBDLENBQUMsQ0FBQTtBQUVsRCx1QkFFTyw2QkFBNkIsQ0FBQyxDQUFBO0FBRXJDLDJCQUVPLGNBQWMsQ0FBQyxDQUFBO0FBRXRCLDhCQUE2Qiw0QkFBNEIsQ0FBQyxDQUFBO0FBQzFELG9DQUFtQyx3Q0FBd0MsQ0FBQyxDQUFBO0FBeUI1RTtJQUFBO0lBQXlCLENBQUM7SUF2QjFCO1FBQUMsZUFBUSxDQUFDO1lBRVIsY0FBYyxFQUFFO2dCQUNkLDRCQUFZO2dCQUNaLHdDQUFrQjthQUNuQjtZQUVELFdBQVcsRUFBRTtnQkFDWCw0QkFBWTthQUNiO1lBRUQsU0FBUyxFQUFFO2dCQUNULGlDQUF3QjtnQkFDeEIsd0NBQWtCO2dCQUNsQixvQkFBTzthQUNSO1lBRUQsU0FBUyxFQUFFO2dCQUNULHVCQUFnQjthQUNqQjtTQUVGLENBQUM7O2lCQUFBO0lBRXVCLGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLGlCQUFTLFlBQUksQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHtcbiAgTmdNb2R1bGUsXG4gIE5PX0VSUk9SU19TQ0hFTUFcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIE5hdGl2ZVNjcmlwdE1vZHVsZVxufSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcblxuaW1wb3J0IHtcbiAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXG59IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7XG4gIFJPVVRJTkdcbn0gZnJvbSAnLi9hcHAucm91dGVzJztcblxuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2FwcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3BhZ2VzL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBcbiAgJ2RlY2xhcmF0aW9ucyc6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50XG4gIF0sXG4gIFxuICAnYm9vdHN0cmFwJzogW1xuICAgIEFwcENvbXBvbmVudFxuICBdLFxuICBcbiAgJ2ltcG9ydHMnOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBST1VUSU5HXG4gIF0sXG4gIFxuICAnc2NoZW1hcyc6IFtcbiAgICBOT19FUlJPUlNfU0NIRU1BXG4gIF1cbiAgXG59KVxuXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19