//  *Question 1: Select an element with the id "header"
var header = document.getElementById('header'); 
console.log('This is the header' + ": " + header.textContent);

// *Question 2: Add a new class to an element
var hoverBox = document.getElementById('hoverBox');
hoverBox.classList.add('added-Class');
console.log("This is the classlist for 'hoverBox': " + hoverBox.classList)

// Question 3: Check if a div with the id "content" is empty


// Question 4: Remove an element from the DOM


//Question 5: Change the background color of the element with id "content" to green




// *Question 6: Add a role attribute with the value "button" to a div with the id "myDiv"
var myDiv = document.getElementById('myDiv');
myDiv.setAttribute('role', 'button');
console.log("The role attribute is set to the following: " +  myDiv.role);

// Question 7: Append a new child element to an existing element


// Question 8: Remove all paragraph elements from the document


//*Question 9: Change the text content of an element
var button = document.getElementById('button');
button.textContent = "Button";


// Question 10: Create a new div element
var newElement = document.createElement('div');
newElement.textContent = 'This is the new div content'; //adding text
document.body.appendChild(newElement) //you have to append(add) to the body
console.log("this is the new Div: " + newElement.textContent);


// *Question 11: Add a click event listener to the button that changes the color of the div with id "colorBox" to blue
var colorBox = document.getElementById('colorBox');
colorBox.addEventListener('click', function () { 
  colorBox.style.backgroundColor = 'blue';
})


// *Question 12: Add a mouseover event listener to the div with id "hoverBox" that changes its text content to "The mouse is over me!"

hoverBox.addEventListener('mouseover', function () { 
  hoverBox.textContent = 'The mouse is over me!'
  
})

hoverBox.addEventListener('mouseout', function () { 
  hoverBox.textContent = 'Hover over me!'
})

  // * close! Question 13: Add a keydown event listener to the input element that displays the current input value in the paragraph with id "output"

var input = document.getElementById('input');
var output = document.getElementById('output');
 
input.addEventListener('keydown', () => { 
  output.textContent = input.value; 
})