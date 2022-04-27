function reverse(number) {
    var lastDigit;
    while (number != 0) {
        lastDigit = num % 10;
        rev = rev * 10 + lastDigit;
        num = Math.floor(num / 10);
    }

    console.log("Reverse number : " + rev);
}
reverse(-3456);