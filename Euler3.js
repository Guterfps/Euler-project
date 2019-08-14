let largestprimefactor = 0
let num = 600851475143
for(let i=2;i<num;i++){
    if(num%i===0){
        let prime=true
    for(let a=2;a<=Math.sqrt(i);a++){
            if(i%a===0){
                prime=false
        }
    }
    if(prime===true){
        console.log(i)
        largestprimefactor=i
    }
}
}

console.log(largestprimefactor)