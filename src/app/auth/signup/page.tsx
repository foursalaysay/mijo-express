"use client"

import { useState } from "react"
import { ChangeEventHandler, FormEventHandler } from "react";

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'




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

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/users", {
            method : "POST",
            body : JSON.stringify(signUpInfo),
        }).then((res) => res.json());
        console.log(res)
    };

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <Input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={handleChange}
                />
                <Input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={handleChange}
                />
                <Button type="submit">Register</Button>
            </form>
           
        </div>
    )
}