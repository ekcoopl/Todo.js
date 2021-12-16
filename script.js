let tasks = [];

function createListItem(task) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.id = task.id;
  input.checked = task.completed;
  input.classList.add("main__task-btn");
  input.onclick = test;

  const p = document.createElement("p");
  p.innerHTML = task.text;
  p.className = "hyphenation";

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
function addTask() {
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

function test(event) {
  let idTask = event.target.id;
  let p = event.target.nextSibling;
  tasks.map((item) => {
    if (idTask == item.id) {
      item.completed = !item.completed;
      p.classList.add('crossOut');
    }
  });
  console.log(p);
  renderTasks(tasks);
}

/* [{id:1, text: 'Купить молоко' , completed: false}
    {id:2, text: 'Купить пиво' , completed: false}
] */
