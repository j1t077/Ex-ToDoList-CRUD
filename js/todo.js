let tasks = [];

function addTask() {
  const taskInput = document.getElementById("task");
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    taskInput.value = "";
    updateTaskTable();
  }
}

function updateTaskTable() {
  const taskTableBody = document.querySelector("#taskTable tbody");
  taskTableBody.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskRow = document.createElement("tr");
    const taskCell = document.createElement("td");
    taskCell.textContent = task;
    taskRow.appendChild(taskCell);
    const actionCell = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      openEditTaskModal(index);
    });
    actionCell.appendChild(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(index);
    });
    actionCell.appendChild(deleteButton);
    taskRow.appendChild(actionCell);
    taskTableBody.appendChild(taskRow);
  });
}

function openEditTaskModal(index) {
  const editTaskModal = document.getElementById("editTaskModal");
  const editTaskInput = document.getElementById("editTask");
  editTaskInput.value = tasks[index];
  const editTaskIndexInput = document.getElementById("editTaskIndex");
  editTaskIndexInput.value = index;
  editTaskModal.style.display = "block";
}

function closeEditTaskModal() {
  const editTaskModal = document.getElementById("editTaskModal");
  editTaskModal.style.display = "none";
}

function saveEditedTask() {
  const editTaskInput = document.getElementById("editTask");
  const editTaskIndexInput = document.getElementById("editTaskIndex");
  const index = editTaskIndexInput.value;
  const task = editTaskInput.value.trim();
  if (task) {
    tasks[index] = task;
    updateTaskTable();
    closeEditTaskModal();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  updateTaskTable();
}

updateTaskTable();
