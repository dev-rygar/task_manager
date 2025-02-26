# Task Manager

## Overview

Task Manager is a front-end web application that enables users to efficiently manage their tasks. Built with modern web technologies, it offers a user-friendly interface for creating, viewing, and deleting tasks, with data persistence achieved through local storage.

## Features

- **Add Tasks**: Users can input and add new tasks to the list.
- **View Tasks**: Displays a list of all tasks stored in local storage.
- **Delete Tasks**: Allows users to remove tasks from the list.

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Build Tool**: Vite
- **Code Quality**: ESLint

## Best Practices Applied

- **Modular Code Structure**: Organized code into reusable modules for maintainability.
- **Local Storage Utilization**: Implemented local storage to persist tasks between sessions.
- **Form Validation**: Ensured that users cannot add empty tasks.
- **Responsive Design**: Applied CSS to ensure the application is usable on various device sizes.
- **Code Linting**: Integrated ESLint to maintain code quality and consistency.

## Future Features

- **Task Categories**: Group tasks under different categories (e.g., Work, Personal, Urgent).
- **Task Prioritization**: Allow users to set task priority levels (High, Medium, Low).
- **Due Dates & Reminders**: Enable users to set due dates and receive notifications.
- **Drag-and-Drop Support**: Reorder tasks by dragging them into place.
- **Dark Mode**: Provide a toggle for dark/light mode.
- **Cloud Sync**: Store tasks in the cloud for access across devices.

## Installation

To run this project locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/dev-rygar/task_manager.git
   cd task_manager
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   This will launch the application, and you can view it in your browser.

## Usage

- **Adding a Task**: Enter the task description in the input field and press 'Add Task'.
- **Deleting a Task**: Click the 'Delete' button next to the task you wish to remove.

All tasks are saved in the browser's local storage, so they persist even after refreshing the page.

## Contribution

Contributions are welcome! This project is a great opportunity for first-time contributors. To contribute:

1. **Fork the repository**.

2. **Create a new branch**:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**.

4. **Commit your changes**:

   ```bash
   git commit -m 'Add some feature'
   ```

5. **Push to the branch**:

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Open a pull request**.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Tag: Good first contribution**

