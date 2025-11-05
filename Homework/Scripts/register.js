
    //first access the form
    let registerForm = document.getElementById("registerForm")
    registerForm.addEventListener('submit', register) //event listener has two parameters

    console.log(registerForm)


function register(e){
    e.preventDefault() //stops page from refreshing from forms
    pswd = document.getElementById("pswd").value
confirmPswd = document.getElementById("confirmPswd").value

if(validPassword(pswd, confirmPswd)){


    console.log("Register function Ran!!!!!!!!!")

    const user = {
       username: document.getElementById("username").value,
       password: pswd,
       dob: document.getElementById("dob").value
    
    }

    console.log(user)
}


else{
    console.log("Passwords Dont match")
}
}

function validPassword(password, confirmPassword){
    return password === confirmPassword
}

