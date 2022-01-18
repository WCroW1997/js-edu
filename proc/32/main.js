function DegToRad(d) {
    return d*3.14/180
}

for (let index = 0; index < 5; index++) {
    let d = prompt('d =')
    alert(DegToRad(d))
}