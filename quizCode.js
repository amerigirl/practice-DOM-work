//  Question 1: Select an element with the id "header"

var header = document.getElementById("header");
console.log(header);

// Question 2: Add a new class to an element

var myDiv = document.getElementById("myDiv");
myDiv.classList.add("new-class");
console.log(myDiv);

// Question 3: Check if a div with the id "content" is empty

var content = document.getElementById("content");
if (content.innerHTML === " ") {
  console.log("Content div is empty");
} else {
  console.log("Content div is NOT empty!");
}

// Question 4: Remove an element from the DOM

var box = document.getElementById("box");

if (box) {
  box.parentNode.removeChild(box);
  console.log("box is removed");
} else {
  console.log("there is no box!");
}

// Question 5: Change the background color of the element with id "content" to green
var content = document.getElementById("content");
if (content) {
  content.style.backgroundColor = "green";
  console.log("content box is now green :)");
} else {
  console.log("there is no content box!");
}

// Question 6: Add a role attribute with the value "button" to a div with the id "myDiv"

// Question 7: Append a new child element to an existing element

// Question 8: Remove all paragraph elements from the document

// Question 9: Change the text content of an element

// Question 10: Create a new div element
