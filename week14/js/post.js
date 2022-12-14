import { saveUsers, getUsers} from './ls.js';

if(JSON.parse(localStorage.getItem("user_id"))){
    const userData = getUsers();
    const user_id = JSON.parse(localStorage.getItem("user_id"));
    const user_posts = userData[userData.findIndex(x => x.id == user_id)].posts
    const postContainer = document.querySelector("#posts");
    const userName = document.querySelector("#user_name");
    
    userName.innerText = userData[userData.findIndex(x => x.id == user_id)].name;
    function createPosts(posts){
     
        posts.forEach(post => {
            let article = document.createElement("article");
            let h2 = document.createElement("h2");
            let p = document.createElement("p");
    
            h2.innerText = post.title;
            p.innerText = post.content;
            article.appendChild(h2);
            article.appendChild(p);
            postContainer.appendChild(article);
            
        });
    }
    
    createPosts(user_posts);
} else {
    const blogTitle = document.querySelector("#blog_title");
    blogTitle.innerText = "No user logged in, please Login or Create Your Account!"
    const link = document.querySelector("#link");
    link.href = "https://marcosbarrozo.github.io/wdd330/week14/index.html";
    link.textContent = "Login";
}



