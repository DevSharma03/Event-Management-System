package com.eventpro.controller;

import com.eventpro.model.Event;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class EventController {

    // In-memory list to store events
    private final List<Event> events = new ArrayList<>(List.of(
            new Event("Concert in the Park", "Enjoy live music in the open air.", "2024-11-15"),
            new Event("Art Gallery Exhibition", "Explore local art in a modern gallery.", "2024-11-20"),
            new Event("Food Festival", "Taste global cuisines from top chefs.", "2024-12-05"),
            new Event("Music Fest", "Enjoy live music in the open air.", "2024-12-07")
    ));

    // Directory to store uploaded images
    @Value("${upload.dir}")
    private String uploadDir;  // Inject the upload directory path using @Value annotation

    // Display the home page with a list of upcoming events
    @GetMapping("/")
    public String homePage(Model model) {
        model.addAttribute("events", getUpcomingEvents());
        return "index";
    }

    // Display the "Create Event" page
    @GetMapping("/create-event")
    public String createEventPage(Model model) {
        model.addAttribute("event", new Event());
        return "create-event";
    }

    // Handle the event creation form submission
    @PostMapping("/create-event")
    public String createEvent(@ModelAttribute Event event) {
        // Add the event to the list without image handling
        events.add(event);
        return "redirect:/";  // Redirect to the homepage or event list page
    }

    // Display the "Explore Events" page with upcoming events
    @GetMapping("/explore-events")
    public String exploreEventsPage(Model model) {
        model.addAttribute("upcomingEvents", getUpcomingEvents());
        return "explore-events";
    }

    // Filter and get upcoming events based on the current date
    private List<Event> getUpcomingEvents() {
        LocalDate currentDate = LocalDate.now();
        return events.stream()
                .filter(event -> LocalDate.parse(event.getDate()).isAfter(currentDate))
                .collect(Collectors.toList());
    }

    // Handle GET request for the contact page
    @GetMapping("/contact-me")
    public String showContactPage() {
        return "contact-me";  // This will return the contact-me.html page
    }

    // Handle POST request to send the contact message
    @PostMapping("/send-contact-message")
    public String sendContactMessage(@RequestParam String name, @RequestParam String email, @RequestParam String message) {
        System.out.println("Message received from: " + name);
        System.out.println("Email: " + email);
        System.out.println("Message: " + message);

        return "redirect:/contact-me"; // Redirect to the contact-me page after submission
    }

}















