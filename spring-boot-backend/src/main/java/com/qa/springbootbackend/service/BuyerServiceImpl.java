package com.qa.springbootbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.qa.springbootbackend.model.Buyer;
import com.qa.springbootbackend.repository.BuyerRepository;

@Service
public class BuyerServiceImpl implements BuyerService {
    
    @Autowired
    BuyerRepository buyerRepository;


    @Override
    public Optional<Buyer> getBuyer(Long id) {
        return buyerRepository.findById(id);
    }

    @Override
    public List<Buyer> getAllBuyers() {
        return buyerRepository.findAll();
    }

    @Override
    public void deleteBuyer(Long id) {
        buyerRepository.deleteById(id);
    }

    @Override
    public Buyer updateBuyer(Buyer buyer) {
        Buyer buyerTemp = buyerRepository.findById(buyer.getId()).get();
        buyerTemp.setFirst_name(buyer.getFirst_name());
        buyerTemp.setLast_name(buyer.getLast_name());
        buyerTemp.setEmail(buyer.getEmail());
        return buyerRepository.save(buyerTemp);
    }

    @SuppressWarnings("null")
    @Override
    public Buyer saveBuyer(Buyer buyer) {
        return buyerRepository.save(buyer);
    }
   
}
