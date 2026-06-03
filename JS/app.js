// For theme.js
const body = document.querySelector('body');
const logo = document.querySelector('.logo');
const navBar = document.querySelector('.navBar');
const buttons = document.querySelectorAll('button');
const lightToggle = document.querySelector('.lightToggle');
const toggle = document.querySelector('.toggle');
const taskContainer = document.querySelector('.taskContainer');
const taskStatus = document.querySelectorAll('.taskStatus');
const inputs = document.querySelectorAll('input');
const statusTitle = document.querySelectorAll('.status-title');






const addTask = document.querySelector('.addTask');
const overlay = document.querySelector('.overlay');
const taskForm = document.querySelector('.taskForm');
const cancelForm = document.querySelector('#cancel');
const task = document.querySelectorAll('.task');


const todoColumn = document.querySelector('.toDo');
const progressColumn = document.querySelector('.inProgress');
const doneColumn = document.querySelector('.done');

addTask.addEventListener('click', () =>{
    overlay.style.display = 'flex';

});
cancelForm.addEventListener('click', () =>{
    overlay.style.display = 'none';
    taskForm.reset();
})

function loadTheme(){
    const savedTheme = localStorage.getItem('darkMode');
    if(savedTheme === 'enabled'){
        toggle.classList.add('dark'); 
        const search = document.querySelector('.search');
        const task = document.querySelectorAll('.task');
        const statusTitle = document.querySelectorAll('.status-title');



        const taskFormContainer = document.querySelector('.taskFormContainer');
        const allLabels = document.querySelectorAll('label');
        const formTaskName = document.querySelector('#taskName');
        const textArea = document.querySelector('textarea');
        const select = document.querySelectorAll('select');
        const formTaskDueDate = document.querySelector('.taskDueDate');
        
        
        
        
        
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

        

        taskFormContainer.classList.add('dark');
        formTaskName.classList.add('dark');
        formTaskDueDate.classList.add('dark');
        textArea.classList.add('dark');
        taskForm.classList.add('dark');
        allLabels.forEach((label) =>{
            label.classList.add('dark');
        })

        select.forEach((select) => {
            select.classList.add('dark');
        })




    }
}

loadTheme();



