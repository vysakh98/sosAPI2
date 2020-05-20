var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()

router.get("/data/all/:id",(req,res)=>{
	let id=req.params.id
	models.ProjectBudjet.findAll( {where: {ProjectBudjetId : id },include: [{ model: models.BC }]}).then(results=>{
		res.send({
			status:'success',
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
router.get("/data",(req,res)=>{
   models.ProjectBudjet.findAll({}).then(results=>{
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

router.post("/data/post/:ProjectBudjetId/:ProjectName/:LeadOrganization",(req,res)=>{
    let ProjectBudjetId=req.params.ProjectBudjetId
    let ProjectName=req.params.ProjectName
    let LeadOrganization= req.params.LeadOrganization
	models.ProjectBudjet.create({ProjectBudjetId:ProjectBudjetId,ProjectName:ProjectName,LeadOrganization}).then(results=>{
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
router.delete("/data/delete/:id",(req,res)=>{
	let id=req.params.id
	models.ProjectBudjet.destroy({
			where:{
			ProjectBudjetId:id
			}
		})
		.then(results=>{
			res.send({
		status:'success',
		result:results
	})
		})
		.catch(err=>{
			res.send({
		status:'err',
		err:err
	})
		});
	
})


module.exports=router