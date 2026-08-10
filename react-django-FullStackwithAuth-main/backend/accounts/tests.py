from rest_framework.test import APITestCase
from rest_framework import status
from django.contrib.auth.models import User

class AuthTests(APITestCase):
    def test_register_user(self):
        response = self.client.post('/api/accounts/register/', {
            'username': 'testuser', 'email': 'test@example.com', 'password': 'StrongPass123'
        })
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_login_with_valid_credentials(self):
        User.objects.create_user(username='testuser', email='test@example.com', password='StrongPass123')
        response = self.client.post('/api/accounts/token/', {
            'email': 'test@example.com', 'password': 'StrongPass123'
        })
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertIn('access', response.data)

    def test_login_with_invalid_credentials(self):
        response = self.client.post('/api/accounts/token/', {
            'email': 'nouser@example.com', 'password': 'wrong'
        })
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
