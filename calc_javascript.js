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

function button_number(button){
    operator = document.getElementsByClassName("operator");
    box = document.getElementById("box");
    equal = document.getElementById("equal_sign").value;
    dot = document.getElementById("dot").value;
    isoperator = false;
    //check if button pressed is operator
    for (let i=0; i<operator.length; i++){
        if (button === operator[i].value){
            oper_array.push(button);
            isoperator = true;
        }
    }
    //if is operator save its value and clear box, else append number to box
    if (isoperator === false){
        if (first_pressed == false){
            box.innerText = button;
            if (button == dot){
                box.innerText = "0"+dot;
        }
    }
    else{
        if (box.innerText.indexOf(dot) >= 0 && button == dot){
            box.innerText = box.innerText;}
        else{
            box.innerText += button;
            }
        }
        first_pressed = true;
    }
    else{
        operator_value = button;
        if (num_array[1] == null){
            num_array.push(box.innerText);
        }
        else{
            num_array[1] = box.innerText;
        }
        first_pressed = false;
    }
    if (isoperator == true && num_array[0] != null && num_array[1] != null){
        if (button == equal){
            operator_value = button
        }
        total = totalcalc(num_array[0], num_array[1], oper_array[0]);
        box.innerText = total;
        num_array = [];
        oper_array = [];
        num_array.push(total);
        oper_array.push(operator_value);
        operator_value = null;
        total = null;
        first_pressed = false;
        isoperator = true;
    }
    else{
        tempoper = oper_array[0];
    }
}

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