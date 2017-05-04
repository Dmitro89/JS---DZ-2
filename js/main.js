var num = prompt("Введите число > 1")

for (var i=2; i<=num; i++){

    for(var j=2; j<=i; j++){

        if (i % j == 0) break;
    }
    if(j==i) document.write( i+', ' );
}