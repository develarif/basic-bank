// Balance Info item
let deepAmount = document.getElementById('acc-dep');
let withAmount = document.getElementById('acc-with');
let totlAmount = document.getElementById('acc-bal');

// Get the current amount of the account
let deepCurrentAmount, withCurrentAmount, totlCurrentAmount;

// Deposit && Withdrawn Inputs
let depositeInput = document.getElementById('deposit');
let withdrawInput = document.getElementById('withdraw');

// Deposit && Withdrawn Button
let depositeBtn = document.getElementById('dep-btn');
let withdrawBtn = document.getElementById('with-btn');

// Deposite the users amount
depositeBtn.addEventListener('click', function () {
    let depositeInputValue = parseFloat(depositeInput.value);
    deepCurrentAmount = parseFloat(deepAmount.textContent);
    totlCurrentAmount = parseFloat(totlAmount.textContent);
    if (depositeInputValue > 0) {
        deepAmount.textContent = deepCurrentAmount + depositeInputValue;
        totlAmount.textContent = totlCurrentAmount + depositeInputValue;
        depositeInput.value = '';
    } else {
        alert('Thapramu Ekdom, Faijlami koro?');
    }
});


// Withdraw the users amount
withdrawBtn.addEventListener('click', function () {
    let withdrawInputValue = parseFloat(withdrawInput.value);
    withCurrentAmount = parseFloat(withAmount.textContent);
    totlCurrentAmount = parseFloat(totlAmount.textContent);

    if (withdrawInputValue <= totlCurrentAmount && withdrawInputValue >= 1) {
        withAmount.textContent = withCurrentAmount + withdrawInputValue;
        totlAmount.textContent = totlCurrentAmount - withdrawInputValue;
        withdrawInput.value = '';
    } else {
        alert('Please input a valid number.');
    }

});