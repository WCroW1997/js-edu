let a = prompt('Введите первое число', )
let b = prompt('Введите второе число', )
let c = prompt('Введите третье число', )

if ((a-b)<(a-c)) {
    alert(`Точка B ближе. Ее значение ${b}. Расстаяние до точки ${a-b}`)
} else {
    alert(`Точка C ближе. Ее значение ${c}. Расстаяние до точки ${a-c}`)
}