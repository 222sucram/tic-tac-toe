const [...displayBoard] = document.querySelectorAll(".tile")

const gameBoard = (function(){
    const boardObj = {
        boardArr: ['','','',
                   '','','',
                   '','','']
    }
    return {boardObj}
})();

const controlFlow = (function(){
    const players = [newPlayer('Alex', 'X'), newPlayer('Esther', 'O')]
    let turn = 0
    const boardUpdate = function(tile, i, player) {
        player = player[turn]
        console.log(player)
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

// loop thru current display


displayBoard.forEach((tile, i) => {
    tile.addEventListener('click', () => {
        controlFlow.boardUpdate(tile, i, controlFlow.players)
    })
    
})

// compare current i of array with the array obj in data

// let index = tile.classList[1]
// tile.addEventListener('click', (e) => {
//     if(gameBoard.boardObj.boardArr[index]) {
//         return
//     }
//     gameBoard.boardObj.boardArr[index] = 'X'
//     let playerPick = document.createElement('p')
//     playerPick.classList.add('team')
//     playerPick.textContent = gameBoard.boardObj.boardArr[i]
//     tile.appendChild(playerPick)
// })