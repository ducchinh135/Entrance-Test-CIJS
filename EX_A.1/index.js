const arr = [2, 3, -5, -2, 4];

function adjacentElementsProduct(inputArray) {
    const arrKp = [];

    for (let i = 0; i < inputArray.length - 1; i++) {
        let ans = inputArray[i] * inputArray[i + 1];
        arrKp.push(ans);
    }
    let maxInNumbers = Math.max.apply(Math, arrKp);
    console.log('Input: ' + inputArray)
    console.log('Output: ' + maxInNumbers)
}

adjacentElementsProduct(arr);