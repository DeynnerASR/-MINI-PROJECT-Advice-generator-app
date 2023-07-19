import { module } from "./server.js";
const diceButton = document.querySelector('.dice');
const adviceId = document.querySelector('.adviceId__id');
const adviceText = document.querySelector('.adviceText');


const newAdvice = async () =>{
    try {
        const advice =  await (module.generateAdivce())    
        adviceId.textContent = advice.slip.id;
        adviceText.textContent = `"${advice.slip.advice}"`;              
    } catch (error) {
        alert("An error has occurred");
    }
}

diceButton.addEventListener('click',() => {
    newAdvice();
})





