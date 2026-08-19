// Project 1 — Digital Wallet Transaction System



// Ek digital wallet ka transaction system banao.

// System me initially:

// Username
// Wallet balance
// Payment amount   `
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
console.log("-------------------------------")

// Question 3 — Railway Ticket Booking System

// Tum ek Railway Ticket Booking System bana rahe ho.

// Ek passenger ticket book karta hai.

// Initial situation

// Passenger details:

// Passenger name: "Roshan"
// Age: 22
// Ticket fare: 1250
// Platform charge: "50" — String
// Discount: 100
// Payment status initially complete nahi hai.
// Seat number abhi assign nahi hua.
// Booking reference abhi generate nahi hua.
// Passenger ka identity number bahut bada integer hai.
// System ke phases

// Phase 1 — Booking Created

// Initial passenger information store karo aur print karo.

let passengerName="Roshan";
let ageOfPassenger=22;
let ticketFare=1250;
let platformCharge="50"-String;
let discountMoney=100;
let isPaymentCompleted=false;
let seatNo=undefined;
let bookingReference=undefined;
let identityNumber=745634538475384435345n;

// Phase 1 — Booking Created

// Initial passenger information store karo aur print karo.
console.log("Passenger Name :",passengerName);
console.log("Passenger's Age :",ageOfPassenger);
console.log("Ticket fare :",ticketFare);
console.log("Platform Charge :",platformCharge);
console.log("Discount Amount :",discountMoney);
console.log("Payment Completion Status :",isPaymentCompleted);
console.log("Seat No :",seatNo);
console.log("Booking reference :",bookingReference);
console.log("Identity Number :",identityNumber);


// Phase 2 — Fare Calculation

// Final payable fare calculate karo using:

// Ticket fare
// Discount
// Platform charge
let payableCharge=ticketFare-100+platformCharge;
console.log("Payable Amount :",payableCharge);

// Phase 3 — Payment
// Payment successful hone ke baad:
// Payment status update karo.
// Seat number assign karo.
// Booking reference assign karo.
isPaymentCompleted=true;
seatNo=435;
bookingReference="A24";
console.log("Updated Payment Status :",isPaymentCompleted);
console.log("Updated Seat No :",seatNo);
console.log("Updated Booking Reference :",bookingReference);

// Phase 4 — Passenger Name Update

// Passenger ke naam ki primitive copy banao.
// Original passenger name change karo.
// Dono names print karke verify karo ki primitive copy independently preserve hui.
let passengerName2=passengerName;
passengerName="Rahul";
console.log("Older Passenger Name :",passengerName2);
console.log("New Passenger Name :",passengerName);

// Phase 5 — Cancellation

// Passenger ticket cancel karta hai.

// Appropriate values ko update/remove karo.
seatNo=null;
bookingReference=null;
identityNumber=null;
console.log("Seat no after Ticket Cancellation",seatNo);
console.log("Bookinng reference after Ticket cancellation :",bookingReference);
console.log("Updated Identity Number :",identityNumber);

// Phase 6 — Diagnostic Test
// System me ye expressions execute karo:
// ticketFare + platformCharge
// ticketFare - platformCharge
// paymentStatus + 100
// paymentStatus - "100"
// null + ticketFare
// undefined + ticketFare
// "1250" == ticketFare
// true == "1"
// null == undefined
// NaN == NaN
let s1=ticketFare+platformCharge;
console.log(s1);
console.log(typeof s1); //NaN

let s2=ticketFare-platformCharge;
console.log(s1);
console.log(typeof s1); // NaN

let s3=isPaymentCompleted+100;
console.log(s1);
console.log(typeof s1);// NaN

let s4=isPaymentCompleted-100;
console.log(s1);
console.log(typeof s1);// NaN

let s5=null+ticketFare;
console.log(s1);
console.log(typeof s1); // Number


let s6=undefined+ticketFare;
console.log(s1);
console.log(typeof s1); NaN

let s7=("1250"==ticketFare);
console.log(s1);
console.log(typeof s1); //number

let s8=(true=="1");
console.log(s1);
console.log(typeof s1); //true

let s9=(null==undefined);
console.log(s1);
console.log(typeof s1);// true special case

let s10=(NaN==NaN);
console.log(s1);
console.log(typeof s1); //false special case


















