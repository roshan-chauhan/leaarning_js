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
let username = "Roshan";
let walletBalance = 5000;
let paymentAmount = "1200";
let isPaid = false;
let couponCode = undefined;
let transactionID = undefined;
let isKYCDone = true;
let securityKey = Symbol("Internal security key");
console.log("USername :", username);
console.log("Wallet Balance :", walletBalance);
console.log("Payment Amount :", paymentAmount);
console.log("Payment Status :", isPaid);
console.log("Coupon code :", couponCode);
console.log("Transaction ID :", transactionID);
console.log("KYC Status :", isKYCDone);
console.log("Security KEy :", securityKey);


// Phase 2:
let walletBalanceLeft = walletBalance - paymentAmount;

transactionID = 37453847563453453n;
isPaid = true;
console.log("Updated Wallet Balance :", walletBalanceLeft);
console.log("Updated Transaction ID :", transactionID);
console.log("Updated Payment Status :", isPaid);

// Phase 3 : System Diagnostics

let r1 = paymentAmount + 300; //1200300
let r2 = paymentAmount - 300; // 900
let r3 = true + 100;  //101
let r4 = false - "50"; //-50
let r5 = null + 50; // 50
let r6 = undefined + 50; // NaN
let r7 = ("100" == 100); // true
let r8 = (true == "1"); // true
let r9 = (null == 0); //false
let r10 = (null == undefined); //true
let r11 = (NaN == NaN); // false
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
transactionID = null;
couponCode = null;
console.log("Transaction ID  after transaction cancellation :", transactionID);
console.log("Coupon code after transaction cancellation :", couponCode);


// User Profile update
let username2 = username;
username = "Sakshi";
console.log("Previous Username :", username2);
console.log("Updated Username :", username);
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

let passengerName = "Roshan";
let ageOfPassenger = 22;
let ticketFare = 1250;
let platformCharge = "50" - String;
let discountMoney = 100;
let isPaymentCompleted = false;
let seatNo = undefined;
let bookingReference = undefined;
let identityNumber = 745634538475384435345n;

// Phase 1 — Booking Created

// Initial passenger information store karo aur print karo.
console.log("Passenger Name :", passengerName);
console.log("Passenger's Age :", ageOfPassenger);
console.log("Ticket fare :", ticketFare);
console.log("Platform Charge :", platformCharge);
console.log("Discount Amount :", discountMoney);
console.log("Payment Completion Status :", isPaymentCompleted);
console.log("Seat No :", seatNo);
console.log("Booking reference :", bookingReference);
console.log("Identity Number :", identityNumber);


// Phase 2 — Fare Calculation

// Final payable fare calculate karo using:

// Ticket fare
// Discount
// Platform charge
let payableCharge = ticketFare - 100 + platformCharge;
console.log("Payable Amount :", payableCharge);

// Phase 3 — Payment
// Payment successful hone ke baad:
// Payment status update karo.
// Seat number assign karo.
// Booking reference assign karo.
isPaymentCompleted = true;
seatNo = 435;
bookingReference = "A24";
console.log("Updated Payment Status :", isPaymentCompleted);
console.log("Updated Seat No :", seatNo);
console.log("Updated Booking Reference :", bookingReference);

// Phase 4 — Passenger Name Update

// Passenger ke naam ki primitive copy banao.
// Original passenger name change karo.
// Dono names print karke verify karo ki primitive copy independently preserve hui.
let passengerName2 = passengerName;
passengerName = "Rahul";
console.log("Older Passenger Name :", passengerName2);
console.log("New Passenger Name :", passengerName);

// Phase 5 — Cancellation

// Passenger ticket cancel karta hai.

// Appropriate values ko update/remove karo.
seatNo = null;
bookingReference = null;
identityNumber = null;
console.log("Seat no after Ticket Cancellation", seatNo);
console.log("Bookinng reference after Ticket cancellation :", bookingReference);
console.log("Updated Identity Number :", identityNumber);

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
let s1 = ticketFare + platformCharge;
console.log(s1); //NaN
console.log(typeof s1); //number

let s2 = ticketFare - platformCharge;
console.log(s2); // NaN
console.log(typeof s2); // number

let s3 = isPaymentCompleted + 100;
console.log(s3); //101
console.log(typeof s3);// number

let s4 = isPaymentCompleted - 100;
console.log(s4); //-99
console.log(typeof s4);// number 

let s5 = null + ticketFare;
console.log(s5); //1250
console.log(typeof s5); // Number


let s6 = undefined + ticketFare;
console.log(s6); // NaN
console.log(typeof s6); //number

let s7 = ("1250" == ticketFare);
console.log(s7); //true
console.log(typeof s7); //boolean

let s8 = (true == "1");
console.log(s8); //true
console.log(typeof s8); //boolean

let s9 = (null == undefined);
console.log(s9); // true
console.log(typeof s9);// boolean special case

let s10 = (NaN == NaN);
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
let customerName = "Roshan Chauhan";
let productName = "Smart Watch";
let productPrice = 2499;
let deliveryCh = "100" - String;
let discount = 250;
let couponDiscount = 250;
let isPaymentDone = false;
let refundStatus = undefined;
let orderID = undefined;
let returnReason = undefined;
// Phase 1 — Order Creation
// Saari initial information store aur print karo.
console.log("Customer Name :", customerName);
console.log("Product Name :", productName);
console.log("Delivery Charge :", deliveryCh);
console.log("Discount :", discount);
console.log("Coupon Discount :", couponDiscount);
console.log("Payment Status :", isPaymentDone);
console.log("Refund Status :", refundStatus);
console.log("Order ID :", orderID);
console.log("Return REason :", returnReason);


// Phase 2 — Payment

// Customer payment complete karta hai.
// Payment status update karo aur Order ID assign karo.
isPaymentDone = true;
orderID = 8457346857364534n;
console.log("Payment status after paying :", isPaymentDone);
console.log("Order ID After paying :", orderID);


// Phase 3 — Refund Calculation
// Return approve hone par refund amount calculate karo.
// Product price, discount aur delivery charge ko consider karo.
let refundAmount = (productPrice - discount) - deliveryCh;


// Phase 4 — Return
// Customer product return karta hai.
// Return status update karo aur appropriate values ko update/remove karo.
refundStatus = true;
returnReason = "Not appropriate product";
console.log("Refund Status after approval :", refundStatus);
console.log("refund Reason :", returnReason);


// Phase 5 — Primitive Copy
// Product name ki primitive copy banao.
// Original product name change karo.
// Dono values print karo.
let productName2 = productName;
productName = "Smart TV";
console.log("Previous Product :", productName2);
console.log("Current Product :", productName);

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
let m1 = productPrice + deliveryCh; // NaN number 
let m2 = productPrice - deliveryCh; // NaN number
let m3 = isPaymentDone + 500; //501 number
let m4 = isPaymentDone - "500"; //-499 number 
let m5 = refundStatus + 100; //101 number 
let m6 = refundStatus - 100; //-99 number 
let m7 = returnReason + 50; //string string
let m8 = returnReason - 50; //NaN number
let m9 = null + productPrice; //2499 number
let m10 = undefined + productPrice; //NaN number 
let m11 = ("2499" == productPrice); //true boolean
let m12 = (false == "0"); //true boolean
let m13 = (null == false); // false boolean (Special rule)
let m14 = (undefined == null); // true boolean (Special rule)
let m15 = (NaN == NaN); // false boolean (Special rule)

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
let cusName = "Roshan";
let balance = 50000;
let withdrawalAmount = "7500";
let atmFee = 20;
let isPinVerified = true;
let isAccountActive = true;
let transactionIdd = undefined;
let isReceiptAvailable = undefined;
let securityToken = Symbol("Security Token");
let customerAccNo = 58364587346587345n;
let istransactionCompleted = undefined;

// Phase 1 — ATM Session
// Saari information store karo aur print karo.
console.log("Customer Name :", cusName);
console.log("Account balance :", balance);
console.log("Withdrawal Amount :", withdrawalAmount);
console.log("ATM Fee :", atmFee);
console.log("Is Pin verified :", isPinVerified);
console.log("Is Account Active :", isAccountActive);
console.log("Transactional ID :", transactionID);
console.log("Is Receipt Available:", isReceiptAvailable);
console.log("Security Token :", securityToken);
console.log("Customer Account Number :", customerAccNo);


// Phase 2 — Withdrawal
// Withdrawal process karo.
// Account balance appropriately update karo.
balance = balance - withdrawalAmount;
console.log("Account balance after withrawal :", balance);


// Transaction successful hone par:

// Transaction status update karo
// Transaction ID assign karo
// Receipt availability update karo
istransactionCompleted = true
transactionIdd = 6857468573648573485n;
isReceiptAvailable = true;
console.log("Is Transaction Completed :", istransactionCompleted);
console.log("Transaction ID after withdrawal :", transactionIdd);
console.log("Is Receipt Available after withdrawal  :", isReceiptAvailable);


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
let a1 = (withdrawalAmount + atmFee); // 750020 string
let a2 = (withdrawalAmount - atmFee); // 7480 number 
let a3 = (isPinVerified + withdrawalAmount); // "true7500" string
let a4 = (isAccountActive - "1"); //0 number 
let a5 = (isReceiptAvailable + 100); // 101 number 
let a6 = (istransactionCompleted - 50); //-49 number 
let a7 = (null + withdrawalAmount); // "null7500" string
let a8 = (undefined + withdrawalAmount); //"undefined7500" string
let a9 = ("7500" == withdrawalAmount); // true boolean
let a10 = (true == withdrawalAmount); // false boolean
let a11 = (false == "0"); //true boolean
let a12 = (true == "true"); // false boolean 
let a13 = (null == 0); //false boolean (special rule)
let a14 = (undefined == 0); //false boolean
let a15 = (null == undefined); // true boolean (Special Case)
let a16 = (NaN == NaN); //false boolean (Special Case) 

console.log(a1);
console.log(typeof a1);
console.log(a2);
console.log(typeof a2);
console.log(a3);
console.log(typeof a3);
console.log(a4);
console.log(typeof a4);
console.log(a5);
console.log(typeof a5);
console.log(a6);
console.log(typeof a6);
console.log(a7);
console.log(typeof a7);
console.log(a8);
console.log(typeof a8);
console.log(a9);
console.log(typeof a9);
console.log(a10);
console.log(typeof a10);
console.log(a11);
console.log(typeof a11);
console.log(a12);
console.log(typeof a12);
console.log(a13);
console.log(typeof a13);
console.log(a14);
console.log(typeof a14);
console.log(a15);
console.log(typeof a15);
console.log(a16);
console.log(typeof a16);



// Phase 4 — Account Update

// Customer ke account name ki primitive copy banao.
// Original name change karo.
// Dono values print karo.
let cusName2 = cusName;
cusName = "Aman";
console.log("Previous Customer Name :", cusName2);
console.log("Current Customer Name :", cusName2);

// Phase 5 — Transaction Reversal

// Transaction reverse ho jati hai.
// Appropriate values ko update/remove karo.
let depostingAmount = "7500";
balance = balance + depostingAmount;
console.log("Account Balance After depositing money :", balance);

console.log("===================================================");
console.log("===================================================");


// FINAL MASTER TEST — Digital Banking System
// Tum ek Digital Banking & Wallet System bana rahe ho.

// Phase 1 — Account Creation

// Customer ki following information store karo:

// Customer name: "Roshan Chauhan"
// Account balance: 75000
// Monthly transaction limit: "50000" — deliberately String
// Account active hai
// KYC complete hai
// Account PIN verified nahi hua hai
// Transaction ID initially available nahi hai
// Last transaction initially available nahi hai
// Customer ka government identity number extremely large integer hai
// Ek internal security identifier bhi hai jo normally display nahi karna chahiye

let customerNamee = "Roshan Chauhan";
let accBalance = 75000;
let monthlyLimit = "50000";
let isAccountActivee = true;
let isKYCCompleted = true;
let isPinNoVerified = undefined;
let TranID = undefined;
let lastTransactionAmount = undefined;
let govIdentityNumber = 7534568375326958375368572657653825637n;
let internalSecurityNo = Symbol("Internal Security Number");



// Saari information console me print karo.
console.log("Customer Name :", customerNamee);
console.log("Account balance :", accBalance);
console.log("Monthly transaction limit :", monthlyLimit);
console.log("Account Active Status :", isAccountActivee);
console.log("Is KYC Completed :", isKYCCompleted);
console.log("Is Pin No Verified :", isPinNoVerified);
console.log("Transaction ID :", TranID);
console.log("Last Transaction info :", lastTransactionAmount);
console.log("Customer Identity Number :", govIdentityNumber);
console.log("Internal Security Number :", internalSecurityNo);

// Phase 2 — Transaction Processing

// Customer "12500" ka transaction karta hai.

// System ko:

// transaction amount store karna hai
// balance update karna hai
// transaction successful/unsuccessful status maintain karna hai
// transaction ID generate karni hai
// last transaction amount store karna hai
let withdrawingAmount = "12500";
accBalance = accBalance - withdrawingAmount;
let istransactionDone = true;
TranID = 684574857345343n;
lastTransactionAmount = withdrawingAmount;

console.log("Withdrawal Amount :", withdrawingAmount);
console.log("Updated Account Balance :", accBalance);
console.log("Transaction Status :", istransactionDone);
console.log("Transaction Id after withdrawal :", TranID);
console.log("Last Transaction Amount :", lastTransactionAmount);


// Dhyan: Transaction amount aur monthly limit ke datatypes tumhe scenario se identify karne hain.

// Phase 3 — Profile Update + Primitive Copy
// Customer ke naam ki ek copy banao.
// Phir original customer name ko:
// "Aman Chauhan"
// kar do.
let newCustomerNamee = customerNamee;
customerNamee = "Aman Chauhan";

// Ab:
// copied name
// current name
// dono print karo.
console.log("Copied Name :", newCustomerNamee);
console.log("Current Name :", customerNamee);

// Phir copied name ki .length aur current name ki .length bhi print karo.
console.log(`Length of Copied Name is ${customerNamee.length} `);
console.log(`Length of Current Name is ${newCustomerNamee.length} `);


// Phase 4 — Nested Banking Operations
// Ek outer function banao:
// bankingSystem()
// Uske andar:

// Function 1 — transactionDesk()
// Is function me ek local variable banao:
// transactionFee
// Aur transaction amount ke saath calculation karo.

// Function 2 — securityDesk()
// Iske andar:
// ek variable securityLevel
// ek variable isVerified
// banao.
// Phir outer function ka variable, transactionDesk ka variable, aur securityDesk ka variable access karne ki koshish karo.
// Jo variables accessible hain unhe use karo.
// Jo inaccessible hain unhe directly use karne ki koshish mat karna—instead code structure 
// se demonstrate karo ki tum scope samajhte ho.
function bankingSystem() {

    function transactionDesk() {
        let transactionFee = 18; // in rupees.
        let finalWithdrawal = withdrawingAmount - transactionFee; //number 
        console.log("Transaction Fee :", transactionFee) // accessing transactionFee within same block as it cant be accessed 
        // in secuirtyDesk() which is a out of the block.
    }

    function securityDesk() {
        let securityLevel="Tough";
        let isVerifiedd=true;

        console.log("Customer Name :", customerNamee); // trying to access global variable 
        //console.log("Transaction Fee :", transactionFee); // trying to access variable of transactionDesk() function. as this
        // cant be accessed here because let is a block scope so we cant access transactionFee variable out of the transactionDesk() 
        // block..cuz every function is a block only, so will access that variable within the same block
        console.log("Is Transaction Verified :",isVerifiedd); // trying to access variable of securityDesk() function.

    }

    transactionDesk();
    securityDesk();

}
bankingSystem();


// Phase 5 — Block Scope Trap 🔥

// Kisi suitable function ke andar ek block create karo:
// {
//     // variables
// }

// Us block ke andar:

// ek let
// ek const
// ek var

// declare karo.

// Block ke andar aur bahar unki accessibility test karo.
function blockTrap(){

    {
        let cash=6473;
        const bankName="Union Bank Of India";
        var cashCounter=4;
        
        console.log("Cash :",cash);
        console.log("Bank Name :",bankName);
        console.log("Cash Counter :",cashCounter);
    }

        // console.log("Cash :",cash); // cant be accesed out of the block
        // console.log("Bank Name :",bankName); // can be accesed out of the block but not outside the function
        console.log("Cash Counter :",cashCounter); // var can be accesed out of the block

}
blockTrap();

// Phase 6 — Shadowing Trap 🔥🔥

// Ek outer variable:
// accountStatus
// rakho.
// Nested scope ke andar same name ka variable declare karo.
// Phir inner aur outer dono values print karo.
{

    let accountStatuss="Outer account Status is Active";

        {
            let accountStatuss="Nested account Status is Active";
            console.log("Inner block Account Status Value :",accountStatuss); // accesible here as it follows within block scope.
        }
    console.log("Outer block Account Status Value :",accountStatuss);// accessible here but the outer accountStatus due to block scope behaviour.
}
// Purpose:
// Prove that you understand shadowing, not copying.


// Phase 7 — Type Conversion Laboratory 🧪

// Exactly ye expressions test karo:

// transactionAmount + monthlyLimit
// transactionAmount - monthlyLimit
// transactionAmount + 500
// transactionAmount - "500"
// true + transactionAmount
// false - "100"
// null + transactionAmount
// undefined + transactionAmount
// "12500" == transactionAmount
// "12500" === transactionAmount
// true == "1"
// true === "1"
// false == "0"
// false === "0"
// null == 0
// null === 0
// undefined == null
// undefined === null
// NaN == NaN
// NaN === NaN
// Infinity + 100
// Infinity - "500"
// "Bank" - 10
// "Bank" + 10
// Har expression ka:

let w1=withdrawingAmount+monthlyLimit; //string
let w2=withdrawingAmount-monthlyLimit; //number
let w3=withdrawingAmount+500; // string
let w4=withdrawingAmount+"500"; //string
let w5=true+withdrawingAmount; //"true12500" STRIGN
let w6=false-"100"; // -100 number
let w7=null+withdrawingAmount; // "null12500" string
let w8=undefined+withdrawingAmount; // "undefined12500" string
let w9=("12500"==withdrawingAmount); // true boolean
let w10=("12500"===withdrawingAmount); // true boolean
let w11=(true=="1"); //true boolean
let w12=(true==="1"); //false boolean
let w13=(false=="0"); // true boolean
let w14=(false==="0"); // false boolean 
let w15=(null==0); // false boolean special rule
let w16=(null===0); // false boolean
let w17=(undefined==null); //true special rule boolean
let w18=(undefined===null); // false boolean
let w19=(NaN==NaN); // false soecial rule
let w20=(NaN===NaN); //false boolean
let w21=(Infinity+100); // infinity Number
let w22=(Infinity-"500"); //infinity number 
let w23=("Bank"-10); // NaN number 
let w24=("Bank"+10); // Bank10 string

console.log(w1);
console.log(typeof w1);
console.log(w2);
console.log(typeof w2);
console.log(w13);
console.log(typeof w3);
console.log(w4);
console.log(typeof w4);
console.log(w5);
console.log(typeof w5);
console.log(w6);
console.log(typeof w6);
console.log(w7);
console.log(typeof w7);
console.log(w8);
console.log(typeof w8);
console.log(w9);
console.log(typeof w9);
console.log(w10);
console.log(typeof w10);
console.log(w11);
console.log(typeof w11);
console.log(w12);
console.log(typeof w12);
console.log(w13);
console.log(typeof w13);
console.log(w14);
console.log(typeof w14);
console.log(w15);
console.log(typeof w15);
console.log(w16);
console.log(typeof w16);
console.log(w17);
console.log(typeof w17);
console.log(w18);
console.log(typeof w18);
console.log(w19);
console.log(typeof w19);
console.log(w20);
console.log(typeof w20);
console.log(w21);
console.log(typeof w21);
console.log(w22);
console.log(typeof w22);
console.log(w23);
console.log(typeof w23);
console.log(w24);
console.log(typeof w24);
// result
// typeof result

// print karo.

// No Number(), String(), Boolean() allowed.

// Phase 8 — Truthy/Falsy Trap 🔥

// System me kuch values rakho:

// empty string
// "0"
// 0
// null
// undefined
// NaN
// "false"
// false
// 100

// Har value ko ek if condition me test karo.

// Output should indicate whether JavaScript treats it as truthy or falsy.

// Remember: yahan tumhe Number conversion nahi karni hai.
console.log("------------------------------");
let k1="";
let k2="0";
let k3=0;
let k4=null;
let k5=undefined;
let k6=NaN;
let k7="false";
let k8=false;
let k9=100;

if(k1){
    console.log("Falsy Value");
}
if(k2){
    console.log("Truthy Value");
}
if(k3){
    console.log("Falsyy hai ");
}
if(k4){
    console.log("Falsy haiiii");
}
if(k5){
    console.log("Falsy haiii");
}
if(k6){
    console.log("Falsyy hai");
}
if(k7){
    console.log("Truthy Valueeee");
}
if(k8){
    console.log("Falsyyyy Valueee");
}
if(k9){
    console.log("Trueeee haii!!!!!!");
}

// Phase 9 — Special Number Behaviour
// Ye values/operations test karo:
// 10 / 0
// -10 / 0
// 0 / 0
// Infinity + 100
// Infinity - Infinity
// NaN + 50
// NaN === NaN
console.log("--------------------------------")
let w25=10/0; // infintiy number 
let w26=-10/0;// -Infinity number
let w27=0/0; // NaN number (important)
let w28=Infinity+100; //inifnty number
let w29=Infinity-Infinity; //NaN number 
let w30=NaN+50; //NaN number
let w31=NaN===NaN; //false boolean

console.log(w25);
console.log(typeof w25);
console.log(w26);
console.log(typeof w26);
console.log(w27);
console.log(typeof w27);
console.log(w28);
console.log(typeof w28);
console.log(w29);
console.log(typeof w29);
console.log(w30);
console.log(typeof w30);
console.log(w31);
console.log(typeof w31);
// Har result ka typeof bhi print karo.

// Phase 10 — BigInt + Symbol Trap ☠️

// Tumhare system me:

// BigInt government ID
// Symbol security key

// already present hain.

// Ab test karo:

// BigInt + BigInt
// BigInt + Number
// BigInt == Number
// BigInt === Number
// Symbol == Symbol
// Symbol === Symbol

// Jo operations JavaScript allow nahi karta unhe blindly execute 
// karke pura program crash mat karna. Pehle determine karo kaunse expressions safely test kiye ja sakte hain.
console.log("-------------------")
// let w32=govIdentityNumber+govIdentityNumber; // cannot mix bigint and other datatypes
// let w33=govIdentityNumber+234632; // cannot mix bigint and other datatypes 
let w34=(govIdentityNumber==3236423); // false boolean
let w35=(govIdentityNumber===44534534534);// false boolean
let w36=(securityKey==Symbol("secutiy key 3")); // false (every id is unique ) boolean
let w37=(securityKey===Symbol("new key ")); //false boolean

// console.log(w32);
// console.log(w33);
console.log(w34);
console.log(w35);
console.log(w36);
console.log(w37);
console.log('--------------------------');

// Phase 11 — Account Closure

// Customer account close karta hai.

// Ab decide karo:

// account active status
// transaction ID
// last transaction
// security-related temporary value
// monthly limit

// me se kis value ko null karna appropriate hai aur kis value ko undefined rakhna appropriate hai.

// Reasoning tumhe khud decide karni hai.
isAccountActivee=null;
govIdentityNumber=null;
securityKey=null;
console.log("Account Status after deactivation :",isAccountActivee);
console.log("Customer Identity Number :",govIdentityNumber);
console.log("Security KEy after deactivation :",securityKey);

// Phase 12 — Final Interview Trap 🔥🔥🔥

// Code ke end me without executing first, comments me apni prediction likho:

// console.log("A:", ...);
// console.log("B:", ...);
// console.log("C:", ...);
// console.log("D:", ...);
// console.log("E:", ...);
// console.log("F:", ...);
// console.log("G:", ...);
// console.log("H:", ...);
// console.log("I:", ...);
// console.log("J:", ...);

// In 10 expressions ko tum khud select karo from your code.

// Condition:

// Kam se kam:

// 2 coercion
// 2 scope
// 1 primitive-copy
// 1 truthy/falsy
// 1 ==/===
// 1 special-number
// 1 BigInt/Symbol

// console.log(w1); //string
// console.log(w2); //number 
// console.log("Cash :",cash); cant acess as cash is a block scope only
// console.log("Bank Name :",bankName); //cant access as bankName is also a block scope
// console.log("Copied Name :", newCustomerNamee); //print hoga cuz ye global scope ka variable hai so universal accessible haia yaha
// let h="00000";
// if(h){
//     console.log("Truthy value"); // execute hoga true hai
// }
// console.log(w28); //Infinty Number
// console.log(w29); //NaN number
// console.log(w34); ///false boolean
// console.log(w35); //false boolean cant convert
// console.log(w36); false ..every unique Id is different
// console.log(w37); false ..


// hona chahiye.


// 🚨 Rules

// Allowed:

// let
// const
// var
// primitive datatypes
// functions
// nested functions
// blocks
// operators
// typeof
// .length
// console.log()

// Not allowed:

// arrays
// objects
// classes
// arrow functions
// Number()
// String()
// Boolean()
// ternary operator
// loops
// try...catch
// Interview rule

// Google/AI se output mat puchna.

// Pehle khud:

// Code → Predict → Run → Compare → Debug

// karna.

// Ye complete karne ke baad main tumhe score + concept-wise breakdown dunga:

// Variables / Scope / Shadowing / Primitive / String / Number / Boolean / Undefined / Null / Symbol / BigInt / Type Conversion / Coercion / Truthy-Falsy / == / === / NaN / Infinity

// Aur uske basis par bataunga ki JavaScript ka next topic start karne ke liye tum actually ready ho ya nahi.




















