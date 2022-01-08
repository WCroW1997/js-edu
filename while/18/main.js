let n = prompt('Введите знаение n')
let num = 0
let sum = 0


while (n > 1) {
    num++
    sum = sum + Math.floor(n % 10)
    n = n / 10
}

alert(`sum = ${sum}, num = ${num} `)