# NodeJS
Node.js is novel to me, but i will try my best

RESTful API: RESTful API (Representational State Transfer API) is an architecture designed for building scalable and interoperable web services.
1. Method:
Methods are the way an HTTP request interacts with a resource on the server. The most common methods are GET, POST, PUT, and DELETE.
For example:
GET: Retrieve information from a resource. For example: GET /users to get a list of users.
POST: Create a new resource. For example: POST /users to create a new user.
PUT: Update a resource or create a new one. For example: PUT /users/123 to update the information of user whose ID is 123.
DELETE: Delete a resource. For example: DELETE /users/123 to delete the user whose ID is 123.
2. Payload:
Payload is the data sent or transmitted in an HTTP request, commonly used in methods such as POST and PUT. This data is typically transmitted as JSON or XML.
For example:
POST: Transfer data to create a new user.
POST /users
{
  "name": "Khiet",
  "email": "khiet@gm.com",
  "age": 7
}
PUT: Pass data to update user information.
PUT /users/123
{
  "age": 8
}
3. Response:
The response is the information returned from the server after processing the request. It typically includes an HTTP status and data (usually in the form of JSON or XML).
For example:
200 OK: 
{
  "name": "Khiet",
  "email": "khiet@gm.com",
  "age": 7
}
404 Not Found:
{
  "error": "User not found"
}
4. Status:
Status is a code that represents the status of an HTTP request. The status code is included in the HTTP response.
200 OK: The request was successful.
201 Created: The resource has been created successfully.
204 No Content: The request was processed, but no data was returned. 
