const depositInput = document.getElementById("deposit-input");
const depositAmount = document.getElementById("deposit-amount");
const balanceAmount = document.getElementById("balance-amount");

const btnDeposit = document.getElementById("btn-deposit");



btnDeposit.addEventListener("click", function () {
    const depositInputToNumber = parseFloat(depositInput.value);
    depositInput.value = "";
    if(isNaN(depositInputToNumber)){
        alert("একটা সংখ্যা ঢুকা আগে")
        return;
    }
    const depositAmountToNumber = parseFloat(depositAmount.innerText);
    const totalDepositAmount = depositInputToNumber + depositAmountToNumber;
    depositAmount.innerText = totalDepositAmount;

    const balanceAmountToNumber = parseFloat(balanceAmount.innerText);
    balanceAmount.innerText = balanceAmountToNumber + depositInputToNumber;
});

