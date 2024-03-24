package com.qa.springbootbackend.service;

import java.util.List;
import java.util.Optional;

import com.qa.springbootbackend.model.Buyer;


public interface BuyerService {    
    public Optional<Buyer> getBuyer(Long id);
    public List<Buyer> getAllBuyers();
    public void deleteBuyer(Long id);
    public Buyer updateBuyer(Buyer buyer);
    public Buyer saveBuyer(Buyer buyer); 
}
