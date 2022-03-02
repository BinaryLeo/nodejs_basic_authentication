import express from 'express';
import jwtAuthenticationMiddleware from './middlewares/jwt-authentication-middleware';
import errorHandler from './middlewares/error.handler.middleware';
import authorizationRoute from './routes/authorization.route';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';
const app = express();

// app config  <-------------------------
app.use(express.json()); //add a middleware to check the content-type
app.use(express.urlencoded({ extended: true })); //encoder

//Routes config  <-------------------------

app.use(statusRoute);//check if is running
app.use(authorizationRoute);// Authorization Route
app.use(jwtAuthenticationMiddleware)// JWT Authentication
// express is a routing middleware to manage  http requests and responses

// Every route bellow will be protected by jwtAuthenticationMiddleware.
app.use(usersRoute);//User Route
//Error Handler Configuration
app.use(errorHandler); //using NextFuncion (can to receive an error or not)

//Server initialization  <-------------------------
app.listen(3000, () => {
  console.log('App running on port 3000');
});


