var btnTranslate=document.querySelector("#btn-translate");
var output=document.querySelector(".output");
var input=document.querySelector("#input-text");

var brailleButton=document.querySelector("#braille-button")
var signButton=document.querySelector("#sign-button")
var minionButton=document.querySelector("#minion-button")

var brailleURL="https://api.funtranslations.com/translate/braille/unicode.json";
var minionURL="https://api.funtranslations.com/translate/minion.json";

var serverURL=brailleURL;
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
    .then(json => console.log(json));
    // .then(json => {
    //     output.innerText = json.contents.translated;
    // })
    console.log("helo");
    .catch(errorHandler)
}

brailleButton.addEventListener("click",serverURL=brailleURL);
minionButton.addEventListener("click",serverURL=minionURL);
btnTranslate.addEventListener("click",clickEventHandler);
