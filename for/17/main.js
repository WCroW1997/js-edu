let n = prompt('Введите n')
let a = prompt('Введите a')
let rezult = 1
let sqr = 1

for (let index = 1; index < n; index++) {
    sqr= sqr*a
    rezult=rezult+sqr
    
}
alert(rezult)