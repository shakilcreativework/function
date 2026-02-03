const heights = [65, 66, 68, 72, 78, 60, 2];

function getMin(numbers){
    // console.log(numbers);
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min;
}

const minValue = getMin(heights);
console.log('This is min value', minValue);