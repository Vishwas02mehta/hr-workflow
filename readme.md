# HR Workflow Designer

## Overview

HR Workflow Designer is a mini visual tool that allows users to create, configure, and simulate HR workflows such as onboarding, approvals, and automated actions.

The application focuses on **clean architecture, modular design, and interactive UI**, rather than backend complexity.

---

## Features

### Workflow Canvas

* Drag and drop nodes onto the canvas
* Supported node types:

  * Start Node
  * Task Node
  * Approval Node
  * Automated Node
  * End Node
* Connect nodes using edges
* Move and organize nodes visually

---

### Node Configuration Panel

* Dynamic form updates based on selected node
* Task Node:

  * Title
  * Assignee
* Start / End Nodes:

  * Basic configuration fields

---

### Workflow Simulation

* Run workflow using **"Run Workflow" button**
* Displays step-by-step execution:

Example:
Step 1: Start
Step 2: Task → Rahul
Step 3: End → Completed

---

### State Management

* Global state handled using Zustand
* Centralized control for nodes, edges, and selected node

---

## Tech Stack

* React (Vite)
* React Flow (for graph UI)
* Zustand (state management)
* JavaScript (ES6+)

---

## Architecture

The project follows a modular and scalable structure:

src/
├── components/
│    ├── Canvas.jsx
│    ├── Sidebar.jsx
│    ├── ConfigPanel.jsx
│    ├── SimulationPanel.jsx
│
├── store/
│    └── useStore.js
│
├── api/
│    └── mockApi.js

### Key Design Choices:

* Separation of UI, state, and logic
* Reusable components
* Easy to extend with new node types
* Clean and readable code structure

---

## How to Run Locally

1. Install dependencies:
   npm install

2. Start development server:
   npm run dev

3. Open in browser:
   http://localhost:5173

---

## Design Decisions

* Focused on **working prototype over pixel-perfect UI**
* Used React Flow for efficient graph handling
* Zustand chosen for lightweight state management
* Modular design for scalability and maintainability

---

## Limitations

* No backend or database persistence
* Basic workflow simulation (not full execution engine)
* Limited validation rules
* No authentication

---

## Future Improvements

* Save / Load workflows (JSON export/import)
* Advanced validation (cycles, missing links)
* Auto-layout of nodes
* Undo / Redo functionality
* Better UI/UX and animations
* Real API integration

---

## ✅ Conclusion

This project demonstrates:

* Strong React fundamentals
* Clean frontend architecture
* Graph-based UI implementation using React Flow
* Dynamic forms and state handling

It fulfills the core requirements of a functional HR workflow designer prototype.
