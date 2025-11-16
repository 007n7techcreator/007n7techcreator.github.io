// Get references to the HTML elements we need
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const container = document.querySelector('.container');
const confirmationPage = document.getElementById('confirmationPage');
const countdownSpan = document.getElementById('countdown');
const funCat = document.getElementById('funCat'); // Get reference to the fun cat element

// Make the "No" button move randomly when the mouse hovers over it
noButton.addEventListener('mouseover', function() {
    // Get the dimensions of the container and the button
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    // Calculate the maximum X and Y values the button can have, so it stays within the container
    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    // Generate random X and Y coordinates
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    // Set the button's position
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

// When the "Yes" button is clicked
yesButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Hide the initial content and show the confirmation page
    container.classList.add('hidden');
    confirmationPage.classList.remove('hidden'); // Show the confirmation page
    funCat.classList.remove('hidden'); // Show the fun cat

    // Set up the countdown timer
    let countdown = 3;
    countdownSpan.textContent = countdown;

    const countdownInterval = setInterval(function() {
        countdown--;
        countdownSpan.textContent = countdown;

        // When the countdown reaches 0, redirect to the new YouTube link
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://youtu.be/npjF032TDDQ?feature=shared';
        }
    }, 1000); // Update the countdown every 1 second
});
    // Set up the countdown timer
    let countdown = 3;
    countdownSpan.textContent = countdown;

    const countdownInterval = setInterval(function() {
        countdown--;
        countdownSpan.textContent = countdown;

        // When the countdown reaches 0, redirect to the new YouTube link
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://youtu.be/npjF032TDDQ?feature=shared';
        }
    }, 1000); // Update the countdown every 1 second
});
    countdownSpan.textContent = countdown;

    const countdownInterval = setInterval(function() {
        countdown--;
        countdownSpan.textContent = countdown;

        // When the countdown reaches 0, redirect to the new YouTube link
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://youtu.be/npjF032TDDQ?feature=shared';
        }
    }, 1000); // Update the countdown every 1 second
});

    // Set up the countdown timer
    let countdown = 3;
    countdownSpan.textContent = countdown;

    const countdownInterval = setInterval(function() {
        countdown--;
        countdownSpan.textContent = countdown;

        // When the countdown reaches 0, redirect to the new YouTube link
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://youtu.be/npjF032TDDQ?feature=shared'; // New YouTube link
        }
    }, 1000); // Update the countdown every 1 second
});
    const countdownInterval = setInterval(function() {
        countdown--;
        countdownSpan.textContent = countdown;

        // When the countdown reaches 0, redirect to the "It's Raining Tacos" video
        if (countdown <= 0) {
            clearInterval(countdownInterval);
            window.location.href = 'https://youtu.be/npjF032TDDQ?feature=shared'; // "It's Raining Tacos"
        }
    }, 1000); // Update the countdown every 1 second
});
