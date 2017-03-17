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
var bluetooth = require('nativescript-bluetooth');
var dialogs = require("ui/dialogs");
var core_1 = require("@angular/core");
var BluetoothService = (function () {
    function BluetoothService() {
        bluetooth
            .isBluetoothEnabled()
            .then(function (enabled) {
            dialogs.alert('Enabled? '
                .concat(enabled)).then(function () {
                console.log('done');
            });
        });
        return this;
    }
    return BluetoothService;
}());
BluetoothService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], BluetoothService);
exports.BluetoothService = BluetoothService;
//# sourceMappingURL=bluetooth.service.js.map