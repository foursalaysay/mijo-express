
import { NextResponse } from "next/server"
import startDb from "../../../../lib/mongodb"
import UserModel from "../../../../models/user";

interface NewUserRequest {
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

interface NewUserResponse {
    userId : string,
    firstName : string,
    lastName : string,
    address : string,
    phoneNumber : string,
    email : string,
    username : string,
    userType : "admin" | "customer" | "provider"
}

type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>;

export const POST = async (req : Request ): Promise<NewResponse> => {
   
    const body = (await req.json()) as NewUserRequest;

    await startDb();

    const oldUser = await UserModel.findOne({ username : body.username });
    if (oldUser) 
         return NextResponse.json(
        { error : "Username already exist!"},
        { status : 422 }
        );

        const user = await UserModel.create({...body});

        return NextResponse.json({
            user
        });
};

export const GET = async (req: Request, res: Response) => {
    console.log("POST REQUEST");
}