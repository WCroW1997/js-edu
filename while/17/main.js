let n = prompt('Введите знаение n')

while (n > 1) {
    console.log(Math.floor(n % 10) )
    n = n / 10
}