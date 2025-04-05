let pregunta =
    generateQuestion(levelSelect);

console.log(pregunta)
const preguntaContainer = document.getElementById('pregunta-texto');
preguntaContainer.textContent = pregunta.question;
const respuestasContainer = document.getElementById('respuestas');


/* for (let i = 0; i < pregunta.opciones.length; i++) {
    let button = document.getElementById("respuesta" + i);
    button.textContent = pregunta.opciones[i];
    button.onclick = () => alert(i === pregunta.respuesta ? "Correct!" : "Wrong!");
    respuestasContainer.appendChild(button);
} */


function assignResponsesToButtons() {
    let buttons = document.getElementsByClassName('respuesta');
    let buttonsArray = [...buttons];

    buttonsArray.forEach((e,index)=>
    e.textContent = pregunta.allAnswers[index]
    )
}

assignResponsesToButtons();



