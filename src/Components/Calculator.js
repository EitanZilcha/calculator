import Display from "./Display.js"
import CalculatorBody from "./CalculatorBody.js"
import {Bindkeys} from '../scripts/keybindings.js'

import '../styles/calculator.css'
import '../styles/fullscreen.css'

// keystrokes to calculator
Bindkeys();

/**
 * the top component that contains the full calculator
 */
export default function Calculator(){
    return (
        <div className="calculator">
            <Display/>
            <CalculatorBody/>
        </div>
    )
}