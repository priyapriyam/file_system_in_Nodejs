const fs = require('fs');
let new_data = {
        "id":1,
        "name": "Sushant",
        "age": 20,
        "gender": "male",
        "department": "Science",
        "car": "Honda"
      }



      
      
let raw_data = fs.readFileSync('write.json');
var student_list = JSON.parse(raw_data);
student_list.push(new_data)
 


fs.writeFileSync(__dirname+"/write.json",JSON.stringify(student_list,null,2))

