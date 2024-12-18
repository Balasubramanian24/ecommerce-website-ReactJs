const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const { Pool } = require('pg');



const app = express();
const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'shopcartlogin',
    password: '12345',
    port: 5432,
})


app.use(cors());
app.use(express.json());


//signup route

app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id',
            [username, email, hashedPassword]
        );
        res.status(201).json({message: 'User Created Succesfully', userId: result.rows[0].id});
    } catch(err) {
        res.status(400).json({ error: 'Email or Username already Exists..'});
    }
});


//Login Route

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [ email ]);
        if(result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid Credentials..'});
        }

        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid Credentials...'});
        }

        const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({ message: 'Login Successful', token });
    } catch (err) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.listen(3000, () => console.log('Server running on port 3000'));