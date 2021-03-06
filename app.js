var express= require('express');

var app=express();

var port= process.env.PORT||5000;
var bookRouter=require('./src/routes/bookRoutes');
//var bookRouter = express.Router(); 

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views','./src/views');
app.set('view engine','ejs' );


app.use('/Books',bookRouter);	
app.get('/',function(req,res){
	res.render('index',{
		title:'Hello from render',
		nav:[{Link:'/Books',
				Text:'Books'},
			{
				Link:'/Authors',
				Text:'Authors'
			}]
	});
});
app.get('/books1',function(req,res){
	res.send('Hello books');
});
app.listen(port,function(){
console.log('running server on port' + port);

});