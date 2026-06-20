// write a code to get output as 50
// let use karo
// Variable global ho
// Function ke andar print karo

let a = 50;
function display() {
    console.log(a);
};
display();

// write a code to get output as 20,10
// let use karo
// Shadowing use karni hai

let b = 20;
if (true) {
    let b = 10;
    console.log(b);
}
console.log(b);

// write a code to get output as 100,100
// Sirf ek var variable declare karna hai
// Do alag blocks se print karna hai

function display2() {

    var c = 100;

    if (true) {
        console.log(c);
    }

    {
        console.log(c);
    }
}
display2();

// write a code to get output as 30
// variable if block ke andar declare ho
// Block ke bahar print ho
// Error nahi aana chahiye

if (true) {
    var d = 30;
}
console.log(d);


// write a code to get output as 40,20
// const
// Shadowing
const e = 40;
console.log(e)
if (true) {
    const e = 20;
    console.log(e);
}

//  write a code to get output as 10,20,10
// Global variable
// if block variable
// Total 3 console.logs
let f = 10;
console.log(f);
if (true) {
    // console.log(f); we cant do that ..this is calle the TDZ ..whenever we try to fetch 
    // of a variable even before its initialization it will give error as cannot access f 
    // before initialization
    // NOTE: here,we cant get f as 10..cuz there is new variiable f already existing in the if block.

    let f = 20;
    console.log(f);
}
console.log(f);

// Obtain value 5,10
// Global variable
// Function variable
let g = 10;
function display3() {
    let h = 5;
    return h;
}
console.log(display3())
console.log(g);


// Obtain output as 100
// Function parameter use karna hai
// Global variable use nahi karna

function display4(i){
    return i;
}
console.log(display4(100));


// Obtain output as 50,50
// Function parameter use karna hai
// Same value 2 baar print karni hai
function display5(j){
    console.log(j);
    console.log(j);
}
display5(50);


// Obtain output as 20,10
// Function parameter ka naam aur global variable ka naam same hona chahiye
let k=10;
function display6(k){
    console.log(k);
}
display6(20);
console.log(k);


//  Obtain 10,20,30
// Use a global variable.
// Use a parent function variable.
// Use a child (nested) function variable.
let l=10;
function display7(){
    let l1=20;
    
    function inner(){
        let l2=30;
        console.log(l);
        console.log(l1)
        console.log(l2);
    }
    inner();
}
display7();

// Obtain 30,20,10
// Use a child function.
// Use a parent function.
// Use a global variable.
let m=30;
function display8(){
    let m1=20;

    function child(){
        let m2=10;
        // return m;
        // return m1;
        // return m2; // yaha sirf first value 30 hi print hoti kyuki function mae first 
        // return jaise  hi hit hota hai function end hojata hai
        console.log(m);
        console.log(m1);
        console.log(m2);
    }
    child();
}
display8();


// Obtain 100,200,100
// Use variable shadowing.
// Use block scope (let or const).
let n=100;
console.log(n);
if(true){
    let n=200;
    console.log(n);
}
console.log(n);


// Obtain 5,10,15
// Use a global variable.
// Use a parent function variable.
// Use a child function variable.

let o=5;
function parent(){
    let o1=10;
    console.log(o1);

    function child(){
        let o2=15;
        return o2;
    }
    console.log(child());
}
console.log(o);
parent();


// Obtain 40,20,10
// Use three different scopes.
// Use the same variable name in all scopes.
// Demonstrate shadowing.

let p=40;
function display9(){
    let p=20;
    console.log(p);

    if(true){
        let p=10;
        console.log(p);
    }
}
console.log(p);
display9();


// Obtain A,B,C
// Use a global variable.
// Use a parent function variable.
// Use a child function variable.

let q="A"; // usig shadowing // global 
function display10(){
    let q="B";               // parent func
    console.log(q);

    function display11(){
        let q="C";           // child func
        return q;
    }
    console.log(display11());
}
console.log(q);
display10();


// Obtain 100,50,100
// Use a global variable.
// Demonstrate function-level shadowing.
let r=100;
console.log(r);
function display11(){
    let r=50;
    return r;
}

console.log(display11());
console.log(r);


// Obtain 10,20,30,20,10
// Use nested scopes.
// Demonstrate variable shadowing.

function display12(){
    let s=10;
    console.log(s);
    

    function display13(){
        
        let s=20;
        console.log(s)
        
        
        if(true){
            let s=30;
            console.log(s);
        }
        console.log(s);
    }
   display13();
   console.log(s);
}
display12();

console.log("-----------")


// Obtain 5,15,25
// Use a global variable.
// Use a parent function variable.
// Use a child function variable.
let t=5;
console.log(t);

function display14(){
    let t1=15;
    console.log(t1);

    function display15(){
        let t2=25;
        return t2;
    }
    console.log(display15())
}
display14();
console.log("----------------")


//  Write code to get 
// Global
// Parent
// Child
// Parent
// Global
// Use a global scope.
// Use a parent function.
// Use a child (nested) function.
// Demonstrate scope chain behavior.
let u="Global";
console.log(u);
function parent1(){
    let u="Parent";
    console.log(u);

    function child1(){
        let u="Child";
        console.log(u);
    }
    child1();
    console.log(u);
}
parent1();
console.log(u);

