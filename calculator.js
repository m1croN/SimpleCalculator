"use strict";

class Calculator
{
    constructor(options)
    {
        this._el = options.element;
        this._template = `
        <input class="outputField" data-component="outputField" type="text" value="Simple Calculator" readonly>
            <span>
                <button type="button" id="1button">1</button>
                <button type="button" id="2button">2</button>
                <button type="button" id="3button">3</button>
                <button type="button" id="plusButton">+</button>
            </span>
            <span>
                <button type="button" id="4button">4</button>
                <button type="button" id="5button">5</button>
                <button type="button" id="6button">6</button>
                <button type="button" id="minusButton">-</button>
            </span>
            <span>
                <button type="button" id="7button">7</button>
                <button type="button" id="8button">8</button>
                <button type="button" id="9button">9</button>
                <button type="button" id="multiplyButton">*</button>
            </span>
            <span>
                <button type="button" id="0button">0</button>
                <button type="button" id=".button">.</button>
                <button type="button" id="clearButton">C</button>
                <button type="button" id="divideButton">/</button>
            </span>
            <button type="button" id="equalButton">=</button>
        `;
        this._el.innerHTML = this._template;

        this._calculatorExecutionString = "";
        this._lastSymbol = "none";
        this._el.addEventListener("click", this._onButtonPressed.bind(this), false)
    }

    _sumbitToExcecutionString(symbol)
    {
        this._calculatorExecutionString += symbol;
        this._lastSymbol = symbol;
        this._renderOutputField(this._calculatorExecutionString);
    }

    _displayResult()
    {
        let result = eval(this._calculatorExecutionString);
        this._renderOutputField(result);
        this._lastSymbol = result;
        this._calculatorExecutionString = result;
    }

    _renderOutputField(displayMessage)
    {
        this._el.querySelector("[data-component=outputField]").value = displayMessage;
    }

    _clearCalculator()
    {
        this._calculatorExecutionString = "";
        this._lastSymbol = "none";
        this._renderOutputField(this._calculatorExecutionString);
    }

    _addCalculatorSymbol(symbol)
    {
        if (!isNaN(symbol)) //if number
        {
            this._sumbitToExcecutionString(symbol);
        }
        else
        {
            if (!isNaN(this._lastSymbol)) //lastSymbol is number
            {
                this._sumbitToExcecutionString(symbol);
            }
            else
            {
                if (this._lastSymbol === "none") //first symbol
                {
                    if (symbol !== "." && symbol !== "/" && symbol !== "*")
                    {
                        this._sumbitToExcecutionString(symbol);
                    }
                }

                if (this._lastSymbol === "/" || this._lastSymbol === "*")
                {
                    if (symbol === "+" || symbol === "-")
                    {
                        this._sumbitToExcecutionString(symbol);
                    }
                }

                if (this._lastSymbol === "+" && symbol === "-")
                {
                    this._sumbitToExcecutionString(symbol);
                }
                if (this._lastSymbol === "-" && symbol === "+")
                {
                    this._sumbitToExcecutionString(symbol);
                }
            }
        }
    }

    _onButtonPressed(event)
    {
        let targetElement = event.target;

        switch (targetElement.id)
        {
            case "1button":
                this._addCalculatorSymbol("1");
                break;
            case "2button":
                this._addCalculatorSymbol("2");
                break;

            case "3button":
                this._addCalculatorSymbol("3");
                break;
            case "4button":
                this._addCalculatorSymbol("4");
                break;
            case "5button":
                this._addCalculatorSymbol("5");
                break;
            case "6button":
                this._addCalculatorSymbol("6");
                break;
            case "7button":
                this._addCalculatorSymbol("7");
                break;
            case "8button":
                this._addCalculatorSymbol("8");
                break;
            case "9button":
                this._addCalculatorSymbol("9");
                break;
            case "0button":
                this._addCalculatorSymbol("0");
                break;
            case "plusButton":
                this._addCalculatorSymbol("+");
                break;
            case "minusButton":
                this._addCalculatorSymbol("-");
                break;
            case "multiplyButton":
                this._addCalculatorSymbol("*");
                break;
            case "divideButton":
                this._addCalculatorSymbol("/");
                break;
            case "clearButton":
                this._clearCalculator();
                break;
            case ".button":
                this._addCalculatorSymbol(".");
                break;
            case "equalButton":
                this._displayResult();
                break;
        }
    }
}

//Changes for pull request