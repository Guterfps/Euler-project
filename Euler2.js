let a=1
let b= 2
let x=0
let sum =2
for (let i=1;x<4000000;i++){
x=a+b
a=b
b=x
if(x%2===0){
    sum+=x
}

}

console.log(x,sum)