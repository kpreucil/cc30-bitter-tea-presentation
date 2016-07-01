
function makeNewDomTestElement(testName){
    var div_0 = document.createElement('div');
       div_0.className = "test pad-15 centerThis";

       var div_1 = document.createElement('div');
          div_1.className = "testTitle";
          div_1.appendChild( document.createTextNode("\n						Function:\n						\n") );
          /* populate function name selection = className to Use: functionName */

          var select_0 = document.createElement('select');
             select_0.className = "functionName";

             var option_0 = document.createElement('option');
                option_0.value = "squareRoot";
                option_0.appendChild( document.createTextNode("squareRoot")
                );
             select_0.appendChild( option_0 );
            
            var option_4 = document.createElement('option');
                option_4.value = "cubed";
                option_4.appendChild( document.createTextNode("cubed")
                );
             select_0.appendChild( option_4 );
            
            var option_5 = document.createElement('option');
                option_5.value = "capitalize";
                option_5.appendChild( document.createTextNode("capitalize")
                );
             select_0.appendChild( option_5 );

          div_1.appendChild( select_0 );

          div_1.appendChild( document.createTextNode(" || "+testName+"\n					") );
       div_0.appendChild( div_1 );


       var br_0 = document.createElement('br');
       div_0.appendChild( br_0 );


       var div_2 = document.createElement('div');

          var div_3 = document.createElement('div');

             var label_0 = document.createElement('label');
                label_0.style.color = "#ffc951";
                label_0.appendChild( document.createTextNode("How many types of parameters are you using?") );
             div_3.appendChild( label_0 );

             /* Determine number of Parameters = className to Use: paramNumber */

             var input_0 = document.createElement('input');
                input_0.type = "number";
                input_0.className = "paramNumber";
             div_3.appendChild( input_0 );

          div_2.appendChild( div_3 );


          var div_4 = document.createElement('div');

             var label_1 = document.createElement('label');
                label_1.style.color = "#ffc951";
                label_1.appendChild( document.createTextNode("Type of Parameter: ") );
             div_4.appendChild( label_1 );

             /* <br /> */
             /* Select Type of parameter = className to Use: paramType */

             var select_1 = document.createElement('select');
                select_1.className = "paramType";

                var option_1 = document.createElement('option');
                   option_1.value = "string";
                   option_1.appendChild( document.createTextNode("String") );
                select_1.appendChild( option_1 );


                var option_2 = document.createElement('option');
                   option_2.value = "integer";
                   option_2.appendChild( document.createTextNode("Integer") );
                select_1.appendChild( option_2 );


                var option_3 = document.createElement('option');
                   option_3.value = "float";
                   option_3.appendChild( document.createTextNode("Float") );
                select_1.appendChild( option_3 );

             div_4.appendChild( select_1 );

             /* Pull parameter Input = className to Use: 	paramInput */

             var input_1 = document.createElement('input');
                input_1.className = "paramInput";
                input_1.placeholder = "parameter";
             div_4.appendChild( input_1 );

          div_2.appendChild( div_4 );


          var br_1 = document.createElement('br');
          div_2.appendChild( br_1 );

          /* Pull expected outcome = className to Use: expectedOutcome */

          var input_2 = document.createElement('input');
             input_2.className = "expectedOutcome";
             input_2.placeholder = "expected outcome";
          div_2.appendChild( input_2 );

       div_0.appendChild( div_2 );


       var br_2 = document.createElement('br');
       div_0.appendChild( br_2 );

       /* Run Test = className to Use: runTest */

       var button_0 = document.createElement('button');
          button_0.className = "runTest";
          button_0.appendChild( document.createTextNode("Run Test") );
       div_0.appendChild( button_0 );

       /* Delete Test = className to Use: deleteTest */

       var button_1 = document.createElement('button');
          button_1.className = "deleteTest";
          button_1.appendChild( document.createTextNode("Delete Test") );
       div_0.appendChild( button_1 );
    document.body.appendChild( div_0 );
    
    function getDropDownFuncName(){
        return select_0.value;
    };
    
    function getParameters(){
        var param;
        var paramType = select_1.value;
        if(paramType === "string"){
            param = input_1.value;
        }
        else if(paramType === "integer"){
            param = parseInt(input_1.value);
        }
        else if(paramType === "float"){
            param = parseFloat(input_1.value);
        }
        return param;
    };
    
    function getExpOutput(){
        return input_2.value;
    };
    
    return {dom: div_0, 
            getFuncName: getDropDownFuncName,
            testName: testName,
            getParameters: getParameters,
            getExpOutput: getExpOutput
            };
}
