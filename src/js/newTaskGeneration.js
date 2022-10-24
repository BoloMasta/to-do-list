import "vanilla-icon-picker/dist/themes/default.min.css";
import IconPicker from "vanilla-icon-picker";
import Notiflix from "notiflix";
import { taskList, trashIcon } from "./app";

// const input = document.querySelector("#new-task-form__input");

export const newTaskGeneration = (icon, task) => {
  const task_div = document.createElement("div");
  task_div.classList.add("task");

  const task_icon = document.createElement("button");
  task_icon.classList.add("task__icon");
  task_icon.innerHTML = icon;
  task_icon.style.setProperty("opacity", "1");

  // Icon picker with `default` theme
  const iconPickerButton = new IconPicker(task_icon, {
    theme: "default",
    iconSource: ["FontAwesome Solid 5", "FontAwesome Regular 5"],
    closeOnSelect: true,
    defaultValue: null,
  });

  iconPickerButton.on("select", (instance) => {
    task_icon.innerHTML = instance.svg;
    // task_icon.children[0].children[0].style.fill =
    //   getComputedStyle(root).getPropertyValue("--text-button");
  });
  task_icon.disabled = true;

  task_div.appendChild(task_icon);

  const task_content_div = document.createElement("div");
  task_content_div.classList.add("task__content");
  task_div.appendChild(task_content_div);

  // const task = input.value;
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
  task_edit_button.innerText = "edit";

  const task_delete_button = document.createElement("button");
  task_delete_button.classList.add("task__actions--delete");
  task_delete_button.innerText = "done";

  task_actions_div.appendChild(task_edit_button);
  task_actions_div.appendChild(task_delete_button);

  task_div.appendChild(task_actions_div);
  taskList.appendChild(task_div);
  Notiflix.Notify.success(
    `Task: "${task_div.children[1].children[0].value}" added.`
  );

  // edition of the task
  let indexOfTask = 0;
  task_edit_button.addEventListener("click", (event) => {
    let localTasks = JSON.parse(localStorage.getItem("tasks"));

    localTasks.forEach((task) => {
      if (task.task === task_div.children[1].children[0].value) {
        indexOfTask = localTasks.indexOf(task);
      }
    });

    if (task_edit_button.innerText.toLowerCase() === "edit") {
      task_edit_button.innerText = "save";
      task_input.readOnly = false;
      task_input.focus();
      task_icon.disabled = false;
      task_icon.style.cursor = "pointer";
    } else {
      localTasks.splice(indexOfTask, 1, {
        icon: task_div.children[0].innerHTML,
        task: task_div.children[1].children[0].value,
      });
      localStorage.setItem("tasks", JSON.stringify(localTasks));

      task_edit_button.innerText = "edit";
      task_input.readOnly = true;
      task_icon.disabled = true;
      task_icon.style.cursor = "default";

      Notiflix.Notify.warning("Task edited.");
    }
  });

  // deletion of the task
  task_delete_button.addEventListener("click", (event) => {
    let localTasks = JSON.parse(localStorage.getItem("tasks"));
    localTasks.forEach((task) => {
      if (task.task === task_div.children[1].children[0].value) {
        localTasks.splice(localTasks.indexOf(task), 1);
        localStorage.setItem("tasks", JSON.stringify(localTasks));
      }
    });

    taskList.removeChild(task_div);
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
