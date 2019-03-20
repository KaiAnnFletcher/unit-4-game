/*Create an array of target numbers or 
use the formula to generate random numbers in a range*/

var randomNumber = Math.floor(Math.random()*70)

/*Now target the div to insert the number*/

$("#Random-Number").text(randomNumber);

var crystalValues = [1, 3, 5, 10];
var increment1 = (crystalValues[0]);
var increment2 = (crystalValues[1]);
var increment3 = (crystalValues[2]);
var increment4 = (crystalValues[3]);
var counter = 0;

/*for (var i=0; i<crystalValues.length; i++) {
   var increment = (crystalValues[i]);
}*/

var winCounter = 1;
var lossCounter = 1;

function crystals(event) {
/*loop through and assign each image its attributes*/

var crystalImage1 = $("<img>");

crystalImage1.attr("id", "Crystal-image1");

crystalImage1.attr("src", "./assets/images/Crystal-1.jpg");

crystalImage1.attr("data-crystalvalue", crystalValues[0]);
var increment1 = (crystalValues[0]);

var crystalImage2 = $("<img>");

crystalImage2.attr("id", "Crystal-image2");

crystalImage2.attr("src", "./assets/images/Crystal-2.jpg");

crystalImage2.attr("data-crystalvalue", crystalValues[1]);
var increment2 = (crystalValues[1]);

var crystalImage3 = $("<img>");

crystalImage3.attr("id", "Crystal-image3");

crystalImage3.attr("src", "./assets/images/Crystal-3.jpg");

crystalImage3.attr("data-crystalvalue", crystalValues[2]);
var increment3 = (crystalValues[2]);

var crystalImage4 = $("<img>");

crystalImage4.attr("id", "Crystal-image4");

crystalImage4.attr("src", "./assets/images/Crystal-4.jpg");

crystalImage4.attr("data-crystalvalue", crystalValues[3]);
var increment4 = (crystalValues[3]);

/*Append each image now*/

$("#Crystal-image1").append(crystalImage1);

$("#Crystal-image2").append(crystalImage2);

$("#Crystal-image3").append(crystalImage3);

$("#Crystal-image4").append(crystalImage4);
}
crystals();


$("#Crystal-image1").on("click", function() {

    counter += increment1;

    $("#Total").text(counter);

    if (counter === randomNumber) {
        alert("You win!");
        $("#Wins-counter").text(winCounter++);
      }
  
      else if (counter >= randomNumber) {
        alert("You lose!!");
        $("#Loss-counter").text(lossCounter++);
      }
});

$("#Crystal-image2").on("click", function() {

    counter += increment2;

    $("#Total").text(counter);

    if (counter === randomNumber) {
        alert("You win!");
        $("#Wins-counter").text(winCounter++);
      }
  
      else if (counter >= randomNumber) {
        alert("You lose!!");
        $("#Loss-counter").text(lossCounter++);
        }
});

$("#Crystal-image3").on("click", function() {

    counter += increment3;

    $("#Total").text(counter);

    if (counter === randomNumber) {
        alert("You win!");
        $("#Wins-counter").text(winCounter++);
      }
  
      else if (counter >= randomNumber) {
        alert("You lose!!");
        $("#Loss-counter").text(lossCounter++);
      }
});

$("#Crystal-image4").on("click", function() {

    counter += increment4;

    $("#Total").text(counter);

    if (counter === randomNumber) {
        alert("You win!");
        $("#Wins-counter").text(winCounter++);
      }
  
      else if (counter >= randomNumber) {
        alert("You lose!!");
        $("#Loss-counter").text(lossCounter++);
      }
});