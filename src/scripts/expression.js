import {updateScreen} from "./displayControls"

import {isOperator} from "./mathUtils";

/**
 * this class holds and maintains an expression
 */
class Expression{
    constructor(onModify){
        this.expression = "0";
        this.onModify = onModify;
    }

    /**
     * add a string to the expression
     * 
     * @param { String } char 
     */
    add(char){
        if(this.endsWithOperator()){
            if(isOperator(char)){
                this.delete();
            }
        }

        this.expression += char;
        this.onModify(this.expression);
    }

    /**
     * delete last character of the expression
     */
    delete(){
        this.expression = this.expression.slice(0, -1);
        this.onModify(this.expression);
    }

    /**
     * clears the expression
     */
    clear(){
        this.expression = "";
        this.onModify(this.expression);
    }

    /**
     * manually set the expression
     * 
     * @param { String } expression - the new expression to set
     */
    set(expression){
        this.expression = expression;
        this.onModify(this.expression);
    }
    
    /**
     * is the expression ending with an operator?
     * 
     * @returns true if the expression ends with operator
     */
    endsWithOperator(){
        return isOperator(this.expression[this.expression.length - 1]);
    }
}

const expression = new Expression(updateScreen)

export {expression}