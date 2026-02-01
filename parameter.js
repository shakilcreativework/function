function vaatKhao(){
    console.log('aso parameter shikhi');
}

// vaatKhao();

function square(number){
    if(number === 0){
        console.log('Please, give me greater then 0 --> zero');
    }else if(!number){
        console.log('Please, give me some value of numbers');
    }else{
        console.log((number * number) - number);
    }
}

square(4);
square(0);
square();