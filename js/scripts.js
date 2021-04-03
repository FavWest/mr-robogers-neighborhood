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
    if(i===42){
      result.push("--the ultimate answer to life, the universe and everything--");
    } else if(i.toString().includes("3")) {
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
//add <em> tags around "Won't you be my neighbor?"
function addStylingToHTML(HTMLstring){
  let phrase = HTMLstring.match(/Won't you be my neighbor.*?\?/);
  let stringWithEmphasis = HTMLstring.replace(/Won't you be my neighbor.*?\?/g, "<em>"+phrase+"</em>")
  return stringWithEmphasis;
}

console.log(addStylingToHTML("Beep! Won't you be my neighbor, Sam? Boop Won't you be my neighbor, a a a b 15 d? Beep!"));

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
    response=addStylingToHTML(response);
    $("#robo-response-text").html(response);
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
    response=addStylingToHTML(response);
    $("#robo-response-text").html(response);
  });
});