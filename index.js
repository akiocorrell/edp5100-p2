const fs = require('fs');
const express = require("express");
const DataStore = require("nedb");
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Starting server at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' })); //parses incoming data as json

const database = new DataStore({
  filename: "database.db",
  autoload:true,
  onload: err => {
    if(err){
      console.error('Error while loading the db!', err)
    }
  }
});
database.loadDatabase();


//get database data
app.get('/api', (request, response) => {
  database.find({}, (err, data) => {
    if (err) {
      response.end();
      return;
    }
    response.json(data);
    console.log(data); //all the data
    
    //do i want to write this into a .json file? can't make it work
    // fs.writeFileSync('filename.json', JSON.stringify(data));
    
  });
});

app.post('/api', (request, response) => {
  // console.log(request);
  
  // //posting inputs individually
  // console.log("I got a request!");
  // console.log(request.body);
  const data = request.body;
  
  const timestamp = Date.now();
  data.timestamp = timestamp;
  database.insert(data);
  //console.log(database);
  
  // response.json({
  //   status: "success",
  //   timestamp: timestamp,
  //   mood: data.mood,
  //   range: data.range,
  //   color: data.color
  // });
    response.json(data); 
});
