let x1 = document.getElementById('x1')
let x2 = document.getElementById('x2')
let y1 = document.getElementById('y1')
let y2 = document.getElementById('y2')
let horseBtn = document.getElementById('horse')
let queenBtn = document.getElementById('queen')
let bishopBtn = document.getElementById('bishop')





horseBtn.addEventListener("click" , () => {
 if ((x1.value-x2.value)==1 && (y1.value-y2.value)==2 || (x1.value-x2.value)==2 && (y1.value==y2.value)==1) {
    alert ('true')
} else {
   alert ('false')
}   
})

queenBtn.addEventListener("click" , () => {
 if ((x1.value-x2.value)==(y1.value-y2.value) || (x1.value==x2.value) || (y1.value==y2.value)){
    alert ('true')
} else {
   alert ('false')
}   
})

bishopBtn.addEventListener("click" , () => {
  if ((x1.value-x2.value)==(y1.value-y2.value) || (x1.value==x2.value) || (y1.value==y2.value)) {
    alert ('true')
} else {
   alert ('false')
}   
})

