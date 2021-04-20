  
 const express = require("express");
 const app = express();

 const port = process.env.PORT || 6500

 //Makes what's in the folder Client Side
app.use(express.static("public"))
//Parses the client data that comes in
app.use(express.urlencoded({ extended:true }))
//converts data into JSon format
app.use(express.json())

app.use(require("./routes/htmlroute"))
app.use(require("./routes/apiroute"))

app.listen(port, function(){

    console.log("app is listening on Port ",port  )
})
//Creating API and HTMl Routes