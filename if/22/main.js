let x = prompt('Введите первую координату', )
let y = prompt('Введите втурую координату', )

if (x>0 && y>0) {
    alert('Точка в первой чверти')   
}
if (x<0 && y>0) {
    alert('Точка в 2 чверти')   
}
if (x>0 && y<0) {
    alert('Точка в 3 чверти')   
}
if (x<0 && y<0) {
    alert('Точка в 4 чверти')   
}