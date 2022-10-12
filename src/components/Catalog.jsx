import React from "react";
import {pets} from "../fakedata/FakePet.tsx"
import {Pet} from "./Pet.tsx"


export function Catalog(){

    return(        
        <div className="container mx-auto max-w-2xl pt-5">     
            { pets.map (
                        ( pet,index) => <Pet pet={pet} key={index} />
                    )
            }  
        </div>
        )   
}