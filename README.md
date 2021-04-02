## Tests
### Describe: beepBoop()

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0);
Expected Output: 0

Test: "It should return an array of length input+1"
Code: beepBoop(15).length;
Expected Output: 16;

Test: "For numbers that don't include the digits 1, 2, or 3, the number at an index should equal that index."
Code: beepBoop(50)[45];
Expected Output: 45;

Test: "The number '3' should be replaced with 'Won't you be my neighbor?'"
Code: beepBoop(4)[3];
Expected Output: "Won't you be my neighbor?"

Test: "The number '2' should be replaced with 'Boop'"
Code: beepBoop(4)[2];
Expected Output: "Boop"

Test: "The number '1' should be replaced with 'Beep!'"
Code: beepBoop(4)[1];
Expected Output: "Beep!"

Test: "Any number that includes the digit '3' should be replaced with 'Won't you be my neighbor?'"
Code: beepBoop(25)[23];
Expected Output: "Won't you be my neighbor?"

Test: "Any number that includes the digit '2' and not the digit '3' should be replaced with 'Boop'"
Code: beepBoop(25)[25];
Expected Output: "Boop"

Test: "Any number that includes the digit '1' and not the digits '2' or '3' should be replaced with 'Beep!'"
Code: beepBoop(25)[19];
Expected Output: "Beep"

Test: "When special rules conflict, precedence should go to 3, then 2, then 1."
Code: let result=beepBoop(250);
let string = result[123]+result[105]+result[210];
return string;
Expected Output: "Won't you be my neighbor? Beep! Boop"