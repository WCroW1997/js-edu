let n = prompt('Введите знаение n')
let k = 2

while ((k < n-1) && (Math.floor(n % 2) !=0) ) {
    k++
}

if (n % k !=0) {
    console.log('true')
} else{
    console.log('false')
}