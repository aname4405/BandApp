import React from "react";
import axios from 'axios';

const getAllBuyersUrl = "http://localhost:8080/getAllBuyers";
const findBuyerUrl = "http://localhost:8080/getBuyer/";
const addBuyerUrl =  "http://localhost:8080/saveBuyer";
const updateBuyer =  "http://localhost:8080/updateBuyer";
const deleteBuyer =  "http://localhost:8080/deleteBuyer/";

class BuyerService{

    getAllBuyers(){
        return axios.get(getAllBuyersUrl);
    }

    findBuyer(){

    }

    addBuyer(){

    }

    updateBuyer(){

    }

    deleteBuyer(){

    }

}
export default new BuyerService();