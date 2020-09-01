const express = require('express')
const app  = express()

var listener = app.listen(3000, () => {
    console.log('Listening on port ' + listener.address().port);
})

app.get('/', (req, res) => { 
    res.send("Hello world")
})