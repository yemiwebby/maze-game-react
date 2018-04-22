
/**
 * @class Helper
 */
class Helper {

    /**
     * Shuffle an array and return the original
     * @param {*} array 
     */
    static shuffle(array) {
        let counter = array.length;

        while (counter > 0) {
            // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
        }

        return array
    }

    static containerSize(height, width) {
        let total = (height * width);
        return total;
    }

    static confirmComplete(moves, maxMoves) {
        if (moves === maxMoves) {
          let confirm = window.confirm(`Game over. Total moves to save princess: ${maxMoves}`);
      
          if (confirm === true ) {
            window.location.reload();
          }
        }
      
        let check = document.getElementsByClassName('active') 
        
        if (check.length === 0 ) {
          let game_complete = window.confirm(`Amazing!! You have finished the game in ${moves} moves.`);
        if (game_complete === true) {
          window.location.reload()
        }
        }
      }
}

export default Helper;