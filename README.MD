
#### CODE CHALLENGES

The repository contains a set of code challenges each program interacts with user  through the command line interface collecting input and provide corresponding output

The codes run using Node.js runtime environment  hence utilizes the readline module to collect input


### PREREQUISITES
Ensure to have installed Node.js

fork and clone the repository

## The code challenges this repository contains
1.grade_generator

2.Net_salary

3.speed_detector


# GRADE_GENERATOR
This code challenge is based on assigning a grade based on the user's input marks. It also provides motivational message to the user after receiving their respective grades.

### ABOUT THE CODE
1.The code utilizes readline module to collect input from the user specifically marks

2.IF ELSE STATEMENT is utilized in order to compare the marks inputted by the user and the respective grades assigned to the range of marks so as to output the respective grades for that specific user

4.Grades ranges from A-E and marks inputted range from 0-100

3.The created instance of the readline interface is closed with a motivational a message to the user


# How to run the code
1.Open the terminal and navigate to the the CODECHALLENGE folder

2.Run the program using Node.js and hence calling node grading_generator.js

3.The program will prompt for an input 

4.Input respective marks

5.comparisons are made and an there will be an output will be given to the user



# NET_SALARY
The program calculates the net salary of an employee based on the basic salary abd benefits also including deductions for NSSF,NHIF and PAYE.


### ABOUT THE CODE
1.The code utilizes readline module to collect input from the user 

2.Prompts the user to enter their basic salary and benefits

3.CALCULATES DEDUCTIONS:

NSSF DEDUCTIONS: basic salary + benefits

NHIF DEDUCTIONS: Uses predefined slabs based on the gross salary

PAYE tax: grosssalary - NSSFdeductions

NET SALARY: grosssalary - NSSF - NHIF -PAYE

4.created instance of the readline interface is closed with a feedback'THANK YOU FOR USING OUR NETS SALARY CALCULATOR'


# How to run the code
1.Open the terminal and navigate to the the CODECHALLENGE folder

2.Run the program using Node.js and hence calling node Net_salary.js

3.The program will prompt for an input 

4.Input respective basic salary and benefits

5.Necessary computations are made hence outputs the respective net salary


# SPEED_DETECTOR
This code challenge determines if a driver's speed is within a legal limit of 70km/h and calculates the demerit points if the speed exceeds the limit.IF the demerit points reaches or surpasses 12points it provides a feedback to the user that their license is suspended

### ABOUT THE CODE
1.The code utilizes readline module to collect input from the user specifically marks

2.Prompts the user to enter the speed

3.compares inputted speed against the legal limit which is 70

4.calculates the demerits based on the excess speed anything  5 km/s above the speed limit (70) is assigned a demerit point by dividing the excess speed by 5

5.IF the demerits surpasses 12points it provides a feedback to the user that their license is suspended

6.IF the speed is within 70km/s or under it outputs OK to the user

7.created instance of the readline interface is closed with a feedback 'DRIVE SAFE'


# How to run the code
1.Open the terminal and navigate to the the CODECHALLENGE folder

2.Run the program using Node.js and hence calling node speed_detector.js

3.The program will prompt for an input for speed

4.Input respective feedback to the user

5.computations are made to determine demerits points are to be issued to the user





#### EXTRA INFORMATION ON  READLNE MODULE USED :
### Using the readline module

The readline module is a module used in node js  and allows us to prompt the user and as well as get input so we are going to require the module so as to bring in our readline module

## const readline = require ('readline')

next we going to create an instance of the  readline interface
and going to hold objects with twoproperties so our first property with an object which is process stdin to accept input stream and stdout for outputstream and we save the instance as a variable const rl to be able to use it
## const rl =readline.createInterface(
 ##   {input : process.stdin,
  ##  output :process.stdout})

Then the rl.close closes the readline interface.