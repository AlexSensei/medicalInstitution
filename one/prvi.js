var varibleInFirstJS = 'variableInFirstJS';

var flyToTheMoon = function()
{
    var variableInAnonnymous = 'variableInAnnonymous';
    alert("Zoom! Zoom! Zoom!");

    //Nece se pozvati jer je anonimna funkcija ne vidi
    //console.log(variableinFirstJS+' PrviJSVarijabla');
    
    //Pozvace se
    console.log(variableInAnonnymous);
}
//Nece se pozvati jer nije u scope
//console.log(variableInAnonnymous+' AnonyVarijabla');
