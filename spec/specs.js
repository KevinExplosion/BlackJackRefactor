describe('twoToEleven', function() {
  it('selects random number between two and eleven', function() {
    expect(twoToEleven(4)).to.be.a('number');
  });
  it('will add randomly generated numbers to create total score', function() {
    expect(twoToEleven(2 + 4)).to.be.a('number');
  });
describe('Player', function() {
  it('defines the name and score for each player', function() {
    var testPlayer = new Player("Test Pilot", 0);
    expect(testPlayer.name).to.equal("Test Pilot");
    expect(testPlayer.score).to.equal(0);
  });
});
