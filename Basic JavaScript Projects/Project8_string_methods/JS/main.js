function concatenate(){
    var first='A', second='B', third='C';
    var combined=first.concat(second,third);
    document.getElementById('concatenate').innerHTML=combined;
}

function sliceFn(){
    var item='What are you doing?';
    var result=item.slice(9,12);
    document.getElementById('slice').innerHTML=result;
}

function Ucase(){
    var item='What are you doing?';
    var result=item.toUpperCase();
    document.getElementById('ucase').innerHTML=result;
}

function searchFn(){
    var item='abcdef123k!';
    var result=item.search('b');
    document.getElementById('search').innerHTML=result;
}

function methodString(){
    var item=1001;
    var result=item.toString();
    document.getElementById('method_string').innerHTML=result;
}

function methodPrecision(){
    var item=4.45986331786;
    var result=item.toPrecision(3);
    document.getElementById('method_precision').innerHTML=result;
}

function methodFixed(){
    var item=4.45986331786;
    var result=item.toFixed(3);
    document.getElementById('method_fixed').innerHTML=result;
}

function methodValue(){
    var item=12546;
    var result=item.valueOf();
    document.getElementById('method_value').innerHTML=result;
}
