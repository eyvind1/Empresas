//requires
var express =require ('express');
var mongoose= require ('mongoose');
var bodyParser = require('body-parser');
var app = express();
//cors de las peticiones
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
	next();
	});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())  


var appRoutes=require('./routes/app');
var usuarioRoutes=require('./routes/usuario');
var loginRoutes=require('./routes/login');


mongoose.connection.openUri('mongodb://localhost:27017/Sonar',(err,res)=>{
	if(err) throw err;  
	console.log ('Base de datos : \x1b[36m%s\x1b[0m','online');
    
})
// Importar rutas
   

//middleware     
app.use('/usuario',usuarioRoutes);
app.use('/login',loginRoutes);
app.use('/',appRoutes);


//escuchar peticions
app.listen (3000, ()=>{
	console.log ('Express server puerto 3000 : \x1b[36m%s\x1b[0m','online');
})