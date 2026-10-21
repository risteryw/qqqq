const choices = ['Камень', 'Ножницы','Бумага', 'Ящерица','Спок']
let computerWinsCounter = 0
let userWinCounter = 0
const history = []
function getRandomComputerChoise(){
    return choices[Math.round(Math.random() * 4)]
}
while (computerWinsCounter < 3 && userWinCounter < 3) {
    const promtUserData = prompt('Введи Камень, Ножницы, Бумага, Ящерица, Спок')
    if (!choices.includes(promtUserData))
    console.log('Нет такого варианта')
    continue
}
    const computerChoise = getRandomComputerChoise()
    let result = ''
    if (promtUserData === computerChoise) {
        result = 'Ничья'
    } else if (
        (promtUserData === 'Камень' && (computerChoise === 'Ножницы' || computerChoise === 'Ящерица')) ||
        (promtUserData === 'Ножницы' && (computerChoise === 'Бумага' || computerChoise === 'Ящерица')) ||
        (promtUserData === 'Бумага' && (computerChoise === 'Камень' || computerChoise === 'Спок')) ||
        (promtUserData === 'Ящерица' && (computerChoise === 'Спок' || computerChoise === 'Бумага')) ||
        (promtUserData === 'Спок' && (computerChoise === 'Ножницы' || computerChoise === 'Камень'))
    ) {
        result = 'Победил игрок'
        userWinCounter++
    } else {
        result = 'Победил компьютер'
        computerWinsCounter++
    }
    history.push(
        'Раунд' + (history.length + 1) +
        ': Игрок - ' + promtUserData +
        ', Компьютер - ' + computerChoise +
        '. ' + result
    )
    console.log(result)
console.log('История игры')
let counter = 0
while (counter < history.length) {
    console.log(history[counter])
    counter++
}
console.log('Победа игрока: ' + userWinCounter)
console.log('Победа компьютера: ' + computerWinsCounter)