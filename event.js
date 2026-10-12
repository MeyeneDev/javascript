 let r = (x,y) => (y === undefined) ? document.getElementsByClassName(x) : document.getElementById(x);

function gg(x,y) {
  return (y == undefined) ? document.querySelector(x) : document.querySelectorAll(x) 
};

let build = (e, p, m) => {
  switch (p) {
    case 1:
        e.insertAdjacentHTML('beforeBegin',m)
      break;
    case 2:
        e.insertAdjacentHTML('afterBegin',m)
      break;
    case 3:
        e.insertAdjacentHTML('beforeEnd',m)
      break;
    case 4:
        e.insertAdjacentHTML('afterEnd',m)
      break;
  }
   
}

 
// gg('body').appendChild(() => components('p', 'hello murphy'));
  let ice = `DOGGY`;
  let count = 1;
  let head = `<h1 id="hr"> Buttons (${count})</h1>`
  let hh= gg('.par');
 //hh.innerHTML = `<button class="subs"><b>${ice}</b></button>` + hh.innerHTML;
 //hh.insertAdjacentHTML('beforebegin',head); 
//  gg('.hr').insertAdjacentHTML('afterend',
//  `<hr><div style="display: flex; gap:12px">
//    <button id="aggy" class="sub" name="bob"><b>${ice}</b></button> <button id="aggy" class="subs" name="bob"><b>${ice}${count}</b></button>
//   </div>
//   <hr/>`
//  )
build(hh, 1, head)
build(hr, 4, 
  `<hr>
    <div style="display: flex; gap:12px">
      <button id="aggy" class="sub" name="bob"><b>${ice}</b></button> 
      <button id="aggy" class="subs" name="bob"><b>${ice}${count}</b></button>
    </div>
  <hr/>`
);
build(hh, 4, 
  `<hr>
    <div style="display: flex; gap:12px">
      <button id="aggy" class="sub" name="bob"><b>${ice}</b></button> 
      <button id="aggy" class="subs" name="bob"><b>${ice}${count}</b></button>
    </div>`
)
//  gg(`.par`).innerHTML +=`
//  <div style="display: flex; gap:12px">
//   <button id="aggy" class="sub" name="bob"><b>${ice}</b></button> <button id="aggy" class="subs" name="bob"><b>${ice}${count}</b></button>
//  </div>
//  <hr/>`
console.log(window.aggy);
console.log(r('aggy',0));
aggy[1].className += ` chubs`;
aggy[0].classList.remove('sub')
aggy[0].removeAttribute('name')
aggy[1].classList.add(`hello`, `button`, `children`);
console.log(aggy[1])
console.log(aggy[1].classList[1])
gg(`.subs`).onclick = ()=> {count++};
 
 



    
    
     
      

// let ty = [(x) => {return x*x}, 20, 30,6,
//        [1, 15, 30, (x) => {return x*(x+x)}]
// ];
// console.log( ty[4]);
// console.log( ty[4][3](ty[4][1]))
// console.log(ty[0](ty[1]));
    
//     let isarraylike = sum
//      function sum(a) {
     
//       if (isarraylike(a)) {
//         var total = 0;
//         for(var i = 0; i < a.length; i++) { // Loop though all elements
//         var element = a[i];
//         if (element == null) continue; // Skip null and undefined
//         if (isFinite(element)) total += element;
//         else throw new Error("sum(): elements must be finite numbers");
//         }
//         return total;
//       }
//       else throw new Error("sum(): argument must be array-like");
//     }
    
// console.log(sum(`p`));
 
let g = 45
let  bake = (degrees) => 
  (degrees > 500) && "I'm not a nuclear reactor!" ||
  (degrees < 100) && "I'm not a refrigerator!" ||
  "That's a very comfortable temperature for me."

    
    let status = bake(350);
    console.log(g);
    

   let dothis = (n) => {
    return n+=2;
   }

    // function dothis(n) {
    //   return n+=1 ;
    // }

    function dothat(n) {
      return n-=1
    }
    let x = dothis, y = dothat, z = dothat(12), o = 12;
    //x = y(z);
    console.log(x(11));
    console.log(dothis(o));
    console.log(o);
    
    //console.log(y(2));
    
   // y = x;
    //console.log(dothat(z - y));
    


    // let i = 0;
    // let msg=``;
    // let msgr = ``;
    // while (i < 5) {
    //   msg += `<br/> ${i} + 5 = ${i + 5}`;
    //   console.log(msg);
    //   i++
    // }
    // document.write(msg);
    // do {
    //   msgr += `<br/> ${i} + 5 = ${i + 5}<br/>`;
    //  // console.log(msgr);
    //   i++
    // } while (i < 2) ;
    // document.write(`<br/> ${msgr}`);
    
    

    const l = new Array();
    let m, i, b;
   
    for (m= 0; m <= 30; m++) {
      l.push(m);
    }      
      // for ( i = 1; i <= l.length; i++) {
      // //   let p = ``;
      // //  (i % 3 == 0) && (p += `Fizz`);
      // //  (i % 5 == 0) && (p += `Buzz`); 
      // //         console.log(p || i);
      //  //   let p = ``;
      //  l[i] = (i % 3 == 0) && `Fizz`;
      //  //l[i] = (i % 5 == 0) &&  `Buzz`; 
      //         console.log(l);
              
      // }
    //   for ( b = 1; b <= l.length; b++) {
    //     (b % 3 == 0) && (l[b] = `FIZZ`);
    //     (b % 5 == 0) && (l[b] = `BUZZ`);
    //     ((b % 5 == 0) && (b % 3 == 0)) && (l[b] = `FIZZBuzz`);
    //   }
    
    // for (let h in l) {
    //   console.log(l[h]);
    // }
    // for (let n = 1; n <= 15; n++) {
    //   let o = ``;
    //   (n % 3 == 0) && (o += `fizz`);
    //   (n % 5 == 0) && (o += `buzz`);
    //   //console.log(o || n);    
      
    // }
  //console.log(l);

  
  
    
    //document.write(chess);
