// Balance Info item
let deepAmount = document.getElementById('acc-dep');
let withAmount = document.getElementById('acc-with');
let totlAmount = document.getElementById('acc-bal');

// Get the current amount of the account
let deepCurrentAmount = parseFloat(deepAmount.textContent);
let withCurrentAmount = parseFloat(withAmount.textContent);
let totlCurrentAmount = parseFloat(totlAmount.textContent);
console.log(totlCurrentAmount);

// Deposit && Withdrawn Inputs
let depositeInput = document.getElementById('deposit');
let withdrawInput = document.getElementById('withdraw');

// Deposit && Withdrawn Button
let depositeBtn = document.getElementById('dep-btn');
let withdrawBtn = document.getElementById('with-btn');

// Deposite the users amount
depositeBtn.addEventListener('click', function () {
    let depositeInputValue = parseFloat(depositeInput.value);
    console.log(depositeInputValue);
});

withdrawBtn.addEventListener('click', function () {
    let withdrawInputValue = parseFloat(withdrawInput.value);
    console.log(withdrawInputValue);
});