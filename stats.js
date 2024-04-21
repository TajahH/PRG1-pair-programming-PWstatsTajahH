//This program is unfinished. 
//Can you count the length of each password and keep a running total which is displayed at the end?

const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

if (fs.existsSync(outputFile)) { // check for existing output file
  fs.unlinkSync(outputFile); // delete it true. (To start a fresh file)
}

const data = fs.readFileSync(inputFile, "utf-8");
const lines = data.split(/\n/);

let count = 0
let chars = []
for (let i = 1; i <= 20; i++){
  chars.push([i,0])
} 
for (line of lines) {

      // console.log(line)
      elements = line.split(delimiter);
      count += elements[1].length
      // chars[elements[1].length]==+1

      // if (elements[1].length == chars[count][0]){


      //   chars[count][1] = chars[1] + 1

      // }

      // if (elements[1].length < count && elements[1].includes()){
      //   chars.push(elements[1].length)

      }

      //console.log(elements)
      // console.log(count)


console.log(chars)
// fs.appendFile("statistics.csv", data[, options], callback )