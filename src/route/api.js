import express from "express";
import userController from "../controller/user-controller.js";
import { authMiddleware } from "../middleware/auth-middleware.js";
import contactController from "../controller/contact-controller.js";

const userRouter = new express.Router();

userRouter.use(authMiddleware);
userRouter.get('/api/users', userController.get);
userRouter.patch('/api/users/update', userController.update);
userRouter.delete('/api/users/logout', userController.logout);

userRouter.post('/api/create/contact', contactController.create);
userRouter.get('/api/get/contact/:contactId', contactController.get);
userRouter.put('/api/update/contact/:contactId', contactController.update);
userRouter.delete('/api/remove/contact/:contactId', contactController.remove);
userRouter.get('/api/get/contact/search', contactController.search);
userRouter.get('/api/get/contact', contactController.getAllData);


export {
    userRouter
}