const md_url=process.env.md_url;

const express = require('express')
const ejs=require('ejs')
const bodyParser=require('body-parser')
const mongoose = require('mongoose');


//Express App
const app = express()
// create application/x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({extended:false }))

//connecting mongoose
await mongoose.connect(md_url)


// Home - render the form
app.get('/', function (req, res) {
    res.render("form.ejs")
})



const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Cord = new Schema({
  id: ObjectId,
  title: String,
  coords: String,
  shape: String
});




// receiving data from submitted form
app.post('/submit-data', function (req,res) {

//print body
console.log(req.body)

//save in db



//send a respose  that data is saved in DB
res.send('welcome, ' + req.body.title)
})

 










app.listen(4000, console.log("server started on port 4000"))