export declare class LoggerConf {
    logLevel: string;
    writeCb: (msg: string) => {};
    clazz: any;
    constructor(logLevel: string, clazz: any, writeCb: (msg: string) => {});
    static clone(conf: LoggerConf): LoggerConf;
}
