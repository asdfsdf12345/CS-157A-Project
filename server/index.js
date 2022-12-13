const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "cs157a",
})

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get/exercises", (req,res)=> {
const sqlSelect = "SELECT * FROM all_exercises WHERE userID = ? OR addedBy = null;";
    db.query(sqlSelect, [user],(err,result) =>{
        res.send(result);
        
    });
});

app.get("/api/get/posts", (req,res)=> {

    const user = req.body.user;

    const sqlSelect = 
    "SELECT * FROM ((posts INNER JOIN posted ON posts.postID = posted.postID) INNER JOIN user ON posted.postedBy = user.userID) WHERE userID = ?;";
        db.query(sqlSelect, [user],(err,result) =>{
            res.send(result);
            
        });
    });

app.get("/api/get/routines", (req,res)=> {

    const user = req.body.user;

    const sqlSelect = 
    "SELECT * FROM ((routines INNER JOIN createdBy ON routines.routineID = createdBy.routineID) INNER JOIN user ON createdBy.userRID = user.userID) WHERE userID = ?;";
        db.query(sqlSelect, [user],(err,result) =>{
            res.send(result);
            
        });
    });
    
app.get("/api/get/foods", (req,res)=> {
    const sqlSelect = "SELECT * FROM ingredients WHERE addedBy = ? OR addedBy = null";
        db.query(sqlSelect, [user], (err,result) =>{
            res.send(result);
        });
    });

app.post("/api/insert/user", (req,res) => {

    const regEmail = req.body.regEmail;
    const regPassword = req.body.regPassword;
    const regName = req.body.regName;
    const regWeight = req.body.regWeight;

    const sqlInsert = 
    "INSERT INTO user (fullName, email, password, weight) VALUES (?,?,?,?);";
    db.query(sqlInsert, [regEmail, regPassword, regName, regWeight], (err,result) => {
    console.log(err);
    });
});

app.post("/api/insert/login", (req,res) => {

    const email = req.body.email;
    const password = req.body.password;

    const sqlSelect = 
    "SELECT * FROM user WHERE email = ? AND password = ?;";
    db.query(sqlSelect, [email,password], (err,result) => {
        if(err){
         console.log(err);
        }
        if(result){
            res.send(result);
        } else{
            res.send({message: "Incorrect email or password"})
        }
    
    });
});

app.post("/api/insert/posts", (req,res) => {

    const postText = req.body.postText;
    const userID = req.body.userID;

    const sqlInsert1 = 
    "INSERT INTO posts (postText) VALUES (?);";
    db.query(sqlInsert1, [postText], (err,result) => {
    console.log(err);
    });
});

app.post("/api/insert/routines", (req,res) => {

    const exceciseList = req.body.exerciseList;
    const userID = req.body.userID;
    const time = req.body.time;
    const totalUsage = req.body.totalUsage;
    const routineName = req.body.routineName;

    const sqlInsert1 = 
    "INSERT INTO routines (routineID, totalUsage, time, exerciseList ) VALUES (?,?,?,?);";
    db.query(sqlInsert1, [routineName + userID, totalUsage, time, exceciseList], (err,result) => {
    console.log(err);
    });


});


app.post("/api/insert/exercises", (req,res) => {

    const exercise = req.body.exercise;
    const caloricUsage= req.body.caloricUsage;

    const sqlInsert = 
    "INSERT INTO exercises (name, caloricUsage) VALUES (?,?);";
    db.query(sqlInsert, [exercise, caloricUsage], (err,result) => {
    console.log(err);
    });
});

app.post("/api/insert/history", (req,res) => {

    const exercise = req.body.exercise;
    const time = req.body.time;
    const date = req.body.date;

    const sqlInsert = 
    "INSERT INTO history (exercise, time, date) VALUES (?,?,?);";
    db.query(sqlInsert, [exercise, time, date ], (err,result) => {
    console.log(err);
    });
});

app.post("/api/insert/foods", (req,res) => {

    const foodName = req.body.foodName;
    const calorieVal= req.body.calorieVal;
    const carbohydrates= req.body.carbohydrates;
    const protein= req.body.protein;
    const sugar= req.body.sugar;
    const fiber= req.body.fiber;
    const sodium= req.body.sodium;

    const sqlInsert = 
    "INSERT INTO food_items (foodName, calorieVal, carbohydrates, protein, sugar, fiber, sodium) VALUES (?,?,?,?,?,?,?);";
    db.query(sqlInsert, [foodName, calorieVal, carbohydrates, protein, sugar, fiber, sodium], (err,result) => {
    console.log(result);
    });
});

app.listen(3001, () =>{
    console.log("running");
});