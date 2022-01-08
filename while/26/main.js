let n = prompt('Введите число n')
let f = 0
let f1 = 1
let f2 = 1

while (f < n) {
    f = f2+f1
    f2=f1
    f1=f
}

console.log(`fk-1 = ${f2}`)
console.log(`FK+2 = ${f1+f2}`)
