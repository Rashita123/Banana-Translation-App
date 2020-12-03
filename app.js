
var btnTranslate=document.querySelector("#btn-translate");
var output=document.querySelector(".output");
var input=document.querySelector("#input-text");
function clickEventHandler(){
    console.log(input.value);
    output.innerText="ncjdn"+"for: "+input.value;
}

btnTranslate.addEventListener("click",clickEventHandler);