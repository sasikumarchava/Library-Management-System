# Library-Management-System


# Library Management System

This is a simple Library Management System built using a microservices architecture with Java Spring Boot, React, MySQL, and Docker.

## Features
- Add a Book with Book ID, Title, Author, Genre, and Availability Status
- View All Books
- Search Books by ID or Title
- Update Book Details
- Delete a Book
- Manage Book Availability Status
- Deployable using Docker

---

## Technologies Used

### Backend (Spring Boot)
- Java Spring Boot
- Spring Data JPA
- MySQL
- Hibernate
- Spring Boot Validation

### Frontend (React)
- React.js
- Axios for API calls
- Tailwind CSS for styling

### Database
- MySQL

### Deployment
- Docker and Docker Compose

---

## Prerequisites

Make sure you have the following installed:
- Java 17 or later
- Maven
- Node.js and npm
- Docker and Docker Compose
- MySQL

---

## Project Structure

```bash
Library-Management-System/
├── backend/             # Spring Boot Application
│   ├── src/
│   ├── pom.xml
│   ├── Dockerfile
├── frontend/            # React Application
│   ├── src/
│   ├── public/
│   ├── Dockerfile
│   ├── package.json
├── docker-compose.yml
```

---

## Setup and Installation

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd Library-Management-System
```

### Step 2: Configure MySQL
- Start your MySQL server.
- Create a database named `librarydb`:
```sql
CREATE DATABASE librarydb;
```
- Update `backend/src/main/resources/application.properties` with your database credentials:
```properties
spring.datasource.url=jdbc:mysql://mysql:3306/librarydb
spring.datasource.username=root
spring.datasource.password=root
```

### Step 3: Build and Run using Docker

1. Build and start the services using Docker Compose:
```bash
docker-compose up --build
```

2. Check if the containers are running:
```bash
docker ps
```

### Step 4: Access the Application
- **Frontend UI**: `http://localhost`
- **Backend API**: `http://localhost:8080/api/books`
- **MySQL**: Connect on port `3306` using `root` and password `root`

---

## API Endpoints

### Book Management
- **GET /api/books**: View all books
- **GET /api/books/{id}**: Get book by ID
- **POST /api/books**: Add a new book
- **PUT /api/books/{id}**: Update book details
- **DELETE /api/books/{id}**: Delete a book

Example JSON for adding or updating a book:
```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "availabilityStatus": "Available"
}
```

---

## Stopping the Application
To stop all containers, run:
```bash
docker-compose down
```

---

## Troubleshooting
- Ensure MySQL is running without errors.
- Check logs using:
```bash
docker logs <container_name>
```
- Verify database connection using `docker exec`:
```bash
docker exec -it mysql_container mysql -u root -p
```

---

## License
This project is licensed under the MIT License.
