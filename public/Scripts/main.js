 import { getCurrentUser, removeCurrentUser } from "./login.js";
 
export async function fetchData(route = '', data = {}, methodType) {
    // Build options object
    const options = {
        method: methodType,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    // Only include body for non-GET methods
    if (methodType !== "GET" && data) {
        options.body = JSON.stringify(data);
    }

    const response = await fetch(route, options);

    if (response.ok) {
        return await response.json(); // parses JSON
    } else {
        throw await response.json();
    }
}


//navbar implementation
let nav = document.querySelector("nav")
if(getCurrentUser()){
    nav.innerHTML=`
      <ul>
            <li id ="logout"><a class="button">Logout</a></li>

        </ul>
    `
}
else {
    nav.innerHTML=`
     <ul>
            <li><a class="button" href="./register.html">Register</a></li>
            <li><a class="button" href="./login.html">Login</a></li>

        </ul>
    `

}


let logoutBtn = document.getElementById("logout")
if(logoutBtn) logoutBtn.addEventListener('click', removeCurrentUser)