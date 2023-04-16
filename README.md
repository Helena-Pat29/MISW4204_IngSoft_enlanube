# MISW4204_FILE_COMPRESSION_SERVICE

This project provides a RESTful API for uploading, compressing, and downloading files. Users can sign up, log in, and manage their tasks for compressing files into various formats, such as ZIP, TAR.GZ, and TAR.BZ2.

## Prerequisites

- Docker
- Docker Compose

## Installation

1. Clone the repository: `git clone https://github.com/Helena-Pat29/MISW4204_IngSoft_enlanube.git`
2. Give read and write permission to the `wait_for_postgres.sh` file, as we are MAC user we run this command: `chmod +x wait_for_postgres.sh`, in case you are a windows user, please find the equivalent way to do it
3. Build and run the project using Docker Compose: `docker-compose up -d --build`

## Usage

Keep in mind we configure gunicorn and Ngix, so the application will be running in `http://localhost:8000`

Also take advantage of the Postman collections and tests we run: 
### Postman Collection

A Postman collection is available in the `postman` folder. To import the collection, follow these steps:

1. Open Postman.
2. Click on the "Import" button located in the top left corner.
3. Choose the "File" tab and click "Choose Files" or drag and drop the JSON file.
4. Select the `postman/File_compressed.postman_collection.json` file from the GitHub project folder.
5. Click "Import".

You should now see the imported collection in Postman, and you can use it to interact with the API.

### Sign Up

To create a new user, send a `POST` request to `http://localhost:8000/api/auth/signup` with the following JSON payload:

```json
{
"username": "your_username",
"password1": "your_password",
"password2": "your_password",
"email": "your_email@example.com"
}
```
## Log In
To log in, send a POST request to `http://localhost:8000/api/auth/login` with the following JSON payload:

```json
{
    "username":"your_username",
    "password":"your_password"
}
```
Get the Bearer token from the reponse.

## Create a Task
To create a new task, send a POST request to `http://localhost:8000/api/tasks` with the Authorization: Bearer your_token header and a Content-Type: multipart/form-data payload, including the file and the desired output format:
```http
POST /tasks HTTP/1.1
Host: your_host
Authorization: Bearer your_token
Content-Type: multipart/form-data

Content-Disposition: form-data; name="fileName"; filename="your_file.ext"
Content-Type: application/octet-stream

...your_file_contents...
Content-Disposition: form-data; name="newFormat"
Content-Type: text/plain

ZIP
```

## Get Tasks
To retrieve a list of tasks, send a GET request to `http://localhost:8000/api/tasks` with the Authorization: Bearer your_token header. Optionally, you can include query parameters for max (maximum number of results) and order (0 for ascending, 1 for descending).

```http
GET /tasks?max=10&order=1 HTTP/1.1
Host: your_host
Authorization: Bearer your_token
```

## Get Task by ID
To retrieve a task by ID, send a GET request to `http://localhost:8000/api/tasks/{id}` with the Authorization: Bearer your_token header.

```http
GET /tasks/1 HTTP/1.1
Host: your_host
Authorization: Bearer your_token
```

## Delete Task
To delete a task, send a DELETE request to `http://127.0.0.1:5000/api/tasks/{id}` with the Authorization: Bearer your_token header.

```http
DELETE /tasks/1 HTTP/1.1
Host: your_host
Authorization: Bearer your_token
```

## Download File
To download a file, send a GET request to `http://localhost:8000/api/files/{filename}` with the Authorization: Bearer your_token header.

```http
GET /files/your_file.ext HTTP/1.1
Host: your_host
Authorization: Bearer your_token
```
