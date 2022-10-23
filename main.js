require("vanilla-icon-picker/dist/themes/default.min.css");
var $CegKv$vanillaiconpicker = require("vanilla-icon-picker");
var $CegKv$notiflix = require("notiflix");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}



const $a826c173f4456cde$var$form = document.querySelector("#new-task-form");
const $a826c173f4456cde$var$input = document.querySelector("#new-task-form__input");
const $a826c173f4456cde$var$list_el = document.querySelector("#tasks");
const $a826c173f4456cde$var$trash = document.querySelector("#trash");
const $a826c173f4456cde$var$iconChange = document.querySelector("#iconChange");
$a826c173f4456cde$var$form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if ($a826c173f4456cde$var$input.value.length === 0) {
        (0, ($parcel$interopDefault($CegKv$notiflix))).Notify.failure(`Enter some task please.`);
        return;
    }
    const task = $a826c173f4456cde$var$input.value;
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_icon = document.createElement("div");
    task_icon.classList.add("task__icon");
    //console.log(iconChange.innerHTML);
    task_icon.innerHTML = $a826c173f4456cde$var$iconChange.innerHTML;
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
    $a826c173f4456cde$var$list_el.appendChild(task_el);
    (0, ($parcel$interopDefault($CegKv$notiflix))).Notify.success(`Task: "${task_el.children[1].children[0].value}" added.`);
    $a826c173f4456cde$var$input.value = "";
    task_edit_el.addEventListener("click", (event)=>{
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_edit_el.innerText = "Save";
            task_input_el.readOnly = false;
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Edit";
            task_input_el.readOnly = true;
            (0, ($parcel$interopDefault($CegKv$notiflix))).Notify.warning("Task edited.");
        }
    });
    task_delete_el.addEventListener("click", (event)=>{
        $a826c173f4456cde$var$list_el.removeChild(task_el);
        console.log(task_el.children[1].children[0].value);
        (0, ($parcel$interopDefault($CegKv$notiflix))).Notify.failure(`Task: "${task_el.children[1].children[0].value}" done.`);
    });
    if ($a826c173f4456cde$var$list_el.children.length >= 1) $a826c173f4456cde$var$trash.classList.remove("is-hidden");
});
$a826c173f4456cde$var$trash.addEventListener("click", ()=>{
    (0, ($parcel$interopDefault($CegKv$notiflix))).Confirm.show("Remove all tasks", "Do you want to remove all tasks?", "Yes", "No", function okCb() {
        $a826c173f4456cde$var$list_el.innerText = "";
        $a826c173f4456cde$var$trash.classList.add("is-hidden");
        (0, ($parcel$interopDefault($CegKv$notiflix))).Notify.failure(`All tasks removed.`);
    }, function cancelCb() {
        return;
    }, {
        width: "320px",
        borderRadius: "8px"
    });
});
// Icon picker with `default` theme
const $a826c173f4456cde$var$iconPickerButton = new (0, ($parcel$interopDefault($CegKv$vanillaiconpicker)))($a826c173f4456cde$var$iconChange, {
    theme: "default",
    iconSource: [
        "FontAwesome Solid 5",
        "FontAwesome Regular 5"
    ],
    closeOnSelect: true,
    defaultValue: null
});
$a826c173f4456cde$var$iconPickerButton.on("select", (instance)=>{
    //console.log("Select:", instance);
    $a826c173f4456cde$var$iconChange.innerHTML = instance.svg;
//console.log(instance.svg);
//console.log(iconChange.children[0]);
});
(0, ($parcel$interopDefault($CegKv$notiflix))).Notify.info("Welcome to the to-do list. Enter your tasks.");


//# sourceMappingURL=main.js.map
