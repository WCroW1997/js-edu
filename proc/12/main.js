function SortInc3(a1, b1, c1) {
    let temp 
    if (a1>b1) {
        Swap(a1,b1)
    }
    if (a1>c1) {
        Swap(a1,c1)
    }
    if (b1>c1) {
        Swap(b1,c1)
    }
}

function Swap(x, y) {
    x = x + y
    y = x - y
    x = x - y
    
}

for (let index = 0; index < 2; index++) {
    let a = prompt('a =')
    let b = prompt('b =')
    let c = prompt('c =')
    SortInc3(a,b,c)
    alert(a+' '+b+' '+ c)
}