require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Add CORS options
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Connect to mongooseDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB, options);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};
connectDB();

app.get('/', (req, res) => res.send('Wellcome to Audio Server'));

// routes
require('./src/routes/audios.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
