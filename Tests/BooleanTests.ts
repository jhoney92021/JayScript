import {CreateBooleanFunctions} from "../BooleanEvaluations/BooleanEvaluation";

CreateBooleanFunctions();

export function TestIsTrue(): void
{
    var underTest = true;
    underTest.IsTrue().PrintResult(TestIsTrue.name);
}
export function TestIsTrue_Fail(): void
{
    var underTest = false;
    underTest.IsTrue().PrintResult(TestIsTrue_Fail.name); 
}
export function TestIsFalse(): void
{
    var underTest = false;
    underTest.IsFalse().PrintResult(TestIsFalse.name);
}
export function TestIsFalse_Fail(): void
{
    var underTest = true;
    underTest.IsFalse().PrintResult(TestIsFalse_Fail.name); 
}