function checkPrime(number){
let factor=0;

    for(i=1;i<=number;i++){
  if(number%i==0){
   factor++;
  }
  }
if(factor==2){
return true
}
else{
return false
}
}

let answer=checkPrime(3)

if(answer==true){
console.log("prime number")
}
else {
console.log("Not a prime number")
}