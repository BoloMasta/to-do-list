import Notiflix from "notiflix";
import { taskList, trashIcon } from "./app";

const input = document.querySelector("#new-task-form__input");

export const newTaskGeneration = () => {
  if (input.value.length === 0) {
    Notiflix.Notify.failure(`Enter some task please.`);
    return;
  }

  const task_div = document.createElement("div");
  task_div.classList.add("task");

  const task_icon = document.createElement("div");
  task_icon.classList.add("task__icon");
  task_icon.innerHTML = iconChange.innerHTML;
  task_div.appendChild(task_icon);

  const task_content_div = document.createElement("div");
  task_content_div.classList.add("task__content");
  task_div.appendChild(task_content_div);

  const task = input.value;
  const task_input = document.createElement("input");
  task_input.classList.add("task__text");
  task_input.type = "text";
  task_input.value = task;
  task_input.readOnly = true;
  task_content_div.appendChild(task_input);

  // adding a button for editing and deleting a task
  const task_actions_div = document.createElement("div");
  task_actions_div.classList.add("task__actions");

  const task_edit_button = document.createElement("button");
  task_edit_button.classList.add("task__actions--edit");
  task_edit_button.innerText = "Edit";

  const task_delete_button = document.createElement("button");
  task_delete_button.classList.add("task__actions--delete");
  task_delete_button.innerText = "Delete";

  task_actions_div.appendChild(task_edit_button);
  task_actions_div.appendChild(task_delete_button);

  task_div.appendChild(task_actions_div);
  taskList.appendChild(task_div);
  Notiflix.Notify.success(
    `Task: "${task_div.children[1].children[0].value}" added.`
  );

  input.value = "";

  // edition of the task
  task_edit_button.addEventListener("click", (event) => {
    if (task_edit_button.innerText.toLowerCase() == "edit") {
      task_edit_button.innerText = "Save";
      task_input.readOnly = false;
      task_input.focus();
    } else {
      task_edit_button.innerText = "Edit";
      task_input.readOnly = true;
      Notiflix.Notify.warning("Task edited.");
    }
  });

  // deletion of the task
  task_delete_button.addEventListener("click", (event) => {
    taskList.removeChild(task_div);
    console.log(task_div.children[1].children[0].value);
    Notiflix.Notify.failure(
      `Task: "${task_div.children[1].children[0].value}" done.`
    );

    // hiding trash icon
    if (taskList.children.length === 0) {
      trashIcon.classList.add("is-hidden");
    }
  });

  // showing trash icon
  if (taskList.children.length >= 1) {
    trashIcon.classList.remove("is-hidden");
  }
};
