
    for(let x=1;x<1000000000;x++){
    let divisible=true
    for(let i=1;i<=20;i++){
        if(x%i!==0){
            divisible=false
        }
    }
    if(divisible===true){
        console.log(x)
        break
    }
    }

