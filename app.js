var app = require('./config/server'); //configurando sua aplicação node js

var server = app.listen(400, function(){
	console.log('Servidor online na porta 400'); //configurando para o servidor estar online na porta 400
})

//pegando dependências do socket io
var io = require('socket.io').listen(server);
app.set('io', io);

//objeto que vai armazenar todos usuarios online
var usuariosOnline = {};

//quando tiver uma conexão
io.on('connection', function(usuario){
	//pegando id do socket
	const idSocket = usuario.id

	//colocando ele como online
	usuariosOnline[idSocket] = {online: true}

	usuario.on('entrarNoServidor', function(dados){
		usuariosOnline[idSocket].idUsuario = dados.idUsuario;
	});

	usuario.on('disconnect', function(){
		delete usuariosOnline[idSocket];
	});

});