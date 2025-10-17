# Product Page - Next.js & Medusa Integration

## Project Overview

This project implements a Product page according to the provided Figma design using **Next.js**, **TypeScript**, and **TailwindCSS**, integrated with a **Medusa** backend.

The repository includes two main parts:

- **Medusa** – backend system
- **Next.js** – frontend application

### Key Features Implemented

- Display product information on the Product page
- Add selected product variants to the cart
- Display cart item count in the header
- Manage product variants (materials and colors) via the Medusa Admin panel
- Display color options using a color picker with a hardcoded mapping of color names to HEX values

## Setup and Running the Project

### Medusa (Backend)

1. Install dependencies:

   ```
   npm install
   ```

2. Start the Medusa server:

   ```
   npx medusa develop
   ```

3. Access the Medusa Admin panel to manage products, variants, and pricing:
   http://localhost:9000/app

### Next.js (Frontend)

1. Install dependencies:

   ```
   npm install
   ```

2. Start the development server:

   ```
   npm run dev
   ```

3. Open the application in your browser:
   http://localhost:8000

## Estimated Development Time

The project was completed in approximately 4-5 days.

## Challenges and Notes

- Being my first experience with Medusa, the initial setup required extra time to get familiar with the documentation.
- At first, I could not understand why changes made in the Medusa Admin panel were not showing in the frontend. After reviewing the code, I realized it was due to caching (force-cache vs no-store). Setting the fetch to no-store solved the issue.
- Implementing the main product image at the top of the Product page required careful organization of multiple components to achieve the desired layout.

## Overall

I truly enjoyed working on this project and found it very rewarding to see the Product page come together. I'm glad I had the opportunity to participate in the process and gain experience working with Next.js, TailwindCSS, and Medusa!
