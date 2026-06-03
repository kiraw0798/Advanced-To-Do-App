lightToggle.addEventListener('click', ()=>{
    const search = document.querySelector('.search');
    const task = document.querySelectorAll('.task');
    const statusTitle = document.querySelectorAll('.status-title');

    //for the form
    const taskFormContainer = document.querySelector('.taskFormContainer');
    const allLabels = document.querySelectorAll('label');
    const formTaskName = document.querySelector('#taskName');
    const textArea = document.querySelector('textarea');
    const select = document.querySelectorAll('select');
    const formTaskDueDate = document.querySelector('.taskDueDate');



    toggle.classList.toggle('dark');
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

    taskFormContainer.classList.toggle('dark');
    formTaskName.classList.toggle('dark');
    formTaskDueDate.classList.toggle('dark');
    textArea.classList.toggle('dark');
    taskForm.classList.toggle('dark');

    allLabels.forEach((label) =>{
        label.classList.toggle('dark');
    })

    select.forEach((select) => {
        select.classList.toggle('dark');
    })







})




