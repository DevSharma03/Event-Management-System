# Event-Management-System

**Event-Management-System** is a web application designed to streamline the process of organizing, managing, and participating in events. It allows users to create, explore, and register for events, making event management seamless and interactive.

## Features

- **Event Creation:** Organizers can create new events with details like title, description, date, and location.
- **Event Exploration:** Users can browse and search upcoming events, filter by event name, and view event details.
- **Event Registration:** Participants can register for events directly through an interactive popup form.
- **Registration Management:** Organizers can view lists of registered participants for each event.
- **Responsive UI:** Built with a modern and user-friendly interface using HTML, CSS, and JavaScript.
- **Dynamic Content:** Events and registrations are managed dynamically via front-end scripts and a backend API.

## Tech Stack

- **Backend:** Java, Spring Boot (RESTful API, MVC pattern)
- **Frontend:** HTML, CSS (custom stylesheets and Font Awesome for icons), JavaScript
- **Templating:** Thymeleaf for dynamic HTML rendering
- **Build Tool:** Maven

## Project Structure

- `EventPro/src/main/java/com/eventpro/model/Event.java` — Event model class (title, description, date)
- `EventPro/src/main/resources/templates/` — HTML templates for pages like Home, Explore Events, Create Event
- `EventPro/src/main/resources/static/js/` — JavaScript files for dynamic features (event listing, registration)
- `EventPro/src/main/resources/static/css/` — CSS files for styling
- `EventPro/HELP.md` — Getting started, reference documentation, and guides

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DevSharma03/Event-Management-System.git
   ```
2. **Navigate to the project directory:**
   ```bash
   cd Event-Management-System/EventPro
   ```
3. **Build and run the project:**
   ```bash
   mvn spring-boot:run
   ```
4. **Access the application:**
   Open your browser and go to `http://localhost:8080`

## Usage

- **Home Page:** Overview and navigation to create or explore events.
- **Create Event:** Organizers can input event details and publish new events.
- **Explore Events:** Users can search, browse, and register for upcoming events.
- **Registration:** Fill out the form to register for an event; organizers can view registrations.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is currently unlicensed.

## Author

[DevSharma03](https://github.com/DevSharma03)
