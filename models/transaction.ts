import mongoose from 'mongoose'
import { models, model } from 'mongoose'

// PASS THIS INFO TO THE NOTIFICATIONS IN PROVIDER PAGE

export interface userFeedPropsReserve{
    id : String,
    userId : String,
    customerName : String,
    customerAddress: String,
    customerContact: String,
    date : Date,
    amount : Number,
    status : String
}

const userFeedTransaction1 = new mongoose.Schema({
    id: { type: String, required: true }, // transaction ID
    customerId: { type: String, required: true },
    customerName : {type: String, required : true},
    customerAddress: {type: String, required : true},
    customerContact : {type: String, required : true},
    date: { type: Date, default: Date.now() },
    amount: {  type: Number, required: true },
    status: {
            type: String,
            enum: ['pending', 'completed'],
            default: 'pending'
            },   
});

export const userFeedTransactionModel = models.userFeedReserve || model<userFeedPropsReserve>('userFeedReserve', userFeedTransaction1 )



// PASS THIS TO THE FEED OF PROVIDERS

export interface userFeedPropsRequest{
    requestId : String,
    userId : String,
    userName : String,
    userAddress : String,
    userContact : String,
    serviceName : String
  
}

const userFeedTransaction2 = new mongoose.Schema({
    requestId : {type: String, required: true}, 
    userId: {type: String, required: true},
    userName: { type : String, required: true},
    userAddress: {type: String, required : true},
    userContact: {type: String, required : true},
    serviceName : {type: String, required: true}
})

export const userFeedRequestModel = models.userFeedRequest || model<userFeedPropsRequest>('userFeedRequest',userFeedTransaction2)