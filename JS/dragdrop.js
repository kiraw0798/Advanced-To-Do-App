todoColumn.addEventListener('dragover', (e) =>{
    e.preventDefault();


    const taskBeingDragged = document.querySelector('.dragging');
    todoColumn.appendChild(taskBeingDragged);

})



progressColumn.addEventListener('dragover', (e) =>{
    e.preventDefault();
    
    const taskBeingDragged = document.querySelector('.dragging');
    progressColumn.appendChild(taskBeingDragged);

})



doneColumn.addEventListener('dragover', (e) =>{
    e.preventDefault();

    const taskBeingDragged = document.querySelector('.dragging');

    doneColumn.appendChild(taskBeingDragged);


})
