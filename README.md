# Dev-Detective

Dev-Detective is a web application that allows users to search for GitHub users and display their profile information.  This includes basic profile details, repository counts, follower/following counts, and contact information where available.

## Features and Functionality

* **GitHub User Search:** Search for GitHub users by their username.
* **Profile Display:**  Displays the user's profile picture, name, join date, bio, repository count, follower count, following count, location, website/portfolio link, Twitter handle, and company information.
* **Dark/Light Mode:**  Users can toggle between dark and light modes for improved usability.
* **Error Handling:** Displays a "no search results" message if the GitHub user is not found.
* **Responsive Design:**  The application adapts to different screen sizes.


## Technology Stack

* **HTML:**  `index.html` provides the structure and content of the web page.
* **CSS:** `style.css` (not provided, but implied) handles the styling and layout.
* **JavaScript:** `index.js` handles user interactions, fetches data from the GitHub API, and updates the UI.
* **GitHub API:** The application utilizes the GitHub API (`https://api.github.com/users/{username}`) to retrieve user data.
* **Font Awesome:** Uses Font Awesome for icons (linked via CDN: `https://kit.fontawesome.com/13fa0a4b13.js`).


## Prerequisites

* A web browser (Chrome, Firefox, Safari, etc.).


## Installation Instructions

1. Clone the repository: `git clone https://github.com/Rishabhk0207/Dev-Detective.git`
2. Navigate to the project directory: `cd Dev-Detective`
3. Open `index.html` in your web browser.


## Usage Guide

1. Open the application in your web browser.
2. Enter a GitHub username in the search bar.
3. Press Enter or click the "Search" button.
4. The application will fetch and display the user's profile information.
5. Use the sun/moon icon to toggle between dark and light mode.


## API Documentation

The application uses the GitHub API v3.  Refer to the official GitHub API documentation for details: [https://docs.github.com/en/rest](https://docs.github.com/en/rest)  Specifically, the `/users/{username}` endpoint is used to retrieve user data.

## Contributing Guidelines

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear and concise messages.
4. Push your branch to your forked repository.
5. Create a pull request to merge your changes into the main branch.


## License Information

License information is not provided in the repository.  Please specify a license (e.g., MIT, GPL) to clarify the terms of use and distribution.


## Contact/Support Information

For any questions or issues, please contact Rishabhk0207 via the GitHub repository.
