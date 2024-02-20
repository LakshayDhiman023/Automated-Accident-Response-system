

const express = require('express');

const app = express();

const connection  = require('./database/db.config')
const cors = require('cors')

const PORT = 8000;

app.use(cors());


connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
});


app.get('/', (req, res)=>{
    res.send("hello from backend")
})




app.listen(PORT, () =>{
    console.log("hello ");
})