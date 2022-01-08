let n = prompt('Введите n')
let x = prompt('Введите x')
let rezult = 1
let fact = 1
let sqr = 1

for (let index = 1; index < n; index++) {
    fact = fact * index
    sqr = sqr * x
    rezult = rezult + sqr / fact 
}
alert(rezult)