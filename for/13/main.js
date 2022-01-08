let N = prompt('Введите n')
let rezult = 1
let k = -1


for (let index = 1; index < N; index++) {
    k=k*(-1)
    rezult = rezult*k*(1+0.1*index)
    console.log(rezult)
}