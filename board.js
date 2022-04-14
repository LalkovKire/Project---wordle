const data = '["cloth","demon","super","rusty","hydra","retro","flame","water","level","abuse","power","skill","queen","trust","actor","happy","lucky","under"]';
var newData = JSON.parse(data);
// Random index for json file
function randomIndex(array){
   var ranInd = Math.floor(Math.random() * array.length);
   var ranWord = array[ranInd];
   return ranWord;
};
var end = 5, start = 0 , counter = 0;
var gameAnswer = randomIndex(newData);
console.log(gameAnswer);
// Starting the board;
var getInputs = document.getElementsByTagName("input");
for (var i=5;i<getInputs.length;i++){
    getInputs[i].setAttribute("disabled","true");
}
for (var i=start;i<end;i++){
    getInputs[i].removeAttribute("class");
    getInputs[i].setAttribute("class","box2");
}

function restart() {
    start = 0;
    end = 5;
    var getScore = document.getElementById("score");
    getScore.innerHTML = 0;
    counter = 0;
    gameAnswer = randomIndex(newData);
    console.log(gameAnswer);
    for(var q=0;q<30;q++){
        getInputs[q].value = "";
      //  getInputs[q].style.backgroundColor = "#dce7e6";
        getInputs[q].setAttribute("disabled","true");
        getInputs[q].removeAttribute("class");
        getInputs[q].setAttribute("class","box");
        getInputs[q].removeAttribute("id");
        if (q < 5) {
            getInputs[q].removeAttribute("disabled");
            getInputs[q].removeAttribute("class");
            getInputs[q].setAttribute("class","box2");
        }
    }
    for(var z=start;z<end;z++){
        getInputs[z].removeEventListener("keydown", smth);
    }
    st_Board();
};
function st_Board(){
    for (var i=0;i<30;i++){
        getInputs[i].addEventListener("keydown", smth);
    }
}
function smth(e){
    if(e.key == "Enter"){
        var collectWord = "";
        for (var j=start;j<end;j++){
            if (isNaN(getInputs[j].value) == true)
            collectWord += getInputs[j].value;
            else {
                alert("Missing or invalid input");
                return;
            }
        }
        if (collectWord == gameAnswer) {
         counter++;
         var getScore = document.getElementById("score");
         getScore.innerHTML = counter;
            for (var z= start;z<end;z++) {
                getInputs[z].removeAttribute("id");
                getInputs[z].setAttribute("id","same");
                getInputs[z].style.color = "black";
                getInputs[z].setAttribute("disabled","true");
                getInputs[z].removeAttribute("class");
                getInputs[z].setAttribute("class","box");
            }
            $("#dialog2").dialog("open");
        }
        if (collectWord != gameAnswer) {
            for (var q=0;q<5;q++){
                for (var w=0;w<5;w++){
                    if ( q == w && collectWord[q] == gameAnswer[w]){
                         getInputs[start+q].removeAttribute("id");
                         getInputs[start+q].setAttribute("id","same");
                         $(getInputs[start+q]).fadeOut(400);
                        $(getInputs[start+q]).fadeIn(400);
                        break;
                    }
                 else if ( q != w && collectWord[q] == gameAnswer[w]){
                     getInputs[start+q].removeAttribute("id");
                     getInputs[start+q].setAttribute("id","diff");
                     $(getInputs[start+q]).fadeOut(400);
                     $(getInputs[start+q]).fadeIn(400);
                     break;
                    }
                }
            }
            for (var z=start;z<end;z++){
                getInputs[z].removeAttribute("class");
                getInputs[z].setAttribute("class","box");
                getInputs[z].setAttribute("disabled","true");
                getInputs[z].style.color = "black";
            }
            start += 5;
            end += 5;
            if (end <= 30) {
            for (var x=start;x<end;x++){
                getInputs[x].removeAttribute("class");
                getInputs[x].setAttribute("class","box2");
                getInputs[x].removeAttribute("disabled");
            }
         }
         if (start > 25){
            $("#dialog3").dialog("open");
            var getLosingWord = document.getElementById("correctWord");
            getLosingWord.innerHTML = gameAnswer;
         }
        }
    }
};
st_Board();
function newBoard(){
    start = 0;
    end = 5;
    gameAnswer = randomIndex(newData);
    console.log(gameAnswer);
    for(var q=0;q<30;q++){
        getInputs[q].value = "";
      //  getInputs[q].style.backgroundColor = "#dce7e6";
        getInputs[q].setAttribute("disabled","true");
        getInputs[q].removeAttribute("class");
        getInputs[q].setAttribute("class","box");
        getInputs[q].removeAttribute("id");
        if (q < 5) {
            getInputs[q].removeAttribute("disabled");
            getInputs[q].removeAttribute("class");
            getInputs[q].setAttribute("class","box2");
        }
    }
    for(var z=start;z<end;z++){
        getInputs[z].removeEventListener("keydown", smth);
    }
    st_Board();
};