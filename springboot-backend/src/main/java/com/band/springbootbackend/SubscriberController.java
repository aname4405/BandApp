package com.band.springbootbackend;



@RestController
public class SubscriberController {

    private List<Subscriber> subscriber = new ArrayList<>;

    @GetMapping("/getAll")
    public List<Subscriber> getAll() {
        return this.Subscriber;
    }

}