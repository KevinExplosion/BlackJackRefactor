function Player(name, score, chips) {
  this.name = name;
  this.score = score;
  this.chips = chips;
}

Player.prototype.totalScore = function() {
  while (this.score < 21){
    this.score = this.score += Math.round(Math.random() * (11 - 2) + 2);
  }
  return this.score;
}

$(document).ready(function() {
  $("#start").click(function(event) {
    event.prevent(default);
  });
});
