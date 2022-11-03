function checkprime(number){
    let counter =0;
  for (let i=1; i<=number; i++){
    if(number%i===0){
        counter++
    }
      if(counter ===2){
          console.log("Prime")
      }else{
          console.log("Not Prime")
      }
  }
  }
  checkprime(13)