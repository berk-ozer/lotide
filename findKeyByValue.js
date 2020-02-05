// ASSERT FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};

// TEST CASES
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const soccerTeamsFromCountry = {
  spain: 'Barcelona',
  england: 'Liverpool',
  germany: 'Bayern',
  turkey: 'Galatasaray'
};

assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Liverpool'), 'england');
assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Galatasaray'), 'turkey');
assertEqual(findKeyByValue(soccerTeamsFromCountry, 'Ajax'), undefined);
