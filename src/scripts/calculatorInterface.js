import {evaluateExpression} from "./expressionEvaluator"
import {MathError, ContinuityError} from "./calculatorErrors"
import {expression} from "./expression.js"
import {updateScreen} from "./displayControls"

export {
    equals,
    add,
    subtract,
    multiply,
    divide,
    openParenthesis,
    closeParenthesis,
    undo,
    clearDisplay,
    addToExpression
}

/**
 * called to to evaluate the expression and display it
 */
function equals() {
    if (expression.endsWithOperator()) {
        expression.delete();
    }
    
    let result = 0;
    try {
        result = evaluateExpression(expression.expression);
    } catch(error){
        handleEvaluationError(error);
        return;
    }
    
    expression.set(result.toString());
}

/**
 * handles evaluation errors appropriately
 * 
 * @param { Error } error - the error that occured while evaluating an expression
 */
function handleEvaluationError(error){
    if (error instanceof SyntaxError) {
        clearDisplay();
        updateScreen("SYNTAX ERROR");
    } else if (error instanceof MathError) {
        clearDisplay();
        updateScreen("MATH ERROR");
    } else if (error instanceof ContinuityError) {
        clearDisplay();
    }
}

/**
 * extend the expression with a given string
 * @param { String } char - character to add to the expression
 */
function addToExpression(char) {
    expression.add(char);
}

/**
 * deletes the last character in the expression
 */
function undo() {
    expression.delete();
}

/**
 * clears the expression
 */
function clearDisplay() {
    expression.clear();
}

function openParenthesis() {
    expression.add("(");
}

function closeParenthesis() {
    expression.add(")");
}

function add() {
    expression.add("+");
}

function subtract() {
    expression.add("-");
}

function multiply() {

    expression.add("*");
}

function divide() {
    expression.add("/");
}