// will study let,var and const variables in this file.
// 1.let
let name;
name="Roshan";
console.log(name);

name="Shivam"; // reassignment in let is allowed.
console.log(name);

// let name="Hitika"; // redeclaration in let is not allowed.
console.log(name);

{
    let a=23;

}
// console.log(a); // let is a block scope thats why we cant access let variables outside the scope.

function display(){
    let b=34;
    console.log(b);
   
}

display();
//  console.log(b); yaha function bhi ek{} hai isliiye ye b bhi access nahi kar sakte hum

// NOTE: let fully block scope hai,par fully function scope nahi hai ..below example se samjho
function display3(){
    if(true){
        let c=78;
    }
    console.log(c); // yaha c access nahi kar sakte halaki ye function ke andar hi hai par ye if block
                   //  ke bahar hi tha ..isliye "let" fully function scope nahi hai    
}
// display3();

console.log("--------------------------------")

// 2. Var
var num;
num=56;
console.log(num);

var num=67;
console.log(num); // reassignment in var is allowed.

num=98;
console.log(num); // redeclaration is var is also allowed.

function display4(){
    var d=78;
}
// console.log(d); // var is a function scope varaible ..so we cant access var varaibles outside the functions.
if(true){
    var e=70;
}
console.log(e); // var block scope nhi follow krta.

console.log("---------------------------------")

// 3.Const
// const age;
// age=78;
// console.log(age);  it is must to declare variable and assign value to that variable 
// whenever we create variable using const.

const age=22;
console.log(age);

{
    const bird="peacock";
}
// console.log(bird);t const follows block scope 

function display5(){
   const number=67;
}
// console.log(number); // yaha function bhi ek {} hai isliye .par const function scope nhi hai 

// function test() {
//     if (true) {
//         let x = 10;
//     }

//     console.log(x); // ❌ Error
// }       function scope rehta toh yaha s accesible hota 

// function test() {
//     if (true) {
//         var x = 10;
//     }

//     console.log(x); // ✅ 10
// }    Sirf var function scope hai yaha x accesible hai
