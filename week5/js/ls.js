
function getTodo(){
    if (localStorage.getItem("todo") === null){
        return []
    } else {
        return JSON.parse(localStorage.getItem("todo"));
    }
}

function saveTodo(todoList){
    return localStorage.setItem("todo",JSON.stringify(todoList));
}

export { saveTodo, getTodo}
