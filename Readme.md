# Google Forms Clone

This project is a simple clone of Google Forms that allows users to create and view submissions. It demonstrates the use of a backend server to handle data and a frontend application to interact with users. The backend is built with Node.js and Express, while the frontend is built using Visual Basic in Visual Studio.

## Table of Contents
- [Introduction](#introduction)
- [Architecture](#architecture)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Preview](#preview)

## Introduction

### Purpose
The purpose of this project is to provide a simple form submission system where users can create new submissions and view existing ones. It serves as an example of integrating a frontend application with a backend server.

### Features
- Create new form submissions with user details and a stopwatch time.
- View existing submissions, navigate through them using next and previous buttons.
- Data persistence using a JSON file as the database.

## Architecture

### Backend
- **Node.js** and **Express** are used to create a simple REST API.
- **fs** module is used to read and write data to a JSON file (`db.json`).

### Frontend
- **Visual Basic** in **Visual Studio** is used to create the frontend application.
- The frontend application consists of two main forms: `CreateSubmissionForm` and `ViewSubmissionsForm`.

## Project Structure
google-forms-clone/</br>
│</br>
├── Slidely/</br>
│ ├── dist/</br>
│ │ ├── server.js</br>
│ ├── src/</br>
│ │ ├── db.json</br>
│ │ ├── server.ts</br>
│ ├── node_modules/</br>
│ ├── package.json</br>
│ ├── tsconfig.json</br>
│ └── README.md</br>
│
└── VisualStudioProject/</br>
├── CreateSubmissionForm.vb</br>
├── ViewSubmissionsForm.vb</br>
├── Program.vb</br>
└── VisualStudioProject.sln</br>


- **Slidely**: Contains the backend code.
  - **dist**: Compiled JavaScript files.
  - **src**: Source TypeScript files and database JSON file.
  - **node_modules**: Node.js dependencies.
  - **package.json**: Node.js project configuration.
  - **tsconfig.json**: TypeScript configuration.

- **VisualStudioProject**: Contains the frontend code.
  - **CreateSubmissionForm.vb**: Form to create a new submission.
  - **ViewSubmissionsForm.vb**: Form to view existing submissions.
  - **Program.vb**: Main program file.
  - **VisualStudioProject.sln**: Visual Studio solution file.

<br/>


## Installation

### Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- Visual Studio with .NET support

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/google-forms-clone.git
    cd google-forms-clone/Slidely
    ```

2. Install the necessary dependencies:
    ```sh
    npm install
    ```

3. Compile the TypeScript files:
    ```sh
    tsc
    ```

### Frontend Setup
1. Open the `VisualStudioProject` solution in Visual Studio.

2. Ensure that all necessary NuGet packages are installed. You might need to restore NuGet packages if they are missing.

## Running the Project

### Starting the Backend Server
1. Navigate to the `Slidely` directory:
    ```sh
    cd google-forms-clone/Slidely
    ```

2. Start the server:
    ```sh
    node dist/server.js
    ```

    You should see the message:
    ```
    Server is running on http://localhost:3000
    ```

### Running the Frontend
1. Open the solution in Visual Studio.

2. Set the startup form to `CreateSubmissionForm` or `ViewSubmissionsForm` as needed.

3. Run the project by pressing `F5` or clicking on the `Start` button in Visual Studio.

## API Endpoints

### POST /submit
- **Description**: Submits a new form entry.
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "phone": "1234567890",
      "github_link": "https://github.com/johndoe",
      "stopwatch_time": "00:05:00"
    }
    ```
- **Response**:
    ```json
    {
      "success": true
    }
    ```

### GET /read
- **Description**: Fetches a form entry by its index.
- **Query Parameters**:
    - `index`: The index of the submission to fetch.
- **Response**:
    ```json
    {
      "submission": {
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "1234567890",
        "githubLink": "https://github.com/johndoe",
        "stopwatchTime": "00:05:00"
      }
    }
    ```

## Usage

### Creating a Submission
1. Open the `CreateSubmissionForm` in Visual Studio.
2. Enter the necessary details such as Name, Email, Phone, GitHub Link, and start the Stopwatch.
3. Click on the `Submit` button to save the submission.
    - The form data is sent to the backend server via a POST request to `/submit`.
    - If the submission is successful, a confirmation message is displayed.

### Viewing Submissions
1. Open the `ViewSubmissionsForm` in Visual Studio.
2. Click on `Next` or `Previous` buttons to navigate through the submissions.
    - The form fetches data from the backend server via a GET request to `/read` with the current index as a query parameter.
    - The submission details are displayed in the form fields.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Ensure that your code adheres to the coding standards and includes appropriate tests.

1. Fork the repository.
2. Create a new branch for your feature.
3. Commit your changes to the branch.
4. Create a pull request with a detailed description of your changes.

## Preview

###  Home Page
![image](https://github.com/shivamverma26/Google_Form.vb/assets/94590743/5fb99e50-f8f8-4954-92c9-da1bf2b69732)
###  View Submission
![image](https://github.com/shivamverma26/Google_Form.vb/assets/94590743/6275b4ac-dd6e-4437-bd7a-0a41b608a78c)
## Create Submission
![image](https://github.com/shivamverma26/Google_Form.vb/assets/94590743/81bd1bfa-66b7-4b2d-ae7d-f5aa591cac6f)



## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
