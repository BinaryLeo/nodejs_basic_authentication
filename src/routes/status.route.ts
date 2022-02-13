import { NextFunction, Request, Response, Router } from 'express';
import { StatusCodes } from 'http-status-codes';
const statusRoute = Router();
statusRoute.get('/status', (req:Request, res:Response, next:NextFunction) =>{
res.sendStatus(StatusCodes.OK);
 //request, response ..next
    //When receiving a status request, the server should respond with a 200 status code and a json
});

export default statusRoute;



