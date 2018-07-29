/// <reference types="node" />
export declare class IOUtil {
    constructor();
    static parseDataBuffer(dataBuffer: string | Buffer): string[];
    static trimChars(s: string, c: string): string;
}
