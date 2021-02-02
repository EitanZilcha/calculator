import Button from "./Button.js"
import {addToExpression} from "../scripts/calculatorInterface.js";

/**
 * groups the number buttons together
 */
export default function NumberPad(){
    return (
        <div className="numbers">
            <Button onclick={()=>{addToExpression('0')}} className="zero">0</Button>
            <Button onclick={()=>{addToExpression('.')}}>.</Button>
            <Button onclick={()=>{addToExpression('1')}}>1</Button>
            <Button onclick={()=>{addToExpression('2')}}>2</Button>
            <Button onclick={()=>{addToExpression('3')}}>3</Button>
            <Button onclick={()=>{addToExpression('4')}}>4</Button>
            <Button onclick={()=>{addToExpression('5')}}>5</Button>
            <Button onclick={()=>{addToExpression('6')}}>6</Button>
            <Button onclick={()=>{addToExpression('7')}}>7</Button>
            <Button onclick={()=>{addToExpression('8')}}>8</Button>
            <Button onclick={()=>{addToExpression('9')}}>9</Button>
        </div>
    )
}