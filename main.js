/* 
A simple program that uses the euclidean algorithm to solve
for the GCF of any two variables

Code by: Myrtletea (formerly Nonaxce)
*/
window.onbeforeunload = function() {
   return "Farewell.. person";
};

const num1 = document.getElementById("input-num1");
const num2 = document.getElementById("input-num2");

const findGCFBtn = document.getElementById("find-GCF-button");
let gcfOutput = document.getElementById("gcf-output");
let errorMsg = document.getElementById("display-error-msg")
errorMsg.innerHTML = "Please enter two numbers"; // default

let js_num1 = "";
let js_num2 = "";

const listOfSentencesIncreasingInFrustration = [
   "I said please enter two numbers", 
   "I don't think you've heard but I said numbers",
   "Let me repeat that: Please enter two numbers",
   "So examples of numbers are 1, 2, 3, 56, 420 and definitely not that",
   "Is your mouse broken, kindly check tho if it is",
   "I can't let you put that there, sorry",
   "I said to enter two numbers, bot some weird word or nothing.",
   "....",
   "I'll let you leave, its okay, I'll stay here"
];
let angerMeter = 0;
findGCFBtn.addEventListener("click", () => {
   js_num1 = Number(num1.value);
   js_num2 = Number(num2.value);
   // outputs the GCF
   if ((!js_num1 || !js_num2) || (Number.isInteger(js_num1) === false || Number.isInteger(js_num2) === false)) {
      angerMeter++;
      if (angerMeter >= listOfSentencesIncreasingInFrustration.length) {
         errorMsg.innerHTML = "....."
      } else {
         errorMsg.innerHTML = listOfSentencesIncreasingInFrustration[angerMeter];
      }
   } else { 
      gcfOutput.innerHTML = findGCF(js_num1, js_num2);
      errorMsg.innerHTML = "Please enter two numbers";
   }
})



let iterations = "";
/* 
Function that finds the GCF
*/
function findGCF(num1, num2) {
    // initializes the variables
    let gcf = "";
    let temp = "";
    let arrey = []; // <= used to group iterations and GCF
    // Makes the values their absolute value
    num1 = Math.abs(num1);
    num2 = Math.abs(num2);
    // If num1 is lesser than num2, then swap their values
    if (num1 < num2) {
        // swaps the numbers 
       temp = num2;
       num2 = num1;
       num1 = temp;
       // extracting "arrey"
       arrey = findGCF2(num1, num2);
       iter = arrey[0];
       gcf = arrey[1];
       return gcf;

    } else {
        // extracting "arrey" in an alternate reality
       arrey = findGCF2(num1, num2);
       iter = arrey[0];
       gcf = arrey[1];
       return gcf;
    }

    // ACTUALLY finds the GCF of 2 numbers
    // The euclidean algorithm
    function findGCF2(num1, num2) {
        let solved = 0;
        let arrey = [];
        let remainder = "";
        let gcf = "";
        iterations = 0; // for funsies;

        while (!solved) {
            remainder = num1 % num2;
            if (remainder === 0) {
                solved++;
                remainder = num2;
            } else {
                num1 = num2;
                num2 = remainder;
            }
            iterations++;
            gcf = remainder;
        }
        // iter value is index 0 and so on
        arrey.push(iterations); // 0
        arrey.push(gcf); // 1
        return arrey;
    }
}
