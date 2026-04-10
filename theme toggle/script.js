const inputEl = document.querySelector('.input');
const bodyEl = document.querySelector('body');

inputEl.checked = localStorage.getItem('theme') === "dark" ? true : false;

changeMode();

inputEl.addEventListener('input', ()=> {
    changeMode();
    saveTheme();
});

function changeMode(){
    if(inputEl.checked){
        bodyEl.style.backgroundColor = "#222831";
    } else{
        bodyEl.style.backgroundColor = "#fff"
    }
}

function saveTheme(){
    if(inputEl.checked){
        localStorage.setItem("theme", "dark");
    } else{
        localStorage.setItem("theme", "light");
    }
}