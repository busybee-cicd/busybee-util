import { LoggerConf } from './LoggerConf';
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
    constructor(conf: LoggerConf);
    static isLogLevel(val: string): boolean;
    passesLevel(level: string): boolean;
    debug(message: string | any, pretty?: boolean): void;
    info(message: string | any, pretty?: boolean): void;
    warn(message: string | any, pretty?: boolean): void;
    error(message: string | any, pretty?: boolean): void;
    trace(message: string | any, pretty?: boolean): void;
    private write;
}
