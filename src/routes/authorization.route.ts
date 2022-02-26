import { Request, Response, NextFunction, Router } from 'express'
import ForbiddenError from '../models/errors/forbidden.error'

const authorizationRoute = Router()

authorizationRoute.post(
  '/token',
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const authorizationHeader = req.headers['Authorization']
      if (!authorizationHeader) {
        throw new ForbiddenError('Credentials are required')
      }
    } catch (error) {
      next(error)
    }
  },
)

export default authorizationRoute
