var unitTestScoring = function(functionToTest, comp){
/*
    PARAMETERS:
        functionToTest      : <function: input -> output >
            This is the function that will be tested.
            
        comp (optional)     : <function (a, b) -> boolean >
            A function to compare the desired outputs to the given outputs of the function.
            
    OUTPUT:
        <OUTPUT>            : <function: (input, desiredOut, successScore, failureScore) -> boolean > 
            A function for unit testing that keeps a score in it's own parameter
            input will be an array of the input arguements. The output will be a boolean: true if passed
            false if the test fails. 
            
        <OUTPUT>.score      : numeric
            Parameter of the output that keeps a score. Initially will be 0.
            
            
            
    STATICS:
        unitTestScoring
            .getTotalScore      : < function () -> int >
                Return the total score of all unit tests.
            
            .tests              : Array of <OUTPUT>s
                Holds all tester functions generated so far.
            
*/
    if(!comp){
        comp = function(a, b){return a + "" === b + "";}; //STRING TYPING!!!
    }
    var retFunction = function(input, desiredOut, successScore, failureScore){
        retFunction.score = 0;
        var out = functionToTest.apply(this, input);
        var testWorked = comp(out, desiredOut);
        retFunction.score += testWorked ? successScore : failureScore;
        return testWorked;
    };
    retFunction.score = 0;
    unitTestScoring.tests.push(retFunction);
    return retFunction;
};

unitTestScoring.tests = [];

unitTestScoring.getTotalScore = function(){
    return unitTestScoring.tests.reduce(function(acc, val){return acc+val.score;}, 0);
};
