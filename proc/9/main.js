function AddLeftDigit(d, k) {
    let temp = 10
    while ((k % temp) > 1) {
        k = k + d*temp
        temp = temp * 10
    }
}

let k = prompt('k = ')
for (let index = 0; index < 2; index++) {
   let d = prompt('d =')
   AddLeftDigit(d , k)
   alert(k)
}