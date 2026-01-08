// Generate a random number between 1 and 6 for Player 1
var count1 = Math.floor(Math.random() * 6) + 1; 
console.log(count1); // Log the result of Player 1's roll

// Create the image source path for Player 1's dice based on the random number
var imgsrc = "images/dice" + count1 + ".png"; 
// Set the source attribute of the first image element to display Player 1's dice
var img1 = document.querySelectorAll("img")[0].setAttribute("src", imgsrc); 


var count2 = Math.floor(Math.random() * 6) + 1; 
console.log(count2); // Log the result of Player 2's roll

var imgsrc = "images/dice" + count2 + ".png"; 
var img2 = document.querySelectorAll("img")[1].setAttribute("src", imgsrc); 

// Compare the results of Player 1 and Player 2
if (count1 > count2) {
    // Update the header to declare Player 1 as the winner
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩"; 
} else if (count2 > count1) {
    // Update the header to declare Player 2 as the winner
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"; 
} else {
    // Update the header to declare a draw if both players roll the same number
    document.querySelector("h1").textContent = "It's a Draw!"; 
}
