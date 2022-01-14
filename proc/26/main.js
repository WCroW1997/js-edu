function IsPower5(k) {
    while (k>=5 && k == k/5) {
        return k==1
    }
}

let result = 0
for (let index = 0; index < 10; index++) {
    let k = prompt('k =')
    result = result + IsPower5(k)    
}

alert(result)