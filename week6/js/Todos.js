import { getTodo, saveTodo } from   './ls.js';
import { getElement} from './utilities.js';

export default class Todo {
    constructor(){
        this.todoList = this.getTodos();
        this.renderTodoList(this.todoList);
        this.addEventListener();
        this.footerEventListener();
        this.taskLeft();
    }
    getTodos(){
        return getTodo();
    }
    addTodo(task){        
        const obj = {id: Date.now(), content: task, completed: false};
        this.todoList.push(obj);

        saveTodo(this.todoList,"todo"); 
        this.renderActive();
    }
    removeTodo(index){
        this.todoList.splice(index,1);
        saveTodo(this.todoList,"todo");
        this.renderTodoList(this.todoList);
    }
    renderTodoList(myTodoList){
        const todoContainer = getElement(".todos");
        todoContainer.innerHTML = ``;
        
        myTodoList.forEach(element => {
            const todoElement = document.createElement("div");
            todoElement.setAttribute("class","ToDo-element");
            todoElement.setAttribute("id",`${element.id}`);
            todoElement.innerHTML = `            
              <div class="checkbox">${element.completed?"X":""}</div>
              <p class="task ${element.completed?"line-through":""}">${element.content}</p>
              <button class="delete">X</button>
            `
            todoContainer.appendChild(todoElement);            
        });
        this.deleteEventListener();
        this.checkEventListener();
        this.taskLeft();

    }
    filterCompleted(){
        let completed = this.todoList.filter(element => element["completed"] == true);
        this.renderTodoList(completed);
        return completed;
    }
    filterActive(){
        let active = this.todoList.filter(element => element["completed"] == false);
        this.renderTodoList(active);
        return active;
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
                let myIndex =  this.todoList.findIndex(x=>x.id == btn.parentElement.id);   
                this.removeTodo(myIndex);
            })            
        });
    }
    taskLeft(){
        const tasksLeft = getElement("#tasks-left");
        let numberTasksLeft = this.todoList.filter(element => element["completed"] == false).length;
        tasksLeft.innerText = `${numberTasksLeft} Tasks Left! `;
    }
    footerEventListener(){
        const all = getElement("#all");
        const activeBtn = getElement("#active");
        const completedBtn = getElement("#completed");

        all.addEventListener("click", ()=>{
            this.renderTodoList(this.todoList);
            if(!all.classList.contains("active")){
                all.classList.add("active");
            };
            if(activeBtn.classList.contains("active")){
                activeBtn.classList.remove("active");
            } else if (completedBtn.classList.contains("active")){
                completedBtn.classList.remove("active");
            }
            
        })
        activeBtn.addEventListener("click", () =>{
            this.filterActive();
            if(!activeBtn.classList.contains("active")){
                activeBtn.classList.add("active");
            };
            if(all.classList.contains("active")){
                all.classList.remove("active");
            } else if (completedBtn.classList.contains("active")){
                completedBtn.classList.remove("active");
            }
        });
        completedBtn.addEventListener("click", () =>{
            this.filterCompleted();
            if(!completedBtn.classList.contains("active")){
                completedBtn.classList.add("active");
            };
            if(activeBtn.classList.contains("active")){
                activeBtn.classList.remove("active");
            } else if (all.classList.contains("active")){
                all.classList.remove("active");
            }
        })
        
    }
    renderActive(){
        if (document.querySelector('.active').id == "completed"){
            this.renderTodoList(this.filterCompleted());
        } else if ( document.querySelector('.active').id == "active") {
            this.renderTodoList(this.filterActive());
        } else {
            this.renderTodoList(this.todoList);
        }
    }

   

    checkEventListener(){
        const checkBtn = document.querySelectorAll(".checkbox")
        
        checkBtn.forEach((btn , index )=>{            
            btn.addEventListener("click", ()=>{
    
                //find the correct index of the Todo Element
                let myIndex =  this.todoList.findIndex(x=>x.id == btn.parentElement.id);                  
                
                if (!this.todoList[myIndex]["completed"]){
                    this.todoList[myIndex]["completed"] = true;
                } else {
                    this.todoList[myIndex]["completed"] = false;
                }
                this.renderActive();                
                saveTodo(this.todoList,"todo");

            })            
        });
    }
}