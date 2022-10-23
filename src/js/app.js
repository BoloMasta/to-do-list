import "vanilla-icon-picker/dist/themes/default.min.css";
import IconPicker from "vanilla-icon-picker";
import Notiflix from "notiflix";
import { newTaskGeneration } from "./newTaskGeneration";

const form = document.querySelector("#new-task-form");
const iconChange = document.querySelector("#iconChange");
export const taskList = document.querySelector("#tasks");
export const trashIcon = document.querySelector("#trash__icon");

// theme change
const root = document.querySelector(":root");
const changeThemeButton = document.querySelector("#change-theme");

const changeIconBlack = require("../img/change-theme.png");
const changeIconWhite = require("../img/change-theme-white.png");

const setDarkTheme = () => {
  changeThemeButton.src = changeIconWhite;
  root.style.setProperty("--background", "#202c39");
  root.style.setProperty("--task", "#b8b08d");
  root.style.setProperty("--placeholder", "#736e6e");
  root.style.setProperty("--text", "#252323");
  root.style.setProperty("--text-button", "#ff3700");
  root.style.setProperty("--header-gradient", "#7a0485");
  root.style.setProperty("--delete", "#eb0000");

  const allIcons = document.querySelectorAll(".task button.task__icon svg");
  for (icon of allIcons) {
    icon.children[0].style.fill =
      getComputedStyle(root).getPropertyValue("--text");
  }
};

const setLightTheme = () => {
  changeThemeButton.src = changeIconBlack;
  root.style.setProperty("--background", "#a9d6e5");
  root.style.setProperty("--task", "#01173d");
  root.style.setProperty("--placeholder", "#555555");
  root.style.setProperty("--text", "#eee2df");
  root.style.setProperty("--text-button", "#ff6d00");
  root.style.setProperty("--header-gradient", "#7a0485");
  root.style.setProperty("--delete", "#eb0000");

  const allIcons = document.querySelectorAll(".task button.task__icon svg");
  for (icon of allIcons) {
    icon.children[0].style.fill =
      getComputedStyle(root).getPropertyValue("--text");
  }
};

changeThemeButton.addEventListener("click", () => {
  const darkTheme = changeThemeButton.classList.toggle("dark");

  if (darkTheme) {
    localStorage.setItem("theme", "dark");
    setDarkTheme();
  } else {
    localStorage.setItem("theme", "light");
    setLightTheme();
  }
});

if (localStorage.getItem("theme") === "dark") {
  changeThemeButton.classList.add("dark");
  localStorage.setItem("theme", "dark");
  setDarkTheme();
} else {
  localStorage.setItem("theme", "light");
  setLightTheme();
}

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
