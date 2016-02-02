function Player(name, score, chips) {
  this.name = name;
  this.score = score;
  this.chips = chips;
}

// Player.prototype.curCard = function() {

// }

function randomCardSet(){
  var randomSet = Math.round(Math.random() * (4 - 1) + 1);

  if(randomSet === 1){
    return " of Hearts";
  } else if(randomSet === 2){
    return " of Spades";
  } else if(randomSet === 3){
    return " of Diamonds";
  } else {
    return " of Clubs";
  }
}

function randomCard() {
  var randomNum = Math.round(Math.random() * (11 - 2) + 2);
  if(randomNum === 2){
    return 2;
  } else if(randomNum === 3){
    return 3;
  } else if(randomNum === 4) {
    return 4;
  } else if(randomNum === 5) {
    return 5;
  } else if(randomNum === 6) {
    return 6;
  } else if(randomNum === 7) {
    return 7;
  } else if(randomNum === 8) {
    return 8;
  } else if(randomNum === 9) {
    return 9;
  } else if(randomNum === 10) {
    return 10;
  } else{
    return 11;
  }
}

function startCard() {
  
}

/*=====================JQUERY====================*/


$(document).ready(function(){
  $("#start").click(function(){
    $(".introduction").hide();
    $(".game").show("slide");
    var playerOne = $("#player1name").val();
    var newPlayer = new Player(playerOne, 0, 500);
    $("#playerNameSpan").text(newPlayer.name);
    $("#remainingChipsSpan").text(newPlayer.chips);
    var p1HandOne = randomCard();
    var p1HandTwo = randomCard();
    var totalHand = p1HandOne + p1HandTwo;
    $("#curHand").text(p1HandOne + randomCardSet() + " " + p1HandTwo + randomCardSet());
    $("#totalHand").text(totalHand);
    $("#randomCardBtn").click(function(){
      var cardHit = randomCard();
      totalHand = totalHand + cardHit;
      if(totalHand < 21){
      $("#curHand").append(" " + cardHit + randomCardSet());
        $("#totalHand").text(totalHand);
      }else{
        alert("you went above 21 you lose");
      }
    });
  });
});
