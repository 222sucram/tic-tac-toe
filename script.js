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
        win: false,  
        gameCheck(players, turn) {
            if(this.boardArr[0] == players[turn].team && this.boardArr[1] == players[turn].team && this.boardArr[2] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[3] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[5] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[6] == players[turn].team && this.boardArr[7] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[3] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[1] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[7] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[5] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            } 
            if(this.boardArr[0] && this.boardArr[1] && this.boardArr[2] && this.boardArr[3] && this.boardArr[4] && this.boardArr[5] && this.boardArr[6] && this.boardArr[7] && this.boardArr[8] && this.win == false) {
                modalMsg.textContent = `It's a Draw!`
                modalBtn.textContent = 'Play Again?'
                modalBtn.classList.toggle("hide")
                containerBoard.classList.toggle("hide")
                this.win = true
                modalBtn.addEventListener('click', this.boardInit)
            }

            if(turn == 0 && players[1].name == 'cpu' && this.win == false) {
                let boardNum = controlFlow.randNum()
    
                const cpu = function(num) {
                let cpuSelect = players[1].team
                let addCpu = document.createElement('p')
                addCpu.classList.add(`${cpuSelect}`)
                displayBoard[num].classList.add('picked')
                gameBoard.boardObj.boardArr[num] = cpuSelect
                addCpu.textContent = cpuSelect
                displayBoard[num].appendChild(addCpu)
                turn = 0
                const cpuPick = setTimeout(() => {gameBoard.boardObj.gameCheck(players, 1)}, 600)
                
                // gameBoard.boardObj.gameCheck(players, 1)
                }

                cpu(boardNum)
            }
            
            //check if cpu and make move

            if(this.win == true) {
                return true
            } 
            if(this.win == false) {
                return false
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
            gameBoard.boardObj.win = false
        }
    }
    
    return {boardObj}
})();

const controlFlow = (function(){
    let turn = 0

    const randNum = function() {
        let available = false
        let num

        while (available == false) {
           num = Math.floor(Math.random() * (9 - 0) + 0)
            if(gameBoard.boardObj.boardArr[num] == '') {
                available = true
            }
        }
        return num
     }

    const boardUpdate = function(tile, i, player) {
        let currPlayer = player[turn]

        let index = tile.classList[1]
         if(gameBoard.boardObj.boardArr[index]) {
                return
            }
        gameBoard.boardObj.boardArr[index] = currPlayer.team
        let playerPick = document.createElement('p')
        playerPick.classList.add(currPlayer.team)
        displayBoard[i].classList.add('picked')
        playerPick.textContent = gameBoard.boardObj.boardArr[i]
        tile.appendChild(playerPick)
        gameBoard.boardObj.gameCheck(players, turn)
        
        if(turn == 0) {
            turn = 1
        } else turn  = 0

        if(turn == 1 && player[1].name == 'cpu') {
            turn = 0
        }
       
    }

    const initGame = function() {
        modalBtn.addEventListener('click', () => {
            if(!titlePlayerOne.firstChild.value || !titlePlayerTwo.firstChild.value) {
                modalBtn.textContent = "Please enter player names."
            } 

            if(titlePlayerOne.firstChild.value && titlePlayerTwo.firstChild.value) {
                titlePlayerOne.innerHTML = `<p>${titlePlayerOne.firstChild.value}</p>`
                titlePlayerTwo.innerHTML = `<p>${titlePlayerTwo.firstChild.value}</p>`
                players.push(newPlayer(titlePlayerOne.firstChild.innerHTML, 'X', true))
                players.push(newPlayer(titlePlayerTwo.firstChild.innerHTML, 'O', false))
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
        initGame,
        randNum,
        turn
    }
})()


function newPlayer(name, team, currTurn) {
    return {
        name: name,
        team: team,
        currTurn: currTurn
    }
}

controlFlow.initGame()

// to do
// add a way to track the turn consistently
// at each trn check if cpu is a player
// after a win check if its cpu turn and add input if so



// if(turn == 0) {
//     turn = 1
//     let boardNum = this.randNum()
    
//      const cpu = function(num) {
//      let cpuSelect = player[turn].team
//      let addCpu = document.createElement('p')
//      addCpu.classList.add(`${cpuSelect}`)
//      displayBoard[num].classList.add('picked')
//      gameBoard.boardObj.boardArr[num] = cpuSelect
//      addCpu.textContent = cpuSelect
//      displayBoard[num].appendChild(addCpu)
//      turn = 0
//      gameBoard.boardObj.gameCheck(players, 1)
//     }

//      if(gameBoard.boardObj.gameCheck(players, turn) == false) {
//          cpu(boardNum)
//     }
    
// } else turn = 0