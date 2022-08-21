import {TestIsTrue, TestIsTrue_Fail, TestIsFalse, TestIsFalse_Fail} from "./Tests/BooleanTests";

function Main(): void
{
    console.log("hello-world");
    TestIsTrue();
    TestIsTrue_Fail();
    TestIsFalse();
    TestIsFalse_Fail();
}

Main();