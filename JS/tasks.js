const myForm = document.querySelector('.taskForm');


myForm.addEventListener('submit', (e) =>{
    e.preventDefault();


    const data = new FormData(e.target);


    const taskData = {
        id: Date.now(), // Unique ID to help with deleting Later
        formTaskName: data.get('taskName'),
        formTaskDesc: data.get('description'),
        formTaskStatus: data.get('status'),
        formTaskPriority: data.get('priority'),
        formDueDate: data.get('date')
    }

    if (taskData.formDueDate === '') {
        taskData.formDueDate = new Date().toISOString().split('T')[0];
    }

    saveTaskToLocalStorage(taskData);

    overlay.style.display = 'none';

    myForm.reset();
})


function renderTasks(filteredTasks = null){
    const allTasks = filteredTasks || JSON.parse(localStorage.getItem('myTasks')) || [];
    

    todoColumn.innerHTML = '<h1 class="status-title" >Todo</h1>';
    progressColumn.innerHTML = '<h1 class="status-title" >In Progress</h1>';
    doneColumn.innerHTML = '<h1 class="status-title" >Done</h1>';


    if (toggle.classList.contains('dark')) {
        const statusTitles = document.querySelectorAll('.status-title');
        statusTitles.forEach(title => title.classList.add('dark'));
    }

    allTasks.forEach( (task) => {
        const taskElement = document.createElement('div');
        taskElement.setAttribute('id', task.id);


        //For dragging purposes (obviously :-(  )
        taskElement.setAttribute('draggable' , 'true');

        taskElement.addEventListener('dragstart', () => {
            taskElement.classList.add('dragging');
            taskElement.style.cursor = 'grabbing'
        })
        taskElement.addEventListener('dragend', () => {
            taskElement.classList.remove('dragging');

            const draggedTaskID = Number(taskElement.getAttribute('id'));
            const currentParentClasses = taskElement.parentElement.classList;

            // Call the status change once and only once
            changingStatus(draggedTaskID, currentParentClasses);
        })


        taskElement.classList.add('task');
        taskElement.innerHTML = `
            <div class="task-name">${task.formTaskName}</div>
            <div class="priority-shower"></div>
            <p class="task-desc">${task.formTaskDesc}</p>
            <div class="due-date">For: ${task.formDueDate}</div>
            <button class="delete-task"><i class="fa-solid fa-trash"></i></button>
        `;

        const priority = task.formTaskPriority;
        const priorityTaskElement = taskElement.querySelector('.priority-shower');
        const taskName = taskElement.querySelector('.task-name');
        const taskDueDate = taskElement.querySelector('.due-date');
        const taskDesc = taskElement.querySelector('.task-desc');



        //handling no description
        if(taskDesc.innerHTML === ''){
            taskDesc.innerHTML = '<i>no description</i>';
        }


        

        //setting priority level 
        if(priority === 'low'){
            priorityTaskElement.style.backgroundColor = 'var(--lowPriorityColor)';
        }
        else if(priority === 'medium'){
            priorityTaskElement.style.backgroundColor = 'var(--mediumPriorityColor)';
        }
        else{
            priorityTaskElement.style.backgroundColor = 'var(--highPriorityColor)';
        }


        // Apending to task Column
        if(task.formTaskStatus === 'todo'){
            todoColumn.appendChild(taskElement);
            taskElement.classList.add('todo');
        }
        else if(task.formTaskStatus === 'progress'){
            progressColumn.appendChild(taskElement);
            taskElement.classList.add('inProgress');        }
        else{
            doneColumn.appendChild(taskElement);
            taskElement.classList.add('done');
            taskName.classList.add('complete');
        }

        //setting up for Dark Mode
        if(toggle.classList.contains('dark')){
            taskElement.classList.add('dark');
            taskName.classList.add('dark');
            taskDueDate.classList.add('dark');
            taskDesc.classList.add('dark');
        }



       
    }
    )
}



//To delete tasks
taskContainer.addEventListener('click' , (e) =>{
    const deleteBtn = e.target.closest('.delete-task');
    if(deleteBtn){

        const idToDelete = Number(deleteBtn.parentElement.getAttribute('id'))

        //deleting from UI
        deleteBtn.parentElement.remove();



        // deleting from storage
        deleteFromStorage(idToDelete);
    }
})


renderTasks()
