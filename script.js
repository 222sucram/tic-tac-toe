const [...displayBoard] = document.querySelectorAll(".tile")
const containerBoard = document.querySelector(".container-board")
const titlePlayerOne = document.querySelector(".player-title",".one")
const titlePlayerTwo = document.querySelector(".two")
const modal = document.querySelector(".modal")
const modalMsg = document.querySelector(".modal-msg")
const modalBtn = document.querySelector(".game-start")
let players = []


const gameBoard = (function(){
    const boardObj = {
        boardArr: ['','','',
                   '','','',
                   '','',''],
        gameCheck(players, turn) {
            let win = false
            if(this.boardArr[0] == players[turn].team && this.boardArr[1] == players[turn].team && this.boardArr[2] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[3] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[5] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[6] == players[turn].team && this.boardArr[7] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[3] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[1] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[7] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[5] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
                win = true
            } 
            if(this.boardArr[0] && this.boardArr[1] && this.boardArr[2] && this.boardArr[3] && this.boardArr[4] && this.boardArr[5] && this.boardArr[6] && this.boardArr[7] && this.boardArr[8] && win == false) {
                modalMsg.textContent = `It's a Draw!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                modalBtn.addEventListener('click', this.boardInit)
            }
        },
        boardInit() {
            boardObj.boardArr = 
            ['','','',
            '','','',
            '','','']

            containerBoard.classList.toggle("hide")
            displayBoard.forEach((tile) => {
            tile.innerHTML = ''
            tile.classList.remove('picked')
            })
            modalBtn.classList.toggle("hide")
            modalMsg.textContent = ''
        }
    }
    
    return {boardObj}
})();

const controlFlow = (function(){
    let turn = 0
    const boardUpdate = function(tile, i, player) {
        player = player[turn]
        let index = tile.classList[1]
         if(gameBoard.boardObj.boardArr[index]) {
                return
            }
        gameBoard.boardObj.boardArr[index] = player.team
        let playerPick = document.createElement('p')
        playerPick.classList.add(player.team)
        displayBoard[i].classList.add('picked')
        playerPick.textContent = gameBoard.boardObj.boardArr[i]
        tile.appendChild(playerPick)
        gameBoard.boardObj.gameCheck(players, turn)
        if(turn == 0) {
            turn = 1
        } else turn = 0
    }

    const initGame = function() {
        modalBtn.addEventListener('click', () => {
            if(!titlePlayerOne.firstChild.value || !titlePlayerTwo.firstChild.value) {
                modalBtn.textContent = "Please enter player names."
            } 

            if(titlePlayerOne.firstChild.value && titlePlayerTwo.firstChild.value) {
                titlePlayerOne.innerHTML = `<p>${titlePlayerOne.firstChild.value}</p>`
                titlePlayerTwo.innerHTML = `<p>${titlePlayerTwo.firstChild.value}</p>`
                players.push(newPlayer(titlePlayerOne.firstChild.innerHTML, 'X'))
                players.push(newPlayer(titlePlayerTwo.firstChild.innerHTML, 'O'))
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                displayBoard.forEach((tile, i) => {
                    tile.addEventListener('click', () => {
                        controlFlow.boardUpdate(tile, i, players)
                    })
                    
                })
            }
        })
    }
    
    return {
        boardUpdate,
        initGame
    }
})()


function newPlayer(name, team) {
    return {
        name: name,
        team: team
    }
}

controlFlow.initGame()