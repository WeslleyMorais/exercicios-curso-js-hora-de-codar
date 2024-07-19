//função que adiciona tarefa
function addTask() {

    //titulo da tarefa

    const taskTitle = document.querySelector('#task-title').value;

    if(taskTitle){
        //clona template
        const template = document.querySelector('.template');

        const newTask = template.cloneNode(true);

        // adiciona título

        newTask.querySelector('.task-title').textContent = taskTitle;

        //remover as classes  desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adicionar tarefa na lista
        const list = document.querySelector('#task-list');

        list.appendChild(newTask)

        //adicionar evento de remover
        const romoveBtn = newTask.querySelector('.x-icon').addEventListener('click', function(){
            removeTask(this);
        })

        //adicionar evento de completar tarefa
        const completeBtn = newTask.querySelector('.check-icon').addEventListener('click', function() {
            completar(this);
        })


        //limpar texto na barra
        document.querySelector('#task-title').value = '';

    }
}

//função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

//Função completar tarefa
function completar(task){
    const taskComplete = task.parentNode;

    taskComplete.classList.toggle('done');
}

// evnto de adicionar tarefa
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addTask();
})