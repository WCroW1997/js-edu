function Even(k) {
    return k%2?0:1
}


let result = 0
for (let index = 0; index < 10; index++) {
    let k = prompt('k =')
    result = result + Even(k)
}

alert(result)