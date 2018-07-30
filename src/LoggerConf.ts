export class LoggerConf {
  clazz: any;
  logLevel:string | null | undefined;
  writeCb: (msg:string) => {} | null | undefined;
  
  constructor(clazz:any, logLevel:string | null | undefined, writeCb: (msg:string) => {} | null | undefined) {
    this.clazz = clazz;
    this.logLevel = logLevel;
    this.writeCb = writeCb;
  }
  
  static clone(conf:LoggerConf) {
    return new LoggerConf(conf.clazz, conf.logLevel, conf.writeCb);
  }
}