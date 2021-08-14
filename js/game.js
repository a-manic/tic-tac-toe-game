export default class Game{

    constructor(){
        console.log("new game");
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }

    nextTurn(){
        if(this.turn == "X") this.turn = "O";

        else this.turn = "X";
    }

    makeMove(i){
        //cannot proceed with game once a winner is found
        if(this.endOfGame()) return;

        //cannot fill a cell that is already filled
        if(this.board[i]){
            this.nextTurn();
            return;
        }

        this.board[i] = this.turn; //X or O
        let winner = this.findWinningCombo();

        //allow next turn only if no winner
        if(!winner) this.nextTurn();
    }

    findWinningCombo(){
        const winningCombos = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]

        for(const combination of winningCombos){
            const [a,b,c] = combination;

            if(this.board[a] && (this.board[a] === this.board[b] && this.board[b] === this.board[c])) return combination;
     
        }

        return null;
    }

    endOfGame(){
        let winner = this.findWinningCombo();

        if(winner) return true;

        else return false;
    }
}