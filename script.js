const [...displayBoard] = document.querySelectorAll(".tile")
const containerBoard = document.querySelector(".container-board")
const modal = document.querySelector(".modal")
const modalMsg = document.querySelector(".modal-msg")

const gameBoard = (function(){
    const boardObj = {
        boardArr: ['','','',
                   '','','',
                   '','',''],
        gameCheck(players, turn) {
            console.log(players[turn].team)
            if(this.boardArr[0] == players[turn].team && this.boardArr[1] == players[turn].team && this.boardArr[2] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[3] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[5] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[6] == players[turn].team && this.boardArr[7] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[3] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[1] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[7] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[5] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[0] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[8] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
            if(this.boardArr[2] == players[turn].team && this.boardArr[4] == players[turn].team && this.boardArr[6] == players[turn].team){
                modalMsg.textContent = `${players[turn].name} is the Winner!`
            }
        },
        boardInit() {
            boardObj.boardArr = 
            ['','','',
            '','','',
            '','','']

            displayBoard.forEach((tile) => {
                
            })
        }
    }
    
    return {boardObj}
})();

const controlFlow = (function(){
    const players = [newPlayer('Alex', 'X'), newPlayer('Esther', 'O')]
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
    return {
        players,
        boardUpdate
    }
})()


function newPlayer(name, team) {
    return {
        name: name,
        team: team
    }
}


displayBoard.forEach((tile, i) => {
    tile.addEventListener('click', () => {
        controlFlow.boardUpdate(tile, i, controlFlow.players)
    })
    
})

