
var express = require('express');
var app = express();
const path = require('path');


/**
 * For the cors policy, lazy implementation which is not including header
 * separately, using one dependency "cors"
 * 
 * Remember to get rid of this in production
 */
// app.use(cors());

app.use(express.static(__dirname + '/assets'));
app.use(express.static(path.join(__dirname, 'dist/PathFinder')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/PathFinder/index.html'));
});


//Port might be specified here directly or separately from external env file setting etc
var port = 3000;


app.listen(port, function() {
    console.log('Server listening on port: ' + port);
});