console.log("Hello World")


console.log(document.body.childNodes)
// console.log(document.body.childNodes) -->> it shows how many childnodes are in body, icluding spaces & comments


//To access the childnodes we can access them like array
console.log(document.body.childNodes[0])

// inide body spaces are also considered as childnodes and it spaces represents as text in output


//if we want to print a particular childnode have how many childnodes then we write the syntax like -->> console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes)


console.log(document.body.firstChild)
// console.log(document.body.firstChild) -->> it will print the firstchild of body


console.log(document.body.lastChild)
// console.log(document.body.lastChild) -->> it will print the lastchild of body


let cont = document.body.childNodes[1];
// let cont = document.body.childNodes[1]; -->> here cont treat as a container cause in the html file at "body.childNodes[1]" 1 position reside a container so whatever reside in container all are iin cont so whatever we want to access in container right now we can access through cont 

console.log(cont)
// console.log(cont) -->> it will print the whole container part like ---
/* <div class="container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
        <div class="box">Box 3</div>
        <div class="box">Box 4</div>
        <div class="box">Box 5</div>
</div> */

console.log(cont.firstChild)

console.log(cont.lastChild)

console.log(cont.firstElementChild)
// console.log(cont.firstElementChild) -->> suppose we want to ignore the spaces and normal text and access direct element then we use (element.firstElementChild) it shows whatever element exist at 1st position

console.log(cont.lastElementChild)
// console.log(cont.lastElementChild) -->> it shows whatever element exist at last position

console.log(cont.lastElementChild.style.color = "blue")
// console.log(cont.lastElementChild.style.color = "blue") -->> using this we can change the text color into blue

console.log(cont.lastElementChild.style.backgroundColor = "violet")
// console.log(cont.lastElementChild.style.backgroundColor = "violet") -->> using this wwwe can chage the background coloue into violet

console.log(cont.lastElementChild.parentElement)
// console.log(cont.lastElementChild.parentElement) -->> using childnodes we can access the parent node ,,,, here (cont.lastElementChild) treat as a childnode under container and using .parentElement we can access the parent node which is a container

console.log(cont.parentElement)
// console.log(cont.parentElement) -- >> it will print the whole body because right now cont is treat as conntaiiner and we write cont.parentElement this means "container" is now child and it will return it's parent which is "body"


console.log(document.body.firstElementChild.childNodes)
// console.log(document.body.firstElementChild.childNodes) -->> it will print out all the childrens including spaces as text node , comment as comment node and elements as element node. here body first element child is a container , inside the container every child nodes will be printed


console.log(document.body.firstElementChild.children)
// console.log(document.body.firstElementChild.children) -->> using children instead of childnodes , it print only the element nodes and ignore the 


console.log(document.body.firstElementChild.children[0])
// console.log(document.body.firstElementChild.children[0]) -->> using the children we can easily access the element nodes ignoring the spaces and comments
console.log(document.body.firstElementChild.children[1])
console.log(document.body.firstElementChild.children[2])
console.log(document.body.firstElementChild.children[3])
console.log(document.body.firstElementChild.children[4])
console.log(document.body.firstElementChild.children[5])


console.log(document.body.firstElementChild.children[2].nextElementSibling)
// console.log(document.body.firstElementChild.children[2].nextElementSibling) -->> using nextElementSibling we can access the next element of children[2] ,, ignoring the spaces and comments


console.log(document.body.firstElementChild.children[2].previousElementSibling)
// console.log(document.body.firstElementChild.children[2].previousElementSibling) -->> using previousElementSibling we can access the previous element of children[2] ,, ignoring the spaces and comments


console.log(document.body.firstElementChild.children[2].previousSibling)
// console.log(document.body.firstElementChild.children[2].previousSibling) -->> here we can't ignore spaces and comments using  previousSibling cause it includes everything so the previous sibling can be a element , comment or spaces


console.log(document.body.firstElementChild.children[2].nextSibling)
// console.log(document.body.firstElementChild.children[2].nextSibling) -->> here we can't ignore spaces and comments using  nextSibling cause it icludes everything so the next sibling can be a element , comment or spaces


console.log(document.body.firstElementChild.children[2].nextSibling.nextSibling)
// console.log(document.body.firstElementChild.children[2].nextSibling.nextSibling) -->> we know using nextSibling we can access the next element , comment or spaces but if we use "nextSibling.nextSibling" then it will point to the next's next (children[2] -> next -> next) , it will jump one step next then point out


console.log(document.body.firstElementChild.children[2].previousSibling.previousSibling)
// console.log(document.body.firstElementChild.children[2].previousSibling.previousSibling) -->> we know using previousSibling we can access the previous element , comment or spaces but if we use "previousSibling.previousSibling" then it will point to the previoused previous (children[2] -> previous -> previous) , it will jump one step previous then point out


console.log(document.body.children)
// console.log(document.body.children) -->> it shows how many children are in body only shows the element tag / nodes, excluding spaces & comments


console.log(document.body.children[1])
// console.log(document.body.children[1]) -->> it shows only particular element child at position one


console.log(document.body.children[1].rows)
// console.log(document.body.children[1].rows) -->> it shows all the rows of children[1]


console.log(document.body.children[1].nextElementSibling)
console.log(document.body.children[1].nextSibling)