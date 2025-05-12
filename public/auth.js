// Register Form Handler
document.getElementById('registerForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('registerUsername').value;
  const password = document.getElementById('registerPassword').value;
  const errorElement = document.getElementById('registerError');

  errorElement.textContent = '';

  try {
    const response = await fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Registration failed');

    alert(data.message);
    document.getElementById('registerForm').reset();
  } catch (err) {
    errorElement.textContent = err.message;
  }
});

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const errorElement = document.getElementById('loginError');

  errorElement.textContent = '';

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Login failed');

    alert(data.message);
    // Redirect or update UI after successful login
  } catch (err) {
    errorElement.textContent = err.message;
  }
});