window.onload = function () {
    let consoleDisplay = document.getElementById("console"); 
    let buttons = document.querySelectorAll("button"); 
    let input = ""; 

    buttons.forEach(button => {
        button.onclick = function () {
            let value = this.textContent; 

            if (value === "C") {
                input = ""; 
            }else if (value === "^"){
                input += "**"
            }else if (value === "√"){
                input = "Math.sqrt(" + input + ")";
            }else if (value === "=") {
                try {
                    input = eval(input);
                } catch {
                    input = "Error";
                }
            } else if (value === "X") {
                input += "*";
            } else {
                input += value;
            }
    

            consoleDisplay.textContent = input; 
        };
    });
};