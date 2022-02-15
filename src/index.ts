import express from 'express';
import errorHandler from './middlewares/error.handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
const app = express();

// app config  <-------------------------
app.use(express.json()); //add a middleware to check the content-type
app.use(express.urlencoded({ extended: true })); //encoder

//Routes config  <-------------------------

app.use(statusRoute);//check if is running
app.use(usersRoute);// User Route
// express is a routing middleware to manage  http requests and responses

//Error Handler Configuration
app.use(errorHandler); //using NextFuncion (cant to receive an error or not)

//Server initialization  <-------------------------
app.listen(3000, () => {
  console.log('App running on port 3000');
});
