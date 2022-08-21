export default interface ITestLogger
{
    PassedInCyan():void;
    PassedInCyan(caller:string):void;
    Failed(caller:string, failurReason: string | undefined | null):void;
}