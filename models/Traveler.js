"use strict";

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Traveler extends Model { }

Traveler.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true,
		validate: {
			isEmail: true,
		},
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	sequelize
});

module.exports = Traveler;