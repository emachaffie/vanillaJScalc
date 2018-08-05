// This is the main part of the project. You will have to react to click events on each calculator button and update the display. Start small by making the numbers work, then move on to the operators, decimal button, and equals button.

// When a user presses the equals button, evaluate the math expression they have created and put the result in the display. Further buttons pressed add operators and numbers after that result.

// You _do not_ have to stop users from entering bad input. For instance, if a user enters `2.1.0 -+ 7`, you can let them enter that and do not have to show any special output when they try to evaluate it using the equals button. It is fine if you do prevent them from entering bad input, though.

//NUMBERS

document.querySelector(".one").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (1);
})

document.querySelector(".two").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (2);
})

document.querySelector(".three").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (3);
})

document.querySelector(".four").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (4);
})

document.querySelector(".five").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (5);
})

document.querySelector(".six").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (6);
})

document.querySelector(".seven").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (7);
})

document.querySelector(".eight").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (8);
})

document.querySelector(".nine").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (9);
})

document.querySelector(".zero").addEventListener('click', function () {
    console.log("numberClicked")
    document.querySelector(".output").innerText += (0);
})

document.querySelector(".decimal").addEventListener('click', function () {
    console.log("decimalClicked")
    document.querySelector(".output").innerHTML += (".");
})

//OPERATORS

document.querySelector(".add").addEventListener('click', function () {
    console.log("operatorClicked")
    document.querySelector(".output").innerText += ("+");
})

document.querySelector(".subtract").addEventListener('click', function () {
    console.log("operatorClicked")
    document.querySelector(".output").innerText += ("-");
})

document.querySelector(".multiply").addEventListener('click', function () {
    console.log("operatorClicked")
    document.querySelector(".output").innerText += ("*");
})

document.querySelector(".divide").addEventListener('click', function () {
    console.log("operatorClicked")
    document.querySelector(".output").innerText += ("/");
})


//CLEAR 

document.querySelector(".clear").addEventListener('click', function () {
    console.log("clearClicked")
    document.querySelector(".output").innerText = ("");
})

//EQUALS

document.querySelector(".equals").addEventListener('click', function () {
    console.log("equalsClicked")
    var solution = eval(document.querySelector(".output").innerText);
    document.querySelector(".output").innerText = (solution);
})

// Attempting to add keyboard input for numbers

addEventListener("keydown", function (event) {
    if (event.keyCode == 49)
        document.querySelector(".output").innerText += (1);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 50)
        document.querySelector(".output").innerText += (2);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 51)
        document.querySelector(".output").innerText += (3);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 52)
        document.querySelector(".output").innerText += (4);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 53)
        document.querySelector(".output").innerText += (5);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 54)
        document.querySelector(".output").innerText += (6);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 55)
        document.querySelector(".output").innerText += (7);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 56 && event.shiftKey == false)
        document.querySelector(".output").innerText += (8);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 57)
        document.querySelector(".output").innerText += (9);

})

addEventListener("keydown", function (event) {
    if (event.keyCode == 48)
        document.querySelector(".output").innerText += (0);

})


// Keyboard Entry for Decimal

addEventListener("keydown", function (event) {
    if (event.keyCode == 190)
        document.querySelector(".output").innerHTML += (".");
})

// Keyboard Entry for Operators

addEventListener("keydown", function (event) {
    if (event.shiftKey && event.keyCode == 187)
        document.querySelector(".output").innerText += ("+");
})

addEventListener("keydown", function (event) {
    if (event.keyCode == 189)
        document.querySelector(".output").innerText += ("-");
})

addEventListener("keydown", function (event) {
    if (event.shiftKey && event.keyCode == 56)
        document.querySelector(".output").innerText += ("*");
})

addEventListener("keydown", function (event) {
    if (event.keyCode == 191)
        document.querySelector(".output").innerText += ("/");
})



// Keyboard Entry for Equals

addEventListener("keydown", function (event) {
    if (event.keyCode == 187) {
        var solution = eval(document.querySelector(".output").innerText);
        document.querySelector(".output").innerText = (solution);
    }
})

addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        var solution = eval(document.querySelector(".output").innerText);
        document.querySelector(".output").innerText = (solution);
    }
})

//The above two functions break the keyboard number input but do work for "enter" or "=" to give solution....