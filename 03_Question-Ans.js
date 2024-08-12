// The same-origin policy is a security measure implemented by web browsers to prevent scripts on one origin (domain) 
// from interacting with resources on a different origin. This policy is crucial in protecting sensitive data and preventing 
// certain types of attacks, such as cross-site request forgery (CSRF) and cross-site scripting (XSS).


// An origin is defined by the combination of:
// Protocol (e.g., http, https)
// Domain (e.g., example.com)
// Port (if specified, e.g., :8080)
// For example, the URL https://www.example.com:8080/page 


// Working Around the Same-Origin Policy:-

// 1. CORS (Cross-Origin Resource Sharing):-
//     What is CORS?:-
//       CORS is a mechanism that allows restricted resources on a web server to be requested from another domain outside 
//       the domain from which the first resource was served.

//     How to Implement?:-
//       The server must include specific HTTP headers to indicate that it allows cross-origin requests.
//       Access-Control-Allow-Origin: *
//       Access-Control-Allow-Methods: GET, POST, PUT, DELETE
//       Access-Control-Allow-Headers: Content-Type

//     Example:-
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://api.example.com/data', true);
//     xhr.onload = function() {
//        if (xhr.status === 200) {
//         console.log(xhr.responseText);
//        } else {
//         console.error('Error fetching data');
//        }
//     };
//     xhr.send();


//  2. JSONP (JSON with Padding):
//        What is JSONP?:-
//           JSONP is a technique that allows web pages to overcome the same-origin policy by exploiting the fact that 
//           <script> tags are not subject to the same-origin policy.

//        How to Implement?:-  
//           The server wraps the JSON response in a callback function. The client includes a <script> tag that calls 
//           this function.

//         Example:-
//         <script>
//            function handleResponse(data) {
//            console.log(data);
//         }
//         </script>
//         <script src="https://api.example.com/data?callback=handleResponse"></script>


//  3. Proxy Server:-
//         What is a Proxy Server?:-
//             A proxy server acts as an intermediary between the client and the server. The client makes a request to the 
//             proxy, which then makes the request to the desired resource, fetches the data, and sends it back to the client.

//         How to Implement?:-
//             Set up a server-side proxy that forwards the request and response.

//         Example (Node.js/Express):-
//         const express = require('express');
//         const request = require('request');
//         const app = express();

//         app.get('/proxy', (req, res) => {
//             const url = 'https://api.example.com/data';
//             request(url).pipe(res);
//         });

//         app.listen(3000, () => {
//             console.log('Proxy server listening on port 3000');
//         });

//        var xhr = new XMLHttpRequest();
//        xhr.open('GET', '/proxy', true);
//        xhr.onload = function() {
//            if (xhr.status === 200) {
//             console.log(xhr.responseText);
//            } else {
//              console.error('Error fetching data');
//            }
//         };
//        xhr.send();



//  4. Using window.postMessage:-
//        What is window.postMessage?:
//            The window.postMessage method allows for safe cross-origin communication between Window objects. It can be 
//            used to communicate between an iframe and its parent window, or between two windows.

//         How to Implement?:-
//            The sending window calls postMessage and the receiving window listens for message events.

//         Example:
//         <iframe id="childFrame" src="https://example.com/child"></iframe>
//         <script>
//             var iframe = document.getElementById('childFrame');
//             window.addEventListener('message', function(event) {
//             if (event.origin === 'https://example.com') {
//             console.log('Received:', event.data);
//             }
//         });
//         iframe.contentWindow.postMessage('Hello, child frame!', 'https://example.com');
//        </script>

//        <script>
//           window.addEventListener('message', function(event) {
//              if (event.origin === 'https://yourdomain.com') {
//               console.log('Received:', event.data);
//               event.source.postMessage('Hello, parent frame!', event.origin);
//             }
//         });
//       </script>