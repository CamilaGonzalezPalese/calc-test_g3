function generateQuestion()
{
    //Generacion de valores de cada operacion 
    const generateQuestion =
    {
        question: "Cuanto es ",
        allAnswers: [],
        correctAnswer: ""
    }

    let operationSymbol = getRandomOperationSymbol();
    let operationValues = [];
    operationValues.push(...getRandomOperationNumbers());
    
    generateQuestion.question += `${operationValues[0]} ${operationSymbol} ${operationValues[1]}?`;
    generateQuestion.allAnswers[0] = getCorrectAnswer(operationValues, operationSymbol).toString();
    generateQuestion.correctAnswer = getCorrectAnswer(operationValues, operationSymbol).toString();
    generateQuestion.allAnswers.push(...getAllAnswers(generateQuestion.correctAnswer));
    generateQuestion.allAnswers = changeAnswersOrder(generateQuestion.allAnswers);

    console.log(generateQuestion.question);
    console.log(generateQuestion.allAnswers);
    console.log(generateQuestion.correctAnswer);

}


//Retorna el tipo de simbolo para la operacion 
function getRandomOperationSymbol()
{
    const symbols = ["+", "-", "*"];
    const randomSymbol = Math.floor(Math.random() * symbols.length);
    return symbols[randomSymbol];
}


//elige 2 valores aleatorios para la operacion sin que se repitan
function getRandomOperationNumbers()
{
    const numbers = ["180", "20", "330", "52", "16", "4", "44", "89", "113" ];

    let randomNumber1 = numbers[Math.floor(Math.random() * numbers.length)];
    let randomNumber2 = 0;
    while(true)
    {
        randomNumber2 = numbers[Math.floor(Math.random() * numbers.length)];
        if (randomNumber2 != randomNumber1)
        {break;}
    }

    const result = [randomNumber1, randomNumber2]; 
    return result;
}


//Calcula cual es el resultado de la operacion
function getCorrectAnswer(answerArray, answerSymbol)
{
    //console.log(answerArray);
    return eval(`${answerArray[0]} ${answerSymbol} ${answerArray[1]}`);
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


generateQuestion();