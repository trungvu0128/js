function isPrime(number){
    if(i < 2){
        return false;
    }
    if(i == 2){
        return true;
    }
    return i % 2 != 0;
}
function findPrime(numbers){
    for(i = 0; i < numbers.length; i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}
var numbers = [2, 4, 6, 8, 13, 15];
findPrime(numbers);