//Select Elements
const dateElement = document.getElementById("date");
const title = document.getElementById("title");
const list = document.getElementById("list");
const input = document.getElementById("input");
const plusButton = document.querySelector("#plus_button");

//Class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

//Header content (title + todays date)
const options = { weekday: "short", month: "long", day: "numeric" };
const today = new Date();
title.innerHTML = "TODO...";
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

//add todo function
function addToDo(toDo) {
  let seconds1 = Math.floor(Date.now() / 1000);
  let timestamp = new Date(seconds1 * 1000).toTimeString().substr(0, 8);

  const item = `<li class="item">
  <i class="fa ${UNCHECK} co" job="complete"></i>
  <p class="text">${toDo} <i style="color:grey">added ${timestamp}</i></p>
  <i class="fa fa-trash-o de" job="delete"></i>
  </li>`;
  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

//eventhandling to add new items on click of plusbutton
plusButton.addEventListener("click", function (event) {
  const toDo = input.value;
  if (toDo) {
    addToDo(toDo);
  }
  input.value = "";
});

//event to handle the created items
list.addEventListener("click", function (event) {
  const element = event.target; //return the clicked element inside list
  const elementJob = element.attributes.job.value; //complete or delete

  if (elementJob == "complete") {
    completeToDo(element);
  } else if (elementJob == "delete") {
    removeToDo(element);
  }
});

//complete to do
function completeToDo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
}

//remove to do
function removeToDo(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
}
