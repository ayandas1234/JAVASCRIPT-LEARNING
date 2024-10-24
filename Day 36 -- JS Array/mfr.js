let arr = [1, 13, 5 ,7, 11];
let newArr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
}

console.log(newArr)

let newArr1 = arr.map((e)=>{
    return e**2
})

console.log(newArr1)

let newArr2 = arr.map((e, index, array)=>{
    return e**2
})

console.log(newArr2)

const greaterThanSeven = (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))
// console.log(arr.filter(greaterThanSeven)) -->> it filter out those element whose value is greater than seven

let arr2 = [1,2,3,4,5,6]

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))

console.log(Array.from("Harry"))
// console.log(Array.from("Harry")) -->> Array.from creates a new array based on the string Harry

/*  */