const fs = require("fs");

// // 1. Simple one entry
// // from: https://stackoverflow.com/questions/16507222/create-json-object-dynamically-via-javascript-without-concate-strings
var sitePersonel = {};
var employees = []
sitePersonel.employees = employees;
console.log(sitePersonel);

var firstName = "John";
var lastName = "Smith";
var employee = {
  "firstName": firstName,
  "lastName": lastName
}
sitePersonel.employees.push(employee);
console.log(sitePersonel);

var manager = "Jane Doe";
sitePersonel.employees[0].manager = manager;
console.log(sitePersonel);

console.log(JSON.stringify(sitePersonel));
fs.writeFileSync('filename.json', JSON.stringify(sitePersonel));


// // 2. Multiple entries
// // from: https://github.com/drveresh/NeDB-Database-Example/blob/master/server.js
var sitePersonel = {};
var employees = [];
sitePersonel.employees = employees;
console.log(sitePersonel);

var employee = [
  { firstName: "John", lastName: "Hancock" },
  { firstName: "Liz", lastName: "Smith" },
  { firstName: "Ahmed", lastName: "Khan" },
];

sitePersonel.employees.push(employee);
console.log(sitePersonel);

console.log(JSON.stringify(sitePersonel));

fs.writeFileSync("filename.json", JSON.stringify(sitePersonel));


// 3. sitepersonnel to json_data
var json_data = {};
var employees = [];
json_data.employees = employees;
console.log(json_data);

var employee = [
  { firstName: "John", lastName: "Hancock" },
  { firstName: "Liz", lastName: "Smith" },
  { firstName: "Ahmed", lastName: "Khan" },
];

json_data.employees.push(employee);
console.log(json_data);

console.log(JSON.stringify(json_data));

fs.writeFileSync("filename.json", JSON.stringify(json_data));

// 4. employees to user_data
var json_data = {};
var user_data = [];
json_data.user_data = user_data;
console.log(json_data);

var employee = [
  { firstName: "John", lastName: "Hancock" },
  { firstName: "Liz", lastName: "Smith" },
  { firstName: "Ahmed", lastName: "Khan" },
];

json_data.user_data.push(employee);
console.log(json_data);

console.log(JSON.stringify(json_data));

fs.writeFileSync("filename.json", JSON.stringify(json_data));


//4. employee --> users
var users = [
  { firstName: "John", lastName: "Hancock" },
  { firstName: "Liz", lastName: "Smith" },
  { firstName: "Ahmed", lastName: "Khan" },
];

var json_data = {};
var user_data = [];
json_data.user_data = user_data;
console.log(json_data);


json_data.user_data.push(users);
console.log(json_data);

console.log(JSON.stringify(json_data));

fs.writeFileSync("filename.json", JSON.stringify(json_data));




//5. turn into json file
var json_data = {};
var user_data = [];

app.get("/api", (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
    // console.log(data); //all the data
    
    
    //usersfor Each START
    json_data.user_data = user_data;
//     console.log(json_data);

    json_data.user_data.push(data);
    fs.writeFileSync("filename.json", JSON.stringify(json_data));

    //usersfor Each END
  });
});
