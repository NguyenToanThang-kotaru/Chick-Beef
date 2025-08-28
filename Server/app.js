require('dotenv').config();
const express = require('express');
const cors = require('cors'); // 👈 thêm
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes');
// const authRoutes = require('./src/routes/auth.routes');
const ingredientRoutes = require('./src/routes/ingredient.routes')

const app = express();
app.use(bodyParser.json());

// bật cors cho tất cả origin
app.use(cors());

// routes
app.use('/api/users', userRoutes);

// app.use('/api/auth', authRoutes);

app.use('/api/ingredient', ingredientRoutes)
// start server
const PORT = 3700;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy ở http://localhost:${PORT}`);
});
