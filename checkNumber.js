function checkNumber(number1, number2, number3){
    var even = 0;
    var odd = 0;
    if(number1 % 2 === 0){
        even++;
    }
    else{
        odd++;
    }
    if(number2 % 2 === 0){
        even++;
    }
    else{
        odd++;
    } 
    if(number3 % 2 === 0){
        even++;
    }
    else{
        odd++;
    }
    console.log("odd = " + odd + " and even = " + even);
}
checkNumber(3, 6, 1);