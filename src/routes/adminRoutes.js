var express=require('express');
var adminRouter= express.Router();
var mongodb=require('mongodb').MongoClient;

var books=[
		{
			title:'War & Peace',
			genre:'Historical Fiction',
			author:'Lev',
			read:false
		},
		{
			title:'War & Peace1',
			genre:'Historical Fiction1',
			author:'Lev1',
			read:false
		},
		{
			title:'War & Peace2',
			genre:'Historical Fiction2',
			author:'Lev2',
			read:false
		}
		];
var router=function (nav) {

		adminRouter.route('/addBooks')
		.get(function(req,res){
			var url='mongodb://localhost:27017/libraryApp';
			mongodb.connect(url,function(err,db){
				var collection=db.collection('books');
				collection.insertMany(books,function(err,results){
					res.send(results);
					db.close();
				});
			}); 

				//res.send('inserting books');
		});
		return adminRouter;
};

module.exports=router;