"use strict";

let _calculatorExecutionString = "0";

let _lastSymbol = "0";

function sumbitToExcecutionString( symbol )
{
    _calculatorExecutionString += symbol;
    _lastSymbol = symbol;
}

function addEventListener()
{
    document.getElementById( "calculator" ).addEventListener( "click", buttonPressedEventHandler, false );
}

function addCalculatorSymbol( symbol )
{
    if( !isNaN(symbol) ) //if number
    {
        sumbitToExcecutionString( symbol );
    }
    else
    {
        if( !isNaN(_lastSymbol) ) //lastSymbol is number
        {
           sumbitToExcecutionString( symbol );
        }
        else
        {
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

            break;
        case "2button":

            break;

        case "3button":
            
            break;
        case "4button":

            break;
        case "5button":

            break;
        case "6button":

            break;
        case "7button":

            break;
        case "8button":

            break;
        case "9button":

            break;
        case "0button":

            break;
        case "plusButton":

            break;
        case "minusButton":

            break;
        case "multiplyButton":

            break;
        case "divideButton":

            break;
        case "clearButton":

            break;
        case ".button":

            break;
    }
    
}

//use eval()
