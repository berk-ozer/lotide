const flatten = function(array) {
  let flatArray = [];

  for (let element of array) {
    if (Array.isArray(element)) {
      for (let innerElement of element) {
        flatArray.push(innerElement);
      }
    } else {
      flatArray.push(element);
    }
  }

  return flatArray;
};

module.exports = flatten;