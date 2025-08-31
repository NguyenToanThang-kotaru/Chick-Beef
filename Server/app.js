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
const roleRoutes = require('./src/routes/role.routes')
const productRoutes = require('./src/routes/product.routes')
const tableRoutes = require('./src/routes/table.routes')
const recipeRoutes = require('./src/routes/recipe.routes')
const customerRoutes = require('./src/routes/customer.routes')
const supplierRoutes = require('./src/routes/supplier.routes')
const importRoutes = require('./src/routes/import.routes')
const paymentRoutes = require('./src/routes/payment.routes')

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

app.use('/api/role', roleRoutes)

app.use('/api/product', productRoutes)

app.use('/api/table', tableRoutes)

app.use('/api/recipe', recipeRoutes)

app.use('/api/customer', customerRoutes)

app.use('/api/supplier', supplierRoutes)

app.use('/api/import', importRoutes)

app.use('/api/payment', paymentRoutes)

// start server
const PORT = 3700;
app.listen(PORT, () => {
  console.log(`Server chạy ở http://localhost:${PORT}`);
});
