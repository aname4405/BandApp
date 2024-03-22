package com.band.springbootbackend;

import org.springframework.data.repository.CrudRepository;

public interface SubscriberRepository extends CrudRepository<Subscriber, Long> {
    // Additional custom methods can be defined here if needed
}