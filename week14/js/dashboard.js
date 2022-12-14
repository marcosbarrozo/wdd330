import { saveUsers, getUsers} from './ls.js';
import { User } from './user.js';

if(JSON.parse(localStorage.getItem("user_id"))){
const user = new User;
const userData = getUsers();
const form = document.querySelector("#create_form");
const message = document.querySelector(".error");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const logOut = document.querySelector("#log_out");

form.addEventListener("submit", (event) => {
    console.log(content);
    console.log(title);
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    user.createPost(user_id, title.value,content.value
        );
    title.value = "";
    content.value = "";
    message.textContent = "Post created! Click in the blog button to view your post";
    message.className = "error active";
    event.preventDefault();
 
  });

  logOut.addEventListener("click",()=>{
    window.localStorage.removeItem('user_id');
    window.location.href = "https://marcosbarrozo.github.io/wdd330/week8/index.html";
  })

  document.querySelector("#blog_btn").addEventListener("click", ()=>{
    window.location.href = "https://marcosbarrozo.github.io/wdd330/week8/views/blog.html";
  })

} else{
    const section = document.querySelector("#dashboard").innerHTML = `
    <h1>No user logged in, please Login or Create Your Account!</h1>
    <div class="buttons">
    <a href="https://marcosbarrozo.github.io/wdd330/week8/index.html" class="btn" >Login</a>
    <a href="https://marcosbarrozo.github.io/wdd330/week8/views/sign_up.html" class="btn" >Sign up</a>
    </div>

    `

}

