function addTask() {
    // Get the input value
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
  
    if (taskText.trim() !== '') {
      // Create a new list item
      var listItem = document.createElement("li");
      listItem.textContent = taskText;
  
      // Append the new item to the task list
      var taskList = document.getElementById("taskList");
      taskList.prependChild(listItem);
  
      // Clear the input field after adding the task
      taskInput.value = '';
    } else {
      alert("Please enter a task!");
    }
  }
  