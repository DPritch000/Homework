//From what I can gather so far, if I need to make a game loop for a litle
//game I would probably do that here.

// For the assignment I will use input from the dummy form to make 
//a dummy object

let dummyForm = document.getElementById("dummyForm")
dummyForm.addEventListener('submit', dummy)

function dummy(e){
    e.preventDefault()

    const dummy = {
    dummyinput: document.getElementById("dummyInput"),
    
    }

    console.log(dummy)
}