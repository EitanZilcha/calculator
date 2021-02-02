import NumberPad from "./NumberPad.js"
import OperatorPad from "./OperatorPad.js"


import '../styles/buttons.css'

export default function CalculatorBody(){
    return (
        <div className="buttons">
            <NumberPad/>
            <OperatorPad/>
        </div>
    )
}