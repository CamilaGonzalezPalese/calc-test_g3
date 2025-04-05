const symbols = ['+', '-', '*']; //Se podria agregar / o % como operadores
const levelSelect = 5;


function generateQuestion(level)
{
    //Generacion de valores de cada operacion 
    const generateQuestion =
    {
        question: "Cuanto es ",
        allAnswers: [],
        correctAnswer: ""
    }

    let operationSymbol = getRandomOperationSymbolByLevel(level);
   
    let operationValues = [getRandomOperationNumberByLevel(level), getRandomOperationNumberByLevel(level)];

    
    generateQuestion.question += `${operationValues[0]} ${operationSymbol} ${operationValues[1]}?`;
    generateQuestion.correctAnswer = getCorrectAnswer(operationValues, operationSymbol).toString();


    generateQuestion.allAnswers[0] = getCorrectAnswer(operationValues, operationSymbol).toString();

    generateQuestion.allAnswers.push(...getAllAnswers(generateQuestion.correctAnswer));

    generateQuestion.allAnswers = changeAnswersOrder(generateQuestion.allAnswers);

    /* console.log(generateQuestion.question);
    console.log(generateQuestion.allAnswers);
    console.log(generateQuestion.correctAnswer); */

    return generateQuestion;

}


//Retorna el tipo de simbolo para la operacion 
function getRandomOperationSymbolByLevel(level)
{
    const posibleSymbols = symbols.slice(0, level)
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return posibleSymbols[randomIndex];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

//elige 2 valores aleatorios para la operacion sin que se repitan
function getRandomOperationNumberByLevel(level)
{
    switch (level) {
        case 1:
            return getRandomInt(1, 10);       // Muy Facil
        case 2:
            return getRandomInt(10, 100);      // Facil
        case 3:
            return getRandomInt(100, 500);     // Medio
        case 4:
            return getRandomInt(500, 1500);    // Dificil
        case 5:
            return getRandomInt(1500, 5000);   // Muy Dificil
        default:
          throw new Error("Invalid level. Choose 1–5.");
      }
}


//Calcula cual es el resultado de la operacion
function getCorrectAnswer(answerArray, answerSymbol)
{
    const [num1, num2] = answerArray;

  switch (answerSymbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num2 !== 0 ? parseFloat((num1 / num2).toFixed) : 'Error: Division by zero';
  }
}

//calcula valores en un rango de numeros cercanos a la respuesta
//correcta para generar las respuestas incorrectas
function getAllAnswers(correctAnswer)
{
    response = [];
    const margin = 5;
    let val;

    for (let i = 0; i < 3; i++)
    {
        do 
        {
            val = (Math.floor(Math.random() * (2 * margin + 1)) + (correctAnswer - margin)).toString();
        }
        while (val === correctAnswer.toString()  || response.includes(val.toString()));
        response.push(val);
    }

    return response;
}


//Cambia de orden las respuestas
function changeAnswersOrder(answersArray)
{
    return answersArray.sort(() => Math.random() - 0.5);
}