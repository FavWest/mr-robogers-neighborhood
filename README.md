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
Code: beepBoop(4);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4]