import "vanilla-icon-picker/dist/themes/default.min.css";
import IconPicker from "vanilla-icon-picker";
import Notiflix from "notiflix";
import { newTaskGeneration } from "./newTaskGeneration";

const form = document.querySelector("#new-task-form");
const iconChange = document.querySelector("#iconChange");
export const taskList = document.querySelector("#tasks");
export const trashIcon = document.querySelector("#trash__icon");

// generate new task
form.addEventListener("submit", (event) => {
  event.preventDefault();
  newTaskGeneration();
});

// trash icon to delete all tasks
trashIcon.addEventListener("click", () => {
  Notiflix.Confirm.show(
    "Remove all tasks",
    "Do you want to remove all tasks?",
    "Yes",
    "No",
    function okCb() {
      taskList.innerText = "";
      trashIcon.classList.add("is-hidden");
      Notiflix.Notify.failure(`All tasks removed.`);
    },
    function cancelCb() {
      return;
    },
    {
      width: "320px",
      borderRadius: "8px",
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
  iconChange.innerHTML = instance.svg;
});

// welcome message
Notiflix.Notify.info("Welcome to the to-do list. Enter your tasks.");
