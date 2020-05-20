var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const connection=require('../db/connection.js')
const models=require('../models')
const app=express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

/*middleware to set headers*/

/* Get all records from Budjetcatagories*/

router.get("/data",(req,res)=>{
	models.BC.findAll({})
	.then(result=>{
		console.log(result)
		res.send({
			status:'success',
			result:result
		});
	})
	

})


/*Http Post request-Add a record to Budjetcatagories*/

router.post("/data/post/",(req,res)=>{
    let BCId=req.body.BCId
	let JobTitle=req.body.JobTitle
	let Units=req.body.Units
	let CId=req.body.CId
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type
	models.BC.create({BCId:BCId,JobTitle:JobTitle,CId:CId,Units:Units,NoOfUnits:NoOfUnits,UnitValue:UnitValue,Total:Total,Description:Description,Type:Type,ProjectBudjetId:ProjectBudjetId}).then(result=>{
res.send({
		status:'success',
		result:result
	})
})
	.catch(err=>{
		res.send({
		status:'error',
		err:err
	})
	});
})

/*Http-put request-to update a record on Budjetcatagories*/

router.put("/data/update/all/",(req,res)=>{

	let BCId=req.body.BCId
	let JobTitle=req.body.JobTitle
	let CId=req.body.CId
	let Units=req.body.Units
	let NoOfUnits=req.body.NoOfUnits
	let UnitValue=req.body.UnitValue
	let ProjectBudjetId=req.body.ProjectBudjetId
	let Total=req.body.Total
	let Description=req.body.Description
	let Type=req.body.Type

	models.BC.update({

		BCId:BCId,
		JobTitle:JobTitle,
		CId:CId,
		Units:Units,
		NoOfUnits:NoOfUnits,
		UnitValue:UnitValue,
		Type:Type,
		Total:Total,
		Description:Description,
		ProjectBudjetId:ProjectBudjetId
	},

		{
		where:{BCId:BCId}
	})
	
	.then(results=>{
		res.send({
		status:'success',
		result:results
	})
	})
	.catch(err=>{
		console.log(err)
		res.send({
		status:'err',
		error:err
	})
	});
});


/*Http-delete request- delete a particular record from Budjetcatagories*/

router.delete("/data/delete/:BCId",(req,res)=>{
	let BCId=req.params.BCId
	models.BC.destroy({
			where:{
			BCId:BCId
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


