# Advanced User Authentication Web Application

A full-stack web application built with **React** (frontend) and **Django** (backend) that implements advanced user authentication and authorization features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Authentication Flow](#authentication-flow)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This project demonstrates a modern approach to user authentication in a full-stack web application. It combines a React-based frontend with a Django REST API backend to provide a secure, scalable [...]

## ✨ Features

- **User Registration & Login**: Secure user account creation and authentication
- **Token-Based Authentication**: JWT or session-based authentication for API requests
- **Password Management**: Secure password storage and reset functionality
- **User Profiles**: User profile management and updates
- **Role-Based Access Control**: Different permission levels for users
- **Secure API**: CORS-enabled, CSRF protection, and secure headers
- **Responsive UI**: Modern, responsive React frontend
- **Error Handling**: Comprehensive error handling and validation

## 🛠 Tech Stack

### Frontend
- **React** - UI library
- **npm** - Package manager
- **Create React App** - Build tooling

### Backend
- **Django** - Web framework
- **Django REST Framework** - API development
- **Python** - Programming language

### Database
- **SQLite** or **PostgreSQL** (configurable)

## 📁 Project Structure

```
Advanced-User-Authentication-Web-Application/
├── README.md
├── react-django-FullStackwithAuth-main/
│   ├── frontend/                 # React application
│   │   ├── public/
│   │   ├── src/
│   │   ├── package.json
│   │   └── README.md
│   └── backend/                  # Django application
│       ├── manage.py
│       ├── requirements.txt
│       └── [Django project files]
└── react-django-FullStackwithAuth-main.zip  # Archived project file
```

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **Python** (v3.8 or higher) - [Download](https://www.python.org/)
- **pip** - Python package manager (comes with Python)
- **Git** - [Download](https://git-scm.com/)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/giridharappidi/Advanced-User-Authentication-Web-Application.git
cd Advanced-User-Authentication-Web-Application
```

### 2. Backend Setup (Django)

Navigate to the backend directory:

```bash
cd react-django-FullStackwithAuth-main/backend
```

Create a virtual environment:

```bash
# On Windows
python -m venv venv
venv\Scripts\activate

# On macOS/Linux
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

> Note: A `requirements.txt` file has been added at `react-django-FullStackwithAuth-main/backend/requirements.txt`. Consider pinning dependency versions for reproducible installs.

### 3. Frontend Setup (React)

Navigate to the frontend directory:

```bash
cd ../frontend
```

Install dependencies:

```bash
npm install
```

## ⚙️ Configuration

### Backend Configuration (environment variables)

This project uses python-decouple to load secrets and configuration from a `.env` file in the backend directory. Create a file at `react-django-FullStackwithAuth-main/backend/.env` (do NOT commit this file).

Example `backend/.env` (DO NOT commit):

```
SECRET_KEY=django-insecure-_siwt+jp_s&ph&-1c#!kgw)aff=$tgk%ie*9kam+(=s9m8--e&
DEBUG=True
DB_NAME=bharathsql
DB_USER=postgres
DB_PASSWORD=your_new_rotated_password
DB_HOST=localhost
```

Important:
- Ensure `backend/.env` is listed in `.gitignore` — do not commit secrets.
- Rotate the SECRET_KEY and DB_PASSWORD if they were previously exposed.
- For production set `DEBUG=False` and populate `ALLOWED_HOSTS` in `backend/settings.py`.
- For production secrets, consider using a secret manager (Vault, environment variables in your deployment platform) rather than committing or storing them in source control.

The Django settings are configured to use `python-decouple` (the project reads values via `config('...')`). If you prefer to use environment variables instead of a `.env` file, export them in your shell before running the server.

### Run migrations

With your virtualenv activated and `.env` configured, run:

```bash
cd react-django-FullStackwithAuth-main/backend
python manage.py migrate
```

### Frontend Configuration

1. Create a `.env` file in the frontend directory (if needed):
```
REACT_APP_API_URL=http://localhost:8000/api
```

## ▶️ Running the Application

### Start the Backend Server

```bash
cd react-django-FullStackwithAuth-main/backend
python manage.py runserver
```

The backend will run on `http://localhost:8000`

### Start the Frontend Development Server

In a new terminal:

```bash
cd react-django-FullStackwithAuth-main/frontend
npm start
```

The frontend will run on `http://localhost:3000`

### Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin

## 🔐 Authentication Flow

1. User registers with email and password
2. Backend creates user account and returns authentication token
3. Frontend stores token in secure storage (localStorage/sessionStorage)
4. Subsequent API requests include token in Authorization header
5. Backend validates token and processes request
6. User can logout to clear token and session

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register/` - Register new user
- `POST /api/auth/login/` - Login user
- `POST /api/auth/logout/` - Logout user
- `POST /api/auth/refresh/` - Refresh authentication token

### Users
- `GET /api/users/profile/` - Get user profile
- `PUT /api/users/profile/` - Update user profile
- `POST /api/users/change-password/` - Change password

## 🧪 Testing

### Frontend Tests

```bash
cd react-django-FullStackwithAuth-main/frontend
npm test
```

### Build for Production

```bash
cd react-django-FullStackwithAuth-main/frontend
npm run build
```

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact & Support

For questions or support, please open an issue on the [GitHub repository](https://github.com/giridharappidi/Advanced-User-Authentication-Web-Application/issues).

---

**Happy coding!** 🎉
