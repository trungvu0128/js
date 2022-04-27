function printDateTime(year, month, day){
    var beforeDate = new Date(year, month, day);
    var afterDate = new Date(year, month, day);
    beforeDate.setDate(beforeDate.getDate() - 1);
    afterDate.setDate(afterDate .getDate() + 1);
    console.log(beforeDate);
    console.log(afterDate);
}
printDateTime(2021, 3,25);


function printDate(year, month){
    var date = new Date(year, month, 0);
    console.log(date.getDate());
}

printDate(2021, 2);
