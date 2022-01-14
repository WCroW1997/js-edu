function Minmax(x, y) {
    if (x>y) {
        x = x + y
        y = x - y
        x = x - y  
    }

}

let a = prompt(' a = ')
let b = prompt(' b = ')
let c = prompt(' c = ')
let d = prompt(' d = ')


Minmax(a, b)
Minmax(c ,d )
Minmax(a, c)
Minmax(b, d)

alert('min = ' + a + ' max = ' + d)