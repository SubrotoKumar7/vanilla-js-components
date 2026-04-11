const generateEl = document.querySelector('#generate-btn');
const codeEl = document.querySelector('#code');
const downloadEl = document.getElementById('btn-download');
const alertEl = document.getElementById('alert');

generateEl.addEventListener('click', ()=> {
    codeEl.innerHTML = "";
    downloadEl.style.display = "none";
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
        setTimeout(()=> {
            alertEl.style.top = "10px";

            // hide toast
            setTimeout(()=> {
                alertEl.style.top = "-1000px";
            }, 2000)
        }, 2000);
    }
})

downloadEl.addEventListener('click', ()=> {
    const img = document.querySelector('#code img');

    const link = document.createElement('a');
    link.href = img.src;
    link.download = "qrcode.png";

    link.click();
})