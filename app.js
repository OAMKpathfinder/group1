let express = require('express');
let app = express();
let cors = require('cors');
let cookieParser = require('cookie-parser');

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

/**
 * For the cors policy, lazy implementation which is not including header
 * separately, using one dependency "cors"
 *
 * Which means that if we wanted to use API test in different url,
 * we need to allow cors policy by uncommenting it
 *
 * Remember to get rid of this in production
 */
// app.use(cors());

var users = require('./routes/users');
app.use('/users',users);

var bridges = require('./routes/bridges');
app.use('/bridges', bridges);

var door = require('./routes/door');
app.use('/door', door);

var groundFloor = require('./routes/groundFloor');
app.use('/groundFloor', groundFloor);

var homeProperties = require('./routes/homeProperties');
app.use('/homeProperties', homeProperties);

var others = require('./routes/others');
app.use('/others', others);

var outerWall = require('./routes/outerWall');
app.use('/outerWall', outerWall);

var roofConstruction = require('./routes/roofConstruction');
app.use('/roofConstruction', roofConstruction);

var windowSingle = require('./routes/windowSingle');
app.use('/windowSingle', windowSingle);

var bridgesRouter = require('./routes/bridges');
app.use('/bridges', bridgesRouter);

var doorRouter = require('./routes/door');
app.use('/door', doorRouter);

var doorsRouter = require('./routes/doors');
app.use('/doors', doorsRouter);

var groundFloor = require('./routes/groundFloor');
app.use('/groundFloor', groundFloor);

var othersRouter = require('./routes/others');
app.use('/others', othersRouter);

var roofConstructionRouter = require('./routes/roofConstruction');
app.use('/roofConstruction', roofConstructionRouter);

var windowAllRouter = require('./routes/windowAll');
app.use('/windowAll', windowAllRouter);

var windowSingleRouter = require('./routes/windowSingle');
app.use('/windowSingle', windowSingleRouter);

app.use(express.static(path.join(__dirname, 'dist/PathFinder')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/PathFinder/index.html'));
});

//Port might be specified here directly or separately from external env file setting etc
var port = 3000;
require('dotenv').config()

app.listen(process.env.SERVER_PORT || port, () =>
  console.log('server running on localhost:3000')
);
