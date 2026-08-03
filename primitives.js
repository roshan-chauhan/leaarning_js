// Question 6

// Ek college admission system.

// Student Name

// Course

// Fees

// Admission Confirmed

// Roll Number

// Timeline follow karo.
let name = "Roshan";
const course = "BSC IT";
let fees = 54625;
let isConfirmed = true;
console.log("Name of student :", name);
console.log("Fees :", fees);
console.log("Admission :", isConfirmed);
// After Admission
let rollNo = 7;
let followTime = true;
console.log("Roll No :", rollNo);
console.log("Following time :", followTime);
console.log("=============");

// Question 7

// Ek bank account system.

// Account Holder

// Balance

// KYC Status

// Account Number

// Timeline follow karo.
let accHolder = "Roshan";
let balance = 49000;
let isKYC = true;
let accNumber = 108297293482436;
console.log("AccHolder Name :", accHolder);
console.log("Balance left :", balance);
console.log("KYC confirmed :", isKYC);
console.log("Account Number :", accNumber);
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
let isCreated = true;
let emailVerified = false;
let subscription = true;
let isSuccessful = true;
let memberID = undefined;
console.log("Account Created :", isCreated);
console.log("Email Verified :", emailVerified);
console.log("subscription :", subscription);
console.log("isSuccessful :", isSuccessful);

// After subscription cancellation.
subscription = false;
memberID = null;
console.log("Subcription Status :", subscription);
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
let passengerName = "Roshan";
let passengerAge = 22;
let ticketPrice = 3500;
let foodTax = 0.5;
let classTax = 0.4;
let totalTax = foodTax + classTax;
let seatNo = undefined;
let paymentSuccessful = true;
console.log("Passenger name :", passengerName);
console.log("Passenger Age :", passengerAge);
console.log("Ticket Price :", ticketPrice);;
console.log("Total tax fee :", totalTax);
console.log("Seat NO :", seatNo);
console.log("Payment Status :", paymentSuccessful);

// After payment successful
seatNo = 432;
console.log("Seat NO :", seatNo);
// After flight cancelled.
seatNo = null;
console.log("Seat No :", seatNo);
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
let studentName = "Roshan";
let studentFee = 54625;
let admissionStatus = true;
let studentRollNo = 311;
let cardAvailable = true;
let studentID = 6345349583458345n;
console.log("Student Name :", studentName);
console.log("Student's fee :", studentFee);
console.log("Admission Status :", admissionStatus);
console.log("Student's Roll NO :", studentRollNo);
console.log("Library Card Avialable :", cardAvailable);
console.log("Student ID :", studentID);


// After graduation
admissionStatus = false;
studentRollNo = null;
cardAvailable = false;
studentID = null;
console.log("Admission Status :", admissionStatus);
console.log("Student's Roll NO :", studentRollNo);
console.log("Library Card Avialable :", cardAvailable);
console.log("Student ID :", studentID);
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
let customerName = "Roshan";
let lockerNO = 434323;
let isLockerActive = true;
let lockerRent = 1000;
let SecurityKey = Symbol('locker key');
console.log("Customer Name :", customerName);
console.log("Locker NO :", lockerNO);
console.log("Locker Active Status :", isLockerActive);
console.log("Locker Rent :", lockerRent);
console.log("Security Key :", SecurityKey);


// After closing the locker
isLockerActive = false;
lockerNO = null;
SecurityKey = null;
console.log("Locker Active Status :", isLockerActive);
console.log("Locker NO :", lockerNO);
console.log("Security Key :", SecurityKey);
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
let stuName = "Roshan";
let subjectName = "Science";
let marks = undefined;
let isPass = undefined;
let hallTicketNumber = "A295536";
let seat = 64;
let examID = Symbol('Exam id');
console.log("Student Name :", stuName);
console.log("Subject Name :", subjectName);
console.log("Marks :", marks);
console.log("Pass status :", isPass);
console.log("Hall Ticket Number :", hallTicketNumber);
console.log("Seat NO :", seat);
console.log("Exam ID :", examID);

// After exam 
console.log(stuName[0]);
console.log(stuName[stuName.length - 1]);
console.log(stuName.length);
// Primitive copy
let stuName2 = stuName;
stuName = "Rishabh";
console.log("Original student name :", stuName);
console.log("Copied student name :", stuName2);
// After Result declaration
isPass = true;
seat = null;
hallTicketNumber = null;
marks = 87;
console.log("Pass status :", isPass);
console.log("Seat NO :", seat);
console.log("Hall Ticket Number :", hallTicketNumber);
console.log("Marks :", marks);
console.log("-------------------")

// Project 8 – Digital Wallet System
// Story
// Ek user ek digital wallet account banata hai.

// Phase 1 – Account Created
// Store and print:

// User Name
// Wallet ID
// Wallet Balance
// Cashback Percentage
// Mobile Number
// KYC Status
// Wallet Status
// Referral Code (abhi generate nahi hua)
// Internal Wallet Key
// Government Identity Number

// Phase 2 – First Recharge
// User ₹500 recharge karta hai.
// Wallet balance update karo.
// Cashback add karo.
// Referral Code generate hota hai.
// Print sirf updated values.

// Phase 3 – Offer Day
// Ab system kuch calculations karta hai.
// Perform and print:
// Balance + "100"
// Balance - "100"
// "500" + "50"
// "500" - "50"
// "Hello" - 10
// 0.1 + 0.2

// Har output ke baad uska typeof bhi print karo.

// Phase 4 – Profile Update
// User apna naam change karta hai.
// Purana naam lose nahi hona chahiye.
// Dono names print karo.

// Phase 5 – Wallet Closed
// Update the system so that:
// Wallet inactive ho jaye.
// Referral Code intentionally remove ho.
// Internal Wallet Key intentionally remove ho.

// Print final updated values.

// ⚠️ Rules
// No functions
// No loops
// No objects
// No arrays
// No if
// Sirf primitives
// Main datatype nahi bataunga.
// Har variable ka naam production-quality hona chahiye.
let username = "roshanchauhan_67";
let walletID = Symbol("Wallet ID");
let walletBalance = 45000;
let cashbackPercent = 10;
let mobileNo = 9137455408;
let kycStatus = true;
let walletActiveStatus = true;
let referalCode = undefined;
let walletKey = Symbol("Internal Wallet Key");
const govIdentityNo = 734568347563847563847563457n;
console.log("Username :", username);
console.log("Wallet ID :", walletID);
console.log("Wallet Balance :", walletBalance);
console.log("Cashback Percentage :", cashbackPercent);
console.log("Contact No :", mobileNo);
console.log("KYC Status :", kycStatus);
console.log("Wallet ACtive Status :", walletActiveStatus);
console.log("Wallet Key :", walletKey);
console.log("GOV> Identity Number :", govIdentityNo);

// user recharged 500rupee to the wallet .update the wallet.
let recharge = 500;
walletBalance += recharge;
let cashback = 15; //in rupees
referalCode = "ShareitRoshan";
console.log("Recharge Amount :", recharge);
console.log("Wallet Updated Balance :", walletBalance);
console.log("Cashback Amount :", cashback);
console.log("Referal Code :", referalCode);

// Perform some operations
walletBalance += "100";
console.log("Adding 100 to wallet :", walletBalance);
console.log(typeof walletBalance);

walletBalance -= "100";
console.log("Subtracting 100 from wallet :", walletBalance);
console.log(typeof walletBalance);

let s = "500";
let t = "50";
let result1 = s + t;
console.log(result1);
console.log(typeof result1);


let result2 = s - t;
console.log(result2)
console.log
    (typeof result2);

let result3 = "Hello" - 10;
console.log(result3);
console.log(typeof result3);

let result4 = 0.1 + 0.2;
console.log(result4);
console.log(typeof result4);

// Profile Update
let username2 = username;
username = "roshan_67";
console.log("Old username :", username2);
console.log("New username :", username);

// Wallet closed;
walletActiveStatus = false;
referalCode = null;
walletKey = null;
console.log("Wallet Active Status after wallet closed :", walletActiveStatus);
console.log("Referal Code after closing wallet :", referalCode);
console.log("Wallet key after wallet closed :", walletKey);
console.log("_-----------------------");




// 🚀 Project 9 – Smart Parking Management System

// A smart city has an automated parking system.

// Phase 1 – Vehicle Entry

// Store all required information for a newly entered vehicle.

// The system should know:

// Owner's name
// Vehicle number
// Vehicle type
// Entry fee
// Discount percentage
// Total amount to be paid
// Parking slot (not assigned yet)
// Whether payment is completed
// Whether the vehicle is currently inside the parking
// Parking pass
// Internal gate authentication
// Central registration number

// Print all details.

// Phase 2 – Payment Completed
// After payment:
// Parking slot gets assigned.
// Parking pass gets generated.
// Print only the values that changed.

// Phase 3 – System Diagnostics
// Without changing the original variables, print the result and typeof of each:
// Total amount + "500"
// Total amount - "500"
// "250" + 50
// "250" - 50
// "Parking" - 10
// 0.2 + 0.4
// 0.1 + 0.7
// Infinity + 100
// NaN + 50

// Phase 4 – Owner Information Update
// The owner legally changes their name.
// Preserve the old name.
// Update the current name.
// Print both.

// Phase 5 – Vehicle Exit
// The vehicle leaves the parking.
// Update the system so that:
// Vehicle is no longer inside.
// Parking slot is intentionally removed.
// Parking pass is intentionally removed.
// Internal gate authentication is intentionally removed.
// Print only the final updated values.
let owner = "Roshan Chauhan";
let vehicleNo = 45678;
let vehicleType = "4 wheeler";
let entryFee = 300;
let discountPercentage = 10;
let discountValue = (entryFee * discountPercentage) / 100;
let totalAmount = entryFee - discountValue;
let parkingSlot = undefined;
let isPaymentCompleted = true;
let insideParking = true;
let isParkingPassAvail = undefined;
let gateAuthentication = true;
let regiNumber = 643245237423742n;

console.log("Owner's Name :", owner);
console.log("Vehicle Number :", vehicleNo);
console.log("Vehicle Type :", vehicleType);
console.log("Entry Fee :", entryFee);
console.log("Discount Percentage :", discountPercentage);
console.log("Discount value :", discountValue);
console.log("Total Amount to be paid :", totalAmount);
console.log("Parking slot assigned :", parkingSlot);
console.log("Is payment completed :", isPaymentCompleted);
console.log("Is vehicle is inside parking :", insideParking);
console.log("Is Parking Pass Available :", isParkingPassAvail);
console.log("Internal gate allowance :", gateAuthentication);
console.log("Resitration Number :", regiNumber);

// Phase 2 – Payment Completed
console.log("After Payment Completed : ");
parkingSlot = true;
isParkingPassAvail = true;
console.log("Parking slot assigned :", parkingSlot);
console.log("Is Parking Pass Available :", isParkingPassAvail);


console.log("Performing System Diagnostics :")
// Phase 3 – System Diagnostics
let result5 = totalAmount + "500";
console.log(result5);
console.log(typeof result5);

let result6 = totalAmount - "500";
console.log(result6);
console.log(typeof result6);

let result7 = "250" + 50;
console.log(result7);
console.log(typeof result7);

let result8 = "250" - 50;
console.log(result8);
console.log(typeof result8);

let result9 = "Parking" - 10;
console.log(result9);
console.log(typeof result9);

let result10 = 0.2 + 0.4;
console.log(result10);
console.log(typeof result10);

let result11 = 0.1 + 0.7;
console.log(result11);
console.log(typeof result11);

let result12 = Infinity + 10
console.log(result12);
console.log(typeof result12);

let result13 = NaN + 50;
console.log(result13);
console.log(typeof result13);

// Phase 4 – Owner Information Update
console.log("After Updating Owner's Information :");
let owner2 = owner;
owner = "Rahul Chauhan";
console.log(" Previous Owner's Name :", owner2);
console.log(" Current Owner's Name :", owner);


console.log("After Vehicle exits :");
// Phase 5-Vehicle exit
insideParking = false;
parkingSlot = null;
isParkingPassAvail = null;
gateAuthentication = null;
console.log("Is vehicle is inside parking :", insideParking);
console.log("Parking slot assigned :", parkingSlot);
console.log("Is Parking Pass Available :", isParkingPassAvail);
console.log("Internal gate allowance :", gateAuthentication);
console.log("------------------------")

// FINAL PROJECT – Hospital Emergency Management System (Interview Edition)
// Difficulty: 11/10
// No hints. No datatype names. No guidance. Think like a software engineer.

// Story

// A hospital emergency system is built to manage a patient's complete journey—from admission to discharge.

// Your task is to implement the system using only the concepts you've learned so far.

// Requirements

// Create a function named:
// hospitalSystem()
// Inside the function, maintain the complete hospital workflow.

// Phase 1 – Admission

// Store everything required for a newly admitted patient.

// Print all initial information.

// Phase 2 – Emergency Room

// Create a nested block that represents the emergency room.

// Inside this block:

// Some new information becomes available.
// Some old information is updated.
// Perform calculations related to the bill.
// Print only the values relevant to this phase.

// Phase 3 – Doctor Cabin

// Inside the hospital function, create another nested function.

// This function represents the doctor's cabin.

// Inside it:

// Access data from the hospital.
// Access data created inside the doctor cabin.
// Update some patient information.
// Preserve at least one old primitive value before updating it.
// Print both values.

// Phase 4 – Billing Desk
// Inside the doctor's cabin, create another nested block.
// Without changing the original bill variable, perform different operations on it.

// Include operations that produce:

// Normal numeric result
// String result
// Failed numeric result
// Decimal precision behavior
// Special numeric behavior

// Print every result with its datatype.

// Phase 5 – Scope Challenge

// Without commenting code,

// demonstrate through execution:

// A variable accessible inside every nested scope.
// A variable accessible only inside one function.
// A variable accessible only inside one block.

// Structure your program so that the output itself proves the scope rules.

// Phase 6 – Discharge

// Update the patient's state to represent discharge.

// Some information should continue to exist.

// Some information should intentionally disappear.

// Print only the final patient status.

// Final Output

// At the end of the program, prove that:

// Primitive copying works.
// String indexing works.
// .length works.
// State changes happened correctly.
// Scope behaved correctly.
// All outputs are meaningful.
// Rules
// No objects.
// No arrays.
// No loops.
// No if.
// No switch.
// No ternary.
// Use only concepts completed so far.
// Write clean, interview-quality code.
// Choose datatypes yourself.
// Variable names should look production-ready.
function hospitalSystem() {
    let patientName = "Roshan Chauhan";
    let pateintAge = 22;
    let dateOfAdmission = "03-08-2026";
    let patientStatus = "Critical";
    let admissionFee = 6000;
    let previousReportAvailable = true;
    let majorSympton = "Chest pain";
    let isPaymentDone = true;
    let assignRoomNo = undefined;
    let patientID = 53453457645873645n;
    let bodyTemperature = "103 degree celcius";
    let hisConsultantName = "DR. SUdhir Nair";
    let privateNurseAvailable = undefined;

    console.log("Patient Name", patientName);
    console.log("Patient Age :", pateintAge);
    console.log("Date of Admission :", dateOfAdmission);
    console.log("Patient Health Status :", patientStatus);
    console.log("Admission Fee :", admissionFee);
    console.log("Previous health Report Avialable :", previousReportAvailable);
    console.log("Major Sympton", majorSympton);
    console.log("Is PAyment Completed :", isPaymentDone);
    console.log("Assigned Room NO :", assignRoomNo);
    console.log("Patient ID :", patientID);
    console.log("Current Body temperature :", bodyTemperature);
    console.log("Doctor Name :", hisConsultantName);
    console.log("Is private Nurse Available :", privateNurseAvailable);


    function EmergencyRoom() {
        assignRoomNo = "402";
        privateNurseAvailable = true;
        let emergencyRoomCharge = 3000; // per day
        let discountPercentPerDay = 10;
        let discountAmount = (emergencyRoomCharge * discountPercentPerDay) / 100;
        let billPerDay = emergencyRoomCharge - discountAmount;
        let privateBedAssigned = true;

        console.log("Assigned Room NO :", assignRoomNo);
        console.log("Is private Nurse Available :", privateNurseAvailable);
        console.log("Emergency Room charge Per day :", emergencyRoomCharge);
        console.log("Discount Percent for room per day :", discountPercentPerDay);
        console.log("Discount Amount ", discountAmount);
        console.log("Final bill generated per day :", billPerDay); // only accessible inside one block
        console.log("Is private Bed assigned :", privateBedAssigned);

        // A variable accessible inside every nested scope.
        console.log("Patient Name", patientName);

    }

    function DoctorCabin() {
        let bloodPressure = "Too low";
        let checkupStatus = true;
        let assignedMedicine = true;
        let bodyTemperature2 = bodyTemperature;
        bodyTemperature = "105 degree celcius";


        console.log("Patient's Health Status :", patientStatus);
        console.log("Blood pressure :", bloodPressure);
        console.log("Iss checkup is done :", checkupStatus);
        console.log("Is prescription given :", assignedMedicine);
        console.log("Previous Body Temperature :", bodyTemperature2);
        console.log("Current Body Temperature :", bodyTemperature);


        // A variable accessible inside every nested scope.
        console.log("Patient Name", patientName);
        console.log(patientName.length); // just to perform .length as per code 

        function billingDesk() {

            let noOfdays = 4;

            console.log(patientName.length); // just to perform .length as per code  and for numeric value as well.
            {
                let acCharge = 1500 + "50"; // i specially pputted this block here for a furutre operation
                console.log("AC Charge :", acCharge); // A variable accessible inside one block.
                console.log(typeof acCharge);
                

            }
            let hospitalRating = "Excellent" * 1000;
            let unhygieneVibe = 0.1 + 0.2;
            let result17 = Infinity - "OH yes";

            console.log("No of days spent :", noOfdays);
            console.log("Hospital Rating :", hospitalRating);
            console.log("Unhygiene Vibe :", unhygieneVibe);
            console.log("Random operation :", result17);

            // Datatype of these current variables
            
            console.log(typeof noOfdays);
            console.log(typeof hospitalRating);
            console.log(typeof unhygieneVibe);
            console.log(typeof result17);

            // A variable accessible inside every nested scope.
            console.log("Patient Name", patientName);


            // A variable accessible inside one function.
            console.log("No of days spend :", noOfdays);



        }
        billingDesk();



    }

    EmergencyRoom();
    DoctorCabin();


    patientStatus="Normal";
    patientID=null;
    assignRoomNo=null;
    console.log("Final Patient status :",patientStatus);


}
hospitalSystem();



































