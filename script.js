let allElem = document.querySelectorAll(".elem");
let fullElem = document.querySelectorAll(".fullElem");
let back = document.querySelectorAll(".back");

allElem.forEach((elem) => {
  elem.addEventListener("click", () => {
    fullElem[elem.id].style.display = "block";
    back.forEach((back) => {
      back.addEventListener("click", () => {
        fullElem[elem.id].style.display = "block";
        setTimeout(() => {
          fullElem[elem.id].style.display = "none";
        }, 100);
      });
    });
  });
});

let currentTask = [];

if (localStorage.getItem("currentTask")) {
  currentTask = JSON.parse(localStorage.getItem("currentTask"));
} else {
  console.log("current task is empty");
}

let todoForm = document.querySelector(".addTask form");
let taskInput = document.querySelector(".addTask form #todo-task-inp");
let taskDetails = document.querySelector(".addTask form textarea");
let taskImpCheck = document.querySelector(".addTask form #mark-imp-inp");

// Todo Page
function todo() {
  todoForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // console.log(taskInput.value,taskDetails.value,taskImpCheck.value);
    currentTask.push({
      task: taskInput.value,
      details: taskDetails.value,
      imp: taskImpCheck.checked,
    });

    localStorage.setItem("currentTask", JSON.stringify(currentTask));
    taskInput.value = "";
    taskDetails.value = "";
    taskImpCheck.checked = false;
    renderTask();
  });
}
todo();
// Todo Page

// creating rendering task
function renderTask() {
  let allTask = document.querySelector(".allTask");
  let sum = "";
  currentTask.forEach(function (elem, index) {
    sum += `
    <div class="task">
    <summery id="${index}">
    <h2>${elem.task} <span class="${elem.imp}">imp</span></h2>
    <div class="btns">
    <button><i class="ri-check-double-line markasread"></i></button>
    <button><i class="ri-delete-bin-6-line delete"></i></button>
    </div>
    </summery> 
    <div class="task-desc">
    <p>${elem.details}</p>
    </div>       
    </div>
    `;
  });
  allTask.innerHTML = sum;
}
renderTask();
// creating rendering task

// Trying to create a drop down details show
function toogleDesc() {
  let summery = document.querySelectorAll(".task summery");
  let taskDesc = document.querySelectorAll(".task-desc");

  summery.forEach((elem, index) => {
    elem.addEventListener("click", () => {
      taskDesc.forEach((desc, i) => {
        if (i === index) {
          desc.style.display =
            desc.style.display === "block" ? "none" : "block";
        } else {
          desc.style.display = "none";
        }
      });
    });
  });
}
toogleDesc();
// Trying to create a drop down details show
