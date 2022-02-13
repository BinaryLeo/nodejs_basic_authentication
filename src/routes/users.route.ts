import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import userRepository from '../repositories/user.repository';
const usersRoute = Router();



//Get Users list
usersRoute.get('/users', async (req: Request, res: Response, next: NextFunction) => {

const users = await userRepository.findAllUsers(); //Send a user list as response
res.status(StatusCodes.OK).json({users});
});

//Get User id
//------------------------------------> {req type - str}
usersRoute.get('/users/:uuid',async(req: Request<{uuid:string}>, res: Response, next: NextFunction) => {
const uuid = req.params.uuid;// Get the param from  request- user unique id
const user = await userRepository.findById(uuid);
res.status(StatusCodes.OK).send({user}); // return the param
});

//Post

//------------------------------------> {req type - str}
usersRoute.post('/users',(req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
    const newuser = req.body;
console.log(req.body);
res.status(StatusCodes.CREATED).send({newuser});
});

//Put
usersRoute.put('/users/:uuid',(req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
const uuid = req.params.uuid;// get the param from request
const modifiedUser = req.body;
modifiedUser.uuid = uuid;
res.status(StatusCodes.OK).send(modifiedUser);
});

//delete
usersRoute.delete('/users/:uuid',(req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK)
    });

export default usersRoute;