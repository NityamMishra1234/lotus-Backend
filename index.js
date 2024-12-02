import express from 'express';
import cors from 'cors';
import bodyParser from "body-parser"
import { User } from "./models/user.model.js"
import connectDB from "./db/index.js"




const app = express()
const corsOptions = {
  origin: "*", 
    // Frontend URL
  methods: 'GET,POST', // Specify allowed methods
  allowedHeaders: 'Content-Type,Authorization', // Specify allowed headers
};

app.use(cors(corsOptions))


app.use(bodyParser.json());

connectDB()



app.post('/users', async (req, res) => {
    const { name, email, number } = req.body;
  
    try {
      // Check if all fields are provided
      if (!name || !email || !number) {
        return res.status(400).json({ message: 'All fields are required' });
      }
  
      // Create a new user instance
      const newUser = new User({ name, email, number });
  
      // Save the user to the database
      await newUser.save();
      console.log(req.body);
      res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error creating user' });
    }
  });
  const PORT = process.env.PORT || 8081;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
