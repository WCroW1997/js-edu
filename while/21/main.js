let n = prompt('Введите знаение n')
let check = false

while (n > 1 && !check ) {
    if (Math.floor(n % 2) == 0) {
        n = n /10
    } else {
        check = true
    }   
}
alert ( check)




