//TASK 1:GET VALUE IN INPUT-FIELD
//TASK2:CALCULATE YOUR VALUE IN INPUT-FIELD
//TASK3:CLEAR ALL YOUR CALCULATED VALUES


function calcValue(e) {
    let a=document.getElementById('result');
    a.value += e;
}
function calculate() {
    let a=document.getElementById('result');
    let val=a.value;
    let final=eval(val);
    a.value=final;
}
function cancel() {
    let a=document.getElementById('result');
    a.value="";
}