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
console.log(beepBoop(0));
console.log("[0]");
console.log(beepBoop(15).length);
console.log(16);
console.log(beepBoop(50)[45]);
console.log(45);

