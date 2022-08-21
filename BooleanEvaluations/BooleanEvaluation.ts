import {PassedInCyan, Failed} from "../Loggers/TestLogger";

export class BooleanResult
{
    evaluated: boolean;
    compared: boolean;

    constructor(evaluated: boolean, compared: boolean)
    {
        this.evaluated = evaluated;
        this.compared = compared
    }

    PrintResult(testName: string): void
    {   
        if(this.evaluated)
        {
            PassedInCyan(testName)
        }
        else
        {
            Failed(testName,`Expected ${this.evaluated} but was ${this.compared}}`)
        }
    };
}

declare global
{
    interface Boolean
    {
        IsTrue(): BooleanResult;
        IsFalse(): BooleanResult;
        PrintResult(expected: boolean, testName: string): void;
    }    
}

export function CreateBooleanFunctions()
{    
    Boolean.prototype.IsTrue = function(): BooleanResult
    {  
        if(Boolean(this) !== true)
        {
            return new BooleanResult(false, Boolean(this));
        }
        else
        {
            return  new BooleanResult(true, Boolean(this));
        }
    }
    Boolean.prototype.IsFalse = function(): BooleanResult
    {  
        if(Boolean(this) !== false)
        {
            return  new BooleanResult(false, Boolean(this));
        }
        else
        {
            return new BooleanResult(true, Boolean(this));
        }
    }
}