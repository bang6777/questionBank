'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exam_Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Exam_Question.init({
    Id_quesstion: DataTypes.INTEGER,
    Id_exam: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Exam_Question',
  });
  return Exam_Question;
};