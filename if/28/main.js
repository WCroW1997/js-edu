let y = prompt('Введите год',)

if (((y%4)==0) && ((y%100)!==0) || (y%400==0)) {
    alert('366')
} else(
    alert('365')
)