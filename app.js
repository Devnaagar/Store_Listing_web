import express from 'express';
import connectDB from './db/connectdb.js';
import {join} from 'path';
import session from 'express-session';
import bodyParser from "body-parser";
import web from './routes/web.js';
import cors from 'cors';
const app = express();
const port = process.env.PORT || '3110';
const DATABASE_URL=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
app.use(cors());

// database connection 
connectDB(DATABASE_URL);
//handle submission
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }  // Set to true if using HTTPS
}));

//static files
app.use(express.static(join(process.cwd(),"public")));

app.use(express.static(join(process.cwd(),'frontend','build')));

//set template engine
app.set("view engine","ejs");
app.set('views', './views');

// load routes
app.get('/', (req, res) => {
  res.sendFile(join(process.cwd(), 'frontend', 'build', 'index.html'));
});
app.use("/admin",web);

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`);
})