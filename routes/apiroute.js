const router = require("express").Router()
let db = require("../db/db.json")
const { v4: uuidv4 } = require('uuid')

//Works with the CRUD of Data

router.get("/api/notes", function (req, res) {
    res.json(db)


})

router.post("/api/notes", function(req, res){
    req.body.id = uuidv4()
     db.push(req.body)
      res.json(db)    
})

router.delete("/api/notes/:id", function( req, res){
    db = db.filter(note => note.id != req.params.id )
    res.json(db)
})

//need to use the fs file and update the 

module.exports = router