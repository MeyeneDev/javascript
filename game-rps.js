function gg(x,y) {
    return (y == undefined) ? document.querySelector(x) : document.querySelectorAll(x) 
 }
let scores = JSON.parse(localStorage.getItem(`final_scores`)) ||
  {
      wins: 0,
      losses: 0,
      draws: 0
  };
//let result = '';
const ar_reset = () => {
  scores = {
    wins: 0,
    losses: 0,
    draws: 0
  };
  localStorage.removeItem(`final_scores`);
  update_score_board();
} 
//reset button
gg(`.reset`).onclick = () => ar_reset();

function game_result() {
  const game_results = gg(`.result`);
  game_results.innerText = `${result}`;

  (result === `you win`) ?  game_results.classList.add(`green`) : game_results.classList.remove(`green`);

  (result === `you lose`) ?  game_results.classList.add(`red`) : game_results.classList.remove(`red`);

  (result === `draw`) ?  game_results.classList.add(`blue`) : game_results.classList.remove(`blue`);

  setTimeout(() => game_results.innerHTML ='', 700);
};

function update_score_board() {
 // const score_board = gg(`.score_board`);
    scoreBoard.innerText = `Wins ( ${scores.wins} ) - Draws ( ${scores.draws} ) - Looses ( ${scores.losses} )`;
}    
update_score_board();

function pick_computer_move() {
  //computerMove = ``;
 let randomMove = Math.random();

  // Computer move
  computerMove =  (randomMove >= 0 && randomMove < 1/3 ) &&  `rock`||
                  (randomMove >= 1 / 3 && randomMove < 2 / 3 ) && `paper`||
                  (randomMove >= 2 / 3 &&  randomMove < 1 ) && `scissors`
}

function player_move(move) {
  pick_computer_move();

  // Result
  switch(move) {
    case `rock`:
      result = (computerMove === `rock`) && `draw` ||                  
                (computerMove === `paper`) && `you lose` ||
                (computerMove === `scissors`) && `you win`
    break;
    case `paper`:
      result = (computerMove === `rock`) && `you win` ||  
                (computerMove === `paper`) && `draw` ||         
                (computerMove === `scissors`) && `you lose`
    break;
    case `scissors`:
      result = (computerMove === `rock`) && `you lose` ||
                (computerMove === `paper`) && `you win` || 
                (computerMove === `scissors`) && `draw`
  };
  
  //Score-board Update
  (result === `you win`) && scores.wins++ ||
  (result === `you lose`) && scores.losses++ ||
  (result === `draw`) && scores.draws++;

  localStorage.setItem(`final_scores`, JSON.stringify(scores));
  
  update_score_board();
  game_result() ;
  //let game_move = gg(`.game_moves`);
  //gameMove is global(window) variable gotten from id of a html div element
  gameMove.innerHTML = `Player <img  class="gm1"  src="img/${move}-emoji.png"> computer <img src="img/${computerMove}-emoji.png">`;
  setTimeout(() => gameMove.innerHTML = '', 700);  
} 

//from this
// gg(`.scissors`).onclick = () => {player_move(`scissors`)};
// gg(`.paper`).onclick = () => {player_move(`paper`)};
// gg(`.rock`).onclick = () => {player_move(`rock`)};
//to Thisssss
gg('.btn',1).forEach(e => e.onclick = ev => player_move(ev.target.title || ev.target.alt));

window.onkeydown = (event) => {
  (event.key === 'a') && player_move(`rock`) ||
  (event.key === 's') && player_move(`paper`) ||
  (event.key === 'd') && player_move(`scissors`) ||
  (event.key === `r`) &&  ar_reset(); 
}

     
    
   
  