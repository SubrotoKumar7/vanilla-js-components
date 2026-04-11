const generateEl = document.querySelector('#generate-btn');
const codeEl = document.querySelector('#code');
const downloadEl = document.getElementById('btn-download');

generateEl.addEventListener('click', ()=> {
    codeEl.innerHTML = "";
    const inputEl = document.querySelector('#input').value;

    if(inputEl.trim().length > 0){
        let qrcode = new QRCode(codeEl, {
            text: inputEl,
            width: 150,
            height: 150,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    
        const img = document.querySelector('#code img');
        
        if(img){
            downloadEl.style.display = "block";
        }
    } else{
        alert("Please writing something in the input box")
    }
})

downloadEl.addEventListener('click', ()=> {
    const img = document.querySelector('#code img');

    const link = document.createElement('a');
    link.href = img.src;
    link.download = "qrcode.png";

    link.click();
})