
 'use strict';
  module.exports = (sequelize, DataTypes) => {
    var BC = sequelize.define("BC", {
  BCId:{
     type:DataTypes.INTEGER,
     primaryKey:true,
  },
  CId:{
    type:DataTypes.INTEGER,
  },
  JobTitle:{
    type:DataTypes.STRING,
    allowNull:true
  },
  Units:{
    type:DataTypes.STRING,
    allowNull:true
  },
  NoOfUnits:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  UnitValue:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  Total:{
    type:DataTypes.INTEGER,
    allowNull:true
  },
  Description:{
    type:DataTypes.STRING(1234),
    allowNull:true
  },
  Type:{
    type:DataTypes.STRING,
    allowNull:true
  },
  ProjectBudjetId:{
     type:DataTypes.INTEGER,
     allowNull:false
  }});

    BC.associate = (models) => {
       models.BC.belongsTo(models.ProjectBudjet, { foreignKey:"ProjectBudjetId"});
       models.BC.belongsTo(models.Categorie, {foreignKey:"CId"});
    };

    return BC ;
  };