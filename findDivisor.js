function findDivisor(number){
    for(i = 0; i <= number; i++){
        if(number % i == 0){
            console.log(i);
        }
    }
}
findDivisor(10);