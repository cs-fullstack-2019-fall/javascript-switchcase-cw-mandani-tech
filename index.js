// # JavaScript_SwitchCase_cw
//
// ### Problem 1:
// Put the start of your program in a main function.
// Ask the user to enter a number to print.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 2,
// 3 if you enter 3, 4 if you enter 4, and 5 if you enter 5.

// var menuUser = prompt("Enter a number to print: \n 1. To print '1'\n 2. To print '2'\n 3. To print 3\n 4.To print '4' or \n5.To print '5'");
//
//
// switch (menuUser)
// {
//     case "1":
//
//         alert("You choose to print '1'");
//         break;
//     case "2":
//         alert("You choose to print '2'");
//         break;
//     case "3":
//         alert("You choose to print '3'");
//         break;
//     case "4":
//         alert("You choose to print '4'");
//         break;
//     case "5":
//         alert("You choose to print '5'");
//         break;
//     default:
//         alert("wrong choice");
//
// }


//
//  ### Problem 2:
// Put the start of your program in a main function. Ask the user to enter a 3 digit binary number.
// Create a switch case that prints 1 if you enter 1, 2 if you enter 10, 3 if you enter 11,
// 4 if you enter 100, and 5 if you enter 101.
//



var enterBinaryNumber = prompt("Enter a 3 digit binary number to print:\n1. To print '1'\n2. To print '2'\n3. To print '3'\n4.To print '4'\n5.To print '5'");


switch (enterBinaryNumber)
{
    case "001":

        alert("You choose to print decimal number'1'");
        break;
    case "010":
        alert("You choose to print decimal '2'");
        break;
    case "011":
        alert("You choose to print decimal '3'");
        break;
    case "100":
        alert("You choose to print decimal '4'");
        break;
    case "101":
        alert("You choose to print decimal '5'");
        break;
    default:
        alert("wrong choice");

}



//  ### Problem 3:
// Put the start of your program in a main function. Create an attendance array.
// Ask the user if a teacher, student, or parent is checking in. Use a switch statement to add
// the teacher/student/parent to the attendance array, then log the option they chose. Repeat this five times.
//


var attendlist =[];

for (i=1; i<= 5;i++)
{
var menuUsrOpt = prompt("Enter your options here\n 1. Press 1 for teacher\n2. Press 2 for student\n3. Press 3 for parent\n");


switch (menuUsrOpt)
{
    case "1":

        alert("You choose to check in as Teacher");
        attendlist=["Teacher"];

        break;
    case "2":
        alert("You choose to check in as Student");
        attendlist=["Student"];
        break;
    case "3":
        alert("You choose to check in as Parent");
        attendlist=["Parent"];
        break;

    default:
        alert("wrong choice");
}

console.log (attendlist);

}



// <strong>Challenge</strong>: Do the above program until the user enter's 'q'. Also,
// print and add to the array via a function call to the appropriate teacher/student/parent function.
