let tasks = [];

function createListItem(task) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = task.id;
  input.checked = task.completed;
  input.classList.add("main__task-btn");
  input.onclick = performance;

  const p = document.createElement("p");
  p.innerHTML = task.text;
  p.classList.add = "hyphenation";

  const imgChange = document.createElement("img");
  imgChange.src = "/img/change.png";
  imgChange.className = "main__img-edit";

  let imgBasket = document.createElement("img");
  imgBasket.src = "/img/bask.png";
  imgBasket.className = "main__img-delete";
  imgBasket.onclick = removeTask;

  let li = document.createElement("li");
  li.className = "main__tasks-item";
  li.id = task.id;

  li.append(input);
  li.append(p);
  li.append(imgChange);
  li.append(imgBasket);
  return li;
}

function renderTasks(arrTasks) {
  const ul = document.querySelector(".main__tasks");
  ul.innerHTML = "";
  arrTasks.forEach((item) => {
    ul.prepend(createListItem(item));
  });
}

let max = 0;
tasks.forEach((item) => {
  if (item.id > max) {
    max = item.id;
  }
});

const input = document.querySelector(".header__input");
function addTask(event) {
  if (input.value != "") {
    let task = { id: ++max, text: input.value, completed: input.checked };
    tasks.push(task);
    renderTasks(tasks);
    input.value = "";
  }
}

function removeTask(event) {
  let idTask = event.target.parentNode.id;
  let newTasks = tasks.filter((item) => item.id != idTask);
  tasks = newTasks;
  renderTasks(tasks);
}

function performance(event) {
  let idTask = event.target.id;
  tasks.map((item) => {
    if (idTask == item.id) {
      item.completed = !item.completed;
      renderTasks(tasks);
      if (item.completed) {
        let li = document.getElementById(`${idTask}`);
        let p = li.firstChild.nextSibling;
        p.className = "crossOut";
      }
    }
  });

  /*   tasks.forEach((item)=>{
    item 
  }) */
}

/* [{id:1, text: 'Купить молоко' , completed: false}
    {id:2, text: 'Купить пиво' , completed: false}
] */

/* function test() {
  let p = document.querySelector(".hyphenation");
  p.className = "crossOut";
  console.log(p);
} */


// работа кнопки Completed  
function selectCompletedBotton() {
  let complitedTasks = tasks.filter((item) => item.completed == true);
  let arrComplited = [];
  arrComplited = complitedTasks;
  console.log(arrComplited);
  renderTasks(arrComplited);
  //поиск и присвоение класса
  //let addClassActive = document.querySelectorAll('.footer__filter-item');
  //addClassActive.target.className('footer__item-active');
  //console.log(addClassActive.target);
}

// работа кнопки All
function selectAllBotton(){
  renderTasks(tasks)
}
