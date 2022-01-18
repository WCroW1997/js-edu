function RadToDeg(r) {
    return 180*r/3.14
}

for (let index = 0; index < 5; index++) {
    let r = prompt('r =')
    alert(RadToDeg(r))    
}