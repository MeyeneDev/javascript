function gg(x,y) {
  return (y == undefined) ? document.querySelector(x) : document.querySelectorAll(x) 
};
function enter_btn() {
      event.key === `Enter` ? addBtn() : 0
} 
//btn1.onclick =()=>
   //window.scrollTo(0, document.documentElement.offsetHeight - window.innerHeight)
window.scrollTo({
 left: 0,
 top: document.documentElement.offsetHeight - window.innerHeight,
 behavior: "smooth"
});
// btn1.onclick =()=> window.scrollTo({
//   top: add1.clientx,
//   behavior: 'smooth'})

const ex = JSON.parse(localStorage.store);
const todoList =  ex || [] ;
//const todoList =  [] || ex ;
todoList.forEach(e => e =listFunc());
console.log(ex);

//  [ {name: `Adda`,
//     date: `28-25-2026`
//   }]
//<style> .reset_btn{ background-color: orange}</style>
//listFunc();

function listFunc() {
  let todo_list_HTML = ``;
  todoList.forEach((todo_obj, index,a) => {
    
    // deconstructing objects
    const {name, date} = todo_obj;
    const todo_loop_HTML = 
      `<div class="flexi box">
        <span> ${name} </span>
        <span> ${date} </span>
        <button id="${name}" class="${index} reset_btn red-todo">
          Delete
        </button>
      </div>`;

    todo_list_HTML += todo_loop_HTML;

    gg(`.show`).onclick = (e) => {
      console.log(e.target.className[0]);
      
      e.target.className[0]  && (a.splice(index, 1),listFunc(), delete localStorage.store)}
  })
  
  // for (let todo_loop = 1; todo_loop < todo_list.length; todo_loop++) {
  //   const todo_obj = todo_list[todo_loop];
  //   // deconstructing objects
  //   const {name, date} = todo_obj;

    // const todo_loop_HTML = 
    //   `<p class="flexi">
    //     <span id="numbering" class="numbering">${todo_loop} </span>
    //     <span> ${name} </span>
    //     <span> ${date} </span>
    //     <button class="reset_btn red-todo" onclick="
    //     todo_list.splice(${todo_loop}, 1);
    //     list_func();
    //     ">
    //       Delete
    //     </button>
    //   </p>`;

  //   todo_list_HTML += todo_loop_HTML;
  // }
  
  gg(`.show`).innerHTML = todo_list_HTML

  
  // todo_list.forEach((todo_obj, index,a) => {
  //     gg(`.show`).onclick = (e) => {

  //   (e.target.id === "delete") && (a.splice(todo_obj, 1),
  //   list_func())}
  //   //  todo_obj.onclick = () => {
  //   //   console.log('hello');
      
  //   // a.splice(index, 1);
  //   // list_func()}

  // })
 
}
//numbering.style.backgroundColor = "orange";

function addBtn() {
  let textboxElem = gg(`.input3`);
  let name = textboxElem.value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#x27;")
        .replace(/\//g, "&#x2F;");
  textboxElem.value = ``;        
  
  let dateElem = gg(`.input4`);
  let date = dateElem.value;
  dateElem.value = ``;
  
  todoList.push({name, date});
  listFunc();
  localStorage.store = JSON.stringify(todoList);
  
}


//end of the first todolist
//start of the second todolist
//zombie scrolling
// setInterval(() => {
//   scrollBy(0, 20)
// }, 2000);
   
//this is to convert array-like objects to real arrays
//Array.for()

    //moree on destructuring
     array1 = [55, 66, 77];
    [firstvalue, secondvalue] = array1
    console.log(firstvalue);
    console.log(secondvalue);

   // destructing
    [order1, order3, order2] = [550, 664, 773];
    console.log(order3);
    jaiu = {
      name1: 600, name2: 6100, name3: 600,
    };
   let  {name21, name2} = jaiu
    console.log(name2);
    let {name1, name26, name13} = {
      name1: 600, name26: 600, name13: 600,
    };
    console.log( {name1, name26, name13});

let array = [1,2,3,4,5,6,7,8,9], array2 = [] ;
    // for (e of array) {
    //   (e > 4) && array2.push(e)
    // }
    // // array.forEach((e) =>{
    // //   e > 4 &&  array2.push(e)
    // // })
    // console.log(array2)

   for (let exp = 4; exp < array.length; exp++) {
      array2.push(array[exp])
     // console.log(array2);
    } 
   console.log(array2)

   let element = [];
   let sum1 = 1;
   for (let i = 1; i <= 20; i++) {
      // if (i % 3 === 2) {
      //   continue        
      // }
      element.push(i); 
      //sum1 *= i  
   }   
   console.log(element);
   //slice()
   kk= element.slice(0, 6);
   kl=kk.slice(2)
     console.log(kk, kl);
     console.log(element.slice(1-1, 7-1));

  //Splice()
  element.splice(-3); //18,19,20 were deleted because 18 was at index -3 was 20 was the end if the array
  element.splice(3, 1) // 4 (1)element is deleted because 4 was at index 3 and only 1 element was to be deleted
  element.splice(2, 3) // 3,5,6 (3)elements where deleted because 3 was at index 2 and only 3 elements was to be deleted
  element.splice(-1, 1, 170,180, 190, 200) // 17 (1)element was deleted because 17 was at index -1 and 1 element was to be deleted but 4(170,180, 190, 200) elements were Added starting from index -1
  element.splice(2, 0, 30,40,50,60) //  (0)elements where deleted because 0 element was to be deleted but 4(30,40,50,60) elements were Added starting from index 2

  //fill()
  //element.fill(99)// fills the whole array element with 99
  //element.fill(99, 4) // fills the array starting from index 4
   //element.fill(99, 6,16) //fills the array index from index 6 to index 16
   console.log(element);
   //copyWithin()
   element.copyWithin(0,10,11)
  console.log(element);
  
    //adding all elements togethers just like using .reduce() method
   for (const e of element) {    
    sum1 += e;  
    element = sum1  
   }
   console.log(element);

   //flat() and flatMap()

   let gk = [0,[1,[2],[3,[40,[50,'hello']],4000],'last']];
    console.log(gk.flat(0));
    console.log(gk.flat());
    console.log(gk.flat(1));
    console.log(gk.flat(2));
    console.log(gk.flat(3));
    console.log(gk.flat(4));
   