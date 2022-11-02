const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

function getNumberInfo(numbersAry) {
  const numberInfo = {};
  numberInfo.positiveCount = 0;
  numberInfo.negativeSum = 0;

  for (let i = 0; i < numbersAry.length; i++) {
    if (numbersAry[i] > 0) {
      numberInfo.positiveCount++;
    }
    else if (numbersAry[i] < 0) {
      numberInfo.negativeSum += numbersAry[i]
    }
  }

  return numberInfo;
}

const result = getNumberInfo(numbers);

console.log(`Positive count: ${result.positiveCount}`);
console.log(`Negaitve sum: ${result.negativeSum}`);