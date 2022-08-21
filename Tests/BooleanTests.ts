import { Failed, PassedInCyan, TestLogger } from "../Loggers/TestLogger";
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