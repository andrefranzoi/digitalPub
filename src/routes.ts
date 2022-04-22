import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";

const router = Router();

//-- ROTAS USERS --
router.post("/user", new CreateUserController().handle);

export { router };
