const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema(
	{
		firstName: String,
		lastName: String,
		email: String,
		avatar: String,
		googleId: {
			type: String,
			required: true,
		}
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('User', userSchema)
