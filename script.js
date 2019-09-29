
let one = document.getElementById("btn-1").value;
let two = document.getElementById("btn-2").value;
let three = document.getElementById("btn-3").value;
let four = document.getElementById("btn-4").value;
let five = document.getElementById("btn-5").value;
let six = document.getElementById("btn-6").value;
let seven = document.getElementById("btn-7").value;
let eight = document.getElementById("btn-8").value;
let nine = document.getElementById("btn-9").value;
let zero = document.getElementById("btn-zero").value;



let add = document.getElementById("btn-add").value;
let mul = document.getElementById("btn-mul").value;
let div = document.getElementById("btn-div").value;
let sub = document.getElementById("btn-sub").value;
let equal = document.getElementById("btn-equal").value;

let text = document.getElementById("input-field");


let first, second = null;
let s = 0;
let op;

operand_one = function () {
    text.value += one;
    if (first != null) {
        s += one;
    }

}

operand_two = function () {
    text.value += two;

    if (first != null) {
        s += two;
    }
}

operand_three = function () {
    text.value += three;
    if (first != null) {
        s += three;
    }
}

operand_four = function () {
    text.value += four;
    if (first != null) {
        s += four;
    }
}

operand_five = function () {
    text.value += five;
    if (first != null) {
        s += five;
    }
}

operand_six = function () {
    text.value += six;
    if (first != null) {
        s += six;
    }
}

operand_seven = function () {
    text.value += seven;
    if (first != null) {
        s += seven;
    }
}

operand_eight = function () {
    text.value += eight;
    if (first != null) {
        s += eight;
    }
}

operand_nine = function () {
    text.value += nine;
    if (first != null) {
        s += nine;
    }
}

operand_zero = function () {
    text.value += zero;
    if (first != null) {
        s += zero;
    }
}


operator_add = function () {

    if (first == null) {
        first = parseFloat(text.value);
    }

    text.value += add;
    op = add;

    
}

operator_mul = function () {
    if (first == null) {
        first = parseFloat(text.value);
    }

    text.value += mul;
    op = mul;
}

operator_div = function () {
    if (first == null) {
        first = parseFloat(text.value);
    }

    text.value += div;
    op = div;
}

operator_sub = function () {
    if (first == null) {
        first = parseFloat(text.value);
    }


    text.value += sub;
    op = sub;
}

isEqual = function () {

    second = parseFloat(s);
    text.value = "";

    if (first != null && second != null) {
        if (op == "+") {
            text.value = first + second;
            first = null;
            second = null;
            s = 0;
            op = null;
        }
        else if (op == "*") {
            text.value = first * second;
            first = null;
            second = null;
            s = 0;
            op = null;
        }
        else if (op == "/") {
            text.value = first / second;
            first = null;
            second = null;
            op = null;
            s = 0;
        }
        else if (op == "-") {
            text.value = first - second;
            first = null;
            second = null;
            op = null;
            s = 0;
        }
    }

}

clear_text = function () {
    text.value = "";
    first = null;
    second = null;
    op = null;
    s = 0;
}

