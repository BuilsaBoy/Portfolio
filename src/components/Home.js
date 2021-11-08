import React from "react"
import image from "../Dark Laptop.jpg"

export default function Home(){
    return (
        <main>
            <img src={image} alt="Dark Laptop" className="absolute object-cover w-full h-full" /> 
            <section className="relative flex justify-center text-center min-h-screen pt-8 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"> 
                  Hello there. I'm Tony  
                </h1>
            </section>
            <section className="relative flex justify-center text-center sm:text-">
                <h2 className="text-3xl text-green-100 cursive home-sec">
                    Your Needle In the Haystack😉
                </h2>
            </section>        
        </main>
    )
}