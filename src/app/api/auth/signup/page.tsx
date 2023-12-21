import { useState } from "react"
import { ChangeEventHandler } from "react";



export default function SignUpPage(){

    

    const [signUpInfo, setSignUpInfo ] = useState({
        firstName:"",
        lastName:"",
        address:"",
        phoneNumber : "",
        email:"",
        userType : "",
        username: "",
        password: "" ,
        userId : ""
    })

    const { firstName, lastName, address, phoneNumber,
    email, userType, username, password, userId } = signUpInfo;

    const handleChange : ChangeEventHandler<HTMLInputElement> = ({target}) => {
        const { name, value } = target;
        setSignUpInfo({...signUpInfo, [name]: value});
    }

    return(
        <div>
            
        </div>
    )
}