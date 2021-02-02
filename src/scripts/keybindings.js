import { isNumber } from "./mathUtils";
import {equals,
    add,
    subtract,
    multiply,
    divide,
    openParenthesis,
    closeParenthesis,
    undo,
    clearDisplay,
    addToExpression} from "./calculatorInterface";

// key mapping for the calculator
const keyMapping = {
    '=': equals,
    'Enter': equals,
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide,
    '(': openParenthesis,
    ')': closeParenthesis,
    'Backspace': undo,
    ' ': clearDisplay
}

/**
 * binds the keys to their corresponding calculator actions
 */
function Bindkeys(){
    document.addEventListener('keydown', (event) => {
        document.activeElement.blur();
        const key = event.key.toString();
        if(isNumber(key)){
            addToExpression(key);
        }
        const keyFunction = keyMapping[key];
        if (keyFunction !== undefined){
            keyFunction();
        }
    });
}

export {Bindkeys}
