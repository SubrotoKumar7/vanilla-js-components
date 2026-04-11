const generateEl = document.querySelector('#generate-btn');
const codeEl = document.querySelector('#code');
const downloadEl = document.getElementById('btn-download');

generateEl.addEventListener('click', ()=> {
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

    const img = document.querySelector('#code img');
    
    if(img){
        downloadEl.style.display = "block";
    }
})

downloadEl.addEventListener('click', ()=> {
    const img = document.querySelector('#code img');

    const link = document.createElement('a');
    link.href = img.src;
    link.download = "qrcode.png";

    link.click();
})