function nice(name) {
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}

nice("ayan")

nice("su")

function sum1(a, b) {
    console.log(a + b)
}
sum1(3,7)
function sum2(a, b) {
    // console.log(a + b)
    return a + b 
}
result1 = sum2(3, 2)
console.log("The sum of these numbers is: ", result1)

result2 = sum2(7, 5)
console.log("The sum of these numbers is: ", result2)

function sum3(a, b, c = 3) {
    return a + b + c
}

result3 = sum3(7, 8)
console.log("The sum of these numbers is: ", result3)


function sum4(a, b, c = 3) {
    console.log(a, b, c)
    return a + b + c
}

result4 = sum4(7)
console.log("The sum of these numbers is: ", result4)
// here we don't pass the b value and that's why the result shows NAN means not a number , cause b's value is undefined

function sum5(a, b, c = 3) {
    return a + b + c
}
result5 = sum5(3, 13, 1)
console.log("The sum of these numbers is: ", result5)


/* Arrow Function example --->>>
    const fun = ()=>{
        cosole.log()
    }
*/
const func1 = (x)=>{
    console.log("I am an arrow function", x)
}

func1(34);
func1(66);
func1(84);