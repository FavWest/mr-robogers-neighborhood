//Business Logic
function beepBoop(number, name) {
  let result=[];
  let message="Won't you be my neighbor?"
  if(arguments.length>1) {
    if (name.length!==0) {
    message = "Won't you be my neighbor, " + name + "?";
    }
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

//UI Logic
$(document).ready(function() {
  $("#talk").click(function(event) {
    event.preventDefault();
    $("#robo-response-box").show();
    const responseArray=beepBoop($("#number").val());
    const response= convertToFormattedString(responseArray);
    $("#robo-response-text").text(response);
  });
  $("#reverse").click(function(event){
    event.preventDefault();
    $("#robo-response-box").show();
    let responseArray=beepBoop($("#number").val());
    responseArray.reverse();
    const response= convertToFormattedString(responseArray);
    $("#robo-response-text").text(response);
  })
});