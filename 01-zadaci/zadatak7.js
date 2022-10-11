/* Napiši funkciju koja za dani broj X provjeri 
nalazi li se unutar [0, 1000], te
množi sve višekratnike broja 7 do X te 
ispisuje rezultat*/

var func7 = function (x){
    
    if (x >=0 && x <= 1000){
        console.log("Broj "+ x +" se nalazi unutar intervala")
    } else {
        console.log("Broj "+ x +" se ne nalazi unutar intervala")
    }

    for(var i=0; i<x; i++){
    
        if (i%7==0){
            console.log(i)
        }
    }
}
func7(107)