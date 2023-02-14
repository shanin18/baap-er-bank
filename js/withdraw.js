document.getElementById("btn-withdraw").addEventListener("click", function(){
    const newWithdrawValue = inputFieldValue("withdraw-input");
    const balanceAmount = elementValue("balance-amount");
    if(isNaN(newWithdrawValue)){
        alert("টাকার সংখ্যা ঢুকা আগে");
        return;
    }
    else if(newDepositValue < 0){
        alert("ভাই নেগেটিভ সংখ্যা দেছ ক্যান?");
    }
    else if(newWithdrawValue > balanceAmount){
        alert("তর বাপের এতো টাকা নাই");
        return;
    }
    
    const previousWithdrawValue = elementValue("withdraw-amount");
    const totalWithdrawValue = newWithdrawValue + previousWithdrawValue;
    setInnerText("withdraw-amount", totalWithdrawValue);

    const remainingBalance = balanceAmount - newWithdrawValue;
    setInnerText("balance-amount", remainingBalance);
})