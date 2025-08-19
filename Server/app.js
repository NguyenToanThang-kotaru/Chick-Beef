const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes');

const app = express();
app.use(bodyParser.json());

// routes
app.use('/api/users', userRoutes);

// start server
const PORT = 3700;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy ở http://localhost:${PORT}`);
});
3