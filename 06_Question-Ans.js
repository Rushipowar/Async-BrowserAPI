//  Local Storage:-
//     Purpose:-
//        Persistent Storage: Data stored in localStorage is persistent across browser sessions, meaning it will remain 
//        available even after the browser is closed and reopened.
//        Key-Value Pair Storage: Allows storing key-value pairs where both the key and value are strings.
//        Capacity: Typically offers around 5-10MB of storage space per origin (domain).

//     Usage:-
//         Storing User Preferences: Ideal for saving user settings, themes, or language preferences that should be 
//         retained between visits.
//         Caching Data: Cache data that doesn't change often, like application settings or static content.

// Example:-
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>LocalStorage Example</title>
// </head>
// <body>
//     <button id="theme-toggle">Toggle Theme</button>
//     <script>
//         // Check if a theme preference is stored
//         const storedTheme = localStorage.getItem('theme');
//         if (storedTheme) {
//             document.body.classList.add(storedTheme);
//         }

//         const button = document.getElementById('theme-toggle');
//         button.addEventListener('click', () => {
//             // Toggle between light and dark themes
//             document.body.classList.toggle('dark-theme');

//             // Store the user's preference
//             if (document.body.classList.contains('dark-theme')) {
//                 localStorage.setItem('theme', 'dark-theme');
//             } else {
//                 localStorage.setItem('theme', 'light-theme');
//             }
//         });
//     </script>
// </body>
// </html>







// Session Storage:- 
//     Purpose:-
//        Temporary Storage: Data stored in sessionStorage is only available for the duration of the page session. 
//        Once the browser tab is closed, the data is cleared.
//        Key-Value Pair Storage: Similar to localStorage, it stores data as key-value pairs where both are strings.
//        Capacity: Similar storage limits as localStorage, typically around 5MB per origin.

//     Usage:-
//        Transient State Management: Ideal for data that only needs to persist while the user is on the page, such as 
//        form data in a multi-step process.
//        Page-Specific Data: Useful for information that shouldn't persist beyond the current session, like shopping cart 
//        contents or temporary filters.

// Example:-
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>SessionStorage Example</title>
// </head>
// <body>
//     <form id="user-form">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name">
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email">
//         <button type="submit">Submit</button>
//     </form>

//     <script>
//         const form = document.getElementById('user-form');
//         const nameInput = document.getElementById('name');
//         const emailInput = document.getElementById('email');

//         // Restore data if available
//         const storedName = sessionStorage.getItem('name');
//         const storedEmail = sessionStorage.getItem('email');
//         if (storedName) nameInput.value = storedName;
//         if (storedEmail) emailInput.value = storedEmail;

//         // Save input values on change
//         nameInput.addEventListener('input', () => {
//             sessionStorage.setItem('name', nameInput.value);
//         });

//         emailInput.addEventListener('input', () => {
//             sessionStorage.setItem('email', emailInput.value);
//         });

//         // Clear storage on form submission
//         form.addEventListener('submit', () => {
//             sessionStorage.removeItem('name');
//             sessionStorage.removeItem('email');
//         });
//     </script>
// </body>
// </html>
