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

This project demonstrates a modern approach to user authentication in a full-stack web application. It combines a React-based frontend with a Django REST API backend to provide a secure, scalable, and production-ready authentication system.

## ✨ Features

- **User Registration & Login**: Secure user account creation and authentication
- **Token-Based Authentication**: JWT authentication for API requests
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
- **SQLite** (development) or **PostgreSQL** (production)

## 📁 Project Structure

```
Advanced-User-Authentication-Web-Application/
├── README.md                              # Project documentation
├── .gitignore                             # Git ignore rules
├── backend/                               # Django backend
│   ├── backend/                           # Django project settings
│   │   ├── settings.py                    # Django settings
│   │   ├── urls.py                        # URL routing
│   │   ├── wsgi.py                        # WSGI config
│   │   └── __init__.py
│   ├── accounts/                          # User authentication app
│   │   ├── models.py
│   │   ├── views.py
│   │   ├── urls.py
│   │   └── ...
│   ├── manage.py                          # Django management script
│   ├── requirements.txt                   # Python dependencies
│   ├── .env.example                       # Environment variables template
│   ├── .gitignore                         # Backend-specific gitignore
│   ├── db.sqlite3                         # SQLite database (development)
│   └── pytest.ini                         # Pytest configuration
├── frontend/                              # React frontend
│   ├── public/                            # Static assets
│   ├── src/                               # React source code
│   │   ├── components/                    # React components
│   │   ├── pages/                         # Page components
│   │   ├── App.js                         # Main App component
│   │   └── index.js                       # Entry point
│   ├── package.json                       # NPM dependencies
│   ├── .env.example                       # Environment variables template
│   ├── .gitignore                         # Frontend-specific gitignore
│   └── README.md                          # Frontend documentation
└── react-django-FullStackwithAuth-main/   # Original archived structure (reference)
    └── [original project files]
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
cd backend
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

### 3. Frontend Setup (React)

Navigate to the frontend directory:

```bash
# From the project root
cd frontend
```

Install dependencies:

```bash
npm install
```

## ⚙️ Configuration

### Backend Configuration (environment variables)

This project uses `python-decouple` to load secrets and configuration from a `.env` file in the backend directory.

1. Create a `.env` file in the backend directory:

```bash
cd backend
cp .env.example .env
```

2. Edit `backend/.env` and configure your environment variables:

```dotenv
# Django Settings
SECRET_KEY=your-secret-key-here
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1

# CORS Settings
CORS_ALLOWED_ORIGINS=http://localhost:3000
CSRF_TRUSTED_ORIGINS=http://localhost:3000

# Database Configuration (SQLite for development, PostgreSQL for production)
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=5432
```

**Important Security Notes:**
- Ensure `backend/.env` is listed in `.gitignore` — **never commit secrets**
- Generate a strong `SECRET_KEY` using: `python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'`
- Rotate the `SECRET_KEY` and `DB_PASSWORD` if they were previously exposed
- For production, set `DEBUG=False` and properly configure `ALLOWED_HOSTS`
- For production secrets, use a secret manager (AWS Secrets Manager, HashiCorp Vault) instead of `.env` files

### Run Django Migrations

With your virtualenv activated and `.env` configured, run:

```bash
cd backend
python manage.py migrate
```

### Frontend Configuration

1. Create a `.env` file in the frontend directory:

```bash
cd frontend
cp .env.example .env
```

2. Configure your frontend environment:

```dotenv
REACT_APP_API_URL=http://localhost:8000/api
```

## ▶️ Running the Application

### Start the Backend Server

```bash
cd backend
python manage.py runserver
```

The backend will run on `http://localhost:8000`

### Start the Frontend Development Server

In a **new terminal**:

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

### Access the Application

Open your browser and navigate to:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000/api
- **Django Admin**: http://localhost:8000/admin (username: admin, password: set during superuser creation)

## 🔐 Authentication Flow

1. User registers with email and password via the React frontend
2. Backend validates credentials and creates user account
3. Backend returns JWT authentication tokens (access & refresh)
4. Frontend stores tokens in secure storage (localStorage/sessionStorage)
5. Subsequent API requests include token in Authorization header: `Authorization: Bearer <token>`
6. Backend validates token and processes request
7. User can logout to clear tokens and end session

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

### Backend Tests

```bash
cd backend
pytest
```

### Frontend Tests

```bash
cd frontend
npm test
```

### Build for Production

```bash
cd frontend
npm run build
```

The optimized build will be created in the `frontend/build` directory.

## 📝 Deployment

### Backend Deployment (Django)

For production deployment, consider:
- Using a production WSGI server (Gunicorn, uWSGI)
- Setting up a reverse proxy (Nginx)
- Using environment variables from your deployment platform
- Enabling HTTPS/SSL
- Setting `DEBUG=False`
- Configuring proper database (PostgreSQL)

### Frontend Deployment (React)

For production deployment, consider:
- Deploying the build folder to a CDN (Vercel, Netlify, GitHub Pages)
- Using environment variables for API endpoints
- Setting proper CORS headers in backend
- Using gzip compression

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### Django Issues
- **ModuleNotFoundError**: Ensure virtual environment is activated
- **Database errors**: Run `python manage.py migrate`
- **Port already in use**: Change port with `python manage.py runserver 8001`

### React Issues
- **Dependencies not installing**: Delete `node_modules` and `package-lock.json`, then `npm install`
- **API connection errors**: Check `REACT_APP_API_URL` in `.env`
- **CORS errors**: Verify `CORS_ALLOWED_ORIGINS` in Django settings

## 📝 License

This project is open source and available under the MIT License.

## 📧 Contact & Support

For questions or support, please:
1. Check existing [issues](https://github.com/giridharappidi/Advanced-User-Authentication-Web-Application/issues)
2. Create a new issue with detailed information
3. Include error messages, steps to reproduce, and your environment details

---

**Happy coding!** 🎉
