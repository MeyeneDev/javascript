const s = new Array();
let s0 = s2 = s3 = s7 = false;
let s1 = s4 = s5 = s6 = s8 = true;
s.push(s0, s1, s2, s3, s4, s5, s6, s7, s8);
let selseat = '';
Break = 1 ;
function eachSeat(seatNum, description, statusClass, status_Class) {
  return (statusClass === undefined) ? 
  ( 
    document.querySelector(`.s${seatNum}`).classList.remove(status_Class),
    document.querySelector(`.s${seatNum}`).id = description
  )
  :
  (
    document.querySelector(`.s${seatNum}`).classList.add(statusClass),
    document.querySelector(`.s${seatNum}`).id = description
  )
}

function ini_seat(){ 
  for (let i = 0; i < s.length; i++) {
    (s[i]) ? eachSeat(i, `seat-available`,`available`) : eachSeat(i, `seat-unavailable`, `unavailable`);
    document.querySelector(`.s${i}`).onclick = () => showSeatStatus(i);
  }  
  getSeatStatus = (num) => {
    return ((selseat != '') && (num == selseat || num == (selseat + 1) || num == (selseat + 2))) && `Yours`
    || 
    (s[num % s.length]) && `Available`
    || 
    `Unavailable`
    // if(selseat != '' &&
    // (num == selseat || num == (selseat + 1) || num == (selseat + 2))) 
    //  return `Yours`;
    // else if( s[num % s[i].length])
    //  return `Available`;
    // else 
    //   return `Unavailable` 
  }
  
  function showSeatStatus(num) {
    alert(`This seat is ${getSeatStatus(num)}.`)
  }
}
document.querySelector('body').onload = () => ini_seat();

// function getSeatStatus(num) {
//   if(selseat != '' &&
//   (num == selseat || num == (selseat + 1) || num == (selseat + 2))) 
//   return `Yours`;
//   else if( s[Math.floor(num / s[].length)] [num % s[].length])
//   return `Available`;
//   else 
//     return `Unavailable` 
// }
//document.querySelector('button').addEventListener(`click`, () => find_seat());
document.querySelector('button').onclick = () => find_seat();

function find_seat() {
  (selseat >= 0) && (selseat = '', ini_seat());
  for (let i = 0; i < s.length; i++) {
    let accept;
    ((s[i]) && (s[i + 1 ]) && (s[i + 2])) 
    && 
    ( selseat = i,
      eachSeat(i, `Seat-selected`, `selected` ),
      eachSeat(i + 1, `Seat-selected`, `selected` ),
      eachSeat(i + 2, `Seat-selected`, `selected` ),

      accept = confirm(`Seat ${i + 1} through ${i + 3} is Available. Accept?`),

      (accept) ? (Break) : (
        selseat = "",
        eachSeat(i, `seat-available`,undefined ,`selected`),
        eachSeat(i + 1, `seat-available`, undefined, `selected`),
        eachSeat(i + 2, `seat-available`, undefined, `selected`)
      ) 
    )

  }
}
