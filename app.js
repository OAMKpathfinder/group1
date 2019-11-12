let express = require('express');
let app = express();
let cors = require('cors');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/**
 * For the cors policy, lazy implementation which is not including header
 * separately, using one dependency "cors"
 * 
 * Which means that if we wanted to use API test in different url,
 * we need to allow cors policy by uncommenting it
 * 
 * Remember to get rid of this in production
 */
app.use(cors());

var homePropertiesRouter = require('./routes/homeProperties');
app.use('/homeProperties', homePropertiesRouter);

var outerWallRouter = require('./routes/outerWall');
app.use('/outerWall', outerWallRouter);

var doorRouter = require('./routes/door');
app.use('/door', doorRouter);

var doorsRouter = require('./routes/doors');
app.use('/doors', doorsRouter);

var roofConRouter = require('./routes/roofConstruction');
app.use('/roofCon', roofConRouter);

var windowSingleRouter = require('./routes/windowSingle');
app.use('/windowSingle', windowSingleRouter);

var windowAllRouter = require('./routes/windowAll');
app.use('/windowAll', windowAllRouter);

var bridgesRouter = require('./routes/bridges');
app.use('/bridges', bridgesRouter);

var groundFloorRouter = require('./routes/groundFloor');
app.use('/groundFloor', groundFloorRouter);

var usersRouter = require('./routes/users');
app.use('/users', usersRouter);

var othersRouter = require('./routes/others');
app.use('/others', othersRouter);

// app.use(express.static(__dirname + '/assets'));
// app.use(express.static(path.join(__dirname, 'dist/PathFinder')));

// app.get('*', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'dist/PathFinder/index.html'));
// });

//Port might be specified here directly or separately from external env file setting etc
var port = 3000;
require('dotenv').config()

app.listen(process.env.SERVER_PORT || port, () =>
  console.log('server running on localhost:3000')
);
/**
 * Error handler
 */
// app.use((req, res, next) => {
//     next(createError(404));
// });