// write a code to get output 10..use let  and the output should be printed from inside the function.
function display(){
    let a=10;
    console.log(a);

}
display();


// write a code to get output 20,10..using both variables as let and use shadowing.
let a=10;
function display2(){
    let a=20;
    console.log(a);
}
display2();
console.log(a);

// write a code to get output 50
// var use karo.
// Variable if block ke andar declare hona chahiye.
// Print if ke bahar karna hai.
if(true){
    var b=50;
}
console.log(b);

// write a code to get output 20,10
// const use karna hai.
// Ek global variable aur ek block ke andar same naam ka variable hona chahiye.
// Pehle 20 print ho, phir 10.
const c=10;
function display3(){
    const c=20;
    console.log(c);
}
// console.log(display3()); print a + give undefined as a return value.
display3();
console.log(c);

//  write a code to get output 100.
// Global variable use karo.
// Function ke andar access karna hai.

let d=100;
function display4(){
    console.log(d);
}
display4();
console.log("----------");

let e=100;
function display5(e){
    return e;
}
console.log(display5(e));
//Learnings: global scope ka vraiable aur parameter ka variable dono alag alag hote hai .
// yaha parameter ka variable global scope ke variable ko shadow  krta hai.
// paramter ka variable without declare hua means internally wo as a let e; hota hai.