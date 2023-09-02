# LibraTech: Library Management System

## Introduction
LibraTech is a comprehensive Library Management System developed for this interview project. This system empowers users to explore and order books from three different categories: Sci-Fi, Fiction, and Comedy etc. To access these categories and place book orders, users need to be logged in. LibraTech consists of two main components: the front-end, built using React with Material UI, and the back-end, developed using Django Rest Framework. In this README, we'll delve into the details of each component and provide a brief overview of the project.

## Table of Contents
1. [Book Categories](#book-categories)
2. [Customer User Table](#customer-user-table)
3. [Front-End (React using Material UI)](#front-end)
4. [Back-End (Django using Django Rest Framework)](#back-end)
5. [Getting Started](#getting-started)
6. [Contributing](#contributing)
7. [License](#license)

## Book Categories
The Library Management System features three exciting categories of books:

### Sci-Fi
- The Lost World
- Dune

### Fiction
- Alchemist
- Brave New World

### Comedy
- Champak
- Tenaliraman

## Customer User Table
The system maintains user information in a customer user table with the following fields:
- Name
- Phone
- Email
- Address
- College

Only users who are logged in can access the book categories and place orders.

## Front-End (React using Material UI)
The front-end is developed using React and Material UI and offers a user-friendly interface for interacting with the Library Management System. Key features include:

- **User Signup Form:** Implemented using Formik and Yup validation for a seamless signup process.
- **Consumption of Django REST API:** Utilizes Redux Toolkit to communicate with the Django back-end, ensuring smooth data retrieval and updates.
- **Dashboard:** Provides two main dashboards:
  - *User Dashboard:* Displays users with assigned books.
  - *All Books Dashboard:* Allows users to explore all available books in a single, convenient page.

## Back-End (Django using Django Rest Framework)
The back-end is built using Django Rest Framework and offers a robust foundation for the Library Management System. Notable functionalities include:

- **User Authentication:** Utilizes Simple JWT token-based authentication to secure user access.
- **API Endpoints:** Provides well-defined endpoints for user management, book categories, and orders, ensuring seamless interaction between the front-end and back-end.

## Getting Started
To get started with LibraTech, follow the installation instructions provided in the project's documentation.

## Contributing
We welcome contributions from the community. If you'd like to contribute to LibraTech, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License
This project is licensed under the [MIT License](LICENSE).

---

Thank you for your interest in LibraTech, the Library Management System. We hope this README provides a clear overview of the project's components and functionalities. If you have any questions or need further assistance, please don't hesitate to contact us. Happy reading!
