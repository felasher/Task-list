// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNUj_iZbMprHuVjkMztXoq9MGk68yTPCs",
    authDomain: "e-pharm-8b5fe.firebaseapp.com",
    projectId: "e-pharm-8b5fe",
    storageBucket: "e-pharm-8b5fe.appspot.com",
    messagingSenderId: "1071736259061",
    appId: "1:1071736259061:web:6b273ee779f298aadae0bc",
    measurementId: "G-9REWMGZR65"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Reference to the task list
const taskList = document.getElementById('task-list');

// Function to add a task to Firestore
function addTaskToFirestore(task) {
    return db.collection("tasks").add({
        task: task
    });
}

// Function to display tasks on the webpage
function displayTasksFromFirestore() {
    taskList.innerHTML = ''; // Clear existing tasks
    db.collection("tasks").onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const task = doc.data().task;
            const li = document.createElement('li');
            li.textContent = task;
            taskList.appendChild(li);
        });
    }, (error) => {
        console.error("Error getting tasks: ", error);
    });
}

// Event listener for adding a new task
document.getElementById('add-todo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = document.getElementById('new-todo');
    const task = taskInput.value.trim();
    if (task !== '') {
        addTaskToFirestore(task)
            .then(() => {
                taskInput.value = ''; // Clear input field after adding task
            })
            .catch((error) => {
                console.error("Error adding task: ", error);
            });
    }
});

// Display tasks on page load
displayTasksFromFirestore();
