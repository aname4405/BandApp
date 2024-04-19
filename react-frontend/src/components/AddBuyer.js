import React, {useState}from "react";
import {useNavigate} from 'react-router-dom';
import BuyerService from "../service/BuyerService";

let AddBuyer = () => {
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
            alert("Buyer has been added successfully!")
            navigate({pathname : '/'});
        }, ()=>{
            alert("Buyer creation failed")
        });
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label>
                First Name: <input onChange={handleFirstName} type="text" value={first_name}/>
                Last Name: <input onChange={handleLastName}type="text" value={last_name}/>
                Email: <input onChange={handleEmail}type="text" value={email}/>

                <input type="submit" value="Submit"/>
            </label>
        </form>   
        </>
    );
}
export default AddBuyer;