var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()

router.get("/data",(req,res)=>{
   models.Categorie.findAll({}).then(results=>{
	res.send({
	status:'sucess',
	result:results
	})
	})
	.catch(err=>{
		console.log(err)
		res.send({
			status:'error',
			result:err
			
		})
	})
})

router.post("/data/post/:CategorieId/:CategorieName/",(req,res)=>{
    let CategorieId=req.params.CategorieId
    let CategorieName=req.params.CategorieName
	models.Categorie.create({CategorieId:CategorieId,CategorieName:CategorieName}).then(results=>{
	res.send({
	status:'sucess',
	result:results
	})
	})
	.catch(err=>{
		console.log(err)
		res.send({
			status:'error',
			result:err
			
		})
	})
})


module.exports=router