var btnTranslate=document.querySelector("#btn-translate");
var output=document.querySelector(".output");
var input=document.querySelector("#input-text");


function URLConstruct(text){
    return serverURL+"?"+"text="+text;
}

serverURL="https://api.funtranslations.com/translate/braille/unicode.json";

function errorHandler(error){
    console.log("Error occured",error);
    alert("Error Ocuured. Try after some time!");
}

function clickEventHandler(){
    var text=input.value;
    fetch(URLConstruct(text))
    .then(response => response.json())
    .then(json => {
        output.innerText = json.contents.translated;
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click",clickEventHandler);
