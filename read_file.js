const fs = require("fs");

let raw_data = fs.readFileSync('write.json');
let student = JSON.parse(raw_data);
console.log(student);
