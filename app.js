/*
 * Create a list that holds all of your cards
 */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

  myArray = ["fa fa-diamond","fa fa-diamond","fa fa-paper-plane-o","fa fa-paper-plane-o","fa fa-anchor","fa fa-anchor","fa fa-bolt","fa fa-bolt","fa fa-cube","fa fa-cube","fa fa-bicycle","fa fa-bicycle","fa fa-leaf","fa fa-leaf","fa fa-bomb","fa fa-bomb"];
  var cardOpen = [] ;

  var move =0;
  var opencard =true;
  var model=$(".win");
  function startGame(){

    var cardL=shuffle(myArray);
    for (var i = 0; i < myArray.length; i++) {
     $(".deck").append('<li class="card"><i class="'+cardL[i]+'"></i></li>');
   }

 countTime(10);

}

// timer function from http://stackoverflow.com and i edit from me .

var sec = 0;
  function countTime ( val ) { return val > 9 ? val : "0" + val; }
  var timer ="";

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}





/**
* @ description check card is match or not.
*/
//flag to check if the first click happened.
var count=0
function clickCard() {
    //check the flag.
    if (count==0) {
      //create the timer variable
      timer =  setInterval( function(){
      var s = countTime(++sec%60);
      var m = countTime(parseInt(sec/60,10));
      var tie = m+":"+s
       $("#time").text(tie);
       $("#timer").text(tie);

  }, 1000);
      count++;
      if (isOk ($(this))) {
          Openthecard ($(this));
          if(cardOpen.length===2){
            move=move+1;
            moveswithstars();
                if (match()) {
                    matching();
                  } else  {
      setTimeout(resetOpencard, 500);
             }
      }}
    }
    else{
          if (isOk ($(this))) {
          Openthecard ($(this));
          if(cardOpen.length===2){
            move=move+1;
            moveswithstars();
                if (match()) {
                    matching();
                  } else  {
      setTimeout(resetOpencard, 500);
             }
      }}
    }
}

 /**
* @ description check card if it is not open show or match will not be opend
* @ param {string} card
* @ returns true or false
*/


function isOk(card) {
  return !(card.hasClass("card open show") || card.hasClass("card match"));

}

/**
* @ description adding the card open show class to code class card in html and insert card to array cardOpen.
* @ param {string} card
*/

function Openthecard(card) {
  card.addClass("card open show");
  cardOpen.push(card);

};

/**
* @ description 2 cards is match or not .
* @ returns true or false
*/

function match() {
    if (cardOpen[0].find("i").attr("class") === cardOpen[1].find("i").attr("class")){
      return true;
    } else {
      return false;
    }
};
/**
* @ description if the 2 cards is matching then add match class to the card class in html then if it is var matche =16 apply winner function .
*/
var matche=0;
 function matching() {
    cardOpen.forEach(function(cardf) {
        cardf.addClass("card match");



    });

    cardOpen = [];
    matche=matche+2;
    if (matche ===16){


      winner();




}};

/**
* @ description winner class
*/

function winner(){
  clearInterval(timer);
  $(".win").css("display", "block");

         }


/**
* @ description if the 2 cards is n't matching then the remove open show class will be removed .
*/

 function resetOpencard() {

    cardOpen.forEach(function(cardm) {
    cardm.removeClass("open show");
    });
    cardOpen = [];
};

/**
* @ description the condition is remove a star when the player move.
*/

function moveswithstars(){
 var n =$(".moves").text(move);
 if ( move === 10 ||  move === 15  ) {
   reomerStars();

}};

/**
* @ description the function remove star in html.
*/

var numStar=3;
function reomerStars(){
  $(".fa-star").first().attr("class","fa fa-star-o");
   numStar--;
  $(".star").text(String(numStar));

}
/**
*  if the player press button restart then the page will be downloaded .
*/

function restartGame() {
         $(".restart").on("click", function() {
             location.reload()

         });
         }

/**
*  functions and eventlistener for star game.
*/
restartGame();
startGame();
$(".card").click(clickCard);
win.css("display","none");



/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

 /*
 * shuffle() function provided by Udacity's starter code
 */
