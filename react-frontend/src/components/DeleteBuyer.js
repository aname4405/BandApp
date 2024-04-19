import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BuyerService from "../service/BuyerService";
let DeleteBuyer = () => {
    let location = buyerLocation();
    let navigate = useNavigate();

    useEffect(()=>{
        BuyerService.deleteBuyer(locatoin.state.id).then((response)=>{
            alert('user ID:' + location.state.id + ' has been deleted succesfully!')
            navigate({pathname : '/'})
        }, ()=>{});
    }, []);
    return (
        <>
        </>
    );
}
export default DeleteBuyer;