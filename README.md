# Unfollow Finder - Instagram Follow Back Checker

Welcome to **Unfollow Finder**! This web application helps you identify who you follow on Instagram but who aren't following you back. Designed with a focus on privacy and security, **Unfollow Finder** processes your data **without requiring access to your Instagram account or login credentials**. This project is a showcase of my front-end development skills.

**Note:** This project is currently under development, and some features might still be in progress. It's part of a personal showcase of my front-end development skills.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Usage](#usage)

## Features
- **Secure and Private**: No need for Instagram login. Just upload your data file.
- **Quick Analysis**: Instantly see who doesn't follow you back.
- **Simple UI**: User-friendly interface for a seamless experience.
- **Data Protection**: Your data is processed and deleted immediately after use.

## Tech Stack
- **Frontend**: [Next.js](https://nextjs.org/) for server-side rendering and static site generation.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for modern and responsive design.
- **File Handling**: Python File APIs to parse and analyze Instagram data.
- **Deployment**: Hosted on [Vercel](https://vercel.com/) for high performance and reliability.

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/)

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/gamassss/unfollow-finder.git
    ```
2. Navigate into the project directory:
    ```bash
    cd unfollow-finder
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the App
To start the development server:
```bash
npm run dev
```

Visit http://localhost:3000 to view the app in your browser.

## Folder Structure

```bash
unfollow-finder/
├── public/           # Static assets
├── src/
│   ├── app/          # Next.js pages
│   ├── components/   # Reusable UI components
├── .gitignore
├── README.md
├── package.json
└── next.config.mjs    # Next.js configuration
└── tailwind.config.ts # TailwindCSS configuration
```

## Usage
1. Download your Instagram followers data file.
2. Upload the file on Unfollow Finder.
3. Instantly view the list of users you're following who don't follow you back.
