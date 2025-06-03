let currentDisplay = '';

document.querySelector("#one").onclick = function () {
    currentDisplay += '1';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#two").onclick = function () {
    currentDisplay += '2';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#three").onclick = function () {
    currentDisplay += '3';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#four").onclick = function () {
    currentDisplay += '4';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#five").onclick = function () {
    currentDisplay += '5';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#six").onclick = function () {
    currentDisplay += '6';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#seven").onclick = function () {
    currentDisplay += '7';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#eight").onclick = function () {
    currentDisplay += '8';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#nine").onclick = function () {
    currentDisplay += '9';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#zero").onclick = function () {
    currentDisplay += '0';
    document.querySelector(".output").value = currentDisplay;
};

// AC button: clear all
document.querySelector("#cancle").onclick = function () {
    currentDisplay = '';
    document.querySelector(".output").value = currentDisplay;
};

// C button: clear all (same as AC, you can change if needed)
document.querySelector("#clear").onclick = function () {
    currentDisplay = '';
    document.querySelector(".output").value = currentDisplay;
};

// DEL button: remove last character
document.querySelector("#delete").onclick = function () {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#dot").onclick = function () {
    currentDisplay += '.';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#pm").onclick = function () {
    currentDisplay += '(';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#dash").onclick = function () {
    currentDisplay += ')';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#add").onclick = function () {
    currentDisplay += '+';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#minus").onclick = function () {
    currentDisplay += '-';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#x").onclick = function () {
    currentDisplay += '*';
    document.querySelector(".output").value = currentDisplay;
};

document.querySelector("#slesh").onclick = function () {
    currentDisplay += '/';
    document.querySelector(".output").value = currentDisplay;
};

// Equal button: evaluate
document.querySelector("#equal").onclick = function () {
    try {
        currentDisplay = eval(currentDisplay);
    } catch (e) {
        currentDisplay = "Error";
    }
    document.querySelector(".output").value = currentDisplay;
};