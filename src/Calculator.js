import Display from "./Display.js"
import CalculatorBody from "./CalculatorBody.js"

export default function Calculator(){
    return (
        <div class="calculator">
            <Display/>
            <CalculatorBody/>
        </div>
    )
}