"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerConf = /** @class */ (function () {
    function LoggerConf(logLevel, writeCb) {
        this.logLevel = logLevel;
        this.writeCb = writeCb;
    }
    LoggerConf.clone = function (conf) {
        return new LoggerConf(conf.logLevel, conf.writeCb);
    };
    return LoggerConf;
}());
exports.LoggerConf = LoggerConf;
