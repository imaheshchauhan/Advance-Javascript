import express, {Request, response, Response}  from 'express';
import { request } from 'http';
import { userInfo } from 'os';
import useModel from "../models/userModel";
import {User} from "../types/Users";


let Router = express.Router();
// Router.post('/login', (request: Request, response: Response): void =>
// {
//     console.log(request.body);
// const{email, password} = request.body;
// //console.log(typeof email, typeof password);
//     if((typeof email == 'string' && email != '') 
//     && (typeof password == 'string' && password != '')){
//     }else{
//         response.status(500).json({"msg": "you have to send an email and passowrs"});
//     }
//    response.status(200).json('Login page');
// });

Router.post('/register', (request: Request, response: Response): Response =>
{
    console.log(request.body);
    const{email, email_cfg, password, password_cfg} = request.body;
    //console.log(typeof email, typeof password);
    if((typeof email == 'string' && email != '') &&
    (typeof email_cfg == 'string' && email_cfg != '')
    && (typeof password == 'string' && password != '') &&
    (typeof password_cfg == 'string' && password_cfg != '')){
        if(email != email_cfg  || password != password_cfg){
            return response.status(500).json({"msg": "Email or password confirmation not correct"});
        // here validate email and store it into db
        }

        const user = <User|void> useModel.create({
            email,
            "password": password
        },(error) => {
            if(error) return response.status(500).json({"msg": "user not created"});
        });
    } else {
        return response.status(500).json({"msg": "Incorrect  email or password"});
    }
   return response.status(200).json('Register page');
});
export default Router;