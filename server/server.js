const http = require("http");

// Change the data as per your need
const data = {
    "name": "Prabhat Ranjan",
    "age": 31,
    "occupation": "Student"
};

const server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.write(JSON.stringify(data));
  response.end();
});
server.listen(9000, () => {
  console.log("Server is running on Port 9000");
});
