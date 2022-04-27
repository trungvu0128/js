function sort(number1, number2, number3){
    let arr = [];
    arr.push(number1);
    arr.push(number2);
    arr.push(number3);
    let temp = 0;
    for(let i = 0 ; i < arr.length - 1; i++){
        temp = i;
        for(let j = i + 1 ; j < arr.length; j++){
            if(arr[j] < arr[temp]) temp = j;
        }
        swap(arr[i], arr[temp]);
    }
console.log(arr);
}

function swap(a, b){
    let c = a;
    a = b;
    b = c;
}

sort(32, 2, 5);