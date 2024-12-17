# Environmental Awareness Project

This project is a React application built with Vite, aimed at raising awareness about environmental issues and promoting sustainable solutions. The application includes various pages that highlight environmental problems, solutions, and team information.

## Project Structure

The project is organized into several components and pages, each serving a specific purpose. Below is an overview of the main files and their functionalities:

### Components

- **Navbar.jsx**
  - A navigation bar that provides links to different sections of the application, including Home, Team Members, and About Team.

- **Loader.jsx**
  - A loading spinner component displayed while 3D models are being loaded.

- **HomeInfo.jsx**
  - A component that displays information about the current stage of the home page.

### Pages

- **Home.jsx**
  - The home page of the application, featuring a 3D island model, a rotating sky, and a plane. Users can interact with the 3D models and view information about the project's stages.

- **Goal.jsx**
  - A page that presents key environmental solutions, including renewable energy, waste management, reforestation, water conservation, eco-friendly transportation, sustainable agriculture, energy efficiency, and ocean conservation. It also features a 3D model of the Earth.

- **Problem.jsx**
  - A page that highlights various environmental problems in Nepal, such as deforestation, air pollution, water pollution, waste management, climate change, loss of biodiversity, and soil erosion. It includes a map visualization of these issues using the Leaflet library.

- **Solution.jsx**
  - A page that provides detailed solutions to environmental problems. It includes sections for exploring solutions and viewing detailed information about each solution.

- **TeamMember.jsx**
  - A page that introduces the team members involved in the project, including their names, pictures, and the technologies they use.

- **AboutTeam.jsx**
  - A page that provides information about the team, their mission, and their values.

### Main Application

- **App.jsx**
  - The main application file that sets up the routing for the different pages using React Router. It also includes the Navbar and handles page transitions with AnimatePresence from Framer Motion.

## Installation and Setup

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-repo/environmental-awareness.git
   cd environmental-awareness