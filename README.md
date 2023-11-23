Country Info App

This is a simple React application that allows users to search for country information using an external API. The frontend is built using React, and the API communication is handled by Axios.

Table of Contents
Prerequisites
Installation
Usage
Folder Structure
API Communication
Troubleshooting
Contributing
License
Prerequisites
Make sure you have the following software installed on your machine:

Node.js (version 12 or higher)
npm (comes with Node.js)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/country-info-app.git
Navigate to the project folder:

bash
Copy code
cd country-info-app
Install dependencies:

bash
Copy code
npm install
Usage
Start the development server:

bash
Copy code
npm start
Open your browser and go to http://localhost:3000.

Enter a country name in the input field and click the "Search" button.

View country information displayed on the screen.

Folder Structure
The project has the following folder structure:

lua
Copy code
country-info-app/
|-- src/
|   |-- components/
|       |-- HeaderComp/
|           |-- HeaderComp.tsx
|       |-- InfoLeftComp/
|           |-- InfoLeftComp.tsx
|       |-- InfoRightComp/
|           |-- InfoRightComp.tsx
|-- services/
|   |-- getCountries.ts
|-- styles/
|   |-- App.css
|   |-- styles.css
|-- App.tsx
|-- index.tsx
|-- styles.d.ts
|-- README.md
|-- ...


API Communication
The getCountries.ts file in the services folder contains the function for fetching country information from the API.

Troubleshooting
If you encounter any issues, please check the following:

Ensure you have a stable internet connection.
Verify that the API server is running.