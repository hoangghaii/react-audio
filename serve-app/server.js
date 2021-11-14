require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const { memoryStorage } = require('multer');
const storage = memoryStorage();
const upload = multer({ storage });

const app = express();

// Add CORS options
const corsOptions = { origin: '*', optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(express.json());
app.use(upload.any());

//Connect to mongooseDB
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDB = () => {
  try {
    mongoose.connect(
      `mongodb+srv://${process.env.MGDB_USERNAME}:${process.env.MGDB_PASSWORD}@cluster0.9zxnv.mongodb.net/Cluster0?retryWrites=true&w=majority`,
      options,
    );
    console.log('MongoDB connected');
  } catch (error) {
    process.exit(1);
  }
};
connectDB();

// routes
require('./src/routes/audios.routes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
