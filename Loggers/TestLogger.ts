import ITestLogger from "./ITestLogger";

export const ForegroundCyan: string = "\x1b[36m";
export const ForegroundRed: string = "\x1b[31m";

export class TestLogger implements ITestLogger
{
    PassedInCyan(caller:string = "not found"):void
    {
        console.log(ForegroundCyan, `¡¡ ${caller} -- passed !!`);        
    }
    Failed(caller:string = "not found", failureReason: string | null | undefined  = "not found"): void 
    {
        console.log(ForegroundCyan, `¡¡ ¿¿ ${caller} -- failed -- ${failureReason} ?? !!`);     
    }
}

export function PassedInCyan(caller:string = "not found"):void
{
    console.log(ForegroundCyan, `¡¡ ${caller} -- passed !!`);        
}

export function Failed(caller:string = "not found", failureReason: string | null | undefined  = "not found"): void 
{
    console.log(ForegroundRed, `¿¿ ${caller} -- failed -- ${failureReason} ??`);     
}

declare global
{
 
}



// export function GetFunctionCallerName(): string
// {
//     let lastCaller = "dd";    
//     const stack = console.trace();
//     return getStackTrace.toString();
// }