export declare class LoggerConf {
    clazz: any;
    logLevel: string | null | undefined;
    writeCb: (msg: string) => void | null | undefined;
    constructor(clazz: any, logLevel: string | null | undefined, writeCb: (msg: string) => void | null | undefined);
    static clone(conf: LoggerConf): LoggerConf;
}
