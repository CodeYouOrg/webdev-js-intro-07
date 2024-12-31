"use strict";

const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

const lostNumbers = [4, 8, 15, 16, 23, 42];

let x = 5 % 4;  //I created a variable here so that these values could change depending on user input

function returnTheRemainder(){   //Step 1    
    remainderElement.innerText = x; // This works if it is x or  5 % 4
}

let y = 47;                         //This loop works regardless of input
//let y = 52                     This would return "true"
 function checkIfEven(){
    if( y % 2 != 0 ){
        checkIfEvenElement.innerText = "false" ; 
    } else checkIfEvenElement.innerText = "true" ;
 }

 function getTheFourthElement(){  //Step 3
    lostNumbersElement.innerText = lostNumbers[3];  //returns 16
 }

function render() {
    returnTheRemainder();
    checkIfEven();
    getTheFourthElement();
}
submissionBtn.addEventListener("click", function () {
  render();
});

