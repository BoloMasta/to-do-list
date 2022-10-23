import "vanilla-icon-picker/dist/themes/default.min.css";
import $4RXnX$vanillaiconpicker from "vanilla-icon-picker";
import $4RXnX$notiflix from "notiflix";




const $e05782b8f6baf6a3$var$form = document.querySelector("#new-task-form");
const $e05782b8f6baf6a3$var$input = document.querySelector("#new-task-form__input");
const $e05782b8f6baf6a3$var$list_el = document.querySelector("#tasks");
const $e05782b8f6baf6a3$var$trash = document.querySelector("#trash");
const $e05782b8f6baf6a3$var$iconChange = document.querySelector("#iconChange");
$e05782b8f6baf6a3$var$form.addEventListener("submit", (event)=>{
    event.preventDefault();
    if ($e05782b8f6baf6a3$var$input.value.length === 0) {
        (0, $4RXnX$notiflix).Notify.failure(`Enter some task please.`);
        return;
    }
    const task = $e05782b8f6baf6a3$var$input.value;
    const task_el = document.createElement("div");
    task_el.classList.add("task");
    const task_icon = document.createElement("div");
    task_icon.classList.add("task__icon");
    //console.log(iconChange.innerHTML);
    task_icon.innerHTML = $e05782b8f6baf6a3$var$iconChange.innerHTML;
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
    $e05782b8f6baf6a3$var$list_el.appendChild(task_el);
    (0, $4RXnX$notiflix).Notify.success(`Task: "${task_el.children[1].children[0].value}" added.`);
    $e05782b8f6baf6a3$var$input.value = "";
    task_edit_el.addEventListener("click", (event)=>{
        if (task_edit_el.innerText.toLowerCase() == "edit") {
            task_edit_el.innerText = "Save";
            task_input_el.readOnly = false;
            task_input_el.focus();
        } else {
            task_edit_el.innerText = "Edit";
            task_input_el.readOnly = true;
            (0, $4RXnX$notiflix).Notify.warning("Task edited.");
        }
    });
    task_delete_el.addEventListener("click", (event)=>{
        $e05782b8f6baf6a3$var$list_el.removeChild(task_el);
        console.log(task_el.children[1].children[0].value);
        (0, $4RXnX$notiflix).Notify.failure(`Task: "${task_el.children[1].children[0].value}" done.`);
    });
    if ($e05782b8f6baf6a3$var$list_el.children.length >= 1) $e05782b8f6baf6a3$var$trash.classList.remove("is-hidden");
});
$e05782b8f6baf6a3$var$trash.addEventListener("click", ()=>{
    (0, $4RXnX$notiflix).Confirm.show("Remove all tasks", "Do you want to remove all tasks?", "Yes", "No", function okCb() {
        $e05782b8f6baf6a3$var$list_el.innerText = "";
        $e05782b8f6baf6a3$var$trash.classList.add("is-hidden");
        (0, $4RXnX$notiflix).Notify.failure(`All tasks removed.`);
    }, function cancelCb() {
        return;
    }, {
        width: "320px",
        borderRadius: "8px"
    });
});
// Icon picker with `default` theme
const $e05782b8f6baf6a3$var$iconPickerButton = new (0, $4RXnX$vanillaiconpicker)($e05782b8f6baf6a3$var$iconChange, {
    theme: "default",
    iconSource: [
        "FontAwesome Solid 5",
        "FontAwesome Regular 5"
    ],
    closeOnSelect: true,
    defaultValue: null
});
$e05782b8f6baf6a3$var$iconPickerButton.on("select", (instance)=>{
    //console.log("Select:", instance);
    $e05782b8f6baf6a3$var$iconChange.innerHTML = instance.svg;
//console.log(instance.svg);
//console.log(iconChange.children[0]);
});
(0, $4RXnX$notiflix).Notify.info("Welcome to the to-do list. Enter your tasks.");


//# sourceMappingURL=module.js.map
