//For Login


let loginForm = document.getElementById("loginForm")
loginForm.addEventListener('submit', login)


function login(e){
e.preventDefault()

if(checkLogin() === true){
const user = {
    username: document.getElementById("username").value,
    pswd: document.getElementById("pswd").value
}

console.log(user)
}


}

function checkLogin(){
    return true
}