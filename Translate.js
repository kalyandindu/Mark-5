var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")
var serverUrl= "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function appendInputTextToUrl(text){
    return serverUrl + "?text=" + text;
}

btnTranslate.addEventListener("click", function clickFunction(){
    fetch(appendInputTextToUrl(inputText)).then(Response => Response.json()).then(json => console.log(json));
})



