import { NextResponse } from "next/server";

export const GET = async () => {
    // console.log(process.env.API_URL)
    const result = await fetch (process.env.API_URL, {
        headers:{
            "Content-type": "application/json"
        }
    })
    const products = await result.json()
    return NextResponse.json({data:products})
};