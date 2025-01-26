# Tailwind CSS JIT Mode Incomplete CSS Generation during SSR

This repository demonstrates a common issue encountered when using Tailwind CSS's JIT mode with server-side rendering (SSR) frameworks like Next.js or Nuxt.js. The problem arises because Tailwind attempts to generate the necessary CSS during the build process, which might be incomplete when the page initially renders on the server. This leads to missing styles during the initial page load.

## Problem
The `bug.js` file shows a Next.js component that uses Tailwind CSS classes.  When rendered, some styles might be missing initially.

## Solution
The `bugSolution.js` file demonstrates how to resolve the issue by ensuring that Tailwind CSS generates all required CSS before the server-side rendering is complete.  This typically involves using a suitable build process that compiles all Tailwind classes used in your application.

## Setup
1. Clone this repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`

Observe the difference in styling between the original and the solution.
