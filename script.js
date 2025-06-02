// Variáveis
var player
var playerPosition
var square
var vencedor = null
var playerSelected = document.getElementById('jogador-selecionado')
var winnerSelected = document.getElementById('vencedor-selecionado')
var squares = document.getElementsByClassName('square')
var pointX = 0
var pointO = 0
var placarX = document.getElementById('pontuacao-x')
var placarO = document.getElementById('pontuacao-o')
var player1 = ''// = prompt('Nome do Jogador 1 [ X ]:')
var player1Field = document.getElementById('jogador-x')
var player2 = '' // = prompt('Nome do Jogador 2 [ O ]:')
var player2Field = document.getElementById('jogador-o')
var winnerPlayer = document.getElementById('jogador-vencedor')
var playerField = document.getElementById('jogador')

if (player1 !== "" && player2 !== "") {
    player1Field.innerHTML = player1
    player2Field.innerHTML = player2
} else if (player1 !== '' && player2 === ''){
    player2 = 'Jogador 2'
    player1Field.innerHTML = player1
    player2Field.innerHTML = player2
} else if (player1 === '' && player2 !== '') {
    player1 = 'Jogador 1'
    player1Field.innerHTML = player1
    player2Field.innerHTML = player2
} else {
    player1 = 'Jogador 1'
    player2 = 'Jogador 2'
    player1Field.innerHTML = player1
    player2Field.innerHTML = player2
}

changePlayer('X', 1)

// Função para selecionar o quadrado
function selectionSquare (id) {
    
    if (vencedor !== null) {
        return
    }

    square = document.getElementById(id)

    if (square.innerHTML !== '-') {
        return
    }

    square.innerHTML = player
    square.style.color = 'black'

    if (player === 'X') {
        player = 'O'
        playerPosition = 2
    } else {
        player = 'X'
        playerPosition = 1
    }

    changePlayer(player, playerPosition)
    checkWinner()
}

// Função para trocar o jogador
function changePlayer(valor, num) {
    player = valor

    if (num === 1) {
        playerField.innerHTML = `${player1}: `
    } else {
        playerField.innerHTML = `${player2}: `
    }

    playerSelected.innerHTML = player
}

// Função para checar vencedor
function checkWinner() {
    if (checkSquare(squares[0], squares[1], squares[2])) {
        changeColorSquare(squares[0], squares[1], squares[2])
        changeWinner(squares[0])
        return
    }

    if (checkSquare(squares[3], squares[4], squares[5])) {
        changeColorSquare(squares[3], squares[4], squares[5])
        changeWinner(squares[3])
        return
    }

    if (checkSquare(squares[6], squares[7], squares[8])) {
        changeColorSquare(squares[6], squares[7], squares[8])
        changeWinner(squares[6])
        return
    }
    
    if (checkSquare(squares[0], squares[3], squares[6])) {
        changeColorSquare(squares[0], squares[3], squares[6])
        changeWinner(squares[3])
        return
    }

    if (checkSquare(squares[1], squares[4], squares[7])) {
        changeColorSquare(squares[1], squares[4], squares[7])
        changeWinner(squares[4])
        return
    }

    if (checkSquare(squares[2], squares[5], squares[8])) {
        changeColorSquare(squares[2], squares[5], squares[8])
        changeWinner(squares[5])
        return
    }

    if (checkSquare(squares[0], squares[4], squares[8])) {
        changeColorSquare(squares[0], squares[4], squares[8])
        changeWinner(squares[8])
        return
    }

    if (checkSquare(squares[2], squares[4], squares[6])) {
        changeColorSquare(squares[2], squares[4], squares[6])
        changeWinner(squares[2])
    }
}

// 
function changeWinner(winner) {
    vencedor = winner.innerHTML
    winnerSelected.innerHTML = vencedor

    if (vencedor === 'X') {
        pointX++;
        placarX.innerHTML = pointX
        winnerPlayer.innerHTML = `Parabéns, ${player1.innerHTML}!`
    } else {
        pointO++;
        placarO.innerHTML = pointO
        winnerPlayer.innerHTML = `Parabéns, ${player2.innerHTML}!`
    }
}

//
function checkSquare(square1, square2, square3) {
    var equal = false

    if (square1.innerHTML !== '-' && square1.innerHTML === square2.innerHTML && square2.innerHTML === square3.innerHTML) {
        equal = true
    }

    return equal
}

// Função para alterar a cor de fundo dos quadrados ganhadores
function changeColorSquare(square1, square2, square3) {
    square1.style.background = 'lightgreen'
    square2.style.background = 'lightgreen'
    square3.style.background = 'lightgreen'
}

// Função de Reset no jogo
function reset() {
    vencedor = null
    winnerSelected.innerHTML = ''
    winnerPlayer.innerHTML = ''

    for (var i = 0; i < 9; i++) {
        squares[i].style.background = 'antiquewhite'
        squares[i].style.color = 'transparent'
        squares[i].innerHTML = '-'
    }

    changePlayer('X', 1)
}