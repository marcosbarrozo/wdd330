function getUsers(){
    if (localStorage.getItem("user") === null){
        return []
    } else {
        return JSON.parse(localStorage.getItem("user"));
    }
}

function saveUsers(user){
    return localStorage.setItem("user",JSON.stringify(user));
}

export { saveUsers, getUsers}
