export declare class Logger {
    static readonly TRACE: string;
    static readonly DEBUG: string;
    static readonly INFO: string;
    static readonly WARN: string;
    static readonly ERROR: string;
    private static readonly validLevels;
    private conf;
    private className;
    private logLevel;
    private levelMap;
    private writeCb;
    constructor(conf: any, clazz: any);
    static isLogLevel(val: string): boolean;
    passesLevel(level: string): boolean;
    debug(message: string, pretty?: boolean): void;
    info(message: string, pretty?: boolean): void;
    warn(message: string, pretty?: boolean): void;
    error(message: string, pretty?: boolean): void;
    trace(message: string, pretty?: boolean): void;
    private write;
}
