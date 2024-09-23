"use client"
import { useRouter } from "next/router"
import { useState } from "react";
import React from "react"

// SignUp 
export default function SignUp() {
    // Use Router Object
    const router = useRouter();

    const Field = [
        {
            name: "name",
            type: "text"
        },
        {
            password: "password",
            type: "password"
        },
        {
            email: "email",
            type: "email"
        },
    ];

    const [value, setValue] = useState({name: "",  password: "", email: "" });

    return (
        <div>

        </div>
    )
}