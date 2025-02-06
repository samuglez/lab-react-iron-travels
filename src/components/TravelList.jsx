import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
export default function TravelList(){
    const [travel, setTravel]= useState(travelPlansData)
    const deleteTravel = (idDelete)=>{
        const deleteTravelList = travel.filter(i=>i.id !== idDelete)
        setTravel(deleteTravelList)
    }
    
    return(
        <div>
            {travel.map(item=>{
                let etiqueta = "";
                let etiqueta2 = "";
                if (item.totalCost <= 350 ) {
                    etiqueta = "Great Deal";
        
                } else if (item.totalCost >= 1500 && item.allInclusive) {
                    etiqueta = "Premium";
                    etiqueta2 = "All-Inclusive";

                }
                return(
                    <div key={item.id}>
                        <img src={item.image} style={{width:"500px"}}/>
                        <h2>{item.destination} {item.days} days</h2>
                        <h3>{item.description}</h3>
                        <h3>Price: {item.totalCost} €</h3>
                        <p>{etiqueta} {etiqueta2} </p>
                        <button onClick={()=>deleteTravel(item.id)}>Delete</button>
                        
                    </div>
                )

            })}
        </div>
    )
}