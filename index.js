const express = require("express");
const app = express();
const path = require("path")
const bodyParser = require("body-parser");
const Usuarios = require("./database/usuarios");
const bcrypt = require('bcrypt');

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
}) //Ajeitar depois

app.get("/login",(req,res)=>{
    res.render('login')
})

app.get('/home',(req,res)=>{
    res.render("home")
})

app.get('/check18', (req,res)=>{
    res.render('check18')
})

app.get('/check22', (req,res)=>{
    res.render('check22')
})
app.get('/check29', (req,res)=>{
    res.render('check29')
})
app.get('/check30', (req,res)=>{
    res.render('check30')
})
app.get('/check31', (req,res)=>{
    res.render('check31')
})
app.get('/check32', (req,res)=>{
    res.render('check32')
})
app.get('/check34', (req,res)=>{
    res.render('check34')
})
app.get('/check36', (req,res)=>{
    res.render('check36')
})

app.get('/check37', (req,res)=>{
    res.render('check37')
})

app.get('/check38', (req,res)=>{
    res.render('check38')
})


//Conectando ao banco de dados
;(async()=>{
    const database = require("./database/database");
    const Usuario = require('./database/usuarios');
    try{
        console.log('conectado a tudo do banco')
    }
    catch (error){
        console.log(error)
    }
})

//Rota para cadastrar usuario
app.post('/cadastrar',(req,res)=>{
    const {nome,matricula,senha} = req.body;
    Usuarios.create({
        nome: nome,
        matricula: matricula,
        senha: senha
    }).then(()=>{
        console.log('Usuario Registrado');
        res.redirect("/login");
    })
})

//Rota para autenticar usuario no login
app.post('/login', async(req, res)=>{
    const{matricula,senha}=req.body;
    const usuario = await Usuarios.findOne({where: {matricula}});
    if(!usuario){
        return res.status(400).json({mensagem: "Usuario nao encontrado"})
    }
    const senhaValida = await bcrypt.compare(senha,usuario.senha);
    if(!senhaValida){
    return res.status(400).json({mensagem: "Dados incorretos"})
    }
    res.redirect('/home')
})

app.listen(3000,function(){
    console.log("Servidor rodando na url https://localhost:3000")
})

