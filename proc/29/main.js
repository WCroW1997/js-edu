function DigitCount(k) {
    if ( k < 0 )
        return DigitCount(-k);
    else if ( k > 9 )
        return 1 + DigitCount(k / 10);
    else 
        return 1;
}

for (let index = 0; index < 5; index++) {
    let k = prompt('k = ')
    alert(DigitCount(k))
}