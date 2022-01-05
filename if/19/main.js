let first = prompt('Введите первое число', )
let second = prompt('Введите второе число', )
let third = prompt('Введите третье число', )
let four = prompt('Введите четвертое число', )

if ((third==second) && (third==four) ) {
    alert('1')
}

if ((third==first) && (third==four) ) {
    alert('2')
}

if ((first==second) && (second==four) ) {
    alert('3')
}

if ((first==second) && (third==second) ) {
    alert('4')
}