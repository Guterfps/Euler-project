let sum=2
for (let x=3;x<2000000;x++){
    let isprime=true
    for (let a=2;a<=Math.sqrt(x);a++){
        if(x%a===0){
            isprime=false
            break
        }
    }
    if(isprime){
        // console.log(x)
        sum+=x
    }
}

console.log(sum)