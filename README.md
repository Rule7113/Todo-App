#To-Do Application (React + Vite + TypeScript)

A simple single-page To-Do application built with React (TypeScript) and styled-components, featuring CRUD operations and mock API integration.

This project demonstrates skills such as component design, state management, mock REST API handling, error handling, and responsive styling (mobile and desktop).

Features include:

1. View To-Dos — Display all tasks with title, description, and completion status

2. Add To-Do — Add new tasks with title + description

3. Edit To-Do — Update task details inline

4. Mark Complete — Toggle completion with a checkbox

5. Delete To-Do — Remove tasks from the list

6. Mock API Simulation — GET, POST, PUT, DELETE with fake delay

7. Loading & Error States — Simulates real-world network interactions

8. Responsive UI — Styled with styled-components for mobile & desktop

Project Structure
dist/                        # compiled version when checking for errors
src/
 |-- api/
 │    |-- mockapi.ts        # Simulated REST API
 |-- components/
 │    |-- todoform.tsx      # Form for adding tasks
 │    |-- todoitem.tsx      # Individual task item
 │    |-- todolist.tsx      # List of tasks
 |--styles/                 # These give colors and font form the page
      |-- global.ts
      |-- styled.d.ts
      |-- theme.ts
 |-- types/
 │    |--todo.ts            # TypeScript interfaces
 |-- App.tsx                # Main app container
 |-- main .tsx              # Entry point

Tech Stack
1. React (v18) with TypeScript
2. styled-components for styling

Installation & Setup

1. Clone the repository
   git clone https://github.com/Rule7113/todo-app-ts.git
   cd my-todo
2. Install dependencies
   npm install
3. Run the app
   npm run dev
4. open the browser at  ➜  Local:   http://localhost:5173/
