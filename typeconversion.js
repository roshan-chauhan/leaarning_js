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
console.log(s1); //NaN
console.log(typeof s1); //number

let s2=ticketFare-platformCharge;
console.log(s2); // NaN
console.log(typeof s2); // number

let s3=isPaymentCompleted+100;  
console.log(s3); //101
console.log(typeof s3);// number

let s4=isPaymentCompleted-100;
console.log(s4); //-99
console.log(typeof s4);// number 

let s5=null+ticketFare;
console.log(s5); //1250
console.log(typeof s5); // Number


let s6=undefined+ticketFare;
console.log(s6); // NaN
console.log(typeof s6); //number

let s7=("1250"==ticketFare);
console.log(s7); //true
console.log(typeof s7); //boolean

let s8=(true=="1");
console.log(s8); //true
console.log(typeof s8); //boolean

let s9=(null==undefined);
console.log(s9); // true
console.log(typeof s9);// boolean special case

let s10=(NaN==NaN);
console.log(s10); //false
console.log(typeof s10); //boolean special case

console.log("----------------------------")

// Question 4 — E-Commerce Return & Refund System
// Ek online shopping platform ka Return & Refund system banao.
// Scenario
// Customer ne ek product purchase kiya:

// Customer name: "Roshan Chauhan"
// Product name: "Smart Watch"
// Product price: 2499
// Delivery charge: "100" — String
// Coupon discount: 250
// Payment status: initially not completed
// Refund status: initially available nahi
// Order ID: payment ke baad generate hoga
// Return reason: initially available nahi
let customerName="Roshan Chauhan";
let productName="Smart Watch";
let productPrice=2499;
let deliveryCh="100"-String;
let discount=250;
let couponDiscount=250;
let isPaymentDone=false;
let refundStatus=undefined;
let orderID=undefined;
let returnReason=undefined;
// Phase 1 — Order Creation
// Saari initial information store aur print karo.
console.log("Customer Name :",customerName);
console.log("Product Name :",productName);
console.log("Delivery Charge :",deliveryCh);
console.log("Discount :",discount);
console.log("Coupon Discount :",couponDiscount);
console.log("Payment Status :",isPaymentDone);
console.log("Refund Status :",refundStatus);
console.log("Order ID :",orderID);
console.log("Return REason :",returnReason);


// Phase 2 — Payment

// Customer payment complete karta hai.
// Payment status update karo aur Order ID assign karo.
isPaymentDone=true;
orderID=8457346857364534n;
console.log("Payment status after paying :",isPaymentDone);
console.log("Order ID After paying :",orderID);


// Phase 3 — Refund Calculation
// Return approve hone par refund amount calculate karo.
// Product price, discount aur delivery charge ko consider karo.
let refundAmount=(productPrice-discount)-deliveryCh;


// Phase 4 — Return
// Customer product return karta hai.
// Return status update karo aur appropriate values ko update/remove karo.
refundStatus=true;
returnReason="Not appropriate product";
console.log("Refund Status after approval :",refundStatus);
console.log("refund Reason :",returnReason);


// Phase 5 — Primitive Copy
// Product name ki primitive copy banao.
// Original product name change karo.
// Dono values print karo.
let productName2=productName;
productName="Smart TV";
console.log("Previous Product :",productName2);
console.log("Current Product :",productName);

// Phase 6 — 🔥 Diagnostic Lab
// Neeche exactly ye expressions test karo:

// productPrice + deliveryCharge
// productPrice - deliveryCharge
// paymentStatus + 500
// paymentStatus - "500"
// refundStatus + 100
// refundStatus - 100
// returnReason + 50
// returnReason - 50
// null + productPrice
// undefined + productPrice
// "2499" == productPrice
// false == "0"
// null == false
// undefined == null
// NaN == NaN
let m1=productPrice+deliveryCh; // NaN number 
let m2=productPrice-deliveryCh; // NaN number
let m3=isPaymentDone+500; //501 number
let m4=isPaymentDone-"500"; //-499 number 
let m5=refundStatus+100; //101 number 
let m6=refundStatus-100; //-99 number 
let m7=returnReason+50; //string string
let m8=returnReason-50; //NaN number
let m9=null+productPrice; //2499 number
let m10=undefined+productPrice; //NaN number 
let m11=("2499"==productPrice); //true boolean
let m12=(false=="0"); //true boolean
let m13=(null==false); // false boolean (Special rule)
let m14=(undefined==null); // true boolean (Special rule)
let m15=(NaN==NaN); // false boolean (Special rule)

console.log(m1);
console.log(typeof m1);
console.log(m2);
console.log(typeof m2);
console.log(m3);
console.log(typeof m3);
console.log(m4);
console.log(typeof m4);
console.log(m5);
console.log(typeof m5);
console.log(m6);
console.log(typeof m6);
console.log(m7);
console.log(typeof m7);
console.log(m8);
console.log(typeof m8);
console.log(m9);
console.log(typeof m9);
console.log(m10);
console.log(typeof m10);
console.log(m11);
console.log(typeof m11);
console.log(m12);
console.log(typeof m12);
console.log(m13);
console.log(typeof m13);
console.log(m14);
console.log(typeof m14);
console.log(m15);
console.log(typeof m15);

console.log("-----------------------")

// Question 5 — ATM Withdrawal & Security System
// Tum ek ATM Withdrawal System bana rahe ho.
// Scenario

// Customer ATM par aata hai.
// Initial information:

// Customer name: "Roshan"
// Account balance: 50000
// Withdrawal amount: "7500" — String
// ATM fee: 20
// PIN verification: successful
// Account active: yes
// Transaction ID: abhi generate nahi hui
// Receipt: abhi available nahi
// Security token: unique internal identifier
// Customer account number: very large integer
let cusName="Roshan";
let balance=50000;
let withdrawalAmount="7500";
let atmFee=20;
let isPinVerified=true;
let isAccountActive=true;
let transactionIdd=undefined;
let isReceiptAvailable=undefined;
let securityToken=Symbol("Security Token"); 
let customerAccNo=58364587346587345n;
let istransactionCompleted=undefined;

// Phase 1 — ATM Session
// Saari information store karo aur print karo.
console.log("Customer Name :",cusName);
console.log("Account balance :",balance);
console.log("Withdrawal Amount :",withdrawalAmount);
console.log("ATM Fee :",atmFee);
console.log("Is Pin verified :",isPinVerified);
console.log("Is Account Active :",isAccountActive);
console.log("Transactional ID :",transactionID);
console.log("Receipt :",receipt);
console.log("Security Token :",securityToken);
console.log("Customer Account Number :",customerAccNo);


// Phase 2 — Withdrawal
// Withdrawal process karo.
// Account balance appropriately update karo.
balance=balance-withdrawalAmount;
console.log("Account balance after withrawal :",balance);


// Transaction successful hone par:

// Transaction status update karo
// Transaction ID assign karo
// Receipt availability update karo
istransactionCompleted=true
transactionIdd=6857468573648573485n;
isReceiptAvailable=true;


// Phase 3 — 🔥 Security Diagnostics
// Exactly ye expressions test karo:
// withdrawalAmount + atmFee
// withdrawalAmount - atmFee
// pinVerified + withdrawalAmount
// accountActive - "1"
// receiptAvailable + 100
// transactionStatus - 50
// null + withdrawalAmount
// undefined + withdrawalAmount
// "7500" == withdrawalAmount
// true == withdrawalAmount
// false == "0"
// true == "true"
// null == 0
// undefined == 0
// null == undefined
// NaN == NaN
let a1=(withdrawalAmount+atmFee);
let a2=(withdrawalAmount-atmFee);
let a3=(isPinVerified+withdrawalAmount);
let a4=(isAccountActive-"1");
let a5=(isReceiptAvailable+100);
let a6=(istransactionCompleted-50);
let a7=(null+withdrawalAmount);
let a8=(undefined+withdrawalAmount);
let a9=("7500"==withdrawalAmount);
let a10=(true==withdrawalAmount);
let a11=(false=="0");
let a12=(true=="true");
let a13=(null==0);
let a14=(undefined==0);
let a15=(null==undefined);
let a16=(NaN==NaN);


// Phase 4 — Account Update

// Customer ke account name ki primitive copy banao.
// Original name change karo.

// Dono values print karo.

// Phase 5 — Transaction Reversal

// Transaction reverse ho jati hai.

// Appropriate values ko update/remove karo.



















