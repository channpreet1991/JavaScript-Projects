function mathAdd(){
    var result=7+5;
    document.getElementById('Math').innerHTML=result;
}

function mathSub(){
    var result=7-5;
    document.getElementById('Math').innerHTML=result;
}

function mathMul(){
    var result=7*5;
    document.getElementById('Math').innerHTML=result;
}

function mathDiv(){
    var result=7/5;
    document.getElementById('Math').innerHTML=result;
}

function mathMod(){
    var result=7%5;
    document.getElementById('Math').innerHTML="When 7 is divided by 5 the we will get "+result+" as a remainder.";
}

function mathUnr(){
    var result=7;
    document.getElementById('Math').innerHTML=-result;
}

function mathInr(){
    var result=7;
    result++;
    document.getElementById('Math').innerHTML=result;
}

function mathDec(){
    var result=7;
    result--;
    document.getElementById('Math').innerHTML=result;
}

function mathRandom(){
    var result=Math.round(Math.random()*20);
    document.getElementById('Math').innerHTML=result;
}






