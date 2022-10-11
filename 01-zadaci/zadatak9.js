/*Napiši funkciju koja prima dva objekta, 
te u slučaju da imaju iste kljućeve
vraća true */
var polje1 = {a:1,b:2,c:3}
var polje2 = {a:321,b:3,c:1}

var func9 = function (polje1, polje2){

    if(Object.keys(polje1).length === Object.keys(polje2).length
    && Object.keys(polje1).every(k => polje2.hasOwnProperty(k))){
        return true
    } else {
        return false
    }
}

console.log(func9(polje1, polje2))

