package com.band.springbootbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);

		SubscriberService = applicationContext.getBean(SubscriberService.class);

		runTest(service);
	}

	private static void runTest(SubscriberService subscriberService) {
		printAllSubscribers(subscriberService);
	}

	private static long printAllSubscribers(SubscriberService subscriberService){
		System.out.println("First Name: " + subscriber.getFirstName());
		System.out.println("Last Name: " + subscriber.getLastName());
		System.out.println("Email: " + subscriber.getEmail());

		if(lastIdused < subscriber.getId()) {
			lastIdused = event.getId();
		}
	}
	return lastIdused;
}
