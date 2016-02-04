describe('Player', function() {
  it('defines the name and score for each player', function() {
    var testPlayer = new Player("Test Pilot", 0, 500);
    expect(testPlayer.name).to.equal("Test Pilot");
    expect(testPlayer.score).to.equal(0);
    expect(testPlayer.chips).to.equal(500);
  });
});

describe('jqkCard', function() {
  it('randomly generates a Jack, Queen or King as index numbers 1, 2, or 3 respectively', function(){
    expect(jqkCard(2)).to.be.a("string");
  });
});
describe('suitGenerator', function(){
  it('randomly generates an index of 1, 2, 3, or 4 to equal a suit of Hearts, Spades, Diamonds, or Clubs', function() {
    expect(suitGenerator(3)).to.be.a('string') ;
  });
});
describe('randomCard', function() {
  it('generates a random card to be next hit', function() {
    expect(randomCard(4)).to.be.a('number');
  });
});
describe('beginningHand', function() {
  it('creates a player hand at the beginning of a new game', function() {
    expect(beginningHand()).to.be.a('number');
  });
});
describe('dealCard', function() {
  it('determines if card drawn is an Ace and selects 1 if 11 would make hand go over 21', function(){
    expect(dealCard()).to.be.a('number');
  });
  it('adds card hit to total hand if it is under 21', function() {
    expect(dealCard()).to.be.a('number');
  });
});
describe('winLose', function() {
  it('alerts that user lost if total hand exceeds 21', function() {
    expect(winLose()).to.be.a('string');
  });
});
describe('dealerCPU', function() {
  it('creates a computer that will hit while their score is below user score', function() {
    expect(dealerCPU()).to.be.a('number');
  });
});
describe('dealerWinLose', function() {
  it('determines if user won or lost to computer', function() {
    expect(dealerWinLose()).to.be.a('string');
  });
});




  // it("concatenates player's randomly generated numbers for a total score", function() {
  //   var testPlayer = new Player("Test Pilot", 21, 500);
  //   expect(testPlayer.totalScore()).to.be.a('number');
  // });


  // it("takes away chips bet from bank", function() {
  //   var testPlayer = new Player("Test Pilot", 21, 300);
  //   expect(testPlayer.totalScore()).to.equal(200);
  // });
