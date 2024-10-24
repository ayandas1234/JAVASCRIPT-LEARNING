let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
console.log(arr, typeof arr);
console.log(arr.length)
console.log(arr)

/* Strings are immutable and Arrays are Mutable */

console.log(arr[0])
console.log(arr[2])
console.log(arr[4])

console.log(arr.toString())
/* 
console.log(arr.toString()) -->> toString() make an array convert into string
*/

console.log(arr.join(" and "))
/* 
console.log(arr.join(" and ")) -->> join make the array join with " and " , in array where ever there is comma it will replace with 
*/

let a = [1, 2, 4, 5, 7]
console.log(a.pop())
a.push(10)
a.push("Ayan")
console.log(a)
console.log(a.shift())
a.unshift("jack100")
console.log(a)
delete a[3]
// delete a[3] -->> after deleting the element the array have that particular posiition is undefined means there is no element but array have allocate the space that's why if we print out length it shows it's original size even after deleting one element
console.log(a)
console.log(a[3])
console.log(a.length)


 
let numbers = [1, 2, 3, 4, 5] 
// numbers.splice(1, 2) -->> splice delete numbers in the array index from 1 to 2
// console.log(numbers) 

// numbers.splice(1, 3) -->> splice delete numbers in the array index from 1 to 3
// console.log(numbers)  

// numbers.splice(1, 3, 222, 333) -->> splice delete numbers in the array index from 1 to 3 and put new numbers 222 & 333
console.log(numbers)   
// (4) [1, 222, 333, 5]