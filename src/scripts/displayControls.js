/**
 * updates the display with the given expression
 */
function updateScreen(expression){
    document.getElementById("display").innerHTML = expression;
}

module.exports = {updateScreen}