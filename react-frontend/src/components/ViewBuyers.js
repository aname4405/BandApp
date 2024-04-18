import React, { useEffect, useState } from "react";
import BuyerService from "../service/BuyerService";
let ViewBuyers = () => {
    let [state, setState] = useState({
        buyers: []
    });
    console.log("hello")
    
    useEffect(()=>{
        console.log("hello2")
        BuyerService.getAllBuyers().then((response)=>{
            console.log("hello3")
            setState(()=>({
                buyers : response.data
            }));
        }, ()=>{});        
    },
    []
    );

    console.log(JSON.stringify(state.buyers))

    return (
        <>
        <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                {
              state.buyers.map((buyer, i)=>{
                return(
                    <tr>
                        <td>{buyer.id}</td>
                        <td>{buyer.first_name}</td>
                        <td>{buyer.last_name}</td>
                        <td>{buyer.email}</td>

                        <td>
                            <button className="btn-update">Update</button>
                            <button className="btn-delete">Delete</button>
                        </td>
                    </tr>
                )
              })

                }
        </table>
        <button className="btn-success">Add Buyer</button>
        </>
    );
}
export default ViewBuyers;