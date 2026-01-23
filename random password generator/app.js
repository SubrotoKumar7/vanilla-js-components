// selectors
const inputElement = document.getElementById('password');
const buttonElement = document.querySelector('.btn');
const copyElement = document.querySelector('.fa-copy');
const alertElement = document.querySelector('.alert');
const warningElement = document.querySelector('.warning');

buttonElement.addEventListener("click", ()=> {
    generatePassword();
})

copyElement.addEventListener('click', ()=> {
    inputElement.value ? 
    copyPass() :
    warningAlert();
})


function generatePassword(){
    const base = "bcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|:;'<>,.?/~`";
    const length = 17;
    let password = "";

    for(let i = 0; i < length; i++){
        const num = Math.floor(Math.random() * base.length);
        password += base.substring(num, num + 1);    
    }
    inputElement.value = password;
}

function copyPass(){
    const value = inputElement.value;
    navigator.clipboard.writeText(value);
    alertElement.classList.remove('active');
    setTimeout(()=> {
        alertElement.classList.add('active');
    },3000)
}

function warningAlert(){
    warningElement.style.top = "2%";
    setTimeout(() => {
        warningElement.style.top = "-20%";
    }, 3000);
}