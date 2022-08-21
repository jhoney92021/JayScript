import {PassedInCyan, Failed} from "../Loggers/TestLogger";

declare global
{
    interface Boolean
    {
        IsTrue(): boolean;
        PrintResult(testName: string): void;
    }    
}

export function CreateBooleanFunctions()
{    
    Boolean.prototype.IsTrue = function(): boolean 
    {  
        return Boolean(this) === true;
    }
    
    Boolean.prototype.PrintResult = function(testName: string): void 
    {    
        Boolean(this) ? PassedInCyan(testName) : Failed(testName,"Expected true but was false");    
    }
}