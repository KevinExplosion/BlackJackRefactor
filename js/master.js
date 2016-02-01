function Player(name, score, chips) {
  this.name = name;
  this.score = score;
  this.chips = chips;
}

// Player.prototype.curCard = function() {



// }

function randomCard() {
  return Math.round(Math.random() * (11 - 2) + 2);
}


$(document).ready(function(){
  $("#start").click(function(){
    $(".introduction").hide();
    $(".game").show("slide");
    var playerOne = $("#player1name").val();
    var newPlayer = new Player(playerOne, 0, 500);

  });
});
