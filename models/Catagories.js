
 'use strict';
  module.exports = (sequelize, DataTypes) => {
    var Categorie = sequelize.define("Categorie", {
      CategorieId:{
     type:DataTypes.INTEGER,
     primaryKey:true,
  },
  CategorieName:{
    type:DataTypes.STRING,
    allowNull:true
  }
  });
  Categorie.associate = (models) => {
    models.Categorie.hasMany(models.BC,{foreignKey:"CId",onDelete: 'CASCADE', hooks: true })
   }
    return Categorie  ;
  };