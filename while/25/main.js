let n = prompt('Введите число n')
let f = 0
let f1 = 1
let f2 = 1

while (f < n+1) {
    f = f2+f1
    f2=f1
    f1=f
}

alert(f)