function caculateMax(){
    var sum = 0;
    for(var i = 1; i <= 100; i++){
        sum += i;
    }
    console.log(sum);
}

function caculateTotal(n){
    var sum = 0;
    for(var i = 2; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}

caculateMax();
caculateTotal(10);