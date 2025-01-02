// Global array to store registrations for each event
let registrations = [];

// Event listener for the search input to filter events by name
document.getElementById('searchName').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const eventCards = document.querySelectorAll('.event-card');

    eventCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        if (title.includes(filter)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
});

// Function to open the register popup and set event title in the hidden input
function openRegisterPopup(eventTitle) {
    document.getElementById('event-title').value = eventTitle;
    document.getElementById('register-popup').style.display = 'flex';
}

// Close the registration popup
document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('register-popup').style.display = 'none';
});

// Handle the registration form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const eventTitle = document.getElementById('event-title').value;

    // Validate that all fields are filled
    if (!name || !email || !phone || !eventTitle) {
        alert("Please fill in all fields.");
        return;
    }

    // Save registration data for the specific event
    saveRegistration(eventTitle, name, email, phone);

    // Show the registration success message in the popup
    document.getElementById('register-popup').innerHTML = `
        <div class="popup-content">
            <span class="close-btn" id="close-popup">&times;</span>
            <h3>Registration Successful!</h3>
            <p>Thank you, ${name}, for registering for the event "${eventTitle}"!</p>
            <button onclick="closePopup()">Done</button>
        </div>
    `;

    document.getElementById('register-popup').style.display = 'flex';
});

// Function to close the registration popup after clicking "Done"
function closePopup() {
    document.getElementById('register-popup').style.display = 'none';
}

// Function to save the registration data in the global array
function saveRegistration(eventTitle, name, email, phone) {
    // Save to the registrations array for the specific event
    registrations.push({ eventTitle, name, email, phone });
    console.log(`Saved registration for ${name} to event "${eventTitle}"`);
}

// Function to open the view registrations popup and show registrations for the selected event
function viewRegistrations(eventTitle) {
    const registrationDetails = getRegistrationsForEvent(eventTitle);

    const detailsContainer = document.getElementById('registration-details-container');
    detailsContainer.innerHTML = ''; // Clear previous details

    if (registrationDetails.length === 0) {
        detailsContainer.innerHTML = '<p>No registrations yet.</p>';
    } else {
        registrationDetails.forEach(registration => {
            const participantDiv = document.createElement('div');
            participantDiv.classList.add('registration-participant');
            participantDiv.innerHTML = `
                <p><strong>Name:</strong> ${registration.name}</p>
                <p><strong>Email:</strong> ${registration.email}</p>
                <p><strong>Phone:</strong> ${registration.phone}</p>
            `;
            detailsContainer.appendChild(participantDiv);
        });
    }

    document.getElementById('registration-details-popup').style.display = 'flex';
}

// Close the view registrations popup
document.getElementById('close-details-popup').addEventListener('click', function() {
    document.getElementById('registration-details-popup').style.display = 'none';
});

// Function to fetch registrations for a specific event title
function getRegistrationsForEvent(eventTitle) {
    // Filter the global registrations array to find participants for the selected event
    return registrations.filter(registration => registration.eventTitle === eventTitle);
}

// Wait for the DOM to load to apply image visibility
document.addEventListener('DOMContentLoaded', function() {
    const eventImages = document.querySelectorAll('.event-image');
    eventImages.forEach(image => {
        image.style.display = 'block'; // Make sure images are visible
    });
});












