    "use strict";

    let _calculatorExecutionString = "";
    let _lastSymbol = "none";

    let calculatorElement = document.getElementById( "calculator" );
    calculatorElement.addEventListener( "click", buttonPressedEventHandler, false );


    function sumbitToExcecutionString( symbol )
    {
        _calculatorExecutionString += symbol;
        _lastSymbol = symbol;
        renderOutputField( _calculatorExecutionString );
    }

    function displayResult()
    {
        let result = eval( _calculatorExecutionString );
        renderOutputField( result );
    }

    function clearCaltulator()
    {
        _calculatorExecutionString = "";
        _lastSymbol = "none";
        renderOutputField( _calculatorExecutionString );
    }

    function renderOutputField( displayMessage )
    {
        document.getElementById( "outputField" ).value = displayMessage;
    }


    function addCalculatorSymbol( symbol )
    {
        if( !isNaN( symbol ) ) //if number
        {
            sumbitToExcecutionString( symbol );
        }
        else
        {
            if( !isNaN( _lastSymbol ) ) //lastSymbol is number
            {
            sumbitToExcecutionString( symbol );
            }
            else
            {
                if( _lastSymbol === "none" ) //first symbol
                {
                    if( symbol !== "." && symbol !== "/" && symbol !== "*" )
                    {
                        sumbitToExcecutionString( symbol );
                    }
                }
                
                if( _lastSymbol === "/" || _lastSymbol === "*"  )
                {
                    if( symbol === "+" || symbol === "-" )
                    {
                        sumbitToExcecutionString( symbol );
                    }
                }
                
                if( _lastSymbol === "+" && symbol === "-" )
                {
                    sumbitToExcecutionString( symbol );
                }
                if( _lastSymbol === "-" && symbol === "+" )
                {
                    sumbitToExcecutionString( symbol );
                }
            }
        }
        
    }

    function buttonPressedEventHandler( event )
    {
        let targetElement = event.target;
        
        switch( targetElement.id )
        {
            case "1button":
                addCalculatorSymbol( "1" );
                break;
            case "2button":
                addCalculatorSymbol( "2" );
                break;

            case "3button":
                addCalculatorSymbol( "3" );
                break;
            case "4button":
                addCalculatorSymbol( "4" );
                break;
            case "5button":
                addCalculatorSymbol( "5" );
                break;
            case "6button":
                addCalculatorSymbol( "6" );
                break;
            case "7button":
                addCalculatorSymbol( "7" );
                break;
            case "8button":
                addCalculatorSymbol( "8" );
                break;
            case "9button":
                addCalculatorSymbol( "9" );
                break;
            case "0button":
                addCalculatorSymbol( "0" );
                break;
            case "plusButton":
                addCalculatorSymbol( "+" );
                break;
            case "minusButton":
                addCalculatorSymbol( "-" );
                break;
            case "multiplyButton":
                addCalculatorSymbol( "*" );
                break;
            case "divideButton":
                addCalculatorSymbol( "/" );
                break;
            case "clearButton":
                clearCaltulator();
                break;
            case ".button":
                addCalculatorSymbol( "." );
                break;
            case "equalButton":
                displayResult();
                break;
        }
        
    }

    //Changes for pull request
