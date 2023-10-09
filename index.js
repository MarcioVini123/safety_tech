const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}))


app.use('/public',express.static(path.join(__dirname,'public')));
app.set("view engine","ejs")

app.get ("/", (req, res)=>{
    res.render("index")
})

app.get ("/planodeacao", (req, res)=>{
    res.render("planodeacao")
})

app.get ("/servicos", (req, res)=>{
    res.render("servicos")
})

app.get ("/NR03", (req, res)=>{
    res.render("NR-O3")
})

app.get("/login",(req,res)=>{
    res.render('login')
})



app.listen(3000,function(){
    console.log("Servidor rodando na url https://localhost:3000")
})

