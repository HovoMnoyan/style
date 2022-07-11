'use strict';

function numbers1(){
    const arr = [];
  
    for (let i = 1; i <= 100 ; i++){
         arr.push(i);
    }  
for(let i = 0 ; i < arr.length ; i++){
    arr[i] = arr[i] * arr[i];
}    
var c = 0;
for(let i = 0 ; i < arr.length ; i++){
    let a = arr[i] + arr[i + 1];
    c = c + a;
    i++;
}
return c;

}
function numbers(){
var arr1 = [];
   
    for (i = 1 ; i <= 100 ; i++){
         arr1.push(i);
    }
    var b = 0;
    for(var i = 0 ; i < arr1.length ; i++){
        var a = arr1[i] + arr1[i + 1];
        b = b + a;
    i++;
}
return b;

};
var numbers = numbers();
var numbers1 = numbers1();
console.log(numbers1 - numbers);
const constanta = confirm("are youe here");
console.log(constanta);
let user = "Hovo";
console.log(`are you hear ${user}?`);