"use client"

import { useState } from "react"
import { FormEventHandler } from "react";

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'




export default function SignUpPage(){

    interface SignUpInfo {
        firstName: string;
        lastName: string;
        address: string;
        phoneNumber: string;
        email: string;
        userType: string;
        username: string;
        password: string;
        userId: string;
    }
    

    

    const [signUpInfo, setSignUpInfo] = useState<SignUpInfo>({
        firstName: '',
        lastName: '',
        address: '',
        phoneNumber: '',
        email: '',
        userType: '',
        username: '',
        password: '',
        userId: '',
    });

    const { firstName, lastName, address, phoneNumber,
    email, userType, username, password, userId } = signUpInfo;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setSignUpInfo((prevSignUpInfo) => ({
            ...prevSignUpInfo,
            [name]: value,
        }));
    };

    const handleSubmit : FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/auth/users", {
            method : "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify(signUpInfo),
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok.');
            }
            return res.json();
        })
        .then((data) => {
            // Handle the JSON response
            console.log(data);
        })
        .catch((error) => {
            // Handle any errors that occurred during the fetch
            console.error('Error:', error);
        });
    }

    return(
        <div>
           <form className='w-96' onSubmit={handleSubmit}>
    <Input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleChange}
        name="firstName"
    />
    <Input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={handleChange}
        name="lastName"
    />
    <Input
        type="text"
        placeholder="Address"
        value={address}
        onChange={handleChange}
        name="address"
    />
    <Input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={handleChange}
        name="phoneNumber"
    />
    <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        name="email"
    />
    <Input
        type="text"
        placeholder="User Type"
        value={userType}
        onChange={handleChange}
        name="userType"
    />
    <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleChange}
        name="username"
    />
    <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handleChange}
        name="password"
    />
    <Input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={handleChange}
        name="userId"
    />
    <Button type="submit">Register</Button>
</form>
        </div>
    )
}