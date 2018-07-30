export declare class LoggerConf {
    clazz: any;
    logLevel: string | null | undefined;
    writeCb: (msg: string) => {} | null | undefined;
    constructor(clazz: any, logLevel: string | null | undefined, writeCb: (msg: string) => {} | null | undefined);
    static clone(conf: LoggerConf): LoggerConf;
}
