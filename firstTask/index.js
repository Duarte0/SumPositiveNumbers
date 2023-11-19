const rdl = require('readline-sync')

function SumPositiveNumbers() {
    
    let choice = null

    while (choice != 'n') {

        let sum = 0

        let num = rdl.question('Digite um numero positivo: ')
        let chosenNumber = parseInt(num)

        if(isNaN(chosenNumber) || chosenNumber <=0) {
            console.log('Insira um numero positivo!')
        
        } else {
            for (let i = 0; i < chosenNumber; i++) {
                if(i % 3 === 0 || i % 5 === 0) {
                    sum += i
                }
            }
            
            console.log(`A soma dos números positivos dividos por 3 e 5 antes de ${chosenNumber} é ${sum}`)
        }
        choice = rdl.question('Deseja continuar?(s/n): ')
    }
}

SumPositiveNumbers()