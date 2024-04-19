import React from "react";
import axios from 'axios';

const getAllBuyersUrl = "http://localhost:8080/getAllBuyers";
const findBuyerUrl = "http://localhost:8080/getBuyer/";
const addBuyerUrl =  "http://localhost:8080/saveBuyer";
const updateBuyerUrl =  "http://localhost:8080/updateBuyer";
const deleteBuyerUrl =  "http://localhost:8080/deleteBuyer/";

class BuyerService{

    getAllBuyers(){
        return axios.get(getAllBuyersUrl);
    }

    findBuyer(id){
        return axios.get(findBuyerUrl+id);        
    }

    addBuyer(buyer){
        return axios.post(addBuyerUrl, buyer);
    }

    updateBuyer(buyer){
        return axios.put(updateBuyerUrl, buyer);
    }

    deleteBuyer(id){
        return axios.delete(deleteBuyerUrl+id);
    }

}
export default new BuyerService();