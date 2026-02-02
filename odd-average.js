
let oddArrays = [];
let sum = 0;

function oddAverage(numbers){
    for(const number of numbers){
        // console.log(number);
        if(number % 2 !== 0){
            // console.log(number);
            oddArrays.push(number)
        }
    }

    const oddLength = oddArrays.length;
    for(const oddArray of oddArrays){
        sum = oddArray + sum;
    }
    const average = sum / oddLength;
    return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7, 105];
const avg = oddAverage(numbers);
console.log('average of the odd numbers', avg);