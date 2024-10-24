alert("Hello World");

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

var a = prompt("Enter your number")
// promt is used for taking user input and promt taking input as a string

var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")
// confirm take iinput as true or false

if(isTrue){
    console.log("Computer is blasting")
}

else{
    console.log("Computer is not blasting")

}
console.log("Your number is " + a)



document.title = "Hey I am good"
// document.title = "Hey I am good" -->> using " document.title " we can easily overwrite the html file title without directly changiing in the html file

document.body.style.backgroundColor = "red"
// document.body.style.backgroundColor = "red" -->> using " document.body.style.backgroundColor " we can easily style the body background colour red