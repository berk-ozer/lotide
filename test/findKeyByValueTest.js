const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const input1 = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const input2 = {
  spain: 'Barcelona',
  england: 'Liverpool',
  germany: 'Bayern',
  turkey: 'Galatasaray'
};

// assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Liverpool'), 'england');
// assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Galatasaray'), 'turkey');
// assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Ajax'), undefined);

describe('#findKeyByValue', () => {
  it("should return 'drama' when passed input1, 'The Wire'", () => {
    assert.equal(findKeyByValue(input1, 'The Wire'), 'drama');
  })

  it("should return undefined when passed input1, 'That 70s Show'", () => {
    assert.equal(findKeyByValue(input1, 'That 70s Show'), undefined);
  })

  it("should return 'england' when passed input2, 'Liverpool'", () => {
    assert.equal(findKeyByValue(input2, 'Liverpool'), 'england');
  })

  it("should return 'turkey' when passed input2, 'Galatasaray'", () => {
    assert.equal(findKeyByValue(input2, 'Galatasaray'), 'turkey');
  })

})