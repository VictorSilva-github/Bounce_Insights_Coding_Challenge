<h2>Country Info App</h2>

This is a simple React application that allows users to search for country information using an external API. The frontend is built using React, and the API communication is handled by Axios.

<h2>Table of Contents</h2>

* Prerequisites
* Installation
* Usage
* Folder Structure
* API Communication
* Troubleshooting
* Contributing
* License

<h2>Prerequisites</h2>
Make sure you have the following software installed on your machine:
 - Node.js (version 12 or higher)
 - npm (comes with Node.js)

<h2>1) Installation</h2>
Clone the repository:
git clone https://github.com/your-username/country-info-app.git

<h2>2) Navigate to the project folder:</h2>
cd country-info-app

<h2>3)Install dependencies:</h2>
npm install

<h2>4) Start the development server:</h2>
npm start
 - Open your browser and go to http://localhost:3000.
 - Enter a country name in the input field and click the "Search" button.
 - View country information displayed on the screen.

<h2>Folder Structure</h2>
The project has the following folder structure:
country-info-app/<br>
|-- src/<br>
|   |-- components/<br>
|       |-- HeaderComp/<br>
|           |-- HeaderComp.tsx<br>
|       |-- InfoLeftComp/<br>
|           |-- InfoLeftComp.tsx<br>
|       |-- InfoRightComp/<br>
|           |-- InfoRightComp.tsx<br>
|-- services/<br>
|   |-- getCountries.ts<br>
|-- styles/<br>
|   |-- App.css<br>
|   |-- styles.css<br>
|-- App.tsx<br>
|-- index.tsx<br>
|-- styles.d.ts<br>
|-- README.md<br>
|-- ...<br>


<h2>API Communication</h2>
The getCountries.ts file in the services folder contains the function for fetching country information from the API.

<h2>Troubleshooting</h2>
If you encounter any issues, please check the following:
 - Ensure you have a stable internet connection.
 - Verify that the API server is running.

Created by Victor Silva.
