function getElementValue(id){
    const element = document.getElementById(id).value;
    return element;
}

const btn = document.getElementById("btn-login");
btn.addEventListener("click",function(){
    if(getElementValue("email") == "shanin" && getElementValue("password") == 45102){
        window.location.href = "main.html"
    }
    else{
        alert("তুই পাসওয়ার্ড ভুইল্লা গেছোছ মনে কইরা আবার দে");
    }
});
