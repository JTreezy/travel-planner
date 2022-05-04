"use strict";

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model { }

Trip.init({
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	trip_budget: {
		type: DataTypes.FLOAT,
	},
    traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
    }
	
}, {
	sequelize
});

module.exports = Trip;