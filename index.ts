#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.cyanBright.bold("\n\t>>>>>>>>>>> Wellcome To Command line interface (CLI) based Quiz Project <<<<<<<<<<\n"));
console.log(chalk.red("Note:The Passing percentage is 60%"));


const quiz:{
   Question1:string;
   Question2:string;
   Question3:string;
   Question4:string;
   Question5:string;
   Question6:string;
   Question7:string;
   Question8:string;
   Question9:string;
   Question10:string;
   Question11:string;
   Question12:string;
   Question13:string;
   Question14:string;
   Question15:string;
} = await inquirer.prompt([
  {
    name: "Question1",
    type: "list",
    message: chalk.magenta("1. Which command would you use to install TypeScript globally using npm?\n"),
    choices: ["A. npm install typescript","B. npm global install typescript","C. npm install -g typescript","D. npm typescript install global"]
  },
  {
    name: "Question2",
    type: "list",
    message: chalk.blue("2.What is the file extension of TypeScript?\n"),
    choices: ["A) .js", "B) .ts", "C) .html", "D) .txt"]
  },
  {
    name: "Question3",
    type: "list",
    message: chalk.magenta("3. What is TypeScript primarily used for?\n"),
    choices: ["A. Memory Management ","B. Dynamic Typing","C. Static Typing","D. Asynchronous operations"]
  },
  {
    name: "Question4",
    type: "list",
    message: chalk.blue("4. Which of the following is NOT a valid TypeScript data type?\n"),
    choices: ["A. void","B. any","C. dynamic","D. tuple"]
  },
  {
    name: "Question5",
    type: "list",
    message: chalk.magenta("5. How do you specify that a function does not return anything in TypeScript?\n"),
    choices: ["A. function myFunc(): undefined","B. function myFunc(): void","C. function myFunc(): null"]
  },
  {
    name: "Question6",
    type: "list",
    message: chalk.blue("6. How do you define a custom type in TypeScript?\n"),
    choices: ["A. interface","B. typedef","C. type","D. Both A and C"]
  },
  {
    name: "Question7",
    type: "list",
    message: chalk.magenta("7. What is the primary purpose of TypeScript interfaces?\n"),
    choices: ["A. To create new classes","B. To describe the shape of an object","C. To manage asynchronus code"]
  },
  {
    name: "Question8",
    type: "list",
    message: chalk.blue("8. Which TypeScript feature allows for checking the type of a variable at runtime?\n"),
    choices: ["A. Type guard","B. Runtime type","C. Dynamic type","D. Typeof"]
  },
  {
    name: "Question9",
    type: "list",
    message: chalk.magenta("9. How do you define an optional parameter in the TypeScript function?\n"),
    choices: ["A. function foo(param: string?)","B. function foo(param?: string)","C. function foo(param string=)"]
  },
  {
    name: "Question10",
    type: "list",
    message: chalk.blue("10. In TypeScript, what does an enum allow you to do?\n"),
    choices: ["A. Store a list of numeric values.","B. Store a set of named constants, numeric or string.","C. Define a new data type.","D. Assign multiple types to a variable."]
  },
  {
    name: "Question11",
    type: "list",
    message: chalk.magenta("11. Which TypeScript feature allows for declaring new names for existing types?\n"),
    choices: ["A. Aliases","B. Enums","C. Interfaces","D. Decorators"]
  },
  {
    name: "Question12",
    type: "list",
    message: chalk.blue("12. What does the extends keyword allow you to do in TypeScript?\n"),
    choices: ["A. Add methods to an existing function.","B. Increase the value of a number variable.","C. Create a subclass from a superclass.","D. Extend the length of an array."]
  },
  {
    name: "Question13",
    type: "list",
    message: chalk.magenta("13. Which TypeScript keyword allows for a child class to override a method of its parent class?\n"),
    choices: ["A. override","B. super","C. extends"]
  },
  {
    name: "Question14",
    type: "list",
    message: chalk.blue("14.How do you define an array of strings in TypeScript?n"),
    choices: ["A. Array<string>","B. string[]","C. Both A and B","D. List<string>"]
  },
  {
    name: "Question15",
    type: "list",
    message: chalk.magenta("15.What is the purpose of a constructor in TypeScript classes?\n"),
    choices: ["A. To create a static method.","B. To initialize object properties.","C. To destroy an object.","D. To run asynchronous code."]
  }
])
let score: number = 0;
console.log(chalk.yellow("Processing result...\nPlease wait."));
setTimeout(()=>{
  switch(quiz.Question1){
    case "C. npm install -g typescript":
    ++score
    console.log(chalk.green('1. C: Correct'));
    break;
    default:console.log(chalk.red("1.incorrect"));
  }
  switch(quiz.Question2){
    case "B) .ts":
    ++score
    console.log(chalk.green('2. B: Correct'));
    break;
    default:console.log(chalk.red("2.incorrect"));
  }
  switch(quiz.Question3){
    case "C. Static Typing":
    ++score
    console.log(chalk.green('3. C: Correct'));
    break;
    default:console.log(chalk.red("3. incorrect"));
  }
  switch(quiz.Question4){
    case "C. dynamic":
    ++score
    console.log(chalk.green('4. C: Correct'));
    break;
    default:console.log(chalk.red("4. incorrect"));
  }
  switch(quiz.Question5){
    case "B. function myFunc(): void":
    ++score
    console.log(chalk.green('5. B: Correct'));
    break;
    default:console.log(chalk.red("5. incorrect"));
  }
  switch(quiz.Question6){
    case "D. Both A and C":
    ++score
    console.log(chalk.green('6. D: Correct'));
    break;
    default:console.log(chalk.red("6. incorrect"));
  }
  switch(quiz.Question7){
    case "B. To describe the shape of an object":
    ++score
    console.log(chalk.green('7. B: Correct'));
    break;
    default:console.log(chalk.red("7. incorrect"));
  }
  switch(quiz.Question8){
    case "A. Type guard":
    ++score
    console.log(chalk.green('8. A: Correct'));
    break;
    default:console.log(chalk.red("8. incorrect"));
  }
  switch(quiz.Question9){
    case "B. function foo(param?: string)":
    ++score
    console.log(chalk.green('9. B: Correct'));
    break;
    default:console.log(chalk.red("9. incorrect"));
  }
  switch(quiz.Question10){
    case "B. Store a set of named constants, numeric or string.":
    ++score
    console.log(chalk.green('10. B: Correct'));
    break;
    default:console.log(chalk.red("10. incorrect"));
  }
  switch(quiz.Question11){
    case "A. Aliases":
    ++score
    console.log(chalk.green('11. A: Correct'));
    break;
    default:console.log(chalk.red("11. incorrect"));
  }
  switch(quiz.Question12){
    case "C. Create a subclass from a superclass.":
    ++score
    console.log(chalk.green('12. C: Correct'));
    break;
    default:console.log(chalk.red("12. incorrect"));
  }
  switch(quiz.Question13){
    case "B. super":
    ++score
    console.log(chalk.green('13. B: Correct'));
    break;
    default:console.log(chalk.red("13. incorrect"));
  }
  switch(quiz.Question14){
    case "C. Both A and B":
    ++score
    console.log(chalk.green('14. C: Correct'));
    break;
    default:console.log(chalk.red("14. incorrect"));
  }
  switch(quiz.Question15){
    case "B. To initialize object properties.":
    ++score
    console.log(chalk.green('15. B: Correct'));
    break;
    default:console.log(chalk.red("15. incorrect"));
  }
  console.log(chalk.magenta("\n>>> Result:"));
  console.log(chalk.cyanBright.bold(`Your Score is: ${chalk.yellow(score)} out of 15.`));  
  let percentage = score * 100  / 15 ;  
  if(percentage>59){
    console.log(chalk.greenBright.bold(`\nCongratulations! You have passed this Quiz with a score of: ${chalk.yellow(score)} and a percentage of: ${chalk.yellow(percentage.toFixed(1))}%`))
  }else{
    console.log(chalk.red(`\nSorry you failed with a score of: ${chalk.yellow(score)} and a percentage of: ${chalk.yellow(percentage.toFixed(1))}%.\nGood luck next time.`));
    
  }

  
},2000)


