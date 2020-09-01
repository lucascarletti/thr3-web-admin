const express = require('express')
const statusCheck = require('./statusCheck.js')

const app  = express()

var listener = app.listen(3000, () => {
    console.log('Listening on port ' + listener.address().port);
})

app.get('/', (req, res) => { 
    res.send("Status Check: " + statusCheck())
})