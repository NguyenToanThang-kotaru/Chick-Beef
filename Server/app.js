require('dotenv').config();


const cookieParser = require("cookie-parser");
const express = require('express');
const cors = require('cors'); // 👈 thêm
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/user.routes');
const authRoutes = require('./src/routes/auth.routes');
const ingredientRoutes = require('./src/routes/ingredient.routes')
const invoiceRoutes = require('./src/routes/invoice.routes')
const employeeRoutes = require('./src/routes/employee.routes')

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:7777", // cho phép từ FE này
    credentials: true,               
  })
);

// routes
app.use('/api/users', userRoutes);

app.use('/api/auth', authRoutes);

app.use('/api/ingredient', ingredientRoutes)

app.use('/api/invoice', invoiceRoutes)

app.use('/api/employee', employeeRoutes)

// start server
const PORT = 3700;
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
