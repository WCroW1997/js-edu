let a = prompt('Введите число а')
let b = prompt('Введите число b')

while (a !=0 && b != 0) {
    if (a>b) {
        a = a % b
    } else{
        b = b % a
    }
}

alert(a+b)