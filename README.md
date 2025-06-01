# Candidate Search React App

A small React/Vite single‐page application that lets you browse GitHub users and “save” interesting candidates into local storage. Built with Vite, TypeScript, and React Router, this app fetches random GitHub profiles, displays one at a time, and allows you to either skip or save each candidate. Saved candidates are then viewable in a separate “Potential Candidates” table.

---

## Table of Contents

1. [Demo](#demo)  
2. [Features](#features)  
3. [Screenshots](#screenshots)  
4. [Getting Started](#getting-started)  
   1. [Prerequisites](#prerequisites)  
   2. [Installation](#installation)  
   3. [Environment Variables](#environment-variables)  
   4. [Running Locally](#running-locally)  
5. [Project Structure](#project-structure)  
6. [Available Scripts](#available-scripts)  
7. [Technologies Used](#technologies-used)  
8. [Folder-by-Folder Explanation](#folder-by-folder-explanation)  
9. [Routing & Navigation](#routing--navigation)  
10. [Styling](#styling)  
11. [License](#license)  
12. [Contact](#contact)  

---

## Demo

Below is a quick walkthrough of how the app behaves:

1. **Candidate Search**  
   - Upon load, the app fetches a random batch of GitHub users.  
   - You see one candidate at a time: avatar, username, name (if available), location, email, company, bio, and a link to their GitHub profile.  
   - Two buttons sit below each candidate:  
     - A red “–” button to skip this candidate (loads the next one).  
     - A green “+” button to save this candidate (stores them in `localStorage` and navigates to the “Potential Candidates” page).

2. **Potential Candidates (Saved Candidates)**  
   - All saved candidates are displayed in a dark‐themed, alternating‐row table.  
   - Columns: Image, Name, Location, Email (clickable mailto link), Company, Bio, and a red “–” button to remove a candidate from the saved list.  
   - Removing a candidate updates `localStorage` and immediately updates the table.

---

## Features

- **Fetch Live GitHub Profiles**  
  Retrieves a random batch of public GitHub users on each page load.

- **Single Candidate View**  
  Displays one user at a time in a card layout (avatar + details).

- **Skip & Save Functionality**  
  Two action buttons let you skip (go to next user) or save (persist to `localStorage`).

- **Saved Candidates Table**  
  A separate route (`/potentialcandidates`) lists all saved candidates in a styled table with the option to remove any.

- **React Router Integration**  
  Uses `react-router-dom` for client‐side routing between “Home” and “Potential Candidates.”

- **LocalStorage Persistence**  
  Saved candidates survive page reloads and browser restarts, stored in `localStorage`.

- **Responsive, Dark Themed Design**  
  Mobile‐first styling with a dark, alternating‐row table, centered card layout, and clear call‐to‐action buttons.

---

## Screenshots

### Candidate Search Page

![Candidate Search Screenshot](./screenshots/candidate-search.png)

### Potential Candidates (Saved Candidates) Page

![Potential Candidates Screenshot](./screenshots/saved-candidates.png)

---

## Getting Started

### Prerequisites

- **Node.js ≥ 14.x** (includes npm)  
- A **GitHub Personal Access Token** (classic) with **`read:user`** scope (public profile data).  
  - Create one at [github.com/settings/tokens](https://github.com/settings/tokens).

### Installation

1. **Clone this repository**  
   ```bash
   git clone https://github.com/your‐username/13‐candidate‐search.git
   cd 13‐candidate‐search