"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoggerConf = /** @class */ (function () {
    function LoggerConf(clazz, logLevel, writeCb) {
        this.clazz = clazz;
        this.logLevel = logLevel;
        this.writeCb = writeCb;
    }
    LoggerConf.clone = function (conf) {
        return new LoggerConf(conf.clazz, conf.logLevel, conf.writeCb);
    };
    return LoggerConf;
}());
exports.LoggerConf = LoggerConf;
