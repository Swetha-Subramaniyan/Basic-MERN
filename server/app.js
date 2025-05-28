require('dotenv').config(); 
const express = require('express');
const app = express();
const axios = require('axios');
const cors =require('cors');
var morgan = require('morgan')

app.use(morgan('dev'))

app.use(express.json());

const corsOptions = {
  origin: `${process.env.REACT_APP_FRONTEND_URL}`,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use((req, res, next) => {
  console.log(`Request method: ${req.method}, URL: ${req.url}`);
  next();
});



const crudRoutes = require('./routes/crud.routes');
app.use('/api/crud', crudRoutes);


const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});