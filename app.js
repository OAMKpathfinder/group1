let express = require('express');
let app = express();
require('dotenv').config()

const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let cookieParser = require('cookie-parser');
app.use(cookieParser());

/**
 * For the cors policy, lazy implementation which is not including header
 * separately, using one dependency "cors"
 *
 * Which means that if we wanted to use API test in different url,
 * we need to allow cors policy by uncommenting it
 *
 * Remember to get rid of this in production
 */
let cors = require('cors');
app.use(cors());

//Some security baisc
//TODO
//Set the proper value, corresponding on session
//and add more validation
/**
 * Helmet can help protect app from some well-known web vulnerabilities by setting HTTP headers appropriately.
 * Helmet is actually just a collection of smaller middleware functions that set security-related HTTP response headers
 * 
 * -List ref: https://expressjs.com/en/advanced/best-practice-security.html
 * csp sets the Content-Security-Policy header to help prevent cross-site scripting attacks and other cross-site injections.
 * hidePoweredBy removes the X-Powered-By header.
 * hpkp Adds Public Key Pinning headers to prevent man-in-the-middle attacks with forged certificates.
 * hsts sets Strict-Transport-Security header that enforces secure (HTTP over SSL/TLS) connections to the server.
 * ieNoOpen sets X-Download-Options for IE8+.
 * noCache sets Cache-Control and Pragma headers to disable client-side caching.
 * noSniff sets X-Content-Type-Options to prevent browsers from MIME-sniffing a response away from the declared content-type.
 * frameguard sets the X-Frame-Options header to provide clickjacking protection.
 * xssFilter sets X-XSS-Protection to enable the Cross-site scripting (XSS) filter in most recent web browsers.
 */
var helmet = require('helmet');
app.use(helmet());

/**
 * From here setting some secure setting for cookies & session
 * 
 * Using the default session cookie name can open your app to attacks.
 * The security issue posed is similar to X-Powered-By: 
 * a potential attacker can use it to fingerprint the server and target attacks accordingly.
 */
var session = require('cookie-session');
var expiryDate = new Date(Date.now() + 60 * 60 * 1000) // 1 hour
app.use(session({
    secret: process.env.SESSION_SECRET,
    name: process.env.SESSION_NAME,
    keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2],
    cookie: {
        secure: true,
        httpOnly: true,
        domain: process.env.SESSION_DOMAIN,
        path: process.env.SESSION_PATH,
        expires: expiryDate
    }
}))
//Till here, some securities


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

var defaults = require('./routes/defaults');
app.use('/defaults', defaults);

//Here we define URL path for front-end, static files, which is built with angular as wildcard
app.use(express.static(path.join(__dirname, 'dist/PathFinder')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/PathFinder/index.html'));
});

//Port might be specified here directly or separately from external env file setting etc
var port = 3000;

app.listen(process.env.SERVER_PORT || port, () =>
  console.log('server running on localhost:3000')
);
