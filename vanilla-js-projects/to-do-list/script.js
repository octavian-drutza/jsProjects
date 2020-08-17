const addToDo = document.querySelector(".fa.fa-plus");
const input = document.querySelector("input");
const list = document.getElementById("list");
let toDoList, lis, deleteToDo;

/* localStorage.clear(); */

// init
getStored();
populateUl();

// get todos from local storage
function getStored() {
  localStorage.getItem("To Do")
    ? (toDoList = JSON.parse(localStorage.getItem("To Do")))
    : (toDoList = []);
}

// populate to do list
function populateUl() {
  list.innerHTML = "";
  let toDoElement;
  toDoList.forEach((toDo) => {
    if (toDo.doneStatus === true) {
      toDoElement = `<li class="completed">
                        <span id="delete"><i id="delete" class="fa fa-trash" ></i></span>${toDo.title}
                    </li>`;
    } else {
      toDoElement = `<li>
                        <span id="delete"><i id="delete" class="fa fa-trash" ></i></span>${toDo.title}
                     </li>`;
    }
    if (!list.innerHTML.includes(toDo.title)) {
      list.innerHTML += toDoElement;
    }
  });

  // set todos to local storage
  localStorage.setItem("To Do", JSON.stringify(toDoList));

  lis = document.querySelectorAll("li");
  deleteToDo = document.querySelectorAll("#delete");
}

// delet todo, change to do status
list.addEventListener("click", (e) => {
  // change li class to show completed todos
  lis.forEach((li) => {
    if (e.target === li) li.classList.toggle("completed");
  });
  //delete todo
  deleteToDo.forEach((del) => {
    if (e.target === del) {
      toDoList = toDoList.filter(
        (toDo) =>
          toDo.title != del.parentElement.parentElement.innerText &&
          toDo.title != del.parentElement.innerText
      );
    }
  });
  // change todo status
  toDoList.forEach((toDo) => {
    if (e.target.innerText === toDo.title) {
      toDo.doneStatus = !toDo.doneStatus;
    }
  });
  populateUl();
});

// add todo
addToDo.addEventListener("click", () => {
  if (input.value && input.value.length > 4) {
    toDoList.push({ title: input.value, doneStatus: false });
    populateUl();
  } else {
    alert("invalid input");
  }
  input.value = "";
});
