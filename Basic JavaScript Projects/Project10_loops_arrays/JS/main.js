
function lengthProperty(){
  var item='Halifax';

  document.getElementById('lengthProperty').innerHTML=item.length;
}

function For_Loop(){
  var num=['A','B','C','D','E','F',];
  for(i=0;i<num.length;i++){
    document.write(num[i] +'<br>');
  }
}

function arrayFunction(){
  var arr=['D','C','A','B'];
document.getElementById('array').innerHTML="The First letter of english is "+arr[2]+".";
}

function constantFunction(){
  const constValue={
    province:'NovaSccotia',
    capital:'Halifax'
  }
  constValue.capital='HALIFAX';
  constValue.country='CANADA';

  const A='hello';
  A='HELLO';
  document.getElementById('constant').innerHTML=A;
}




function letFunction(){
  var item1='CANADA';
  {
    let item1='canada';
  }
  
  document.getElementById('let').innerHTML=item1;
}

var returnValue={
  province:'NovaScotia',
  capital:'Halifax',
  desc:function(){
    return returnValue.province;
  }
}
document.write(constValue.desc());


function breakFunction(){
  var text = "";
  var i;
  for (i = 0; i < 10; i++) {
    if (i === 3) { 
      break; 
    }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("value").innerHTML = text;
}

function continueFunction(){
  var text = "";
  var i;
  for (i = 0; i < 10; i++) {
    if (i === 3) { 
      continue; 
    }
    text += "The number is " + i + "<br>";
  }
  document.getElementById("continue").innerHTML = text;
}
