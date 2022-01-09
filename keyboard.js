var textBox = document.querySelector("#box");
var buttonList = document.getElementsByClassName("bt");
var capButton = document.querySelector("#cap");
var capLight = document.querySelector("#capLight")
var backButton = document.querySelector("#back");
var shiftButton = document.querySelector("#shift");
var spaceButton = document.querySelector("#space");
var enterButton = document.querySelector("#enter");
var letterCapSwitch = false;

for(var i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", function(e){
        textBox.textContent += this.textContent;
        if(letterCapSwitch){
            toLowerKeys();
        }
    });
    
}
backButton.addEventListener("click", function(){
    if(textBox.textContent.length !== 0){
        textBox.textContent = textBox.textContent.slice(0, -1);
    }
});
spaceButton.addEventListener("click", function(){
    textBox.textContent += ` `;
});
capButton.addEventListener("click", function(){
    if(letterCapSwitch){
        toLowerKeys();
    }
    else{
        toUpperKeys();
    }
});
enterButton.addEventListener("click", function(){
    textBox.textContent += `\n`;
});
shiftButton.addEventListener("click", toUpperKeys);

function toUpperKeys(){
    for(var i = 0; i < buttonList.length; i++){
        buttonList[i].textContent = buttonList[i].textContent.toUpperCase();
    }
    letterCapSwitch = true;
    capLight.style.backgroundColor = "#1cfc03";
}
function toLowerKeys(){
    for(var i = 0; i < buttonList.length; i++){
        buttonList[i].textContent = buttonList[i].textContent.toLowerCase();
    }
    letterCapSwitch = false;
    capLight.style.backgroundColor = "black";
}
