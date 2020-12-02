'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quesstion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Quesstion.init({
    Id_topic: DataTypes.INTEGER,
    Id_teacher: DataTypes.INTEGER,
    Id_level: DataTypes.INTEGER,
    Name_quesstion: DataTypes.STRING,
    Id_grade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Quesstion',
  });
  Quesstion.associate=function(models){
    // Quesstion.belongsTo(models.Topic,{as: 'Id_Topic',foreignKey:  'Id_topic'});
    // Quesstion.belongsTo(models.Image_Quesstion,{as: 'Id_Level', foreignKey :  'Id_level'});
    // Quesstion.belongsTo(models.Teacher,{as: 'Id_Teacher', foreignKey :  'Id_teacher'});
    // Quesstion.hasMany(models.Image_Quesstion,{as: 'Id_Quesstion', foreignKey :  'Id_Quesstion'});
      Quesstion.hasMany(models.Answer,{as: 'Id_Quesstion', foreignKey :  'Id_quesstion'});

  }
  return Quesstion;
};