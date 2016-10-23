var express=require('express');

var bookRouter= express.Router();

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
bookRouter.route('/')
	.get(function(req,res){
		res.render('bookListView',{
		title:'Books',
		nav:[{
			Link:'/Books',
				Text:'Books'
			},{
				Link:'/Authors',
				Text:'Authors'
			}],
			books:books
		});
	});
	bookRouter.route('/:id')
	.get(function(req,res){
		var id = req.params.id;
		res.render('bookView',{
		title:'Books',
		nav:[{
			Link:'/Books',
				Text:'Books'
			},{
				Link:'/Authors',
				Text:'Authors'
			}],
			book:books[id]
		});
	});

	module.exports=bookRouter;
