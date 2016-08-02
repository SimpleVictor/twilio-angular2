import { Router, Response} from "express";
var client = require('twilio')("AC621078e1d207d81638d8e24c9dd658c9", "c721b3668e0418a0db7e89edb11263be");

const protectedRouter: Router = Router();

protectedRouter.get('/', function(req, res:Response, next){

    client.messages.create({
        body: "Hey There",
        to: "Number you want the message to go to",
        from: "Your Number (the one you bought from twilio)"
    }, function(err, data){
       if(err) {
           console.log("Could not send message");
       }else{
           console.log("Has been contacted");
       };
    });

    let fakeObject = {
        message: "This is the message you got from the backend"
    };
    res.json(fakeObject);
});

export {protectedRouter}





