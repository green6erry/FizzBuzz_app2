
window.onload = function() {
    var value="";
    
    
    function fizzLoop() {
        var i = prompt("Enter a number between 1 and 100");
        console.log(i);
    
    if (i%1 === 0 && i > 0 && i < 100) {

        for (i; i <=100; i++) {
  
            if (i%3 === 0 && i%5 === 0) {
            value += "<li>FizzBuzz</li>";
            }
            else if (i%3 === 0 && i%5 !== 0) {
            value += "<li>Fizz</li>";
            }
            else if (i%3 !== 0 && i%5 === 0) {
           value += "<li>Buzz</li>";
            }
            else if (i%3 !== 0 && i%5 !== 0) {
            value += '<li>'+i+'</li>';
            }
            else {
            value += '<li></li>';
            }
        }
        document.getElementById('numList').innerHTML = value;
    }

    else if (i >= 100) {
        alert("Oops! That number is above 100. Please enter a number somewhere in between 1 and 100.");
        return fizzLoop();
    }

    else if (i < 1) {
        alert("Oops! That number below 1. Please enter a number somewhere in between 1 and 100.");
        return fizzLoop();
    }

    else if (i%1 !== 0 && parseInt(i)%1 === 0){
        alert("Oops! You're not wrong; that is a number between 1 and 100. But we're looking for an integer.");
        return fizzLoop();
    }

    else {
        console.log(parseInt(i));
        alert("That has an alphabet character in it. Please just put in an integer.");
        return fizzLoop();
    }
}
fizzLoop();


    





}


