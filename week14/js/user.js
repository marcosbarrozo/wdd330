import { saveUsers, getUsers} from './ls.js';



export class User{
    constructor(){
        this.user = getUsers();
    }
    createUser(name,email,password) {
        const obj = {id: Date.now(), name: name, email: email, password: password, posts: []}
        this.user.push(obj); 
        saveUsers(this.user);       
    }
    createPost(id,title,content){
        
        let index =this.user.findIndex(x => x.id == id);
    
    
        const obj = {title:title, content: content}
        this.user[index].posts.push(obj)

        saveUsers(this.user);   
    
    }

   
}