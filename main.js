let firstNumber, secondNumber, operation;

function updateMessage(message) {
    document.getElementById("message").textContent = message;
}

document.getElementById("firstNumber").addEventListener("input", function() {
    firstNumber = parseFloat(this.value);
    if (firstNumber) {
        updateMessage("Tanlang: +, -, *, /");
        document.getElementById("operationSelection").style.display = "block";
    }
});

document.getElementById("operation").addEventListener("change", function() {
    operation = this.value;
    updateMessage("2-raqamni kiriting:");
    document.getElementById("secondNumberSection").style.display = "block";
});

document.getElementById("secondNumber").addEventListener("input", function() {
    secondNumber = parseFloat(this.value);
    if (secondNumber) {
        document.getElementById("result").style.display = "block";
        updateFrame();
    }
});

function updateFrame() {
    document.getElementById("leftSide").textContent = firstNumber;
    document.getElementById("operator").textContent = operation;
    document.getElementById("rightSide").textContent = secondNumber;
}

function checkResult() {
    if (!firstNumber || !secondNumber || !operation) {
        alert("Siz hech narsa kiritmadingiz!");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if (secondNumber === 0) {
                alert("Nolga bo'lish mumkin emas!");
                return;
            }
            result = firstNumber / secondNumber;
            break;
    }

    document.getElementById("finalResult").style.display = "block";
    document.getElementById("answer").textContent = result;
    updateMessage(`Natija: ${result}`);
    document.getElementById("checkBtn").classList.add("red");
}

function reset() {
    document.getElementById("firstNumber").value = "";
    document.getElementById("secondNumber").value = "";
    document.getElementById("operation").value = "+";
    document.getElementById("result").style.display = "none";
    document.getElementById("finalResult").style.display = "none";
    document.getElementById("operationSelection").style.display = "none";
    document.getElementById("secondNumberSection").style.display = "none";
    document.getElementById("checkBtn").classList.remove("red");
    updateMessage("1-raqamni kiriting:");
}


