let todoItemContainer = document.getElementById("todoItemsContainer");

//Creating a todo list containing an array of objects

let todoList = [{
        text: "Learn HTML",
        uniqueNumber: 1
    },
    {
        text: "Learn CSS",
        uniqueNumber: 2
    },
    {
        text: "Learn javaScript",
        uniqueNumber: 3
    },
    {
        text: "Learn React.Js",
        uniqueNumber: 4
    },
    {
        text: "Learn Node.Js",
        uniqueNumber: 5
    }
];

let todoCount = todoList.length;

function onToDoStatusChanged(checkBoxId, labelId) { //THis will be the line through the text code 
    let checkBoxElement = document.getElementById(checkBoxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
}

function createAndAppendTodo(todo) {
    //Creating a unique number for the checkBoxs
    let checkBoxId = "checkbox" + todo.uniqueNumber;
    //creating a label id 
    let labelId = "label" + todo.uniqueNumber;
    //creating a todo id
    let todoId = "todo" + todo.uniqueNumber;

    function onDeleteTodo(todoId) { // Here we are deleting a todo Element
        let todoElement = document.getElementById(todoId);
        todoItemContainer.removeChild(todoElement);
    }

    //Creating a list Item function
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoElement.id = todoId;
    todoItemContainer.appendChild(todoElement);

    //Creating a CheckBox
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = checkBoxId;
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);

    inputElement.onclick = function() { // Here we are adding the eventlistner  labelElement.classList.toggle("checked");
        onToDoStatusChanged(checkBoxId, labelId);
    };

    //Creating a label Container
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

    //Creating a Label Element
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkBoxId);
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text; // Here we can change the label as required by using dot notation
    labelElement.id = labelId;
    labelContainer.appendChild(labelElement);

    //Creating a Delete Container
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

    //Creating a Delete Icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("fas", "fa-trash", "delete-icon");
    deleteIcon.onclick = function() { // This is an eventlistner that can be used to remove an element
        onDeleteTodo(todoId);
    };
    deleteIconContainer.appendChild(deleteIcon);
}

for (let todo of todoList) {
    createAndAppendTodo(todo);
}


function onAddTodo() { // Adding a todo 
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;
    todoCount += 1;

    if (userInputValue === "") {
        alert("Enter a valid text");
        return;
    }

    let newTodo = {
        text: userInputValue,
        uniqueNumber: todoCount
    };

    createAndAppendTodo(newTodo);
    userInputElement.value = "";
}


let addTodoButton = document.getElementById("addTodoButton");
addTodoButton.onclick = function() { // Adding an eventlistner for the todo 
    onAddTodo();

};
