function  AddRightDigit(d, k) {
    k=k*10+d
    console.log('Done')
    return k
}



let k = prompt('k = ')
for (let index = 0; index < 2; index++) {
    let d = prompt('d = ')
    AddRightDigit(d , k)
    alert(k)
    
}
