const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export async function loginAPI(email, password) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json(); // Returns { token: "...", user: {...} }
}

export async function signupAPI(email, password) {
  const res = await fetch(`${API_URL}/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error('Signup failed');
  return res.json(); // Your backend should return { success: true/false }
}

export async function verifyTokenAPI(token) {
  const res = await fetch(`${API_URL}/verify-token`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Invalid token');
  return res.json(); // should return user data if valid
}
