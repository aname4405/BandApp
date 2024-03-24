import React, { useEffect, useState } from "react";
import BuyerService from "../service/BuyerService";
let ViewBuyers = () => {
    let [state, setState] = useState({
        buyers: []
    });

    useEffect(()=>{
        BuyerService.getAllBuyers().then((response)=>{
            setState(()=>({
                buyers : response.data
            }));
        }, ()=>{});        
    },[]);

    console.log(JSON.stringify(state.buyers))

    return (
        <>
        <table className="buyerTable">
            <thread className="buyerThread">
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </tr>
            </thread>
        </table>
        </>
    );
}
export default ViewBuyers;