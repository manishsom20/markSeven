var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector(".output-div");

var serverUrl = "https://api.funtranslations.com/translate/pirate.json";

function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("An Error has occured", error);
  alert("Something went wrong plss try later");
}

function clickHandler (){
  var inputText = txtInput.value;
    fetch(constructUrl(inputText)) 
      .then (response => response.json())
      .then (json => {
        var result = json.contents.translated;
        output.innerText = result;
        console.log(json)
      })
      .catch(errorHandler)
  }


btnTranslate.addEventListener("click",clickHandler);