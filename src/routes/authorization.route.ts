import { Request, Response, NextFunction, Router } from 'express'
import ForbiddenError from '../models/errors/forbidden.error'
import userRepository from '../repositories/user.repository'

const authorizationRoute = Router()

authorizationRoute.post(
  '/token',
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers['authorization']
      if (!authorizationHeader) {
        throw new ForbiddenError('Ivallid credentials.')
      }
      const [authenticationType, token] = authorizationHeader.split(' ')
      if (authenticationType !== 'Basic' || !token) {
        throw new ForbiddenError('Invalid authentication type');
      }
      const tokenContent = Buffer.from(token, 'base64').toString('utf-8');
      const [username, password] = tokenContent.split(':');
      if (!username || !password) {
        throw new ForbiddenError('Credentials not provided.');
      }
      const user = await userRepository.findByUsernameAndPassword(username, password);

      //-------------------- 
      console.log(user);
      console.log(tokenContent);
      //-------------------- 


    } catch (error) {
      next(error);
    }
  },
)

export default authorizationRoute
