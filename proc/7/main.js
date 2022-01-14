function InvertDigits(k) {
    k = k + "";
    return k.split("").reverse().join("");
}

for (let index = 0; index < 5; index++) {
    let k = prompt('Введите число К')
    InvertDigits(k)
    alert(k)
}