function beepBoop(number) {
  let result=[];
  for(i=0; i<=number; i++){
    if(i===3) {
      result.push("Won't you be my neighbor?");
    } else {
      result.push(i);
    }    
  }
  return result;
}

//TESTS
console.log(beepBoop(5));

