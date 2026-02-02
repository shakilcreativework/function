const birayaniKhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];


function noDuplicate(arrays){
    // check duplicate
    const unique = [];

    // console.log(arrays);
    for(const array of arrays){
        // console.log(array);
        if(!unique?.includes(array)){
            unique.push(array);
        }
    }

    // console.log(unique);
    return unique;
}

function noDuplicate(numbers){
    // check duplicate
    const unique = [];

    // console.log(arrays);
    for(const number of numbers){
        // console.log(array);
        if(!unique?.includes(number)){
            unique.push(number);
        }
    }

    // console.log(unique);
    return unique;
}

const uniqueArray = noDuplicate(birayaniKhor);
// console.log(uniqueArray);

const uniqueNumbers = noDuplicate(numbers);
console.log(uniqueNumbers);
