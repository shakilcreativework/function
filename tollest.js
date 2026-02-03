const heights = [65, 66, 68, 72, 78, 60];

// const max = Math.max(heights);


function getMax(numbers){
    let max = numbers[0];
    // console.log(numbers);
    for(const num of numbers){
        // console.log(num);
        if(num > max){
            max = num;
        }
    }
    return max;
}

const maxValue = getMax(heights);
console.log('max value is', maxValue);