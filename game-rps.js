function fullscreen() {
      tst = document.querySelector(`.result`);
      tst.innerHTML = player_move();
      fn = document.querySelector(`.wrapper`);
      fn.classList.add(`blk`)

      
      
      console.log(fn.classList.add(`blk`));
    }  
    scores = JSON.parse(localStorage.getItem(`final_scores`)) || {
      wins: 0,
      losses: 0,
      draws: 0
    };
   
    function reset() {
      scores = {
        wins: 0,
        losses: 0,
        draws: 0
      };
      localStorage.removeItem(`final_scores`);
      update_score_board();
      
    }
      
    // function game_moves(move) {
    //   player_move(move);
    //   let game_move = document.querySelector(`.game_moves`);

    //   if (move === `rock`) {
    //     game_move.innerHTML = `Player (${move}) - Computer  (${computerMove})`
    //   } else if (move === `paper`) {
    //     game_move.innerHTML = `Player (${move}) - Computer  (${computerMove})`
    //   } else if (move === `scissors`) {
    //     game_move.innerHTML = `Player (${move}) - Computer  (${computerMove})`
    //   }
  
    // };
    function game_result() {
      let game_results = document.querySelector(`.result`);
      game_results.innerText = `${result}`;

      result == `you win` ?  game_results.classList.add(`green`) : game_results.classList.remove(`green`);

      result == `you lose` ?  game_results.classList.add(`red`) : game_results.classList.remove(`red`);

      result == `draw` ?  game_results.classList.add(`blue`) : game_results.classList.remove(`blue`);
    };

    function update_score_board() {
      let score_board = document.querySelector(`.score_board`);
        score_board.innerText = `Wins: ${scores.wins} Looses: ${scores.losses} Draws: ${scores.draws}`;
    }
    
    update_score_board();

    function pick_computer_move() {
      //computerMove = ``;
      randomMove = Math.random();
      if (randomMove >= 0 && randomMove < 1/3 ) {
        computerMove =`rock`;
        } 
      else if (randomMove >= 1 / 3 && randomMove < 2 / 3 ) {
      computerMove =`paper` ;
      }
      else if (randomMove >= 2 / 3 &&  randomMove < 1 ) {
        computerMove =`scissors` ;
      };
    }

    function player_move(move) {
      pick_computer_move();

      if (move === `rock`) {
        
        if (computerMove === `rock`) {
          result = `draw`;           
        }
        else if (computerMove === `paper`) {
          result = `you lose`;
        }
        else if (computerMove === `scissors`) {
         result = `you win`; 
        };
      } 
      else if (move === `paper`) {
        
        if (computerMove === `rock`) {
          result = `you win`;           
        }
        else if (computerMove === `paper`) {
          result = `draw`;
        }
        else if (computerMove === `scissors`) {
         result = `you lose`; 
        };
      }
      else if (move === `scissors`) {
        
        if (computerMove === `rock`) {
          result = `you lose`;           
        }
        else if (computerMove === `paper`) {
          result = `you win`;
        }
        else if (computerMove === `scissors`) {
         result = `draw`; 
        };
      }  
      
      if (result === `you win`) {
        scores.wins +=1;
      }
       else if (result === `you lose`) {
         scores.losses += 1; 
       }
       else if (result === `draw`) {
         scores.draws += 1; 
       }

      localStorage.setItem(`final_scores`, JSON.stringify(scores));
      update_score_board();
      game_result() ;
      let game_move = document.querySelector(`.game_moves`);
       game_move.innerHTML = `Player <img  class="gm1" src="img/${move}-emoji.png"> computer <img src="img/${computerMove}-emoji.png">`;
       
       
    } 
   
  function auto_play() {
    
  }