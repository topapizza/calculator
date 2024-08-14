const display = document.getElementById("display");

function appendToDisplay(input) {
    const lastChar = display.value.slice(-1);

    if (input === '.' && lastChar === '.') {
        return;
    }
    
    if (['+', '*', '/'].includes(input) && ['+', '-', '*', '/'].includes(lastChar)) {
        return;
    }

    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}
