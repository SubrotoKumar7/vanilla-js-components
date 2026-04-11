const buttonEl = document.querySelector('#generate-btn');
const codeEl = document.querySelector('#code');

buttonEl.addEventListener('click', ()=> {
    codeEl.innerHTML = "";
    const inputEl = document.querySelector('#input').value;

    let qrcode = new QRCode(codeEl, {
        text: inputEl,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
})