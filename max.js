const disha = 45;
const salman = 85;

if(disha > salman){
    console.log('Disha will get the strawberry');
}
else {
    console.log('Salman will get the strawberry');
}

// inside a function
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }else{
        return num2;
    }
}

const result = getMax(disha, salman);
console.log(result);