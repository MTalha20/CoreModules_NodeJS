import validator from "validator";
import chalk from "chalk";

var check = validator.isEmail("talha.wahid15@gmail.com");

console.log(check ? chalk.green.inverse(check) : chalk.red.inverse(check));


