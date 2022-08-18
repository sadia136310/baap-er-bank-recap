

document.getElementById('btn-deposite').addEventListener('click', function () {
    const newDepositeAmount = getInputFieldValueById('deposite-field');

    const previousDepositeTotal = getTextElementValueById('deposite-total');
    console.log(previousDepositeTotal);

    // calculate new deposite Total
    const newDepositeTotal = previousDepositeTotal + newDepositeAmount;
    //  set deposit  total value 
    setTextElementValueById('deposite-total', newDepositeTotal);

    // get the previous balance total
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    setTextElementValueById('balance-total', newBalanceTotal);



})