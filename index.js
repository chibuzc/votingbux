const express = require('express');
const mongoose = require('mongoose')
//const redis = require("redis");
var cookieParser = require('cookie-parser')
const session = require('express-session');
//const redisStore = require('connect-redis')(session);
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');
const cors = require('cors')

//const client = redis.createClient();
const app = express();
app.use(cors());

app.use(cookieParser());
app.use(session({
    secret: 'A big fat Hen',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
  }))
// const multer = require('multer')
// const upload = multer({dest: __dirname + '/images/'});
// const fileUpload = require('express-fileupload');
const flash = require('connect-flash');
const accountController = require('./controllers/AccountController')
const AccountServiceProvider = require('./services/AccountServiceProvider')


const host = 'localhost';
const port = process.env.PORT || 5000;
// const mongoDBUrl = process.env.GROWTH_AFRIQUE_DB || "mongodb://votingbux:votingbux1@ds139251.mlab.com:39251/votingbux";
const mongoDBUrl ='mongodb://localhost:27017/votingbux';
// const redisHost = process.env.GROWTH_AFRIQUE_REDIS_HOST || 'localhost';
// const redisPort = process.env.GROWTH_AFRIQUE_REDIS_PORT || 6379;
// const redisPassword = process.env.GROWTH_AFRIQUE_REDIS_PASS;


app.use(express.static('public'));
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');
app.use(flash());


var urlencodedParser = bodyParser.urlencoded({extended: false})
app.use(bodyParser.json());
// app.use(cors())


mongoose.connect(mongoDBUrl, () => {
    console.log('mongo connected');
});


// app.get('/', (req, res) => {
//    res.render('login');
// });

require('./models/Contestants');
require('./models/Election');
require('./models/Electorate');
require('./models/User');
require('./models/UserRole');
require('./models/Voter');
require('./models/Votes');


require('./Routes/contestantRoutes')(app);
require('./Routes/electionRoutes')(app);
require('./Routes/electorateRoutes')(app);
require('./Routes/voterRoutes')(app);
require('./Routes/votesRoutes')(app);


app.post('/api/login', accountController.login);
app.get('/api/currentUser',(req,res) => {
    console.log(req.session)
    // console.log(req.user)
    res.send(req.session.user)
})

app.post('/api/signup', async (req,res) => {
    console.log("trying to create user")
    let user = await AccountServiceProvider.create(req.body.name,req.body.email,req.body.password,req.body.role)
    console.log("User created! ", user)
    req.session.user=user
    res.send(req.session.user)
})

app.get('/api/logout', (req,res) => {
    req.session.destroy(function(){
        console.log("user logged out.")
    });
     res.send("user logged out.");
})

app.listen(port, function () {
    console.log("Voting bux Started @", port)
});