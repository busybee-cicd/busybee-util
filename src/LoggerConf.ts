export class LoggerConf {
  logLevel:string;
  writeCb: (msg:string) => {};
  
  constructor(logLevel:string, writeCb: (msg:string) => {}) {
    this.logLevel = logLevel;
    this.writeCb = writeCb;
  }
  
  static clone(conf:LoggerConf) {
    return new LoggerConf(conf.logLevel, conf.writeCb);
  }
}