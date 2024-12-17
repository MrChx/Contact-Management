# RESTful API with Express, Prisma, and MySQL

This project is a RESTful API built using [Express.js](https://expressjs.com/), [Prisma ORM](https://www.prisma.io/), and [MySQL](https://www.mysql.com/). It provides a scalable and efficient way to interact with a database, allowing CRUD operations for various resources.

---

## Features
- **Fast and Lightweight**: Built with Express for high performance.
- **Database Abstraction**: Prisma ORM simplifies database interactions.
- **Structured and Scalable**: Designed with RESTful principles for maintainability.
- **Comprehensive API Documentation**: All endpoints are documented for easy reference.

---

## Getting Started

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MySQL](https://www.mysql.com/) (v8.0 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the environment:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DATABASE_URL="mysql://<username>:<password>@<host>:<port>/<database>"
     ```
   - Replace `<username>`, `<password>`, `<host>`, `<port>`, and `<database>` with your MySQL configuration.

4. Apply Prisma migrations:
   ```bash
   npx prisma migrate dev
   ```

5. Seed the database (optional):
   ```bash
   npx prisma db seed
   ```

### Running the Application
Start the development server:
```bash
npm run dev
```
The API will be available at `http://localhost:3000` (or the specified port in your `.env` file).

---

## API Documentation
Comprehensive API documentation is available at:
[THIS LINK](https://documenter.getpostman.com/view/38348317/2sAYJ1jMTD)

Explore detailed examples, request parameters, and response formats for all available endpoints.

---

## Project Structure
```
.
├── prisma                # Prisma schema and migrations
├── src                # Source files
│   ├── application       # Logging and call PrismaCLient
│   ├── controllers       # Route handlers
│   ├── error             # Error handlers
│   ├── middlewares       # Custom middleware
│   ├── routes            # API routes
│   ├── service           # Logic handlers
│   └── validation        # Model / validation
├── .env                  # Environment variables
├── package.json          # Node.js dependencies and scripts
└── README.md             # Project documentation
```

---

## Scripts
- **Start Development Server**: `npm run dev`
- **Run Prisma Migrations**: `npx prisma migrate dev`
- **Seed Database**: `npx prisma db seed`
- **Generate Prisma Client**: `npx prisma generate`

---

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

Happy coding! 🚀

