var btnTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#txt-output")
btnTranslate.addEventListener("click", function clickFunction(){
    outputText.innerHTML=inputText.value;
})