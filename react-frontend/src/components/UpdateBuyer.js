import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BuyerService from "../service/BuyerService";
let UpdateBuyer = () => {
    let location = useLocation();
    // let findId = location.state.id;

    let [buyerTemp, setBuyer] = useState({
        first_name : '',
        last_name : '',
        email : ''
    });

    useEffect(()=>{
        BuyerService.findBuyer(location.state.id).then((response)=>{
            setBuyer(response.data);
        }, ()=>{});
    }, []);

    let navigate = useNavigate();
    let [first_name, setFirstName] = useState('');
    let [last_name, setLastName] = useState('');
    let [email, setEmail] = useState('');

    let handleFirstName = (e) => {setFirstName(e.target.value)}
    let handleLastName = (e) => {setLastName(e.target.value)}
    let handleEmail = (e) => {setEmail(e.target.value)}

    let handleSubmit =(e) => {
        e.preventDefault();

        let buyer = {first_name : first_name, last_name : last_name, email : email}
        // alert(JSON.stringify(buyer)) //to test 

        BuyerService.addBuyer(buyer).then(()=>{
            alert("Buyer has been updated successfully!")
            navigate({pathname : '/'});
        }, ()=>{
            alert("Buyer update failed")
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                First Name: <input onChange={handleFirstName} type="text" value={first_name} placeholder={buyerTemp.first_name}/>
                Last Name: <input onChange={handleLastName}type="text" value={last_name} placeholder={buyerTemp.last_name}/>
                Email: <input onChange={handleEmail}type="text" value={email} placeholder={buyerTemp.email}/>

                <input type="submit" value="Submit"/>
            </label>
        </form>   
        
        </>
    );
}
export default UpdateBuyer;