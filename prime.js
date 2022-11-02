function checkprime(num){
for (let i=2; i<num; i++){
    if(num%i===0){
        console.log("Prime")
    }else{
        console.log("Not Prime")
    }
}
}
checkprime(13)