
let todoItemRows = document.getElementById('todoItemRows')



// database
let todoItems = [
    { // 0
        id: 1,
        todoTitle: 'todo 1',
        todoDate: '2022-02-24',
        todoCheck: false // true
    },
    { // 1
        id: 2,
        todoTitle: 'todo 2',
        todoDate: '2022-02-23',
        todoCheck: false // true
    },
    { // 2
        id: 3,
        todoTitle: 'todo 3',
        todoDate: '2022-02-22',
        todoCheck: true // true
    },
]

function drawTodoItemRow(todoItem){
    return `
        <div class="todoRow">
            <div class="todoTitle ${ todoItem.todoCheck == true ? 'done' : '' }">
            ${ todoItem.todoTitle } (id: ${ todoItem.id }) 
            </div>
            <button type="button" class="btnEdit btn btn-primary" data-editID="${ todoItem.id }">edit</button>
            <button type="button" class="btnDelete btn btn-danger" data-deleteID="${ todoItem.id }">delete</button>
        </div>`
}

function generateTodoItemsRows(){

    todoItemRows.innerHTML = ''
    for (let index = 0; index < todoItems.length; index++) {
        const todoItem = todoItems[index];
        todoItemRows.innerHTML += drawTodoItemRow(todoItem)
    }

    let btnsDelete = document.getElementsByClassName('btnDelete')

    for (let index = 0; index < btnsDelete.length; index++) {
        btnsDelete[index].addEventListener('click', function(event){
            console.log(event)
            deleteTodoItem(event.target.dataset.deleteid)
            generateTodoItemsRows()
        })
        
    }
}

function deleteTodoItem(id){
    //const found = todoItems.find(element => element.id == id);
    for (let index = 0; index < todoItems.length; index++) {
        if (todoItems[index].id == id)
        {
            todoItems.splice(index, 1)
        }
    }
}
generateTodoItemsRows()




//deleteTodoItem(2)


