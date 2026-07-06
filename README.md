# Jalal Dev - Personal Portfolio

Welcome to the source code of my personal portfolio website! This repository contains a modern, responsive, and interactive portfolio built using React, Vite, and Three.js for 3D elements.

## Features

*   **Modern Design:** Sleek UI with a dark theme and glowing accents.
*   **Interactive 3D Background:** Uses `@react-three/fiber` and `@react-three/drei` for ambient background effects.
*   **Animations:** Smooth scrolling and fade-in animations powered by `aos` (Animate On Scroll).
*   **Responsive:** Fully responsive design that looks great on mobile, tablet, and desktop devices.
*   **Sections:** Includes Hero, Skills Ticker, Services, Portfolio/Projects, Pricing, and Footer sections.

## Tech Stack

*   **Frontend Framework:** React 19
*   **Build Tool:** Vite
*   **Styling:** Custom CSS (with variables for easy theming)
*   **Icons:** `lucide-react`
*   **3D Graphics:** `three`, `@react-three/fiber`, `@react-three/drei`
*   **Animations:** `aos`
*   **Deployment:** GitHub Pages (`gh-pages`)

## Getting Started

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/jalal-portfolio-react.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd jalal-portfolio-react
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```
    *(or `yarn install`)*

### Development Server

Run the development server to see your changes in real-time:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be output to the `dist` directory.

### Deployment

This project is configured to deploy to GitHub Pages.

1.  Update the `homepage` field in `package.json` to your GitHub Pages URL (if needed).
2.  Run the deploy script:
    ```bash
    npm run deploy
    ```
    This will build the project and push the `dist` folder to the `gh-pages` branch.

## License

This project is open-source and available under the [MIT License](LICENSE).
