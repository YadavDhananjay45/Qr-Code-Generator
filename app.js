const inputText=document.getElementById('input-box');
const generateBtn =document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const imageContainer = document.querySelector(".body");
const sizes = document.getElementById('size');


let qrSize=sizes.value;

generateBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    isEmpty();
});

sizes.addEventListener('change',(e)=>{
    qrSize=e.target.value;
    isEmpty();
});

downloadBtn.addEventListener("click",()=>{
    let img= document.querySelector('.body img');

    if(!img !==null){
        let imgAttrb =img.getAttribute('src');
        downloadBtn.setAttribute("href",imgAttrb);
    }
    else{
        downloadBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }

})
function generateBarcode(){
    imageContainer.innerHTML="";
    new QRCode(imageContainer,{
        text:inputText.value,
        height:qrSize,
        width:qrSize,
        colorLight:"#fff",
        colorDark:"#000",
    })
}

function isEmpty(){
    if(inputText.value.length>0){
        generateBarcode();
    }
    else{
        alert("please enter the text or paste your link")
    }
};
