//Napiši funkciju koja pretvara broj X u sate i minute

var func4 = function (x) {
    var sati = Math.floor(x/60)
    var minute = x %60
    return sati + " sata i " + minute + " minuta"
}

console.log(func4(120))