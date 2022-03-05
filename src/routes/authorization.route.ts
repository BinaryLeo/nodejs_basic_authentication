import { Request, Response, NextFunction, Router } from 'express';
import JWT, { SignOptions } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../middlewares/basic-authentication.middleware';
import ForbiddenError from '../models/errors/forbidden.error';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication-middleware';
const authorizationRoute = Router();

authorizationRoute.post(
  '/token',
  basicAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        throw new ForbiddenError('User not informed');
      }
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: '15m' }; //15 minutes
      const jwtSecret = 'scretKey';
      const jwt = JWT.sign(jwtPayload, jwtSecret, jwtOptions);
      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);


authorizationRoute.post(
  '/token/refresh',
  jwtAuthenticationMiddleware,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.user;
      if (!user) {
        throw new ForbiddenError('User not informed');
      }
      const jwtPayload = { username: user.username };
      const jwtOptions: SignOptions = { subject: user?.uuid, expiresIn: '1m' }; //15 minutes
      const jwtSecret = 'scretKey';
      const jwt = JWT.sign(jwtPayload, jwtSecret, jwtOptions);
      res.status(StatusCodes.OK).json({ token: jwt });
    } catch (error) {
      next(error);
    }
  }
);
 


// Already validated by jwt Authentication Middleware, do we need to call the endpoint to respond OK
authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware,(req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(StatusCodes.OK);
});

export default authorizationRoute;
 
