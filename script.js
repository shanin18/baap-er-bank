const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("btn-login");

button.addEventListener("click", function(){
    const emailValue = email.value;
    const passwordValue = password.value;
    
    if(emailValue === "shanin" && passwordValue === "45102"){
        return window.location.href = "index.html"
    }
    else{
        return alert("incorrect email or password")
    }
    
})