function find(){
    for(dog = 0; dog < 36 ; dog ++){
        for(chicken = 0; chicken < 36; chicken++){
            if(dog + chicken == 36 && (dog * 4 + chicken * 2) == 100){
                console.log('dog' + ' = ' + dog);
                console.log('chicken' + ' = ' + chicken);
            }
        }
    }
}
find();