const inputArr = [60, 40, 55, 75, 64];

function sumSimpleArray(array) {
    let sum = 0;
    return array.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    })
}

function alternatingSums(inputArr) {
    const arrChan = [];
    const arrLe = [];
    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 == 0) {
            arrChan.push(inputArr[i])
        }
        else {
            arrLe.push(inputArr[i]);
        }
    }
    console.log('Team 1: ' + arrChan);
    console.log('Team 2: ' + arrLe);
    console.log('Tong team 1: ' + sumSimpleArray(arrChan));
    console.log('Tong team 2: ' + sumSimpleArray(arrLe))
}

alternatingSums(inputArr);

