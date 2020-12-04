
var btnTranslate=document.querySelector("#btn-translate");
var output=document.querySelector(".output");
var input=document.querySelector("#input-text");

var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function URLConstruct(text){
    return serverURL+"?"+"text="+text;
}

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
