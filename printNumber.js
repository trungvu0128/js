function print(number) {
    var a = number % 10;
    var b = Math.floor((number / 10) % 10);
    var c = Math.floor(number / 100);
    switch (c) {
        case 1: console.log("Một trăm "); break;
        case 2: console.log("Hai trăm "); break;
        case 3: console.log("Ba trăm "); break;
        case 4: console.log("Bốn trăm "); break;
        case 5: console.log("Năm trăm "); break;
        case 6: console.log("Sáu trăm "); break;
        case 7: console.log("Bảy trăm "); break;
        case 8: console.log("Tám trăm "); break;
        case 9: console.log("Chín trăm "); break;
    }
    // in ra chử "lẻ" nếu hàng chục bằng không
    if (b % 10 == 0 && a != 0) {
        console.log("lẻ ");
    }
    //in ra hàng chục
    switch (b) {
        
        case 1: console.log("mười "); break;
        case 2: console.log("hai mươi "); break;
        case 3: console.log("ba mươi "); break;
        case 4: console.log("bốn mươi "); break;
        case 5: console.log("năm mươi "); break;
        case 6: console.log("sáu mươi "); break;
        case 7: console.log("bảy mươi "); break;
        case 8: console.log("tám mươi "); break;
        case 9: console.log("chín mươi "); break;
    }
    //in ra hàn đơn vị
    switch (a) {
        case 1: console.log("một "); break;
        case 2: console.log("hai "); break;
        case 3: console.log("ba "); break;
        case 4: console.log("bốn "); break;
        case 5: console.log("lăm "); break;
        case 6: console.log("sáu "); break;
        case 7: console.log("bảy "); break;
        case 8: console.log("tám "); break;
        case 9: console.log("chín "); break;
    }
}

print(999);