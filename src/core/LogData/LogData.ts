import type { ILogData } from "./ILogData";

export class LogData implements ILogData {

    private _name: string;
    
    constructor (name: string) {
        this._name = name;
    }
    get name(): string {
        return this._name;
    }
}