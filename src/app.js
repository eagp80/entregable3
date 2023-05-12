import express from "express";
import ProductManager from './productManagerEfren.js'
const app = express();
app.use(express.urlencoded({extended:true}));

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
let usuarios = [
    {nombre:"Efren", apellido:"García", edad: 42, correo:"eagp80@gmail.com", genero:"M"},
    {nombre:"Raul", apellido:"García", edad: 40, correo:"eagp80@gmail.com", genero:"M"},
    {nombre:"Juan", apellido:"García", edad: 38, correo:"eagp80@gmail.com", genero:"M"},
    {nombre:"Aldemar", apellido:"García", edad: 45, correo:"eagp80@gmail.com", genero:"M"},
    {nombre:"Keli", apellido:"García", edad: 29, correo:"eagp80@gmail.com", genero:"F"},
    {nombre:"Karina", apellido:"García", edad: 36, correo:"eagp80@gmail.com", genero:"F"},

]
app.get('/ejemploQueries', (req,res)=>{
    let genero=req.query.genero;
    if(!genero||(genero!="M"&&genero!="F")) return "Error de solicitud";
    let usuariosFiltrados=usuarios.filter(usuario=>usuario.genero===genero);
    let consultas=req.query;
    let {nombre,apellido,edad}=req.query;
    res.send({usuarios:usuariosFiltrados});
})
const productManager = new ProductManager("./products.txt");
productManager.addProduct("Producto 1", "Descripción del producto 1", 100, "imagen/logo1.jpg", 1, 5);
productManager.addProduct("Producto 2", "Descripción del producto 2", 200, "imagen/logo2.jpg", 2, 12);
productManager.addProduct("Producto 3", "Descripción del producto 3", 100, "imagen/logo1.jpg", 3, 5);
productManager.addProduct("Producto 4", "Descripción del producto 4", 100, "imagen/logo1.jpg", 4, 5);
productManager.addProduct("Producto 5", "Descripción del producto 5", 100, "imagen/logo1.jpg", 5, 5);
productManager.addProduct("Producto 6", "Descripción del producto 6", 100, "imagen/logo1.jpg", 6, 5);
productManager.addProduct("Producto 7", "Descripción del producto 7", 100, "imagen/logo1.jpg", 7, 5);
productManager.addProduct("Producto 8", "Descripción del producto 8", 100, "imagen/logo1.jpg", 8, 5);
productManager.addProduct("Producto 9", "Descripción del producto 9", 100, "imagen/logo1.jpg", 9, 5);
productManager.addProduct("Producto 10", "Descripción del producto 10", 100, "imagen/logo1.jpg", 10, 5);

app.get('/products', (req,res)=>{
    const productManager = new ProductManager("./products.txt");
    const productos= productManager.getProducts();
    res.send({productos:productos});
})

// console.log(productManager.getProducts());
// a1=productManager.getProductById(1);
// console.log(a1);
// a0=productManager.getProductById(0);
// console.log(a0);
// a3=productManager.getProductById(3);
// console.log(a3);
// productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg", 1, 5);
// productManager.addProduct("Producto 3", "Descripción del producto 3", 500, "imagen/logo3.jpg");
// console.log(productManager.getProducts());
// productManager.updateProduct(1,{title:undefined,description:"Descripcion actualizada producto 3",price:300, thumbnail:"imagen/logo2.jpg", code:2});
// a1=productManager.getProductById(1);
// console.log(a1);
// productManager.deleteProduct(1);
// a1=productManager.getProductById(0);
// console.log(`producto::`,a1);

