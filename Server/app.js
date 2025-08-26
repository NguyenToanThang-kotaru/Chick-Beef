const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // 👈 thêm
const userRoutes = require('./src/routes/user.routes');

const app = express();
app.use(bodyParser.json());

// bật cors cho tất cả origin
app.use(cors());

// routes
app.use('/api/users', userRoutes);

// start server
const PORT = 3700;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy ở http://localhost:${PORT}`);
});
