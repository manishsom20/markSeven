var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var output = document.querySelector(".output-div");

var serverUrl = "https://.tanaypratap.repl.co/translate/yoda.json";

function constructUrl(text) {
  return serverUrl + "?" + "text=" + text;
}

function errorHandler(error) {
  console.log("An Error has occured", error);
  alert("Something went wrong plss try later");
}

function clickHandler (){
  var input = txtInput.Value;

    fetch(constructUrl(input)) 
      .then (response => response.json())
      .then (json => {
        output.innerText = json.contents.translated
      })
      .catch(errorHandler)
  }


btnTranslate.addEventListener("click",clickHandler);