"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerConf = /** @class */ (function () {
    function LoggerConf(logLevel, clazz, writeCb) {
        this.logLevel = logLevel;
        this.clazz = clazz;
        this.writeCb = writeCb;
    }
    LoggerConf.clone = function (conf) {
        return new LoggerConf(conf.logLevel, conf.clazz, conf.writeCb);
    };
    return LoggerConf;
}());
exports.LoggerConf = LoggerConf;
