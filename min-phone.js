const prices = [20000, 16000, 50000, 100000, 12000, 30000, 35000];


function getMinPrice(phonePrices){
    let minPrice = phonePrices[0];
    
    for(const num of phonePrices){
        // console.log(num);
        if(num < minPrice){
            minPrice = num;
        }
    }

    return minPrice;
}

const minPricePhone = getMinPrice(prices);
console.log('Minimum price of phone', minPricePhone);