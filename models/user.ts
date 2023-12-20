import { Schema, model, models } from "mongoose"
import { string } from "zod";

const UserSchema = new Schema({
    firstName: {
        type : String,
        required : [true, "First Name is required"]
    },
    lastName: {
        type: String,
        required : [true, "Last Name is required"]
    },
    address : {
        type: String,
        required : [true, "Address is required"]
    },
    phoneNumber : {
        type : String,
        required: true,
        validate: {
      validator: function(v : string) {
        return /^09\d{9}$/.test(v); 
      },
      message: (props : {value : string}) => `${props.value} is not a valid phone number! Please enter a valid Iranian phone number starting with 09.`,
        },
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    username : {
        type : String,
        unique : true,
        required : [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    },
    UserType : {
        type : String,
        required : [true, "User Type is required"]
    },
    UserId : {
        type : Number,
        required : [true]
    }
})

const User = models.User || model("User", UserSchema)

export default User