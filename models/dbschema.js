import mongoose, { models, Schema } from "mongoose";
const schema_db = new Schema({
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
    }
    ,
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, "first name is required"]
    },
    surname: {
        type: String,
        required: [true, "surname is required"]
    }
    ,
    phoneNumber: {
        type: String,
        required: [true, "phonenumber is required"]
    },
    birthDate: {
        type: Date,
        required: [true, "birth date is required"]
    }
    ,
    country: {
        type: String,
        required: [true, "country is required"]
    },
    city: {
        type: String,
        required: [true, "city is required"]
    }

}, { timestamps: true });
const User = (models && models.Users) ? models.Users : mongoose.model("Users", schema_db);

module.exports = User;