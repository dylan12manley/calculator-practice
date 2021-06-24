// Variables
let operator_value = null;
let total = null;
let num_array = new Array();
let oper_array = new Array();
let first_pressed = false;
let isoperator = false;
let box = null;
let operator = null;
let equal = null;
let dot = null;
let tempoper = null;

function totalcalc(num1, num2, operator){
    if (operator === "+"){
        total = (Number)(num1)+(Number)(num2)
    }
    else if (operator === "-"){
        total = (Number)(num1)-(Number)(num2)
    }
    else if (operator === "*"){
        total = (Number)(num1)*(Number)(num2)
    }
    else if (operator === "/"){
        total = (Number)(num1)/(Number)(num2)
    }
    else if (operator === "="){
        totalcalc(num1, num2, tempoper);
    }
    return total.toFixed(1);
     // The toFixed() method formats a number using fixed-point notation. mozilla
}

function button_clear(){
    let box = document.getElementById("box");
    box.innerText = "0";
    num_array = [];
    oper_array = [];
    operator_value = null;
    total = null;
    isoperator = false;
    first_pressed = false;
}