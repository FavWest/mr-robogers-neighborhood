//Business Logic
function beepBoop(number) {
  let result=[];
  for(i=0; i<=number; i++){
    if(i.toString().includes("3")) {
      result.push("Won't you be my neighbor?");
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

//UI Logic
$(document).ready(function() {
  $("#number-form").submit(function(event) {
    event.preventDefault();
    $("#robo-response-box").show();
    const response=beepBoop($("#number").val());
    $("#robo-response-text").text(response);
  });
});