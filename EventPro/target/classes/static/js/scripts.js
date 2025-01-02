document.addEventListener('DOMContentLoaded', () => {
    // Fetch events from backend API
    fetch('/api/events')
        .then(response => response.json())
        .then(data => {
            const eventsList = document.getElementById('events');
            eventsList.innerHTML = ''; // Clear the placeholder content

            data.forEach(event => {
                const li = document.createElement('li');
                
                // Create event card with better formatting
                li.innerHTML = `
                    <h3>${event.name}</h3>
                    <p><i class="fas fa-calendar-alt"></i> Date: ${event.date}</p>
                    <p><i class="fas fa-map-marker-alt"></i> Location: ${event.location}</p>
                `;
                eventsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching events:', error));
});
