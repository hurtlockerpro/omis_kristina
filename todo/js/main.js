
let todoItemRows = document.getElementById('todoItemRows')

let isEdit = false
let editID = -1


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
            <button type="button" class="btnEdit btn btn-primary" data-editID="${ todoItem.id }" data-bs-toggle="collapse" data-bs-target="#collapseExample">edit</button>
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
    let btnsEdit = document.getElementsByClassName('btnEdit')

    for (let index = 0; index < btnsDelete.length; index++) {
        // delete buttons
        btnsDelete[index].addEventListener('click', function(event){
            console.log(event)
            deleteTodoItem(event.target.dataset.deleteid)
            generateTodoItemsRows()
        })
        // edit buttons
        btnsEdit[index].addEventListener('click', function(event){

            let id = event.target.dataset.editid
                       
            isEdit = true
            editID = id
            
            // step 2 find element
            let foundElement = todoItems.filter(item => item.id == id)
            foundElement = foundElement[0]
            console.log('edit: ' , foundElement)

            // step 3 fill form 
            todoTitle.value = foundElement.todoTitle
            todoDate.value = foundElement.todoDate
            todoCheck.checked = foundElement.todoCheck
            
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




let todoTitle = document.getElementById('todoTitle')
let todoDate = document.getElementById('todoDate')
let todoCheck = document.getElementById('todoCheck')
let btnSave = document.getElementById('btnSave')

btnSave.addEventListener('click', function(){

    if (todoTitle.value.trim().length > 3)
    {
        // step 1 create array new element
        let newTodo = {
            id: getMaxID(),
            todoTitle: todoTitle.value, // innerHTML innerText
            todoDate: todoDate.value,
            todoCheck: todoCheck.checked
        }
        // step 2 add new element to array
        if (isEdit == false)
        {
            todoItems.push(newTodo)
        } else {
            // todo update
            for (let index = 0; index < todoItems.length; index++) 
            {
                if (todoItems[index].id == editID)
                {
                    todoItems[index].todoTitle = todoTitle.value
                    todoItems[index].todoDate = todoDate.value
                    todoItems[index].todoCheck = todoCheck.checked
                }
            }
        }

        // step 3 refresh list 
        generateTodoItemsRows()

        console.log('max id: ', getMaxID());
    } else {
        alert('Insert longer text!')
    }
})


function getMaxID(){
    let maxID = 0
    for (let index = 0; index < todoItems.length; index++) {
        const element = todoItems[index];
        if (element.id > maxID) maxID = element.id
    }
    return maxID + 1
}



