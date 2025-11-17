// Vulnerable authentication example
const express = require('express');
const app = express();

app.use(express.json());

// SQL Injection vulnerability
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // VULNERABLE: Direct string concatenation in SQL query
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  // This allows attacks like: username: admin'--
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
