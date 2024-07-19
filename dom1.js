//get the text content from the DOM

const ele = document.body.children[0]; //(took .textContent off in order to get the element not just the words--the div box)
console.log(ele);

//update the text content
let val = "Be-Asia McKerracher"
document.body.children[0].textContent = val;
ele.textContent = 'updated'  //keeping it as an object allows you to update without changing the variable name

console.log(ele.className)
console.log(ele.innerHTML)
ele.innerHTML = '<h1>Hello</h1>'
