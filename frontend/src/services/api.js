import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001',
})

export default api;


// var http = require('http');

// var options = {
//     'method': 'POST',
//     'hostname': 'localhost',
//     'path': '/sessions',
//     'headers': {
//         'Content-Type': 'application/json'
//     }
// };

// var req = http.request(options, function (res) {
//     var chunks = [];

//     res.on("data", function (chunk) {
//         chunks.push(chunk);
//     });

//     res.on("end", function (chunk) {
//         var body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });

//     res.on("error", function (error) {
//         console.error(error);
//     });
// });

// var postData = "{\n\t\"email\":\"matheus@gmail.com\"\n}";

// req.write(postData);

// req.end();