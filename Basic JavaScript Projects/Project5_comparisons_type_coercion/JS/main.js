function typeOfOperator(){
    var result=typeof('data')
    document.getElementById('Dictionary').innerHTML=result;
}

function consoleOperation(){
    console.log(7+5);
}



document.write(2E310);//infinity
document.write(-3E310); //infinity
document.write(21>=19); // gt operator
document.write(21<=19); // lt operator
document.write('10'+9); //math operation with different data type.
document.write(7==9); //comparison with different value
document.write(9==9); //comparison with same value
document.write(9===9);//same data type and same value
document.write('9'===8);//different data type and different value
document.write('9'===9);//different data type but same value
document.write(9===8);//same data type but different value
document.write(9>8 && 9<8);//AND -- false
document.write(9>8 && 9>8);//AND -- true
document.write(9>8 || 9<8);//OR -- true
document.write(9<8 || 9<8);//OR -- false
document.write(!9>8);//NOT -- false
document.write(!9<8);//NOT -- true
