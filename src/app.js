import "vanilla-icon-picker/dist/themes/default.min.css";
import IconPicker from "vanilla-icon-picker";
import Notiflix from "notiflix";

const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-form__input");
const list_el = document.querySelector("#tasks");
const trash = document.querySelector("#trash");
const iconChange = document.querySelector("#iconChange");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.length === 0) {
    Notiflix.Notify.failure(`Enter some task please.`);
    return;
  }

  const task = input.value;

  const task_el = document.createElement("div");
  task_el.classList.add("task");

  const task_icon = document.createElement("div");
  task_icon.classList.add("task__icon");
  //console.log(iconChange.innerHTML);

  task_icon.innerHTML = iconChange.innerHTML;
  task_el.appendChild(task_icon);

  const task_content_el = document.createElement("div");
  task_content_el.classList.add("task__content");
  task_el.appendChild(task_content_el);

  const task_input_el = document.createElement("input");
  task_input_el.classList.add("task__text");
  task_input_el.type = "text";
  task_input_el.value = task;
  task_input_el.readOnly = true;
  task_content_el.appendChild(task_input_el);

  const task_actions_el = document.createElement("div");
  task_actions_el.classList.add("task__actions");

  const task_edit_el = document.createElement("button");
  task_edit_el.classList.add("task__actions--edit");
  task_edit_el.innerText = "Edit";

  const task_delete_el = document.createElement("button");
  task_delete_el.classList.add("task__actions--delete");
  task_delete_el.innerText = "Delete";

  task_actions_el.appendChild(task_edit_el);
  task_actions_el.appendChild(task_delete_el);

  task_el.appendChild(task_actions_el);
  list_el.appendChild(task_el);
  Notiflix.Notify.success(
    `Task: "${task_el.children[1].children[0].value}" added.`
  );

  input.value = "";

  task_edit_el.addEventListener("click", (event) => {
    if (task_edit_el.innerText.toLowerCase() == "edit") {
      task_edit_el.innerText = "Save";
      task_input_el.readOnly = false;
      task_input_el.focus();
    } else {
      task_edit_el.innerText = "Edit";
      task_input_el.readOnly = true;
      Notiflix.Notify.warning("Task edited.");
    }
  });

  task_delete_el.addEventListener("click", (event) => {
    list_el.removeChild(task_el);
    console.log(task_el.children[1].children[0].value);
    Notiflix.Notify.failure(
      `Task: "${task_el.children[1].children[0].value}" done.`
    );

    if (list_el.children.length === 0) {
      trash.classList.add("is-hidden");
    }
  });

  if (list_el.children.length >= 1) {
    trash.classList.remove("is-hidden");
  }
});

trash.addEventListener("click", () => {
  Notiflix.Confirm.show(
    "Remove all tasks",
    "Do you want to remove all tasks?",
    "Yes",
    "No",
    function okCb() {
      list_el.innerText = "";
      trash.classList.add("is-hidden");
      Notiflix.Notify.failure(`All tasks removed.`);
    },
    function cancelCb() {
      return;
    },
    {
      width: "320px",
      borderRadius: "8px",
      // etc...
    }
  );
});

// Icon picker with `default` theme
const iconPickerButton = new IconPicker(iconChange, {
  theme: "default",
  iconSource: ["FontAwesome Solid 5", "FontAwesome Regular 5"],
  closeOnSelect: true,
  defaultValue: null,
});

iconPickerButton.on("select", (instance) => {
  //console.log("Select:", instance);
  iconChange.innerHTML = instance.svg;
  //console.log(instance.svg);
  //console.log(iconChange.children[0]);
});

Notiflix.Notify.info("Welcome to the to-do list. Enter your tasks.");
