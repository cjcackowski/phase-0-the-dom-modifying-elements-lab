// Write your code here!
// Remove the 'main#main' node
document.querySelector('main#main').remove();

// Create <h1> element
const newHeader = document.createElement('h1');

// Set the id of the new header to 'victory'
newHeader.id = 'victory';

// Set the innerHTML of the new header with the desired text
newHeader.innerHTML = "Cecylia is the champion"; 

// Append the new header to the body
document.body.appendChild(newHeader);