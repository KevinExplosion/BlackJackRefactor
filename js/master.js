function twoToEleven(min, max) {
  var totalScore = 0
debugger;
  while (totalScore < 21){
    totalScore += Math.round(Math.random() * (11 - 2) + 2);
  }

  return totalScore;
}

function Player(name, score) {
  this.name = name;
  this.score = score;
}
