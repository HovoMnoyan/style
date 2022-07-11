"use strict";

function Dog(name,wild,year,){
    this.name = name;
    this.wild = wild;
    this.year = year;
}
function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
   }
   Dog.prototype.standUp = function(){
    console.log(this.name + " is standing");
   };

ShowDog.prototype = new Dog();
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function() { 
    console.log("Stack");
    };
    ShowDog.prototype.bait = function() {
    console.log("Bait");
    };
    ShowDog.prototype.gait = function(kind) {
    console.log(kind + "ing");
    };
    ShowDog.prototype.groom = function() {
    console.log("Groom");
    };
    var fido = new ShowDog("fido","pitbull",17,"yeas");
    fido.standUp();
    if(fido instanceof Dog){
        console.log("fido is a Dog")
    }
let userName = 'Joyn';
let userNumber = 25;
userNumber = 24;
console.log(userNumber);