//Business Logic
function beepBoop(number, name) {
  let result=[];
  let message="Won't you be my neighbor?"
  if(arguments.length>1) {
    if (name.trim().length!==0) {
    message = "Won't you be my neighbor, " + name + "?";
    }
  }
  if(!Number(number) && number != 0){
    return number + "... ... ... Divide by cucumber error. Please reinstall universe and reboot.";
  }
  for(i=0; i<=number; i++){
    if(i.toString().includes("3")) {
      result.push(message);
    } else if (i.toString().includes("2")) {
      result.push("Boop");
    } else if (i.toString().includes("1")) {
      result.push("Beep!");
    } else {
      result.push(i);
    }    
  }
  return result;
}

function convertToFormattedString(array){
  return '"'+array.join(" ")+'"';
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
displayResults(beepBoop(25)[25], "Boop");
displayResults(beepBoop(25)[19], "Beep!");
displayResults(beepBoop(125)[123]+beepBoop(110)[105]+beepBoop(215)[210], "Won't you be my neighbor?Beep!Boop")
displayResults(beepBoop(4, "Sam")[3], "Won't you be my neighbor, Sam?");
displayResults(beepBoop(4, "")[3], "Won't you be my neighbor?");
displayResults(beepBoop("hi"), "hi... ... ... Divide by cucumber error. Please reinstall universe and reboot.");

//UI Logic
$(document).ready(function() {
  $("#talk").click(function(event) {
    event.preventDefault();
    $("#robo-response-box").show();
    const responseArray=beepBoop($("#number").val(), $("#name").val());
    let response = responseArray;
    if (Array.isArray(responseArray)){
      response= convertToFormattedString(responseArray);
    }
    $("#robo-response-text").text(response);
  });
  $("#reverse").click(function(event){
    event.preventDefault();
    $("#robo-response-box").show();
    let responseArray=beepBoop($("#number").val(), $("#name").val());
    let response = responseArray;
    if (Array.isArray(responseArray)){
      responseArray.reverse();
      response= convertToFormattedString(responseArray);
    }
    $("#robo-response-text").text(response);
  })
});