//Without error:

// var item=20;

// function multiply_1(){
//     var data=item*10;
//     document.write(data+'<br>')
// }

// function multiply_2(){
//     var data=item*15;
//     document.write(data+'<br>')
// }

// multiply_1();
// multiply_2();


//With error:
// function multiply_3(){
//     var item=20;
//     var data=item*10;
//     document.write(data+'<br>')
// }

// function multiply_4(){
//     var data=item*15; //item here is undefined.
//     document.write(data+'<br>')
// }

// multiply_3();
// multiply_4();


function cond(){
    var info=new Date().getHours();
    console.log(info);
    if(info>=12 && info<=18){
       return document.getElementById('st').innerHTML='Good Evening!';
    }if(info>18){
        return document.getElementById('st').innerHTML='Good Night!';
    }else{
        return document.getElementById('st').innerHTML='Good Morning!';
    }
}

function ifElse(){
    var information=document.getElementById('age').value;
    if(information>=16){
        document.getElementById('get').innerHTML='You can take exam for driving';
    }else{
        document.getElementById('get').innerHTML='You are not eligible.'; 
    }
}

function Time_function(){
    var Time=new Date().getHours();
    var Reply;
    if(Time<12==Time>0){
        Reply='It is morning time!'
    }else if(Time>12==Time<18){
        Reply='It is the afternoon!'
    }else{
        Reply='It is evening time!'
    }
    document.getElementById('Time_of_day').innerHTML=Reply;
}
