for(let x=1;x<498;x++){
    for(let y =1;y<999-x;y++){
        let c=1000-(x+y)
        if(x<y && y<c && x*x+y*y===c*c){
            console.log(x,y,c)
        }
    }
}