let p = prompt('Введите процент p',)
let distants = 10
let k = 1
let s = 10

while (s <= 200){
    k++
    distants = distants + distants*p/100
    s = s + distants 
}
console.log(`k = ${k}`)
console.log(`s= ${s}`)

