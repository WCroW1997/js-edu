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

for (let index = 0; index < 5; index++) {
    let k = prompt('k = ')
    for (let index2 = 0; index2 < 5; index2++) {
        alert(DigirN(k,index2))
        
    }
}