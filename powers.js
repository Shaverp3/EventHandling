// Add the correct string as the first argument to addEventListener()
// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.
// // Have your developer tools open. When you click the button, the following element...
// <section id="flight" class="power disabled">
// Should then look like this.

// <section id="flight" class="power enabled"></section>



function flightHandlerFunction(){
    document.querySelector("#flight").classList.remove("disabled")
    document.querySelector("#flight").classList.add("enabled")
}

document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

function mindReadingFunction(){
    document.querySelector("#mindreading").classList.remove("disabled")
    document.querySelector("#mindreading").classList.add("enabled")
}

document.querySelector("#activate-mindreading").addEventListener("click", mindReadingFunction)   
 

function xrayHandlerFunction(){
    document.querySelector("#xray").classList.remove("disabled")
    document.querySelector("#xray").classList.add("enabled")
}

document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

function allPowersEnabled(){
    const classArray = document.querySelectorAll(".power")
    for (let i=0; i < classArray.length; i++){
        classArray[i].classList.remove("disabled")
        classArray[i].classList.add("enabled")
    }
    
}

document.querySelector("#activate-all").addEventListener("click", allPowersEnabled)

function allPowersDisabled(){
    const classArray = document.querySelectorAll(".power")
    for (let i=0; i < classArray.length; i++){
        classArray[i].classList.remove("enabled")
        classArray[i].classList.add("disabled")
    }
    
}

document.querySelector("#deactivate-all").addEventListener("click", allPowersDisabled)



// Challenge
function activateAny(whichButton){
    const buttonClicked = document.querySelector.event.target.id.split("-")
   console.log(buttonClicked)
}

activateAny("#activate-xray")





