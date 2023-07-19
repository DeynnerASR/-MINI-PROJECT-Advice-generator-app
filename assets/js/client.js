import { module } from "./server.js";
const diceButton = document.querySelector('.dice');
const adviceId = document.querySelector('.adviceId__id');
const adviceText = document.querySelector('.adviceText');

diceButton.addEventListener('click',() => {
    module.generateAdivce().then( (response)=> {
        adviceId.textContent = response.slip.id;
        adviceText.textContent = `"${response.slip.advice}"`;              
    });
})





