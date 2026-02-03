function woodQuantity(chairQuantity = 0, tableQuantity = 0, bedQuantity = 0){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const bedTotalWood = bedQuantity * perBedWood;

    const allWoods = chairTotalWood + tableTotalWood + bedTotalWood;

    return `Per chair wood need ${chairTotalWood}, Per table wood need ${tableTotalWood}, and Per bed wood need ${bedTotalWood} all most need total woods ${allWoods}`;
}

const totalWood = woodQuantity(3, 6, 7);
console.log(totalWood);