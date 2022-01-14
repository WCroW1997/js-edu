function Swap(x, y) {
    x = x + y
    y = x - y
    x = x - y
    
}

let a = prompt(' a = ')
let b = prompt(' b = ')
let c = prompt(' c = ')
let d = prompt(' d = ')

Swap(a, b)
Swap(c, d)
Swap(b, c)

alert( a + b + c + d)