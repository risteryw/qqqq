const choices = ['Камень', 'Ножницы','Бумага', 'Ящерица','Спок']
const userChoices = ['Камень', 'Ножницы','Бумага', 'Ящерица','Спок']
let counter = 0
const history = []
while (counter < userChoices.length) {
    let user = userChoices[counter]
    let computer = choices[Math.round(Math.random() * 4)]
    let result = ''
    if (user === computer) {
        result = 'Ничья'
    } else if (
        (user === 'Камень' && (computer === 'Ножницы' || computer === 'Ящерица')) ||
        (user=== 'Ножницы' && (computer=== 'Бумага' || computer === 'Ящерица')) ||
        (user === 'Бумага' && (computer === 'Камень' || computer === 'Спок')) ||
        (user === 'Ящерица' && (computer === 'Спок' || computer === 'Бумага')) ||
        (user === 'Спок' && (computer=== 'Ножницы' || computer=== 'Камень'))
    ) {
        result = 'Победил игрок'
    } else {
        result = 'Победил компьютер'
    }
    history.push(
        'Раунд' + (counter + 1) +
        ': Игрок - ' + user +
        ', Компьютер - ' + computer +
        '. ' + result
    )
    counter++
}
counter = 0
while (counter < history.length) {
    console.log(history[counter])
    counter++
}
