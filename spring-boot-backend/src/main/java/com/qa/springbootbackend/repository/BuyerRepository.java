package com.qa.springbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.qa.springbootbackend.model.Buyer;

@Repository
public interface BuyerRepository extends JpaRepository<Buyer, Long>{
    
} 