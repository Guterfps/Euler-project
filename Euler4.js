let polindrom=0
for(let i=100;i<1000;i++){
    for(let t=i;t<1000;t++){
        let num=i*t
        let reversenum=parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num)
        if(num===reversenum && polindrom<num){
            polindrom=num
        }
    }
}

console.log(polindrom)