 // the function finds the range between 2 numbers
function range(first, last) {
  let r = []
  if(first < last) {
    for(let i = first; i <= last ; i++){ 
      //i % 2 !== 0 &&
       r.push(i)
    }
     return r
  }
   else if (first > last) {
    for(let v = first; v >= last ; v--){ 
      v % 2 === 0 && r.push(v)
    }
    return r
  }
};
console.log(range(10,1));
console.log(range(10,1).every(e => e % 2 === 0));
console.log(range(10,1).some(e => e % 2 === 1));
//reduce method madness
console.log(range(1, 10).reduce((ef, el) => ef ));
console.log(range(1, 10).reduce((ef, el) => ef, 100 ));
console.log(range(1, 10).reduce((ef, el) => el ));
console.log(range(1, 10).reduce((ef, el) => el, 100 ));
console.log(range(1, 10).reduce((ef, el) => el + ef));
console.log(range(1, 10).reduce((ef, el) => el + ef , 100));

//this code adds a number n to a array range function and then commutes the total of the ranged array
function sum(a, b){
  let every = 0;
  //forEach changes the values of the old array 
  a.forEach((element, index, a) => {
    // this add b to every element whose index is divisible by 2
    index % 2 !== 0 && 
    (a[index] = element + b) ;
    every += a[index];
   // console.log(a[index]);
  })
   
  console.log(a);
  
  //map doesnt change the values of the ols array instead it prints a new arry
  // a.map(e => every += e + b )
  // console.log(a);
   return every
}
console.log(range(1, 10))
console.log(sum(range(1, 10), 2));
//filter
console.log(range(1, 5).filter((e, i) => i % 2 !== 0))


function hello() { 
      let count = 10;
      while (count > 0) (
        alert (`${count}`),
        count--
      // (count%3 == 1) && (count++, Continue)  ;
       //(count === 7) && (count++, Break);
        );

      // while (count > 0) {
      //   alert (`${count}`);
      // // (count%3 == 0) && (count++, Continue)  ;
      //  //(count === 7) && (count++, Break);
      //   count--
      // };
      count < 1 ? alert (`happy new year`) : alert (`happy new year2`);
    
}
    //hello()
   // const {querySelectorAll: gg} = document;

    const {...gg} = window;
    function GG(x,y) {
      return (y == undefined) ? document.querySelector(x) : document.querySelectorAll(x)            
      //       (y === String) && (document.querySelector(x).createAttribute(y)))
    }
    console.log(GG(`.subs`));
    
    GG(`.subs`).onclick = () => subs();
    //gg.menubar.visible=false
    //console.log(GG`button`);
   // let nm = Object.create(document);
   let lnm = new Object(); Object.assign(lnm, document)
    const {querySelectorAll : dt} = document;
     R = new Object(this.r);
     R.r = dt;
    let hel = 'This is a bad dog';
   // hel.split()
   let f = [..."23".split(''),...hel.toUpperCase().split(' '),`lets get ${hel.toLowerCase().replace('is a', 'very')}`.toUpperCase()];

   const xy = [1, 4, 7]; let gh = Array.from(`string`)  
   let xd = xy
   xd[3] = 'hello';
   let xc = [...`string`]
   x = Array.of(20,2)
   gh[13] = 'hello boi';
   [world, xyz] = [400, 'duck chan'];

   let a = [world, xyz]; 
   let value = a[0];
   //a[1] = 56
   
   let i = 2;
   let khi = 4;

   a[i] = 30;
   a[khi] = 'bobby hello dockey chan'
   a[i + 1] = 'hello mad dog'
   //a[-1.3] = 255
  //  a[xy] = 2
  //  a[xc] =4
    //a.xy4 = (x) =>{return x*x}
   
   let namer = 'name'
  // a[namer] = 'ola';
  //  a[a[0]] = a[xc];
  //  a[a[namer]] = a[xy];
  //  a[a[xy]] = a[xc];
   //a[a[i]] = a[0];
   bat = {15:true, xy4:(x) =>{return x*x}}
   let numbers = [50, 1, 7, 20, 4000, `lap`];
console.log(Math.max(...numbers));
// → 7

    let mj = 'gbolaga ola'.toUpperCase();
    console.log(mj.repeat(3));
    
   let cat = new Object(a)
   let bh = Array.from(a)  
   a.push(...numbers)  
   // console.log(a.xy4``);    
  // console.log(a[2]`45`);
   console.log(a);
   console.log(a.sort());
   console.log(a.join(' '));
   console.log(a.sort((a,b) => {
    if(typeof a === "number" && typeof b === "number") {
      a.toPrecision(1);
      b.toPrecision(2);
      if(a > b) return 1;
      if(a < b) return -1;
      return 0
   }
   }));

   let searchy;
    function search(){
      let gp = GG(`#calculator`).value;
    if (empty()) ;
    else {

     //for (x of cat) {
     //console.log(cat.find((e) => GG(`#calculator`).value == e))
      //&& console.log(`${e}`))
       // GG(`#calculator`).value !== x &&   
    // } 
   // a.toString()
  //   let searchy = a.flatMap(e => e.split(" "))
  //  let com =searchy.find((e) => gp === e)
  //   if (com === gp){
  //     searchy.join()
  //   }
  //   console.log(com)
      function findInstance(a,x) {
        let result = [], len = a.length,  pos = 0;
         
        a.find((e,i,o) => e === x && result.push(o[i]) );
          
          //if (a.indexOf(x) === -1) break;
      
        
        console.log(result);
        
        return result
      }
      findInstance(a, GG(`#calculator`).value);
      
    } 
   }
   search()
   console.log(a);
   const mat = (x, ...arg) => console.log(x,arg);
   let [first,last, age] = [`ola`,`gbolaga`, 30];
   mat`Hello world, ${first} ${last} is ${age} !`;
   mat(`Hello world, ${first} ${last} is ${age} !`)

    //Object.assign(nm)
   // document.querySelector(`.trap`).addEventListener(`click`, () => subs());
   
    
    


    function subs() {
      let subscribeElem = GG('.subs');
      subscribeElem.innerText === `Subscribe` && ( 
        subscribeElem.innerText = `Subscribed`,
        subscribeElem.classList.add(`subs-state`),
        setTimeout(() => { 
          subscribeElem.innerText = `Subscribe`;
          subscribeElem.classList.remove(`subs-state`)
          },
          1000
        )
      )                                                 

      
      // Without time-out                                                          
      // subscribeElem.innerText === `Subscribe` ? [ subscribeElem.innerText = `Subscribed`,
      //                                             subscribeElem.classList.add(`subs-state`)
      //                                           ] : [ subscribeElem.innerText = `Subscribe`,
      //                                                 subscribeElem.classList.remove(`subs-state`)
      //                                               ];                                               

      
                                               
    }
    function enter_keydown_input() {
      event.key === `Enter` ? calculate() : 0
    }
  // console.log(document.querySelector(`.`).addEventListener(`onclick`, () => calculate()));
   //GG(`.y`).onclick = () => calculate();
   GG(`.y`).onclick = () => search();
   GG(`#calculator`).onkeydown = () => enter_keydown_input();

  
   function empty(){
    (typeof GG(`#calculator`).value === `number`) ? (
      GG(`#calculator`).classList.add(`red`),
      GG(`.alert`).innerHTML = `Empty field`
    ) : (
      GG(`#calculator`).classList.remove(`red`),
      GG(`.alert`).innerHTML = ``
    )
   }

    function calculate() {
     const calcElem = GG(`.calc`);
     const inputElem = GG(`#calculator`);
     const errorElem = GG(`.alert`);
      cost = Number(inputElem.value);
      // if (inputElem.value === ``) {
      //   inputElem.classList.add('red');
      //   errorElem.innerHTML = `Empty field`
      // } else if 
      empty() ||(cost < 40 && (cost += 10))
      
      cost_displayElem = document.querySelector(`.cost-display`);
      cost_displayElem.innerHTML = `Total: $${cost}`;
      inputElem.value = ''
      
      
    }