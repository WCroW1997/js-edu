let n = prompt('Введите знаение n')
let rezult = 0

while (n > 1) {
    rezult = rezult * 10 + Math.floor(n % 10)
    n = n / 10
}

alert(rezult)