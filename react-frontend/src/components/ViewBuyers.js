import React, { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
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

let navigate = useNavigate();

let handleAddBuyer = () => {
    navigate({pathname : '/AddBuyer'})
}

let handleUpdate = (id) => {
    navigate('/UpdateBuyer', {state : {id}});    
}

let handleDelete = (id) => {
    navigate('/DeleteBuyer', {state : {id}});
    
}

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
                            <button className="btn-update" onClick={()=>{{handleUpdate(buyer.id)}}}>Update</button>
                            <button className="btn-delete" onClick={()=>{{handleDelete(buyer.id)}}}>Delete</button>
                        </td>
                    </tr>
                )
              })

                }
        </table>
        <button className="btn-success" onClick={handleAddBuyer}>Add Buyer</button>
        </>
    );
}
export default ViewBuyers;