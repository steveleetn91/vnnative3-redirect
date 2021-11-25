"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var VnNative3RedirectCore = /** @class */ (function () {
    function VnNative3RedirectCore() {
    }
    VnNative3RedirectCore.prototype.to = function (url) {
        var app;
        app = window;
        app.location.replace("/".concat(url));
    };
    VnNative3RedirectCore.prototype.back = function () {
        var app;
        app = window;
        app.history.go(-1);
    };
    return VnNative3RedirectCore;
}());
exports.default = VnNative3RedirectCore;
