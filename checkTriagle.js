function checkTriagle(a, b, c){
    if( a<b+c && b<a+c && c<a+b ){
        if( a*a==b*b+c*c || b*b==a*a+c*c || c*c== a*a+b*b)
            console.log("Day la tam giac vuong");
        else if(a==b && b==c)
        console.log("Day la tam giac deu");
        else if(a==b || a==c || b==c)
        console.log("Day la tam giac can");
    }
}
checkTriagle(3, 4, 5);