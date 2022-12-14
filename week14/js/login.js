import { saveUsers, getUsers} from './ls.js';

const userData = getUsers();
const form = document.querySelector("#login_form");
const message = document.querySelector(".error");
const name = document.querySelector("#name");
const password = document.querySelector("#password");


form.addEventListener("submit", (event) => {
    
    let newArray = userData.filter(function(item)
    {   
        return item.email == name.value;
    });

    if(newArray.length == 0){
        message.textContent = "Sorry, User not found!";
    } else if (newArray.length == 1){
        if(password.value == newArray[0].password){
            message.textContent = "SUCESS!";
            localStorage.setItem("user_id",JSON.stringify(newArray[0].id));
            window.location.href = `https://marcosbarrozo.github.io/wdd330/week14/views/dashboard.html`
        } else{
            message.textContent = "Incorrect password, try again!";
        }
    }
    
    message.className = "error active";   
    event.preventDefault();
 
  });