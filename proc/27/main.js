function  IsPowerN(k, n) {
    while (k>=5 && k == k/5) {
        return k==1
    }
}

let result = 0
let n = prompt('n =')
for (let index = 0; index < 10; index++) {
    let k = prompt('k =')
    result = result + IsPowerN(k,n)
}

alert(result)