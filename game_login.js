
player1Nome = localStorage.getItem("player1Nome");
player2Nome = localStorage.getItem("player2Nome");

player1pontos = 0;
player2pontos = 0;

document.getElementById("player1Nome").innerHTML = player1Nome + " : ";
document.getElementById("player2Nome").innerHTML = player2Nome + " : ";

document.getElementById("player1pontos").innerHTML = player1pontos + " : ";
document.getElementById("player2pontos").innerHTML = player2pontos + " : ";

document.getElementById("playerQuestionador").innerHTML = "Turno de Pergunta - " + player1Name ;
document.getElementById("playerRespondedor").innerHTML = "Turno de Resposta - " + player2Name ;

function send()
{
    getWord = document.getElementById("word").value;
    word = getWord.toLowerCase();
    console.log("palavra em caixa baixa = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lengthDivide2 = Math.floor(word.length/2);
    charAt2 = word.charAt(lengthDivide2)
    console.log(charAt2);

    lengthMinus1 = word.length - 1;
    charAt3 = word.charAt(lengthMinus1);
    console.log(charAt3);

    removeCharAt1 = word.replace(charAt1, "_");
    removeCharAt2 = removeCharAt1.replace(charAt2, "_");
    removeCharAt3 = removeCharAt2.replace(charAt3, "_");
    console.log(removeCharAt3);

    question_word = "<h4 id='wordDislay'> P. " + removeCharAt3 + "</h4>";
    inputBox = "<br>Resposta : <input type='text' id='inputCheckBox'>";
    checkButton = "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row = question_word + inputBox + checkButton ;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

function addUser()
{
    player1Nome = document.getElementById("player1NameInput").value;
    player2Nome = document.getElementById("player2NameInput").value;

    localStorage.setItem("player1Nome", player1Nome);
    localStorage.setItem("player2Nome", player2Nome);

    window.location = "game_page.html";
}