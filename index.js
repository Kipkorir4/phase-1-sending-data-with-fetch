// Function to submit user data
function submitData(name, email) {
    // Create an object containing user data
    const userData = {
        name: name,
        email: email
    };

    // Configuration object for the fetch request
    const configObject = {
        method: 'POST', // HTTP method
        headers: {
            'Content-Type': 'application/json', // Request content type
            'Accept': 'application/json' // Response content type to accept
        },
        body: JSON.stringify(userData) // Convert user data object to JSON string
    };

    // Make a POST request to the server
    return fetch('http://localhost:3000/users', configObject)
        .then(response => response.json()) // Parse response body as JSON
        .then(data => {
            // Handle successful response
            appendIdToDOM(data.id); // Append the new ID to the DOM
        })
        .catch(error => {
            // Handle errors
            appendErrorToDOM(error.message); // Append error message to the DOM
        });
}

// Function to append ID to the DOM
function appendIdToDOM(id) {
    const idElement = document.createElement('p'); // Create a new paragraph element
    idElement.textContent = `New ID: ${id}`; // Set text content to display the new ID
    document.body.appendChild(idElement); // Append the element to the document body
}

// Function to append error message to the DOM
function appendErrorToDOM(message) {
    const errorElement = document.createElement('p'); // Create a new paragraph element
    errorElement.textContent = `Error: ${message}`; // Set text content to display the error message
    document.body.appendChild(errorElement); // Append the element to the document body
}

// Export the submitData function for testing
module.exports = submitData;

