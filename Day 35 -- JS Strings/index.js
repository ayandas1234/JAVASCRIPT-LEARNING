console.log("This is strings tutorial");
let a = "Harry";
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a.length)

/* 
console.log(a[5]); -->> it will throw a error like undefined cause "Harry" word length is 5 by deafult if we want to access single characters in a character it start's with 0(zero) that's why after 4 it will throw error ,, from 0 to 4 is count 5
 */ 

/* java script was also known as forgiven language cause it shows minimal error */

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase()) 
console.log(b.length) 
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

// console.log(b)

console.log("Roh'an")
// console.log("Roh'an") -->> if we want to print single quete in a string then we can print single quete inside double quete

console.log(`Roh"an`)
// console.log(`Roh"an`) -->> if we want to print double quete in a string then we can print double quete inside single quete

/* Escape Swquence -->> */
console.log("Roh\"an")
// console.log("Roh\"an") -->> using \" this escape sequence we can print Double quete inside a Double quete

console.log("Roh\nan")
// console.log("Roh\nan") -->> using \n this escape sequence we can print the the rest of the string content to the next line

console.log("Roh\tan")
// console.log("Roh\tan") -->> using \t this escape sequece we can print space (used by tab) b/w the string

console.log("Roh\ran")
// console.log("Roh\ran") -->. using \r this escape sequence used for carriage return

let cc = " afhfifffhh  "
console.log(cc.trim())