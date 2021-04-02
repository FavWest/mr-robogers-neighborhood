function beepBoop(number) {
  let result=[];
  for(i=0; i<=number; i++){
    if(i.toString().includes("3")) {
      result.push("Won't you be my neighbor?");
    } else if (i===2) {
      result.push("Boop");
    } else if (i===1) {
      result.push("Beep!");
    } else {
      result.push(i);
    }    
  }
  return result;
}

//TESTS
function displayResults(input, result){
  console.log(input);
  console.log(result);
}
console.log(beepBoop(0));
console.log("[0]");
console.log(beepBoop(15).length);
console.log(16);
console.log(beepBoop(50)[45]);
console.log(45);
console.log(beepBoop(4)[3]);
console.log("Won't you be my neighbor?");
console.log(beepBoop(4)[2]);
console.log("Boop");
displayResults(beepBoop(4)[1], "Beep!");
displayResults(beepBoop(25)[23], "Won't you be my neighbor?");

