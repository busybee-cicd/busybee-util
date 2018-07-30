export class LoggerConf {
  logLevel:string;
  writeCb: (msg:string) => {};
  clazz: any;
  
  constructor(logLevel:string, clazz:any, writeCb: (msg:string) => {}) {
    this.logLevel = logLevel;
    this.clazz = clazz;
    this.writeCb = writeCb;
  }
  
  static clone(conf:LoggerConf) {
    return new LoggerConf(conf.logLevel, conf.clazz, conf.writeCb);
  }
}