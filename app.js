
const redInput=document.getElementById("red"),greenInput=document.getElementById("green"),blueInput=document.getElementById("blue"),redText=document.getElementById("red-text"),greenText=document.getElementById("green-text"),blueText=document.getElementById("blue-text");let red=redInput.value,green=greenInput.value,blue=blueInput.value;redText.innerText=red,greenText.innerText=green,blueText.innerText=blue;const updateColor=(e,t,n)=>{let r=`rgb(${e},${t},${n})`;document.body.style.backgroundColor=r};redInput.addEventListener("input",e=>{red=redInput.value,redText.innerText=red,updateColor(red,green,blue)}),greenInput.addEventListener("input",e=>{green=e.target.value,greenText.innerText=green,updateColor(green,green,blue)}),blueInput.addEventListener("input",e=>{blue=e.target.value,blueText.innerText=blue,updateColor(red,green,blue)});