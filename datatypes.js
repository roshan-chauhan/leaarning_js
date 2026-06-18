// will learn about datatypes in this code
// THere are total 8 types of datatype in JS

// 1. Primitive (7)

const name="Roshan";
console.log(typeof name);

const num=36437465346;
console.log(typeof num);

const a=true;
console.log(typeof a);

const bint=3454736547365473535473573n;
console.log(typeof bint);

let naam;
console.log(naam);

const b=Symbol("D");
console.log(typeof b);

const mul=("hello"*2);
console.log(typeof mul); // yaha NaN ki baajaye number aya hai reason niche hai
// jab ye upar ka operation evaluate ho raha toh sabse pehle wo "hello" ko number mae convert krega like 
// Number("hello") =NaN aaeaga then.. NaN*2 =NaN hi aaega means
// const mul="hello"*2=NaN hoagaya aur NaN ka typeof "number " hota hai [MOST IMPORTANT NOTE]

// JavaScript me NaN ek special numeric value maana jata hai jo invalid mathematical
// operation ka result represent karti hai.



console.log("----------------------------------------");
// NOn-primitive datatypes ------ object

const value=null;
console.log(typeof value);

const obj={
    name:"Roshan",
    age:22
}
console.log(typeof obj);

const arr=["fruits","birds","vegetables"];
console.log(typeof arr);

function greet(){
    console.log("Hello" + "Roshan");
}
console.log(typeof greet());

function greet() {
    console.log("Hello Roshan");
    
}

console.log(greet());

greet();




