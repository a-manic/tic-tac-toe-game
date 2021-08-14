import Game from "./game.js"
import GameView from "./GameView.js"

let game = new Game();
let gv = new GameView();

gv.updateBoard(game);

document.querySelector(".restart").addEventListener("click", () => {
    onRestartClick();
})


let tiles = document.querySelectorAll(".board-tile");

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i){
    //make move

    game.makeMove(i);

    //update board

    gv.updateBoard(game);

}

function onRestartClick(){
    game = new Game();
    gv.updateBoard(game);
}

