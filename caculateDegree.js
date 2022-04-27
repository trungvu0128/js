function caculateDegree(hour, minute) {
    var degree = 0; 
    if(hour > 13){
        hour = hour - 12;
    }
    degree = Math.abs((minute * 6) - (hour * 60) * 0.5);
    console.log(degree);
}
caculateDegree(0, 0);