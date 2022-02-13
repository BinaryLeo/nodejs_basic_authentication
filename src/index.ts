import express, { Request, Response, NextFunction } from 'express'
import usersRoute from './routes/users_route'
const app = express();

// app config  <-------------------------
app.use(express.json()) //add a middleware to check the content-type
app.use(express.urlencoded({ extended: true })) //encoder


app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'bar' })
});

app.listen(3000, () => {
  console.log('App running on port 3000')
});
