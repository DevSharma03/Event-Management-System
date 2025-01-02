package com.eventpro.model;

public class Event {
    private String title;
    private String description;
    private String date;

    // No-argument constructor
    public Event() {
    }

    // Constructor with parameters
    public Event(String title, String description, String date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

}



