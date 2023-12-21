import { Document, Model, Schema, model, models } from "mongoose"
import bcrypt from 'bcrypt';



export interface IUser extends Document {
    userId : string,
    firstName : string,
    lastName : string,
    address : string,
    phoneNumber : string,
    email : string,
    username : string,
    password : string,
    userType : "admin" | "customer" | "provider"
}

export interface Methods {
    comparePassword(password : string) : Promise<boolean>;
}


const userSchema = new Schema<IUser, {}, Methods>({
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
            userType : {
                type : String,
                required : [true, "User Type is required"],
                enum : ["admin", "customer", "provider"],
                default : "customer"
            },
            userId : {
                type : String,
                required : [true, "User ID is required"]
            } 
})

// userSchema.pre<IUser>("save", async function (next) {
//     if (!this.isModified("password")) {
//         return next();
//     }
//     try {
//         const salt = await bcrypt.genSalt(10);
//         this.password = await bcrypt.hash(this.password, salt);
//         next();
//     } catch (error) {
//         console.error("Error in hashing a Password:", error);
//         next();
//     }
// });

userSchema.pre("save", async function (next){
    if(!this.isModified("password"))
        return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();

    }catch(error){
        console.log("Error in hashing a Password")
        throw error 
    }
})

userSchema.methods.comparePassword = async function (password){
    try{
        return await bcrypt.compare(password, this.password)
    }catch(error){
        throw error
    }
}

// userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
//     try {
//         return await bcrypt.compare(password, this.password);
//     } catch (error) {
//         throw error;
//     }
// };

const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<IUser, {}, Methods>;



// const UserSchema = new Schema({
//     firstName: {
//         type : String,
//         required : [true, "First Name is required"]
//     },
//     lastName: {
//         type: String,
//         required : [true, "Last Name is required"]
//     },
//     address : {
//         type: String,
//         required : [true, "Address is required"]
//     },
//     phoneNumber : {
//         type : String,
//         required: true,
//         validate: {
//       validator: function(v : string) {
//         return /^09\d{9}$/.test(v); 
//       },
//       message: (props : {value : string}) => `${props.value} is not a valid phone number! Please enter a valid Iranian phone number starting with 09.`,
//         },
//     },
//     email: {
//         type: String,
//         unique: true,
//         required: [true, "Email is required"],
//         match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
//     },
//     username : {
//         type : String,
//         unique : true,
//         required : [true, "Username is required"]
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         select: false
//     },
//     UserType : {
//         type : String,
//         required : [true, "User Type is required"]
//     },
//     UserId : {
//         type : Number,
//         required : [true]
//     }
// })

// const User = models.User || model("User", UserSchema)

// export default User