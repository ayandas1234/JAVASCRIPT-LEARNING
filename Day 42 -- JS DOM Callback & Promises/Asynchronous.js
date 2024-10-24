console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

// Functions running in parallel with other functions are called asynchronous

// after 1'st two console.log we try to use setTimeout and print something in 0 seconds but instead of printing the content of setTimeout the compiler go to the end console.log and print the The End then it print the setTimeout this behaviour is known as asynchronous nature of javascript