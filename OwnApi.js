const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/mouemen', function (req, res) {  //localhost:3000/mouemen
    res.send('Hello moemen')
  })

app.get('/ObjectUser', function (req, res) {  //localhost:3000/ObjectUser
    var user  = {id:19,name:"moemen"}         // return object
    res.send(user)
  })

app.get('/ArrayUsers', function (req, res) {  //localhost:3000/ArrayUsers
    var users  = [
        {id:19,name:"moemen"},
        {id:18,name:"marwa"},                 // return Array
        {id:17,name:"mazen"}
    ]         
    res.send(users)
  })  

app.get('/HtmlContent', function (req, res) {
    var content = '<button>Click Me</button>'   //return html content
    res.send(content)
  })
 
const path = require('path');
app.get('/FileHtml', function(req, res) {
    console.log("someone calls me");
    res.sendFile(path.join(__dirname, '/ApiContent.html'));  //return htnl file 
  });

app.listen(3000)