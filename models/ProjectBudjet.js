
'use strict';
  module.exports = (sequelize, DataTypes) => {
    var PB = sequelize.define("ProjectBudjet", {
    ProjectBudjetId:{
    type:DataTypes.INTEGER,
    primaryKey:true,
	},
	ProjectName:{
		type:DataTypes.STRING
	},
  LeadOrganization:{
    type:DataTypes.STRING
  }
    });


    PB.associate = (models) => {
       models.ProjectBudjet.hasMany(models.BC,{foreignKey:"ProjectBudjetId",onDelete: 'CASCADE', hooks: true })
    };
    return PB;
  };