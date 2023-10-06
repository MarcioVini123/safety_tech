const express = require("express");
const app = express();
const path = require("path")
const connection = require('./database/database');
const bodyParser = require("body-parser");
const Funcionario = require("./database/funcionarios");

app.use(bodyParser.urlencoded({extended:false}))

(async()=>{
    const database = require('./database/database');
    const funcionarios= require('./database/funcionarios');
    try{
        console.log('conectado ao banco de dados e a tabela')
    }catch(error){
        console.log(error)
    }
})

app.post("/cadastrar", (req,res)=>{
    const {nome,matricula,senha} = req.body;
    Funcionario.create({
        nome:nome,
        email: email,
        senha: senha
    }).then(()=>{
        console.log('usuario cadastrado');
        res.redirect('login')
    })
})

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

