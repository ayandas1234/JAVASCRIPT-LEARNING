console.log("Harry")

// class selector
let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[3].style.backgroundColor = "red"

// id selector
document.getElementById("redbox").style.backgroundColor = "red"

// queryselector
document.querySelector(".box").style.backgroundColor = "green"
console.log(document.querySelector(".box"))
// query selector finds which element class is box at first then it will onnly point out that particular element


console.log(document.querySelectorAll(".box"))
// console.log(document.querySelectorAll(".box")) -->> it will return a html collection where every element will be showing which class is box

// if we want to change all the box color together then we use querySelectorAll

// document.querySelectorAll(".box").style.backgroundColor = "green" -->> this is the wrong method for using querySelectorAll caus etogether we want ot change more than one boxes color so we need to use foreach loop 

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "aqua";
})


// tag selector
console.log(document.getElementsByTagName("div"))
// console.log(document.getElementsByTagName("div"))  -->> html collection node list returns , like array where all the div tag selected

let e = document.getElementsByTagName("div")
// let e = document.getElementsByTagName("div") -->> we store the html collection into this e , now it become like an array

console.log(e[3].matches("#redbox"))
console.log(e[1].matches(".box"))
// for matches it start as 1 as count for element

// matches syntax check the given style / class name / id name matched with the particular item at the particular position (e[3])

// The matches() method returns true if an element matches a specific CSS selector(s).

// The matches() method returns false if not.

//matches syntax -->> position[].matches("style")

console.log(e[3].closest("#redbox"))
console.log(e[3].closest(".container"))
console.log(e[3].closest("html"))

// The closest() method searches up the DOM tree for elements which matches a specified CSS selector.

// The closest() method starts at the element itself, then the anchestors (parent, grandparent, ...) until a match is found.

// The closest() method returns null() if no match is found.


console.log(document.querySelector(".container").contains(e[2]))
// console.log(document.querySelector(".container").contains(e[2])) -->> it returs true cause .container contains e[2] element

console.log(document.querySelector(".container").contains(e[0]))
// console.log(document.querySelector(".container").contains(e[0])) -->> here e[0] means .container itself and iit returns true

console.log(document.querySelector(".container").contains(document.querySelector("body")))
// console.log(document.querySelector(".container").contains(document.querySelector("body"))) -->> here it will check is body inside .contaiiner , if yes retuns true , else false

console.log(document.querySelector("body").contains(document.querySelector(".containe")))

// The contains() method returns true if a node is a descendant of a node.

// The contains() method returns false if not.

// for contains it start as 1 as count for element
