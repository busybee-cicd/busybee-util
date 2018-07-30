export declare class LoggerConf {
    logLevel: string;
    writeCb: (msg: string) => {};
    constructor(logLevel: string, writeCb: (msg: string) => {});
    static clone(conf: LoggerConf): LoggerConf;
}
