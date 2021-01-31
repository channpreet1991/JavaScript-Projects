function Vote_Function(){
    var Age,Can_vote; //defining variables.
    Age=document.getElementById('Vote').value; //Store the value of input to Age variable.
    Can_vote=(Age>=18) ? 'You can vote!' : 'You are not old enough to vote'; //ternary operation.
    document.getElementById('vote').innerHTML=Can_vote; //display in p element.
}

function nestedFunction(){
    document.getElementById('Nested_Function').innerHTML=anotherFunction();
    function anotherFunction(){
        var initial=12;
        return initial;
    }
}

function Vehicle (Make,Model,Year,Color){
    this.Vehicle_Make=Make;
    this.Vehicle_Model=Model;
    this.Vehicle_Year=Year;
    this.Vehicle_Color=Color;
}
var Jack=new Vehicle('Dodge','Viper',2020,'Red');
var Emily=new Vehicle('Jeep','Trail Hawk',2019,'White and Black');
var Erik=new Vehicle('Ford','Pinto',1971,'Mustard');

function objFunction(){
    document.getElementById('New_and_This').innerHTML='Erik drives a '+Erik.Vehicle_Color+'-colored '+Erik.Vehicle_Model+' manufactured in '+Erik.Vehicle_Year;
}