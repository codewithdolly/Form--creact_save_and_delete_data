const express = require('express')
const ejs=require('ejs')


//Express App
const app = express()

///Home
app.get('/', function (req, res) {
    res.render("form.ejs")
})



//receiving data from form
app.post('/submit-data',function (res,res) {

console.log()
res.send("req received")

    
})

 

//JSON

const data1=[
    {
        "title": "Step - Apron step",
        "coords": "55,167,764,270",
        "shape":"rect"
    },
    {
        "title": "Crater - at location 1",
        "coords": "591,19,690,145",
        "shape":"rect"
    }
]


app.get('/get-data', function (req,res){
//find data from db


//send data as response
    res.json(data1)

} )







app.listen(4000)