function  IsPrime(n) {
    let i = 1
    IsPrime = true
    while ((n%i++) != 0) {
     return i==n
    }
}

let result = 0
for (let index = 0; index < 10; index++) {
    let n = prompt('n =')
    result = result + IsPrime(n)
}

alert(result)