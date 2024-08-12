// 1. DOM (Document Object Model) API:-
//         Allows manipulation of HTML and XML documents. Developers can use it to create, delete, and modify elements, 
//         attributes, and content within the webpage.
//         Example: document.getElementById(), document.querySelector(), element.appendChild()

// 2. Fetch API:-
//     Enables making network requests to fetch resources such as data from servers. It provides a more powerful and 
//     flexible alternative to XMLHttpRequest.
//     Example: fetch('https://api.example.com/data').then(response => response.json()).then(data => console.log(data));

// 3. Canvas API:-
//        Allows for drawing and manipulating graphics on a web page via the <canvas> element. It is used for rendering 2D 
//        shapes, images, and other graphical content.

//         Example:-
//            const canvas = document.getElementById('myCanvas');
//            const ctx = canvas.getContext('2d');
//            ctx.fillStyle = 'green';
//            ctx.fillRect(10, 10, 150, 100);


// 4. Web Storage API:-
//        Allows for storing and retrieving data from the browser's local storage. It is used to store key-value pairs

//         Example:-
//            localStorage.setItem('key', 'value');
//            const storedValue = localStorage.getItem('key');
//            localStorage.removeItem('key');
//            localStorage.clear();


// 5. Geolocation API:-
//         Provides access to the user's geographical location. It can be used to retrieve the latitude and longitude of 
//         the user.

//         Example:-
//           navigator.geolocation.getCurrentPosition(position => {
//             console.log(position.coords.latitude, position.coords.longitude);
//           });


// 6. WebSocket API:
//        Provides a way to open a persistent connection between the browser and a server, enabling real-time communication.

//        Example:-
//          const socket = new WebSocket('ws://example.com/socket');
//          socket.onmessage = event => {
//              console.log(event.data);
//          };



