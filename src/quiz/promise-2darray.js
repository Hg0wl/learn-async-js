function sum2DArray(arr) {
    return new Promise((resolve, reject) => {
        console.log('Sum called ... ');
        if(Array.isArray(arr)) {
            setTimeout(() => {
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < arr[i].length; j++) {
                        sum += arr[i][j];
                    }
                }
                console.log('resolving ... ');
                resolve(sum);
            }, 0);
        }
        else {
            console.log('rejecting ... ');
            reject('BAD INPUT: Expected array as input');
        }
        console.log('returning from sum');
    });
}

// Example usage:
const array2D = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


async function calculateSum() {
    const rowSumPromises =[]

    for (let x =0; x < array2D.length; x++) {
        rowSumPromises.push(sumOfARow(array2D, x));
    }

    try {
        const rowSums = await Promise.all(rowSumPromises);
        let sum = 0;
        rowSums.forEach(rowSum => {
            sum+= rowSum;
        });
        console.log("Sum = " + sum);
        return 'done';
    } catch(error) {
        console.log("Error Message" + error);
        return "failed'"
    }

}

calculateSum().then((status) => console.log(status));
