let arr=[]
for(let i=2;i<1000000;i++){
        let prime=true
    for(let a=2;a<=Math.sqrt(i);a++){
            if(i%a===0){
                prime=false
        }
    }
    if(prime===true){
       arr.push(i)
    }
    if(arr.length===10001){
        console.log(i)
        break
    }
}
