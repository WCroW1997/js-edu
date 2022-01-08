let n = prompt('Введите n')
let rezult = 1
let fact = 1

for (let index = 1; index < n; index++) {
    fact=fact * index
    rezult=rezult + 1 /fact 
}
alert(rezult)