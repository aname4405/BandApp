package com.band.springbootbackend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubscriberService {
    private final SubscriberRepository subscriberRepository;

    @Autowired
    public SubscriberService(SubscriberRepository subscriberRepository){
        System.out.println("spinning up SubscriberService...");
        this.subscriberRepository = subscriberRepository;
    }

    public Subscriber createSubscriber(Subscriber subscriber) {
        return subscriberRepository.save(subscriber);
    }

    public Iterable<Subscriber> getAllSubscribers(){
        return subscriberRepository.findAll();
    }
}
