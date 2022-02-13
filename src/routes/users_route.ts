import {Router, Request, Response, NextFunction} from 'express';
import {StatusCodes} from 'http-status-codes'
const usersRoute = Router();

usersRoute.get('/users',(req: Request, res: Response, next: NextFunction) => {
const users = [{username: 'BinaryLeo'}];
res.status(StatusCodes.OK).json({users});
});

usersRoute.get('/users/:uuid',(req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
const uuid = req.params.uuid;
res.status(StatusCodes.OK).send({uuid});
});
usersRoute.post('/users',(req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
    const newuser = req.body;
console.log(req.body);
res.status(StatusCodes.CREATED).send({newuser});
});

export default usersRoute;