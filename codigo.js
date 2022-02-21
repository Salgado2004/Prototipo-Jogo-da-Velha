var jogador1;
var jogador2;
var contador = "1";
var fim; 
var tema = "1";

function Jogar(){
    jogador1 = prompt("Digite o nome do jogador X: ");
    jogador2 = prompt("Digite o nome do jogador O: ")
    document.getElementById("vez").textContent = "Vez de " + jogador1;
    contador = "1";
}

function selecionar(idCasa){
    if(fim == null){
        var id = idCasa; 
        var verificador = document.getElementById(id).textContent;
        if(jogador1 === undefined || jogador1 == null || jogador1 == ""){
            jogador1 = "Jogador X";
        }
        if(jogador2 === undefined || jogador2 === null || jogador2 == ""){
            jogador2 = "Jogador O";
        }

        if (verificador == " "){
            if(contador == "1"){
                document.getElementById(id).textContent = "X";
                contador = "2";
                document.getElementById("vez").textContent = "Vez de " + jogador2;
            } else if(contador == "2"){
                document.getElementById(id).textContent = "O";
                contador = "1";
                document.getElementById("vez").textContent = "Vez de " + jogador1;
            }
        }else{
            alert("Casa inválida");
        }
        if (document.getElementById("c1l1").textContent == "X" && document.getElementById("c1l2").textContent == "X" && document.getElementById("c1l3").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l1").style.backgroundColor = "lightblue";
            document.getElementById("c1l2").style.backgroundColor = "lightblue";
            document.getElementById("c1l3").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            
            }
        if (document.getElementById("c2l1").textContent == "X" && document.getElementById("c2l2").textContent == "X" && document.getElementById("c2l3").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c2l1").style.backgroundColor = "lightblue";
            document.getElementById("c2l2").style.backgroundColor = "lightblue";
            document.getElementById("c2l3").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c3l1").textContent == "X" && document.getElementById("c3l2").textContent == "X" && document.getElementById("c3l3").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c3l1").style.backgroundColor = "lightblue";
            document.getElementById("c3l2").style.backgroundColor = "lightblue"; 
            document.getElementById("c3l3").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c1l1").textContent == "X" && document.getElementById("c2l1").textContent == "X" && document.getElementById("c3l1").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l1").style.backgroundColor = "lightblue"; 
            document.getElementById("c2l1").style.backgroundColor = "lightblue"; 
            document.getElementById("c3l1").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c1l2").textContent == "X" && document.getElementById("c2l2").textContent == "X" && document.getElementById("c3l2").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l2").style.backgroundColor = "lightblue";
            document.getElementById("c2l2").style.backgroundColor = "lightblue"; 
            document.getElementById("c3l2").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c1l3").textContent == "X" && document.getElementById("c2l3").textContent == "X" && document.getElementById("c3l3").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l3").style.backgroundColor = "lightblue"; 
            document.getElementById("c2l3").style.backgroundColor = "lightblue"; 
            document.getElementById("c3l3").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c1l1").textContent == "X" && document.getElementById("c2l2").textContent == "X" && document.getElementById("c3l3").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l1").style.backgroundColor = "lightblue";
            document.getElementById("c2l2").style.backgroundColor = "lightblue";
            document.getElementById("c3l3").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        if (document.getElementById("c1l3").textContent == "X" && document.getElementById("c2l2").textContent == "X" && document.getElementById("c3l1").textContent == "X"){
            document.getElementById("vez").textContent = jogador1 + " venceu a partida!";
            document.getElementById("c1l3").style.backgroundColor = "lightblue"; 
            document.getElementById("c2l2").style.backgroundColor = "lightblue"; 
            document.getElementById("c3l1").style.backgroundColor = "lightblue";
            fim = "Fim de jogo";
            document.getElementById("especial").style.visibility = "visible";
            }
        
        
            if (document.getElementById("c1l1").textContent == "O" && document.getElementById("c1l2").textContent == "O" && document.getElementById("c1l3").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l1").style.backgroundColor = "lightblue";
                document.getElementById("c1l2").style.backgroundColor = "lightblue";
                document.getElementById("c1l3").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";  
                document.getElementById("especial").style.visibility = "visible";          
                }
            if (document.getElementById("c2l1").textContent == "O" && document.getElementById("c2l2").textContent == "O" && document.getElementById("c2l3").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c2l1").style.backgroundColor = "lightblue";
                document.getElementById("c2l2").style.backgroundColor = "lightblue";
                document.getElementById("c2l3").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c3l1").textContent == "O" && document.getElementById("c3l2").textContent == "O" && document.getElementById("c3l3").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c3l1").style.backgroundColor = "lightblue";
                document.getElementById("c3l2").style.backgroundColor = "lightblue"; 
                document.getElementById("c3l3").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c1l1").textContent == "O" && document.getElementById("c2l1").textContent == "O" && document.getElementById("c3l1").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l1").style.backgroundColor = "lightblue"; 
                document.getElementById("c2l1").style.backgroundColor = "lightblue"; 
                document.getElementById("c3l1").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c1l2").textContent == "O" && document.getElementById("c2l2").textContent == "O" && document.getElementById("c3l2").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l2").style.backgroundColor = "lightblue";
                document.getElementById("c2l2").style.backgroundColor = "lightblue"; 
                document.getElementById("c3l2").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c1l3").textContent == "O" && document.getElementById("c2l3").textContent == "O" && document.getElementById("c3l3").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l3").style.backgroundColor = "lightblue"; 
                document.getElementById("c2l3").style.backgroundColor = "lightblue"; 
                document.getElementById("c3l3").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c1l1").textContent == "O" && document.getElementById("c2l2").textContent == "O" && document.getElementById("c3l3").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l1").style.backgroundColor = "lightblue";
                document.getElementById("c2l2").style.backgroundColor = "lightblue";
                document.getElementById("c3l3").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            if (document.getElementById("c1l3").textContent == "O" && document.getElementById("c2l2").textContent == "O" && document.getElementById("c3l1").textContent == "O"){
                document.getElementById("vez").textContent = jogador2 + " venceu a partida!";
                document.getElementById("c1l3").style.backgroundColor = "lightblue"; 
                document.getElementById("c2l2").style.backgroundColor = "lightblue"; 
                document.getElementById("c3l1").style.backgroundColor = "lightblue";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
                }
            else if (document.getElementById("c1l1").textContent != " " && document.getElementById("c1l2").textContent != " " && document.getElementById("c1l3").textContent != " " && document.getElementById("c2l1").textContent != " " && document.getElementById("c2l2").textContent != " " && document.getElementById("c2l3").textContent != " " && document.getElementById("c3l1").textContent != " " && document.getElementById("c3l2").textContent != " " && document.getElementById("c3l3").textContent != " "){
                document.getElementById("vez").textContent = "Deu empate! :/";
                fim = "Fim de jogo";
                document.getElementById("especial").style.visibility = "visible";
            }
    } else{
        return(0);
    }
}

function NovoJogo(){
    alert("Atenção, o tema voltará ao clássico");
    location.reload();
}

function classico(){
    tema = "1";
    document.body.style.backgroundColor = "white";
    document.getElementById("titulo").style.fontFamily = "'Lobster', cursive";
    document.getElementById("titulo").style.color = "black";
    document.getElementById("titulo").style.fontSize = "30px";
    document.getElementById("legenda").style.color = "black";
    document.getElementById("legenda").style.fontFamily = "'Lobster', cursive";
    document.getElementById("legenda").style.fontSize = "large";
    document.getElementById("tabuleiro").style.background = "black";
    document.getElementById("tabuleiro").style.borderRadius = "5px 10px";
    document.getElementById("tabuleiro").style.boxShadow = "0px 0px 0px #ff416d65";
    document.getElementById("vez").style.color = "white";
    document.getElementById("vez").style.fontFamily = "'Lobster', cursive";
    var casas = document.getElementsByClassName('buttom');
    for (var i=0; casas[i]; i++) {
        casas[i].style.background = "lightgrey";
        casas[i].style.borderRadius = "5px 10px";
        casas[i].style.boxShadow = "0px 0px 0px #2c040d65";
        casas[i].style.fontFamily = "'Pacifico', cursive";
        casas[i].style.fontSize = "50px";
    }
    var botoes = document.getElementsByClassName('btn');
    for (var i=0; botoes[i]; i++) {
        botoes[i].style.fontFamily = "'Lobster', cursive";
        botoes[i].style.background = "linear-gradient(to right, darkgray, gray)";
        botoes[i].style.boxShadow = "0 0px 0px #ff416d65";
        botoes[i].style.fontSize = "large";
    }

}

function neon(){
    tema = "2";
    document.body.style.backgroundColor = "#0f0f0f";
    document.getElementById("titulo").style.fontFamily = "'MedievalSharp', cursive";
    document.getElementById("titulo").style.color = "#ff4b2b";
    document.getElementById("titulo").style.fontSize = "30px";
    document.getElementById("legenda").style.color = "#ff4b2b";
    document.getElementById("legenda").style.fontFamily = "'MedievalSharp', cursive";
    document.getElementById("legenda").style.fontSize = "large";
    document.getElementById("tabuleiro").style.background = "linear-gradient(to right, #ff416c, #ff4b2b)";
    document.getElementById("tabuleiro").style.borderRadius = "30px";
    document.getElementById("tabuleiro").style.boxShadow = "10px 10px 5px #ff416d65";
    document.getElementById("vez").style.color = "#0f0f0f";
    document.getElementById("vez").style.fontFamily = "'MedievalSharp', cursive";
    var casas = document.getElementsByClassName('buttom');
    for (var i=0; casas[i]; i++) {
        casas[i].style.background = "white";
        casas[i].style.borderRadius = "30px";
        casas[i].style.boxShadow = "5px 5px 5px #2c040d65";
        casas[i].style.fontFamily = "'MedievalSharp', cursive";
        casas[i].style.fontSize = "50px";
    }
    var botoes = document.getElementsByClassName('btn');
    for (var i=0; botoes[i]; i++) {
        botoes[i].style.fontFamily = "'MedievalSharp', cursive";
        botoes[i].style.background = "linear-gradient(to right, #ff416c, #ff4b2b)";
        botoes[i].style.boxShadow = "0 5px 10px #ff416d65";
        botoes[i].style.fontSize = "large";
    }
}

function fresh(){
    tema = "3";
    document.body.style.backgroundColor = "#f5f5cd";
    document.getElementById("titulo").style.fontFamily = "'Allison', cursive";
    document.getElementById("titulo").style.color = "#0FB4BC";
    document.getElementById("titulo").style.fontSize = "30px";
    document.getElementById("legenda").style.color = "#0FB4BC";
    document.getElementById("legenda").style.fontFamily = "'Allison', cursive";
    document.getElementById("legenda").style.fontSize = "30px";
    document.getElementById("tabuleiro").style.background = "linear-gradient(to left, #0FB4BC, #F6E96E)";
    document.getElementById("tabuleiro").style.borderRadius = "50px";
    document.getElementById("tabuleiro").style.boxShadow = "10px 10px 15px #A0D406";
    document.getElementById("vez").style.color = "#0f0f0f";
    document.getElementById("vez").style.fontFamily = "'Allison', cursive";
    var casas = document.getElementsByClassName('buttom');
    for (var i=0; casas[i]; i++) {
        casas[i].style.background = "transparent";
        casas[i].style.borderRadius = "50px";
        casas[i].style.boxShadow = "0px 0px 0px #2c040d65";
        casas[i].style.fontFamily = "'Allison', cursive";
        casas[i].style.fontSize = "85px";
    }
    var botoes = document.getElementsByClassName('btn');
    for (var i=0; botoes[i]; i++) {
        botoes[i].style.fontFamily = "'Allison', cursive";
        botoes[i].style.background = "linear-gradient(to left, #0FB4BC, #F6E96E)";
        botoes[i].style.boxShadow = "0 5px 10px #ff416d65";
        botoes[i].style.boxShadow = "0 0px 0px #ff416d65";
        botoes[i].style.fontSize = "35px";
    }
}
