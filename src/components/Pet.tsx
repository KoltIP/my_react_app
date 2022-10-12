import React from "react";

export interface IPet{
    id: number
    name : string
    description: string
    type : string
    breed : string
    color : string
    img : string
}

export interface PetModel{
    pet : IPet
}

export function Pet({pet}:PetModel)
{
    return(
        <div className="border py-2 px-4 rounded flex-col items-center mb-5">
            <h1 className="text-3xl font-bold underline" style={{padding: "20px 20px", textAlign: "center", color: "black"}}> 
                {pet.name}
            </h1>

            <div style={{display: "flex", margin: "20px", alignItems: "center"}} >
                <img width="180" height="250" src={pet.img} alt={pet.description} style={{textAlign:"left", borderRadius:"30px"}}></img>
                {pet.type}
                {pet.breed}
                {pet.color}                
            </div>      
        </div>
    )
}