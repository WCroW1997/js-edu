let N = prompt('Введите n')
let rezult = 1


for (let i = 1; i < N; i++) {
    
    rezult =  rezult*(1 + 0.1*i)
    alert(rezult)
}