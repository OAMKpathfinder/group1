let express = require('express');
let app = express();
let cors = require('cors');

const path = require('path');
const port = 3000;

/**
 * For the cors policy, lazy implementation which is not including header
 * separately, using one dependency "cors"
 * 
 * Remember to get rid of this in production
 */
app.use(cors());


// app.use(express.static(__dirname + '/assets'));
// app.use(express.static(path.join(__dirname, 'dist/PathFinder')));

// app.get('*', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'dist/PathFinder/index.html'));
// });

/**
 * Error handler
 */
app.use((req, res, next) => {
    next(createError(404));
});
  


app.listen(port, () => {
    console.log('Server listening on port: ' + port);
});