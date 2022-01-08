let n = prompt('Введите знаение n')
let check = false

while (n > 1 && !check ) {
    if (Math.floor(n % 10) == 2) {
        check = true
    } else {
        n = n /10
    }   
}
alert ( check)




