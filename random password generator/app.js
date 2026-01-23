// selectors
const inputElement = document.getElementById('password');
const buttonElement = document.querySelector('.btn');
const copyElement = document.getElementById('copy');
const alertElement = document.querySelector('.alert');
const warningElement = document.querySelector('.warning');
const eyeElement = document.getElementById('toggle-eye');

buttonElement.addEventListener("click", ()=> {
    generatePassword();
})

copyElement.addEventListener('click', ()=> {
    inputElement.value ? 
    copyPass() :
    warningAlert();
})

eyeElement.addEventListener('click', ()=> {
    toggleEye();
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

function toggleEye(){
    const type = inputElement.type;    

    if(type === "password"){
        eyeElement.classList.remove('fa-eye-slash');
        eyeElement.classList.add('fa-eye');
        inputElement.type = "text";
    } else{
        eyeElement.classList.remove('fa-eye');
        eyeElement.classList.add('fa-eye-slash');
        inputElement.type = "password";
    }

}