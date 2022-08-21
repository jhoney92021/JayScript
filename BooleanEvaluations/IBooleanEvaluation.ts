

export default interface IBooleanEvaluation
{
    IsTrue(toEvaluate: boolean): void;
    IsFalse():void;
    IsOn():void;
    IsOff():void;
}
