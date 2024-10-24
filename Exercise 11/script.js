let a = 6

function factorial(number){
    let arr = Array.from(Array(number + 1).keys())
    // let arr = Array.from(Array(number).keys()) -->> this will return an array1 to n

    // Array.from -->> it means we want to create an array

    // Array(number + 1) -->> here we give array range

    // Array(number + 1).keys() -->> .keys() means make the array with the nubers of 0 1 2 3 4 , and we add +1 because we want to print the array from 1

    // arr.slice(1,) -->> it means the array start printing from index 1 cause we don't want to print zero(0)

    // console.log(arr.slice(1,3)) -->> it means the array will start print from index 1 to till before index 3 , index 3 the end is excluded but idex 1 the starting is included

    console.log(arr.slice(1,))
    // let c = arr.slice(1,).reduce((a, b)=> a*b )
    let c = arr.slice(1,).reduce((a,b)=>{
        return a*b;
    })

    // console.log(c)
    return c
}

function facFor(number){
    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac * index
    }
    return fac
}

console.log(factorial(a))
console.log(facFor(a))