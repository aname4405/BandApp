import React from "react";
import axios from 'axios';

const getAllBuyersUrl = "localhost:8080/getAllBuyers";
const findBuyerUrl = "localhost:8080/getBuyer/";
const addBuyerUrl = "localhost:8080/saveBuyer";
const updateBuyer = "localhost:8080/updateBuyer";
const deleteBuyer = "localhost:8080/deleteBuyer/";

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