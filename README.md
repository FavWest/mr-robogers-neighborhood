# Mr. Roboger's Neighborhood

#### Enter a number to see Mr. Roboger's response!

#### By _**Victoria West**_

## Technologies Used
* HTML
* JQuery
* JavaScript

## Description
_User enters a number. A response appears that counts up to that number, following these rules:_
* _Any number containing the digit '3' is replaced with "Won't you be my neighbor?"_
* _Any other number that contains the digit '2' is replaced with "Boop"_
* _Any other number that contains the digit '1' is replaced with "Beep"_
* _All remaining numbers appear as themselves_

## Setup/Installation Requirements
### Run Locally
* **Requirements:** ability to view HTML in a web browser, internet access, Git
#### Using GitHub Desktop
* **Requires GitHub Desktop**
* Go to https://github.com/FavWest/mr-robogers-neighborhood
* Click green CODE button and select "Open with GitHub Desktop" from the dropdown menu
* Open the repository in your editor and run "index.html" OR open the repository in your file manager and double-click "index.html" to open it in a browser
#### Using command line with Git
* Clone code using `git clone https://github.com/FavWest/mr-robogers-neighborhood`
* Open Portfolio folder in Explorer or Finder
* Double-click "index.html" to open in a browser
## Known Bugs
* UI: Robot response can overflow border box on smaller screens.
## License
BY-SA
Copyright (c) 2021 Victoria West

Robot Photo by Rico Shen
## Contact Information
Victoria West email@email.com


## Tests
#### Describe: beepBoop()

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
Code: beepBoop(125)[123]+beepBoop(110)[105]+beepBoop(215)[210];  
Expected Output: "Won't you be my neighbor?Beep!Boop"  

Test: "If passed a second argument of length one or more, add it to the end of 'Won't you be my neighbor?'"
Code: beepBoop(4, "Sam")[3];
Expected Output: "Won't you be my neighbor, Sam?"

Test: "If passed a second argument '', do not add it to the end of 'Won't you be my neighbor?'"
Code: beepBoop(4, "")[3];
Expected Output: "Won't you be my neighbor?"

Test: "If passed a second argument that is only whitespace, do not add it to the end of 'Won't you be my neighbor?'"
Code: beepBoop(4, "     ")[3];
Expected Output: "Won't you be my neighbor?"

Test: "If passed a non-number for the first argument, beepBoop should return non-number message."
Code: beepBoop("hi");
Expected Output: "hi... ... ... Divide by cucumber error. Please reinstall universe and reboot."