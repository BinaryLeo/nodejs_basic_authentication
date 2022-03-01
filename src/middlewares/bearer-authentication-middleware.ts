import { Request, Response, NextFunction } from 'express';
import ForbiddenError from '../models/errors/forbidden.error';
import JWT from 'jsonwebtoken';
async function bearerAuthenticationMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const authorizationHeader = req.headers['authorization'];
    if (!authorizationHeader) {
      throw new ForbiddenError('Credentials not provided.');
    }
    const [authenticationType, token] = authorizationHeader.split(' ');
    if (authenticationType !== 'Bearer' || !token) {
      throw new ForbiddenError('Invalid authentication type');
    }
    const tokenPayload = JWT.verify(token, 'scretKey');

    if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
      throw new ForbiddenError('Invalid token');
    }
    const user = { uuid:tokenPayload.sub, username:tokenPayload.username };

    req.user = user
    next()
  } catch (error) {
    next(error)
  }
}
export default bearerAuthenticationMiddleware;
