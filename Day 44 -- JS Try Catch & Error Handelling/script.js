let a = prompt("Enter first number")

let b = prompt("Enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

// console.log("the sum of " + a + " and " + b + " is -->> ", sum);


// try {
//     console.log("the sum of " + a + " and " + b + " is -->> ", sum * x);
// } catch (error) {
//     alert(error.name)
//     alert(error.message)
//     alert(error.stack)
//     console.log("error coming!!!!!!!!!!");
// }


function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()

/*
try -->> if the code excution works properly then inside the try will normally execute but

catch -->> if error occurs then catch syntax catched the error and whatever inside the catch is that will be excuted
 */




/*
    alert(error.name)
    alert(error.message)
    alert(error.stack)

    this three syntax is the error object example what catch holds the error that error name , message and stack can be showing like this
 */




/*
prompt -->> it's used for taking user input

parseInt -->> it's used for convert string to number , if soe string are not exactly are nubers then it return NaN (Not A Number)

isNaN -->> it's checking what a & b holds is a NaN then it will theow an syntax error 

error is two types -->>
1.) where we give an error using throw keyword means custom errors, more details about errors in (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors)

2.) another type of erroes is we have to handle the error using try and catch 
*/

/*
The try ... Catch Construct may have one more Code Clause: finally

If it exists it runs in all cases:

after try if there were no errors
after catch if there were errors

If there is a return in try, finally is executed just before the control returns to the outer code.
 */