---

# To-Do List App

This is a simple web application for managing tasks. It allows users to add tasks, categorize them, and view them based on categories using tabs. The app uses Firebase Firestore for data storage.

## Files

### `index.html`

This file contains the structure and layout of the web application. It includes HTML markup for the task list, form for adding tasks, tabs for categorization, and imports the necessary CSS and JavaScript files.

### `styles.css`

This file contains the styles for the web application. It provides visual enhancements such as font styles, colors, layout adjustments, and other design elements to make the application more user-friendly and appealing.

### `app.js`

This file handles Firebase integration and task management functionality. It initializes Firebase with project credentials, defines functions to interact with Firestore for adding and displaying tasks, and attaches event listeners to handle form submissions.

## Getting Started

To use this application:

1. Clone the repository to your local machine.
2. Replace the placeholder Firebase project credentials in `app.js` with your actual Firebase project credentials.
3. Open `index.html` in a web browser to view and use the application.

## Firebase Configuration

To obtain your Firebase project credentials:

1. Go to the Firebase Console: [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Select your project or create a new one.
3. Navigate to Project settings > General > Your apps.
4. Copy the Firebase configuration object from the provided code snippet and replace the placeholders in `app.js`.

## Contributors

- [felasher](https://github.com/felasher)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README file according to your project's specific details and requirements. You can add additional sections, such as features, future enhancements, troubleshooting, etc., as needed.
