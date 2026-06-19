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


// write a code to get ooutput 40,20
// Outer variable = 20
// Inner block me same naam ka variable = 40
// Shadowing use karni hai
let f=20;
{
    let f=40;
    console.log(f);
}
console.log(f); // another method is below

let g=20;
function display6(){
    let g=40;
    return g;
}
console.log(display6());
console.log(g);

// write a code to get output as 1,2
// let a = 1
// Function ke andar ek aur variable ho jo 2 print kare.
// Bahar wala variable change nahi hona chahiye.

let h=1;
function display7(){
    let h=2;
    console.log(h);

}
console.log(h);
display7();


// write a code to get output as 10,20,10
// Global variable 10
// if block me same naam ka let variable 20
// Total 3 console.logs hone chahiye

let i=10;
console.log(i);
if(true){
    let i=20;
    console.log(i);
}

console.log(i);

// write a code to get output as 5,10
// Ek global variable.
// Ek function variable.
// Inner function ko dono values access karni chahiye.

let k=10;
function display8(){
    let j=5;
    
    function inner(){

        console.log(j);
        console.log(k);
    }
    inner();
}
display8();

