const  DigitCountSum = (k ,c ,s) => {
    s = 0
    c = 0
    while (k > 0) {
        s = s + Math.floor(k % 10)
        c++
        k = Math.floor(k / 10)
    }
}

for (let index = 1; index < 5; index++) {
    k = prompt('Введите число k')
    DigitCountSum(k , 0 , 0)
    alert(`c = ${c} 
s = ${s} `)
}