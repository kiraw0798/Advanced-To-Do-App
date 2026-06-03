// saving tasks in storage
function saveTaskToLocalStorage(taskData){
    // 1. Get current tasks 
    let allTasks = JSON.parse(localStorage.getItem('myTasks')) || [];

    // 2. add new one 
    allTasks.push(taskData);

    // 3. save it back as a string
    localStorage.setItem('myTasks', JSON.stringify(allTasks));

    //4. Update the UI
    renderTasks();
}


// deleting tasks from storage
function deleteFromStorage(idToDelete){
    // getting all the tasks from the storage
    let allTasks = JSON.parse(localStorage.getItem('myTasks')) || [] ;

    // getting the specific task and removing it from the rest
    const filteredTasks = allTasks.filter((item) => item.id !== idToDelete);

    
    // restoring the rest of the tasks back to storage
    localStorage.setItem('myTasks', JSON.stringify(filteredTasks));


}

//saving theme and loading it
function loadTheme(){
    const savedTheme = localStorage.getItem('darkMode');
    if(savedTheme === 'enabled'){
        toggle.classList.add('dark'); 
        if(toggle.classList.contains('dark')){
            toggle.textContent = '🌙';
            logo.innerHTML = '<img src="Assets/Logo_Dark_Mode.png" alt="logo" class="logoImage" loading="lazy">'
            localStorage.setItem('darkMode', 'enabled');
        }
        else{
            toggle.textContent = '☀️';
            logo.innerHTML = '<img src="Assets/Logo_Light_Mode.png" alt="logo" class="logoImage" loading="lazy">'
            localStorage.setItem('darkMode', 'disabled');
        }
        body.classList.toggle('dark');
        navBar.classList.toggle('dark');

        buttons.forEach((button) =>{
            button.classList.toggle('dark');
        })

        search.classList.toggle('dark');
        taskContainer.classList.toggle('dark');
        taskStatus.forEach((taskStatus) =>{
            taskStatus.classList.toggle('dark');
        })

        statusTitle.forEach((header) =>{
            header.classList.toggle('dark');
        })

        task.forEach((task) => {
            task.classList.toggle('dark');
            const taskName = task.querySelector('.task-name');
            const taskDesc = task.querySelector('.task-desc');
            const dueDate = task.querySelector('.due-date');
            taskName.classList.toggle('dark');
            taskDesc.classList.toggle('dark');
            dueDate.classList.toggle('dark');
        })           
    }
}

function changingStatus(DraggedID, ParentElementClassList){
    //Getting the task list
    let allTasks = JSON.parse(localStorage.getItem('myTasks'));

    //getting the dragged tasks
    const draggedTask = allTasks.find((task) => Number(task.id) === Number(DraggedID));
    console.log("Task found:", draggedTask); 



    if(ParentElementClassList.contains('toDo')){
        draggedTask.formTaskStatus = 'todo';
    }
    else if(ParentElementClassList.contains('inProgress')){
        draggedTask.formTaskStatus = 'progress';
    }
    else{
        draggedTask.formTaskStatus = 'done';
    }
    localStorage.setItem('myTasks' , JSON.stringify(allTasks));

    renderTasks();
}





