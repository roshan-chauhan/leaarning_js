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
console.log(b);//
