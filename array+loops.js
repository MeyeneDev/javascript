function enter_btn() {
      event.key === `Enter` ? add_btn() : 0
} 

let todo_list = [
  // {name: `Adda`,
  //   date: `28-25-2026`
  // },
  // {name: `Bob`,
  //   date: `28-25-2026`
  // },
  // {name: `Joke`,
  //   date: `28-25-2026`
  // } 
];
console.log(todo_list);

list_func();

function list_func() {
  let todo_list_HTML = ``;

  for (let todo_loop = 0; todo_loop < todo_list.length; todo_loop++) {
    const todo_obj = todo_list[todo_loop];
    // deconstructing objects
    const {name, date} = todo_obj;

    const todo_loop_HTML = 
      `<p class="flexi">
        <span> ${name} </span>
        <span> ${date} </span>
        <button class="reset_btn red-todo" onclick="
        todo_list.splice(${todo_loop}, 1);
        list_func();

        "
        >
          Delete
        </button>
      </p>`;

    todo_list_HTML += todo_loop_HTML;
  }
  
  showElem = document.querySelector(`.show`)
  showElem.innerHTML = todo_list_HTML;
//  localStorage.setItem(`store_todo_list`, todo_list_HTML);
}
    function add_btn() {
      let textboxElem = document.querySelector(`.input3`);
      let name = textboxElem.value;
      textboxElem.value = ``;
      
      let dateElem = document.querySelector(`.input4`);
      let date = dateElem.value;
      dateElem.value = ``;
      
      todo_list.push({name, date});
      list_func();
      console.log(todo_list)
      //localStorage.getItem(`store_todo_list`),
      
    }
   
     array1 = [55, 66, 77];
    [firstvalue, secondvalue] = array1
    console.log([firstvalue]);
    console.log([secondvalue]);
    [order1, order3, order2] = [550, 664, 773];
    console.log([order3]);
    jaiu = {
      name1: 600, name2: 600, name3: 600,
    };
   let  {name21, name2} = jaiu
    console.log(name21);
    let {name1, name11, name13} = {
      name1: 600, name2: 600, name3: 600,
    };
    console.log(name1);
let array = [1,2,3,4,5,6,7,8,9]
   for (let exp = 4; exp > array.length; exp++) {
    const element = array[exp];
    
   } console.log(array);
   
   for (let i = 0; i <= 20; i++) {
    const element = [i];
    if (i % 3 === 2) {
      continue
      
    }
     console.log(i);
   }