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
    try{
        const uuid = req.params.uuid;// Get the param from  request- user unique id
        const user = await userRepository.findById(uuid);
        res.status(StatusCodes.OK).send({user}); // return the param
    }catch (error){
       next(error);
    }
});

//Post

//------------------------------------> {req type - str}
usersRoute.post('/users', async(req: Request<{uuid:string}>, res: Response, next: NextFunction)=>{
const newuser = req.body;
const uuid = await userRepository.create(newuser);
res.status(StatusCodes.CREATED).send({uuid});
});

//Put
usersRoute.put('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;

    modifiedUser.uuid = uuid;

    await userRepository.update(modifiedUser);

    res.status(StatusCodes.OK).send();
});

//delete
usersRoute.delete('/users/:uuid', async (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    await userRepository.remove(uuid);
    res.sendStatus(StatusCodes.OK);
});


export default usersRoute;