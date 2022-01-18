function  Fact(n) {
    let temp = 1
    for (let index = 0; index < n; index++) {
        temp *=index        
    }
    return temp
}

for (let index = 0; index < 5; index++) {
    let n = prompt('n = ')
    alert(Fact(n))
}