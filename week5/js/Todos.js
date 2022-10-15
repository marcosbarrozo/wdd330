import { getTodo, saveTodo } from   './ls.js';
import { getElement} from './utilities.js';

export default class Todo {
    constructor(){
        this.todoList = this.getTodos();
        this.renderTodoList();
        this.addEventListener();
    }
    getTodos(){
        return getTodo();
    }
    addTodo(task){        
        const obj = {id: Date.now(), content: task, completed: false};
        this.todoList.push(obj);

        saveTodo(this.todoList,"todo"); 
        this.renderTodoList(); 
    }
    removeTodo(index){
        this.todoList.splice(index,1);
        saveTodo(this.todoList,"todo");
        this.renderTodoList();
    }
    renderTodoList(){
        const todoContainer = getElement(".todos");
        todoContainer.innerHTML = ``;
        
        this.todoList.forEach(element => {
            const todoElement = document.createElement("div");
            todoElement.setAttribute("class","ToDo-element")
            todoElement.innerHTML = `            
              <div class="checkbox">${element.completed?"X":""}</div>
              <p class="task ${element.completed?"line-through":""}">${element.content}</p>
              <button class="delete">X</button>
            `
            todoContainer.appendChild(todoElement);            
        });
        this.deleteEventListener();
        this.checkEventListener()

    }
    addEventListener(){
        const addBtn = getElement("#add-task-btn");
        const task = getElement("#task");
        addBtn.addEventListener("click", () =>{
            this.addTodo(task.value);
            task.value = "";
        });
    }
    deleteEventListener(){
        const deleteBtn = document.querySelectorAll(".delete")
        deleteBtn.forEach((btn , index )=>{
            btn.addEventListener("click", ()=>{
                this.removeTodo(index);
            })            
        });
    }
    checkEventListener(){
        const checkBtn = document.querySelectorAll(".checkbox")
        checkBtn.forEach((btn , index )=>{
            btn.addEventListener("click", ()=>{
                console.log(this.todoList[index]["completed"])
                if (!this.todoList[index]["completed"]){
                    this.todoList[index]["completed"] = true;
                } else {
                    this.todoList[index]["completed"] = false;
                }
                this.renderTodoList();
                saveTodo(this.todoList,"todo");
            })            
        });
    }
}