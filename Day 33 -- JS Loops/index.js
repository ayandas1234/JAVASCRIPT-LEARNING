console.log("I am a tutorial on Loops")

let a = 1;
// console.log(a)
// console.log(a+1)
// console.log(a+2)

for (let i = 0; i < 100; i++) { 
    console.log(a + i); 
}

let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}

/* forin loop example -->> */
for (const key in obj) {
        const element = obj[key];
        console.log(key,element);
}
for (const key in obj) {
        console.log(key);
}

/* forof loop example -->> */
for (const c of "Harry") {
    console.log(c)
}

/* forof loop used for specifically array also used for string and forin loop used for objects */

/* while loop example -->> */
let i = 0;
while (i<6) {
    console.log(i)
    i++;
}

/* do while loop example -->> */
let i1 = 10;
do {
    console.log(i1)
    i++;
} while (i<6);
