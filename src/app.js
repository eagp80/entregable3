import express from "express";
const app = express();

app.get('/bienvenida', (req,res)=>{
    res.send(`<h1 style = "color:blue"> Bienvenidos a mi primer pagina servidor con express version 2</h1>`);
});

app.listen(
    8080,()=>console.log("Servidor Efren activado")
);

app.get('/usuario', (req,res)=>{
    res.send({nombre:"Efren", apellido:"García", edad: 42, correo:"eagp80@gmail.com"});
})

app.get('/DimeNombre/:nombre', (req,res)=>{
    res.send(`<h1 style = "color:blue">Hola señor ${req.params.nombre} gracias por su visita</h1>`)
});

app.get('/ActivaLuces/:LedA/:LedB', (req,res)=>{
    res.send(`<h1 style = "color:green">Encendida${req.params.LedA} </h1>
    <h1 style = "color:green">Encendida ${req.params.LedB} </h1>`)
});
