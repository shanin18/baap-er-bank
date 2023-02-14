document.getElementById("btn-deposit").addEventListener("click",function(){
    const newDepositValue = inputFieldValue("deposit-input");
    if(isNaN(newDepositValue)){
        alert("টাকার সংখ্যা ঢুকা আগে");
        return;
    }
    else if(newDepositValue < 0){
        alert("ভাই নেগেটিভ সংখ্যা দেছ ক্যান?");
        return;
    }
    const previousDepositValue = elementValue("deposit-amount");
    const totalDeposit = newDepositValue + previousDepositValue;
    setInnerText("deposit-amount", totalDeposit);

    const balanceAmount = elementValue("balance-amount");
    const totalBalance = newDepositValue + balanceAmount;
    setInnerText("balance-amount", totalBalance);

});
