for (var i = 1; i <=100; i++) {
  var value;
  
    if (i%3 === 0 && i%5 === 0) {
        value = "FizzBuzz";
    }
    else if (i%3 === 0 && i%5 !== 0) {
        value = "Fizz";
    }
    else if (i%3 !== 0 && i%5 === 0) {
       value = "Buzz";
    }
    else {
        value=i;
    }
    
    document.write('<li>'+value+'</li>');

}