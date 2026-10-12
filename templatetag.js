function gg(x,y) {
    return (y === undefined) ? document.querySelector(x) : document.querySelectorAll(x) 
}
function g(x,y) {
  return (y === undefined) ? document.getElementById(x) : document.getElementsByClassName(x)
}
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

let [txt1, txt2, txt3] = ['buddy', 'loddy', 'smuddy']
let tempo = `<template id="temp">
  <div id="d1">
    <div id="d21"></div>
    <div id="d22">
      <div id="d3"></div>
      <div id="d32">
        <div id="d51">${txt1}</div>
        <div id="d52">${txt2}</div>
        <div id="d53">${txt3}</div>
      </div>     
    </div>
  </div>
</template>`;
const card = ({txt1, txt2, txt3}, d5) => {
  let count = 0;
  
  return {
    html:`<div id="d1">
    <div id="d21"></div>
    <div id="d22" class= ${txt1}>
      <div id="d3"></div>
      <div id="d32" class= ${txt2}>
        <div id="d51">${txt1}</div>
        <div id="d52">${txt2}</div>
        <div id="d53" class= ${d5}> ${txt3}</div>
      </div>     
    </div>
    </div>`,
    button(){   
      const btn =document.getElementsByClassName(`${d5}`)[0]
      btn.addEventListener('click',function(e) {
        e.stopPropagation();
        console.log(this );
        this.innerHTML = `${txt3 } ${count += 1}`
        //build(btn, 3, count++) 
      })
      
      g(`d32`).addEventListener('click',function(e) {e.stopPropagation();console.log(this, `hello ${txt1}`)});
      g(`d22`).addEventListener('click',function(e) {e.stopPropagation(); console.log(this, `hello`)},);
     
      
      // return btn.onclick=function() {console.log(this, count );
      //   this.innerHTML = `${txt3 } ${count += 1}`
      //   //build(btn, 3, count++) 
      // };
    }
  }
}

gg('body').insertAdjacentHTML('afterbegin', tempo);
const clone = temp.content.cloneNode(true);
const clone2 = temp.content.cloneNode(true);
const clone3 = temp.content.cloneNode(true);

 //rooty.append(clone3) 
// d1.after(clone2)
//innerHTML doesnt work for cloning node
const c1 = card({txt1:'contry boys',txt2:'fortitude',txt3:'conny'}, 'hel');
const c2 = card({txt1:'contry boy',txt2:'fortitude4', txt3:'coy'}, 'bob');
const c3 = card({txt1:'contry',txt2:'fortitude65', txt3:'con'}, 'cat');

build(rooty, 2, c1.html)
build(rooty, 3, c2.html)
build(rooty, 3, c3.html);

c1.button();
c2.button();
c3.button();
