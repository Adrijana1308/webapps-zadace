/*Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve
djeljive s 3*/

var p = [1,2,3,4,5,6,7,8,9,10];


var func5 = function (p){

    for(var i = 0; i<=p.length; i++){
        if(p[i]%3==1){
            console.log(i)
        }
    }
    
}

func5(p)