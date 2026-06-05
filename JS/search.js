const searchInput = document.querySelector('.search');
const searchBtn = document.querySelector('.searchBtn');


searchInput.addEventListener('input' , handleSearch);





function handleSearch(){
    const query = searchInput.value.toLowerCase();

    let allTasks = JSON.parse(localStorage.getItem('myTasks'));

    const filteredTasks = allTasks.filter((task) => task.formTaskName.toLowerCase().includes(query) || task.formTaskDesc.toLowerCase().includes(query));

    renderTasks(filteredTasks);


}

