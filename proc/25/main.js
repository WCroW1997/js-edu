function  IsSquare(k) {
    return k==Math.pow(Math.sqrt(k),2)   
}


let result = 0
for (let index = 0; index < 10; index++) {
    let k = prompt('k =')
    result = result + IsSquare(k)
}
alert(result)