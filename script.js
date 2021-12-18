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
    showTaskAll();
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
      console.log(item);
      if (item.completed) {
        let li = document.getElementById(`${idTask}`);
        let p = li.firstChild.nextSibling;
        p.className = "crossOut";
      }
      renderTasks(tasks);
    }
  });
}

function filter(bool) {
  let complitedTasks = tasks.filter((item) => item.completed == bool);
  renderTasks(complitedTasks);
}
const btnAll = document.querySelector(".footer__filter-item-All");
const btnCompleted = document.querySelector(".footer__filter-item-Completed");
const btnNoCompleted = document.querySelector(
  ".footer__filter-item-NoCompleted"
);

function showTaskAll() {
  nullStyleButton();
  renderTasks(tasks);
  btnAll.classList.add("footer__item-active");
}

function showTaskCompleted() {
  nullStyleButton();
  filter(true);
  btnCompleted.classList.add("footer__item-active");
}

function showTask_NotCompleted() {
  nullStyleButton();
  filter(false);
  btnNoCompleted.classList.add("footer__item-active");
}

function nullStyleButton() {
  btnAll.className = "footer__filter-item-All";
  btnCompleted.className = "footer__filter-item-Completed";
  btnNoCompleted.className = "footer__filter-item-NoCompleted";
}
