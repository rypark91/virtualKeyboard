var textBox = document.querySelector("#box");
var buttonList = document.getElementsByClassName("bt");
var capButton = document.querySelector("#cap");
var capLight = document.querySelector("#capLight")
var backButton = document.querySelector("#back");
var shiftButton = document.querySelector("#shift");
var spaceButton = document.querySelector("#space");
var enterButton = document.querySelector("#enter");
var letterShiftSwitch = false;
var letterCapSwitch = false;

for(var i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener("click", function(e){
        textBox.textContent += this.textContent;
        if(letterShiftSwitch){
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
        toUpperCapKeys();
    }
});
enterButton.addEventListener("click", function(){
    textBox.textContent += `\n`;
});
shiftButton.addEventListener("click", toUpperShiftKeys);

function toUpperCapKeys(){
    for(var i = 0; i < buttonList.length; i++){
        buttonList[i].textContent = buttonList[i].textContent.toUpperCase();
    }
    letterCapSwitch = true;
    capLight.style.backgroundColor = "#1cfc03";
}
function toUpperShiftKeys(){
    for(var i = 0; i < buttonList.length; i++){
        buttonList[i].textContent = buttonList[i].textContent.toUpperCase();
    }
    letterShiftSwitch = true;
    capLight.style.backgroundColor = "#1cfc03";
}
function toLowerKeys(){
    for(var i = 0; i < buttonList.length; i++){
        buttonList[i].textContent = buttonList[i].textContent.toLowerCase();
    }
    letterCapSwitch = false;
    letterShiftSwitch = false;
    capLight.style.backgroundColor = "black";
}
