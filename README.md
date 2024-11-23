# Task Management App

## Project Description

This project is a **Task Management App** built using front-end JavaScript, with the following key features:

- Add, edit, and delete tasks.
- Drag-and-drop reordering of tasks.
- Filter tasks by status (all, pending, completed).
- Task data persisted using **local storage**.
- Lazy load task details with **Intersection Observer**.

The project also utilizes a CSS framework or preprocessor (Sass or Tailwind CSS) for styling.

## Technologies Used

- **JavaScript (ES6+)**: Handles dynamic behavior, DOM manipulation, and local storage.
- **CSS**: Styled using either Sass.
- **HTML5**: Basic structure and semantic elements.
- **Local Storage**: To persist data between page reloads.
- **Intersection Observer API**: Lazy load or animate tasks when they appear in the viewport.

## Features

- **Task Creation**: Add new tasks with descriptions.
- **Task Deletion**: Remove tasks from the list.
- **Drag-and-Drop**: Reorder tasks by dragging and dropping.
- **Task Filtering**: View all, pending, or completed tasks.
- **Responsive Design**: Mobile-first layout with responsive features.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/Mihiwa/tamap.git
   ```
2. Install necessary dependencies:
   ```bash
   npm install
   ```

### For Sass Users:

3. Run the Sass compiler:
   ```bash
   npm run sass
   ```

### For Tailwind CSS Users:

3. Build Tailwind CSS:
   ```bash
   npm run build
   ```

## Usage

1. Open `index.html` in your browser to view the app.
2. Start adding tasks, rearranging them, and filtering them by status.
3. Tasks will be saved locally in your browser’s **local storage**.

## License

This project is open source and available under the MIT License.
