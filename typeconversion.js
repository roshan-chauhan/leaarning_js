// Project 1 — Digital Wallet Transaction System



// Ek digital wallet ka transaction system banao.

// System me initially:

// Username
// Wallet balance
// Payment amount
// Payment status
// Coupon code
// Transaction ID
// KYC status
// Internal security key
// hone chahiye.

// Transaction ke phases:

// Phase 1 — Initial State

// User wallet me ₹5000 hai.
// Payment amount "1200" String ke form me receive hota hai.
// Coupon initially available nahi hai.
// Transaction ID initially available nahi hai.
// KYC verified hai.
// Security key Symbol honi chahiye.

// Phase 2 — Payment Processing

// Payment amount ko wallet balance ke against process karo.
// Payment successful hone par wallet balance update karo.
// Transaction ID generate/assign karo.
// Payment status update karo.

// Phase 3 — System Diagnostics

// System ko ye operations perform karne hain:

// paymentAmount + 300
// paymentAmount - 300
// true + 100
// false - "50"
// null + 500
// undefined + 500
// "100" == 100
// true == "1"
// null == 0
// null == undefined
// NaN == NaN

// Har diagnostic ka result aur typeof print karo.

// Phase 4 — Transaction Cancellation

// Transaction cancel hone par appropriate values ko update/remove karo.

// Phase 5 — User Profile Update

// Username ki primitive copy banao, phir original username change karo aur dono values print karo.

// Rules
// Sirf primitives use karo.
// Objects/arrays/functions mat use karna.
// Number(), String(), Boolean() manually use mat karna; implicit conversion observe karni hai.
// == aur === jahan logically useful lage, use kar sakte ho.
// Code khud design karo. No hint.

// Code bhejo. Main sirf actual mistakes + important observations + rating dunga.
let username="Roshan";
let walletBalance=5000;
let paymentAmount="1200";
let isPaid=false;
let couponCode=undefined;
let transactionID=undefined;
let isKYCDone=true;
let securityKey=Symbol("Internal security key");
console.log("USername :",username);
console.log("Wallet Balance :",walletBalance);
console.log("Payment Amount :",paymentAmount);
console.log("Payment Status :",isPaid);
console.log("Coupon code :",couponCode);
console.log("Transaction ID :",transactionID);
console.log("KYC Status :",isKYCDone);
console.log("Security KEy :",securityKey);


// Phase 2:
let walletBalanceLeft=walletBalance-paymentAmount;

transactionID=37453847563453453n;
isPaid=true;
console.log("Updated Wallet Balance :",walletBalanceLeft);
console.log("Updated Transaction ID :",transactionID);
console.log("Updated Payment Status :",isPaid);

// Phase 3 : System Diagnostics

let r1=paymentAmount+300; //1200300
let r2=paymentAmount-300; // 900
let r3=true+100;  //101
let r4=false-"50"; //-50
let r5=null+50; // 50
let r6=undefined+50; // NaN
let r7=("100"==100); // true
let r8=(true=="1"); // true
let r9=(null==0); //false
let r10=(null==undefined); //true
let r11=(NaN==NaN); // false
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);
console.log(r9);
console.log(r10);
console.log(r11);


// Phase 4 — Transaction Cancellation
transactionID=null;
couponCode=null;
console.log("Transaction ID  after transaction cancellation :",transactionID);
console.log("Coupon code after transaction cancellation :",couponCode);


// User Profile update
let username2=username;
username="Sakshi";
console.log("Previous Username :",username2);
console.log("Updated Username :",username);













