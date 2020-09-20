document.getElementById('formTask').addEventListener('submit', guardarTareas);

function guardarTareas(e){
    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title,
        description
    }

if(localStorage.getItem('tasks') === null){
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}else{
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

    obtenerTareas();

    document.getElementById('formTask').reset();

    e.preventDefault();
}


function obtenerTareas(){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    let tasksView = document.getElementById('tasks');
    const html = "<div class = 'card'></div>"
    tasksView.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += 
        `<div class="card mb-3">
            <div class = "card-body">
                <p>${title} - ${description}</p>
                <a class = "btn btn-dark" onclick="borrarTareas('${title}')">Borrar</a>
            </div>
        </div> `;
        
    }

}

function borrarTareas(title){
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++){
        if(tasks[i].title == title){
            tasks.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    obtenerTareas();
}



obtenerTareas();

function obtenerUsuario(){
    let registros = JSON.parse(localStorage.getItem('registros'));
    let registroView = document.getElementById('registro');

    registroView.innerHTML = "";

    for(let i = 0; i < registros.length; i++){
        
    }
}