const numbers = [4, 3, -2, 0, 1, -5, -1, 6];

function getNumberInfo(numbersAry) {
  let positiveCount = 0;
  let negativeSum = 0;

  for(let i = 0; i < numbersAry.length; i++) {
    if(numbersAry[i] > 0) {
      positiveCount++;
    }
    else if(numbersAry[i] < 0) {
      negativeSum += numbersAry[i]
    }
  }

  return [positiveCount, negativeSum];
}

const results = getNumberInfo(numbers);

console.log(`Positive count: ${results[0]}`);
console.log(`Negaitve sum: ${results[1]}`);