package com.qa.springbootbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

import com.qa.springbootbackend.service.BuyerService;
import com.qa.springbootbackend.model.Buyer;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.DeleteMapping;

@RestController
public class BuyerController {

    @Autowired
    BuyerService service;

    @GetMapping("/getAllBuyers")
    public String getMethodName(@RequestParam String param) {
        return new String();
    }
    
    public List<Buyer> getAllBuyers(){
        return service.getAllBuyers();
    }

    @GetMapping("/getBuyer/{id}")
    public Optional<Buyer> getBuyer(@PathVariable Long id){
        return service.getBuyer(id);
    }

    @PostMapping("/saveBuyer")
    public Buyer saveBuyer(@RequestBody Buyer buyer){
        return service.saveBuyer(buyer);
    }

    @PutMapping("updateBuyer")
    public Buyer updateBuyer(@RequestBody Buyer buyer){
        return service.updateBuyer(buyer);
    }

    @DeleteMapping("/deleteBuyer/{id}")
    public String deleteBuyer(@PathVariable Long id){
        service.deleteBuyer(id);
        return "buyer has been deleted";
    }          
}
