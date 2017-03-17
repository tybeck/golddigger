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
var fs = require("file-system");
var core_1 = require("@angular/core");
var ConfigService = ConfigService_1 = (function () {
    function ConfigService() {
        var _this = this;
        this.categories = [];
        var configFile = fs
            .knownFolders
            .currentApp()
            .getFile(ConfigService_1
            .PATH);
        configFile
            .readText()
            .then(function (content) {
            var parsed = JSON.parse(content);
            if (parsed && parsed.categories) {
                _this.categories = parsed.categories;
            }
        });
        return this;
    }
    return ConfigService;
}());
ConfigService.PATH = 'config/default.json';
ConfigService = ConfigService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ConfigService);
exports.ConfigService = ConfigService;
var ConfigService_1;
//# sourceMappingURL=config.service.js.map