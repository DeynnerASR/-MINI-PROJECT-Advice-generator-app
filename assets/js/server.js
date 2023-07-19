const generateAdivce = () =>{
    return fetch('https://api.adviceslip.com/advice').then( (response) => {
        return response.json();
    });
}

export const module = {
    generateAdivce,
}