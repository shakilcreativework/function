function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    return `Per chair wood need ${chairTotalWood}, Per table wood need ${tableTotalWood}, and Per bed wood need ${bedTotalWood}`;
}

const totalWood = woodQuantity(3, 6, 7);
console.log(totalWood);