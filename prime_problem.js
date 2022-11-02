function checkPrime(num){
let count=0;

for(i=1;i<=num;i++){

if(i%num==1){count++}
                 }

if(count==2){return true}
else{return false}
}

let ans=checkPrime(3)

if(ans==true){console.log("prime number")}
else {console.log("Not a prime")}