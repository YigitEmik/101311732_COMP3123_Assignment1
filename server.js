const express = require("express")
const empRoutes = require("./routes/employeeRoute")
const userRoutes = require("./routes/userRoute")
const mongoose =require("mongoose")


const app = express()
const SERVER_PORT = 8082

app.use(express.json())

const DB_URL = "mongodb+srv://yigitemik:34ygt44B@cluster0.wrh3gfg.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"


mongoose.Promise = global.Promise;

app.use("/",userRoutes)

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.use("/api/user",userRoutes)
app.use("/api/emp",empRoutes)


// Home page
//http://localhost:3000
app.route("/")
    .get((req, res) => {
        res.send("<h1>Yigit Ahmed Emik - Assignment 1 - 101311732</h1>")
    })

    app.listen(SERVER_PORT, () =>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})