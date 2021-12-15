const tasks = [];

function createListItem(task) {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.value = task.completed;
  input.classList.add("main__task-btnOFF");

  const p = document.createElement("p");
  p.innerHTML = task.text;
  p.className = "hyphenation";

  const imgChange = document.createElement("img");
  imgChange.src = "/img/change.png";
  imgChange.className = "main__img-edit";

  const imgBasket = document.createElement("img");
  imgBasket.src = "/img/bask.png";
  imgBasket.className = "main__img-delete";

  const ul = document.querySelector(".main__tasks");

  const li = document.createElement("li");
  li.className = "main__tasks-item";

  li.append(input);
  li.append(p);
  li.append(imgChange);
  li.append(imgBasket);
  ul.prepend(li);
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
    const task = { id: ++max, text: input.value, completed: false };
    tasks.push(task);
    createListItem(task);
    input.value = "";
  }
}

main.onclick = function (event) {
  if (event.target.className != "main__img-delete") return;
  let deleteList = event.target.closest(".main__tasks-item");
  deleteList.remove();
};

function checkboxing(){
    const findCheckbox = document.querySelector('.main__task-btnOFF');
    const checkbox = findCheckbox.value;
    console.log(checkbox);
    if (checkbox) {
        checkbox.value = false;
    }else{
        checkbox.value = true;
    }
} 



