const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function sumOfARow(arr, rowId) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
           arr.forEach((row) => {return new Promise((resolve, reject) =>
            {
                let sum = 0;
                for (let i = 0; i < row.length; i++) {
                    sum += row[i];
                }
                return sum;
            })});
            resolve(sum);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}




rowSumPromises = []
for (let x - 0; x < array2D.length; x++) {
    rowSumPromises.push(sumOfARow(array2D, x))
}

Promise.all(rowSumPromises)
    .then((rowSums) => {
        let sum - 0;
        rowSums.forEach(rowSum => {
            sum += rowSum;
        });
        console.log('Sum = $(sum)');
    })
    .catch((error) => console.log("Error Msg: $(error)"));