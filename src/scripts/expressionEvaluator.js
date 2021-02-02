import { isNumber } from "./mathUtils";

import {MathError, ContinuityError} from "./calculatorErrors";

/**
 * evaluates the given mathematical expression
 * 
 * @param { String } expression - the expression to evaluate
 * @returns { Number } - the value of the expression
 */
export default function evaluateExpression(expression)
{
    expression = preprocessExpression(expression);

    const values = [];
    const operators = [];

    operators.push('(');

    let position = 0;
    while (position <= expression.length)
    {
        if (position === expression.length || expression[position] === ')') {
            processClosingParenthesis(values, operators);
            position++;
        } else if (isNumber(expression[position])) {
            position = processNumber(expression, position, values);
        } else {
            processOperator(expression[position], values, operators);
            position++;
        }
    }

    return validateResult(values.pop()); // result is located on top of values stacks
}

/**
 * throws relevant errors about the expression
 * 
 * @param { String } expression - the expression to validate
 * @returns { String } - the processed expression, ready for evaluation
 */
function preprocessExpression(expression){
    if(expression.split("(").length !== expression.split(")").length){
        throw new SyntaxError();
    }
    if(expression.startsWith("*") || expression.startsWith("/")){
        throw new SyntaxError();
    }

    expression = "0" + expression;
    expression = expression.replaceAll("(", "(0");
    return expression;
}


/**
 * throws relevant errors about the expression
 * 
 * @param { String } result - the value of an expression
 * @returns { String } - the result
 * @throws { MathError } - on mathematical mistakes reflected in the result
 * @throws { ContinuityError } - on unsupported continuation of the result by the evaluator
 */
function validateResult(result){
    if(result === undefined){
        throw new MathError();
    }
    for (const word of ["nan", "infinity"]){
        if(result.toString().toLowerCase().includes(word)){
            throw new MathError();
        }
    }
    if(result.toString().toLowerCase().includes("e")){
        throw new ContinuityError();
    }

    return result;
}

/**
 * handle closing parenthesis in the expression
 * 
 * @param {*} values - value stack
 * @param {*} operators - operator stack
 */
function processClosingParenthesis(values, operators)
{
    while (operators[operators.length - 1] !== '('){
        executeOperation(values, operators);
    }

    operators.pop(); // Remove the opening parenthesis
}

/**
 * parse a single value from expression
 * 
 * @param { String } expression - the expression to parse
 * @param { Number } position - the position in the expression
 * @param { Array } values - stack of values
 */
function processNumber(expression, position, values)
{
    let value = "0";
    while (position < expression.length && isNumber(expression[position])){
        // check for more than 1 dots in the number
        if(expression[position] === "." && value.includes(".")){
            throw new SyntaxError();
        }

        value += expression[position];
        position++;
    }

    values.push(Number(value));

    return position;
}

/**
 * parse a single operator from expression
 * 
 * @param { String } operator - the operator to process
 * @param { Array } values - stack of values
 * @param { Array } operators - stack of operators
 */
function processOperator(operator, values, operators)
{
    while (operators.length > 0 && operatorCausesEvaluation(operator, operators[operators.length - 1])){
        executeOperation(values, operators);
    }

    operators.push(operator);
}

/**
 * is the current operator higher in priority than the previous one?
 * 
 * @param { String } operator - new operator
 * @param { String } previousOperator - previous operator
 */
function operatorCausesEvaluation(operator, previousOperator)
{
    switch (operator)
    {
        case '+':
        case '-':
            return previousOperator !== '(';
        case '*':
        case '/':
            return previousOperator === '*' || previousOperator === '/';
        case ')':
            return true;
        default:
    }
}

/**
 * get the result of a basic mathematical operation
 * @param { Number } first 
 * @param { Number } second 
 * @param { String } operator - a basic operator
 */
function applyOperator(first, second, operator){
    switch(operator){
        case '+': return first + second;
        case '-': return first - second;
        case '*': return first * second;
        case '/': return first / second;
        default:
    }
}

/**
 * executes a mathematical operation from the value and operator stacks
 * @param {*} values  - value stack
 * @param {*} operators - operator stack
 */
function executeOperation(values, operators)
{
    const rightOperand = values.pop();
    const leftOperand = values.pop();
    const operator = operators.pop();

    values.push(applyOperator(leftOperand, rightOperand, operator));
}

export {evaluateExpression}