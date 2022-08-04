const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs")
const app = express();
const axios = require('axios').default;
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const cors = require('cors');
const port = process.env.PORT || "1337";
const sql= require("./sql");
const { connect } = require("http2");
const router = express.Router();
app.set("port", port);
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", router);
 app.post('/', (req, res) => {
    res.send('POST request to the homepage')
  })


router.get("/", (req,res)=>{

})
router.post('/sendHours', async (req, res)=> {
console.log(req.body)
  
    
   
   
   });
router.post('/addMonth', async(req,res)=>{
  
  const obj = Object.keys(req.body);

 
    sql.createTable(obj).then((result)=>{res.send("Miesiąc został utworzony")});
  

 
})
router.get('/create', function(req,res){
 
const result = sql.Select().then((data)=>{res.send(data)});

})
 
app.listen(port, () =>{ console.log(`Server running on localhost:${port}`)
sql.connect().then(() => console.log('connected'))
.catch(err => console.error('connection error', err.stack));


});