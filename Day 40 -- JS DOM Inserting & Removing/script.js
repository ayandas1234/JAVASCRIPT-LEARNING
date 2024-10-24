console.log(document.querySelector(".box").innerHTML)
// console.log(document.querySelector(".box").innerHTML) -->> it print the whatever html content written inside the .box class

console.log(document.querySelector(".container").innerHTML)

console.log(document.querySelector(".container").innerText)
// console.log(document.querySelector(".container").innerText) -->> it prints the normal text only written inside the .container class

console.log(document.querySelector(".box").innerText)


console.log(document.querySelector(".box").outerHTML)
// console.log(document.querySelector(".box").outerHTML) -->> it will print everything related to .box class means it will print exactly what we write in the html file , means the whole html

console.log(document.querySelector(".container").outerHTML)


console.log(document.querySelector(".container").tagName)
// console.log(document.querySelector(".container").tagName) -->> it print the element name where we use the .container class

// tagname is applicable onnly for element

console.log(document.querySelector(".container").nodeName)
// document.querySelector(".container").nodeName -->> it was same as tagname but it was applicable all kind of node coment text

console.log(document.querySelector(".container").textContent)
// document.querySelector(".container").textContent -->> it is provide the text inside the container

console.log(document.querySelector(".container").hidden)
// document.querySelector(".container").hidden -->> it is checkiing the content of the container is hidden or not

console.log(document.querySelector(".container").hidden = true)
// document.querySelector(".container").hidden = true -->> usinng this we can make the content of the container hidden , means it make the div hidden

console.log(document.querySelector(".box").innerHTML = "hey i a harry")
// console.log(document.querySelector(".box").innerHTML = "hey i a harry") -->> using innerHTML we can directly change the text inside the html file , here the first element apperas whose class is box that element text will be changed only


confirm.log(document.querySelector(".box").hasAttribute("style"))
// confirm.log(document.querySelector(".box").hasAttribute("style")) -->> hasAttribute check if box class have any style attribute , if yes then true if no then false


console.log(document.querySelector(".box").getAttribute("style"))
// console.log(document.querySelector(".box").getAttribute("style")) -->> getAttribute shows the value of the style attribute


console.log(document.querySelector(".box").setAttribute("style" , "display: inline"))
// console.log(document.querySelector(".box").setAttribute("style" , "display: inline")) -->> using setAttribute we can change or set an attribute value , and that attribute set will be inline 


console.log(document.querySelector(".box").attributes)
// console.log(document.querySelector(".box").attributes) -->> using attributes we can easily print all the attributes under box class


console.log(document.querySelector(".box").removeAttribute("style"))
// console.log(document.querySelector(".box").removeAttribute("style")) -->> removeAttribute remove the style attribute


document.designMode = "on"
// document.designMode = "on" -->> using this command we can easily edit any website on our browser for temporarily after refresh it will again go back to it's previous state


console.log(document.querySelector(".box").dataset)
// The data-* attributes is used to store custom data private to the page or application.

// The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.

// data-createby="harry" -->> this attribute is access by dataset and data- will be ignored and createby="harry" treate as key element
