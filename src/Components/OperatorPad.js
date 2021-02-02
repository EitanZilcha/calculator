import Button from "./Button.js"
import {
    equals,
    add,
    subtract,
    multiply,
    divide,
    openParenthesis,
    closeParenthesis,
    undo,
    clearDisplay
} from "../scripts/calculatorInterface.js";

/**
 * groups the operator buttons together
 */
export default function OperatorPad(){
    return (
        <div className="operators">
            <Button onclick={undo}>DEL</Button>
            <Button onclick={clearDisplay}>CLR</Button>
            <Button onclick={openParenthesis}>(</Button>
            <Button onclick={closeParenthesis}>)</Button>
            <Button className="large" onclick={add}>+</Button>
            <Button onclick={subtract} className="large">-</Button>
            <Button onclick={multiply}>✖</Button>
            <Button onclick={divide} className="large">÷</Button>
            <Button onclick={equals} className="equals">=</Button>
        </div>
    )
}