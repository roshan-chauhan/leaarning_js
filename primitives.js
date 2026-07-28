// Question 6

// Ek college admission system.

// Student Name

// Course

// Fees

// Admission Confirmed

// Roll Number

// Timeline follow karo.
let name="Roshan";
const course="BSC IT";
let fees=54625;
let isConfirmed=true;
console.log("Name of student :",name);
console.log("Fees :",fees);
console.log("Admission :",isConfirmed);
// After Admission
let rollNo=7;
let followTime=true;
console.log("Roll No :",rollNo);
console.log("Following time :",followTime);
console.log("=============");

// Question 7

// Ek bank account system.

// Account Holder

// Balance

// KYC Status

// Account Number

// Timeline follow karo.
let accHolder="Roshan";
let balance=49000;
let isKYC=true;
let accNumber=108297293482436;
console.log("AccHolder Name :",accHolder);
console.log("Balance left :",balance);
console.log("KYC confirmed :",isKYC);
console.log("Account Number :",accNumber);
console.log("------------------------")

// Story
// Ek user Netflix account banata hai.

// Initially account create hota hai.
// Email verify nahi hui.
// Subscription plan choose hota hai.
// Payment successful hota hai.
// Membership ID baad me assign hoti hai.
// User subscription cancel karta hai.
// Membership ID intentionally remove hoti hai.
// Requirements
// Sab phases print karo.
// Har important variable ka typeof bhi print karo.
// undefined aur null dono ka proper use karo.
let isCreated=true;
let emailVerified=false;
let subscription=true;
let isSuccessful=true;
let memberID=undefined;
console.log("Account Created :",isCreated);
console.log("Email Verified :",emailVerified);
console.log("subscription :",subscription);
console.log("isSuccessful :",isSuccessful);

// After subscription cancellation.
subscription=false;
memberID=null;
console.log("Subcription Status :",subscription);
console.log(memberID);
console.log("-------------------------")

// Project 2 – Flight Ticket Booking
// Story
// Ek passenger flight book karta hai.

// Passenger details.
// Ticket price.
// Seat initially assign nahi hui.
// Payment successful.
// Seat assign hoti hai.
// Flight cancel hoti hai.
// Seat remove hoti hai.

// ⚠️ Bonus
// Ticket price me
// 0.1 + 0.2
let passengerName="Roshan";
let passengerAge=22;
let ticketPrice=3500;
let foodTax=0.5;
let classTax=0.4;
let totalTax=foodTax+classTax;
let seatNo=undefined;
let paymentSuccessful=true;
console.log("Passenger name :",passengerName);
console.log("Passenger Age :",passengerAge);
console.log("Ticket Price :",ticketPrice);;
console.log("Total tax fee :",totalTax);
console.log("Seat NO :",seatNo);
console.log("Payment Status :",paymentSuccessful);

// After payment successful
seatNo=432;
console.log("Seat NO :",seatNo);
// After flight cancelled.
seatNo=null;
console.log("Seat No :",seatNo);
console.log("------------------");





// Project 3 – University Admission Portal
// Story

// Student admission leta hai.

// Requirements:

// Student information
// Fees
// Admission status
// Roll number
// Library card
// Student ID (BigInt)
// Graduation ke baad kuch values remove karo.
let studentName="Roshan";
let studentFee=54625;
let admissionStatus=true;
let studentRollNo=311;
let cardAvailable=true;
let studentID=6345349583458345n;
console.log("Student Name :",studentName);
console.log("Student's fee :",studentFee);
console.log("Admission Status :",admissionStatus);
console.log("Student's Roll NO :",studentRollNo);
console.log("Library Card Avialable :",cardAvailable);
console.log("Student ID :",studentID);


// After graduation
admissionStatus=false;
studentRollNo=null;
cardAvailable=false;
studentID=null;
console.log("Admission Status :",admissionStatus);
console.log("Student's Roll NO :",studentRollNo);
console.log("Library Card Avialable :",cardAvailable);
console.log("Student ID :",studentID);
console.log("___----------------------");


// Project 4 – Bank Locker System
// Story
// Customer bank me locker leta hai.

// Requirements:

// Customer Name
// Locker Number
// Locker Active Status
// Locker Rent
// Unique Security Key (Symbol)
// Locker initially active hai.
// Baad me customer locker close karta hai.
// Locker Active = false
// Locker Number intentionally remove karo.
// Security Key bhi remove karo.

// Note: Is project ka main purpose Symbol ka real-world use hai.
// Solve karke bhejo. Main sirf requirement-based review karunga. No assumptions. 💯
let customerName="Roshan";
let lockerNO=434323;
let isLockerActive=true;
let lockerRent=1000;
let SecurityKey=Symbol('locker key');
console.log("Customer Name :",customerName);
console.log("Locker NO :",lockerNO);
console.log("Locker Active Status :",isLockerActive);
console.log("Locker Rent :",lockerRent);
console.log("Security Key :",SecurityKey);


// After closing the locker
isLockerActive=false;
lockerNO=null;
SecurityKey=null;
console.log("Locker Active Status :",isLockerActive);
console.log("Locker NO :",lockerNO);
console.log("Security Key :",SecurityKey);
console.log("-----------------")


// ### **Project 5 – Online Examination System**
// ### Story
// Ek student online exam de raha hai.

// ### Requirements

// * Student Name
// * Subject Name
// * Marks
// * Pass Status (Boolean)
// * Hall Ticket Number
// * Seat Number
// * Exam ID (**Symbol**)

// ### After Exam

// * Print the **first character** of the student's name.
// * Print the **last character** of the student's name.
// * Print the **length** of the student's name.

// ### Primitive Copy

// * Student name ki copy banao.
// * Original student name change karo.
// * Print **original** aur **copied** dono values.

// ### After Result Declaration

// * Pass Status update ho sakta hai.
// * Seat Number intentionally remove karo.
// * Hall Ticket Number intentionally remove karo.

// ⚠️ **Rules:**

// * Use only the concepts we've learned so far.
// * No functions.
// * No loops.
// * No objects/arrays.
// * Keep it clean and readable.

// Solve it and send me the code. I'll review it in the short format we agreed on. 💪
let stuName="Roshan";
let subjectName="Science";
let marks=undefined;
let isPass=undefined;
let hallTicketNumber="A295536";
let seat=64;
let examID=Symbol('Exam id');
console.log("Student Name :",stuName);
console.log("Subject Name :",subjectName);
console.log("Marks :",marks);
console.log("Pass status :",isPass);
console.log("Hall Ticket Number :",hallTicketNumber);
console.log("Seat NO :",seat);
console.log("Exam ID :",examID);

// After exam 
console.log(stuName[0]);
console.log(stuName[stuName.length-1]);
console.log(stuName.length);
// Primitive copy
let stuName2=stuName;
stuName="Rishabh";
console.log("Original student name :",stuName);
console.log("Copied student name :",stuName2);
// After Result declaration
isPass=true;
seat=null;
hallTicketNumber=null;
marks=87;
console.log("Pass status :",isPass);
console.log("Seat NO :",seat);
console.log("Hall Ticket Number :",hallTicketNumber);
console.log("Marks :",marks);


















