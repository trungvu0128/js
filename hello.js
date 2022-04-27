function sayHello(member){
    switch(member){
        case "B":
            console.log("Hello Dad !");
            break;
        case "M":
            console.log("Hello Mother !");
            break;
        case "E":
            console.log("Hello Daughter !");
            break;
        case "A":
            console.log("Hello Brother !");
            break;
        default:
            console.log("Not member !");
        break;
    }
}
sayHello("A");