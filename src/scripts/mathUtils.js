/**
 * is the char an operator?
 * 
 * @param { String } char - is an operator or not?
 * @returns { Boolean } - true if the parameter is an operator
 */
function isOperator(char){
    return ["+", "-", "*", "/", "="].includes(char);
}

/**
 * is this a digit or a dot?
 * 
 * @param { String } char 
 * @returns true if the char belongs to a numeric value
 */
function isNumber(char){
    if(char >= '0' && char <= '9'){
        return true;
    }
    if(char === '.'){
        return true;
    }
    return false;
}


export {isOperator, isNumber};