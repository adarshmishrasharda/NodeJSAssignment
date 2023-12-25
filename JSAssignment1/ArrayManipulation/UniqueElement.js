function uniqueElements(inputArray) {
  var resultArray = [];

  for (var i = 0; i < inputArray.length; i++) {
    var currentElement = inputArray[i];

    if (resultArray.indexOf(currentElement) === -1) {
      resultArray.push(currentElement);
    }
  }

  return resultArray;
}

var inputArray = [1, 2, 3, 4, 4, 2, 5];
var uniqueArray = uniqueElements(inputArray);
console.log(uniqueArray); 
