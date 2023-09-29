const form = document.querySelector("form");
const input = document.querySelector("#new-task");
const list_element = document.querySelector("#todo-list");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // stops form from refreshing the page

    const task = input.value;

    if (!task) {
        alert("Add a task first!");
        return;
    }

// creating div and input for todo's tasks
    const task_element = document.createElement("div");
    task_element.classList.add("item");

    const task_content_element = document.createElement("div");
    task_content_element.classList.add("content");
    task_content_element.innerText = task;

    task_element.appendChild(task_content_element);     // adds "content" from created div in task_content_element
    
    const task_input_element = document.createElement("input");
    task_input_element.classList.add("text");
    task_input_element.type = "text";
    task_input_element.setAttribute("disabled", "disabled");

    task_content_element.appendChild(task_input_element);       // adds "content" from created input in task_input_element

// creating buttons
    const task_buttons = document.createElement("div");
    task_buttons.classList.add("actions");

    const edit_button = document.createElement("button");
    edit_button.classList.add("edit-button");
    edit_button.innerHTML = "edit";             // TUTAJ MI NIE POKAZUJE TERAZ TYCH ICON    

    const delete_button = document.createElement("button");
    delete_button.classList.add("delete-button");
    delete_button.innerHTML = "delete";

    task_buttons.appendChild(edit_button);      // adding buttons
    task_buttons.appendChild(delete_button);

    task_element.appendChild(task_buttons);

    list_element.appendChild(task_element);                 // applying to page
})