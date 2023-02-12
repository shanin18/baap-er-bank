const withdrawInput = document.getElementById("withdraw-input");
const withdrawAmount = document.getElementById("withdraw-amount");
const btnWithdraw = document.getElementById("btn-withdraw");

btnWithdraw.addEventListener("click", function(){
    const withdrawInputToNumber = parseFloat(withdrawInput.value);
    withdrawInput.value = "";
    if(isNaN(withdrawInputToNumber)){
        alert("একটা সংখ্যা ঢুকা আগে")
        return;
    }

    if(withdrawInputToNumber > balanceAmount.innerText){
        alert("তর বাপের এতো টাকা নাই");
        return;
    }
    const withdrawAmountToNumber = parseFloat(withdrawAmount.innerText);
    withdrawAmount.innerText = withdrawInputToNumber + withdrawAmountToNumber;
    balanceAmount.innerText = balanceAmount.innerText - withdrawInputToNumber;
    
});