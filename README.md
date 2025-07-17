# GitPrivy

Private Code Sharing & Technical Hiring Platform

## Overview

**GitPrivy** is a modern web application for secure, private code sharing and technical hiring. It enables developers and companies to share code assignments privately, track engagement, and streamline the hiring process—all with a beautiful, responsive UI.

## Features

- Private, non-discoverable code sharing links
- GitHub and email sign-in (waitlist with email validation)
- Animated landing page and stats
- Analytics dashboard for project engagement
- Assignment management for companies
- Candidate analytics and hiring insights
- Modern, responsive design (React + Vite)
- Waitlist system with email/IP logging

## Tech Stack

- React (with functional components & hooks)
- Vite (for fast development)
- Lucide React Icons
- Custom CSS (utility and component-based)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/gitprivy.git
   cd gitprivy/website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Project Structure

- `src/components/` — All major UI components (Navbar, Hero, Stats, Features, Pricing, Footer, WaitlistModal, etc.)
- `src/App.jsx` — Main app logic and state
- `src/App.css` — Global and component CSS
- `public/waitlist.json` — Waitlist data (JSON)
- `public/waitlist.txt` — Waitlist log (plain text)

## Waitlist System

When users try to sign in, a modal appears ("Work in Progress"). Users can join the waitlist with a valid, non-temporary email. Emails and IPs are stored in both JSON and TXT files in the `public` folder.

## Customization

- Update branding, colors, and content in `App.jsx` and `App.css` as needed.
- Add backend integration for production use (current waitlist is simulated for demo/local use).

## License

MIT License. See [LICENSE](LICENSE) for details.
