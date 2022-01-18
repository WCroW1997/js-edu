function DigitCount(k) {
    if ( k < 0 )
        return DigitCount(-k);
    else if ( k > 9 )
        return 1 + DigitCount(k / 10);
    else 
        return 1;
}

function DigirN(k,n) {
    for (let index = 0; index < n-1; index++) {
        k=k/10
        if (k!=0) {
            return k%10
        }else{
            return -1
        }
        
    }
}

function IsPalindrom(k) {
    let len = DigitCount(k)
    for (let index = 0; index < len; index++) {
        if (DigirN(k,i) != DigirN(k,len-i+1)) {
            return 0
        }
    return 1  
    }
}

let count = 0
for (let index = 0; index < 10; index++) {
    let k = prompt('k = ')
    count+=IsPalindrom(k)
}
alert(count)