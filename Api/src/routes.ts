import { Router } from "express";
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";

const router = Router();

//-- ROTAS USERS --
router.post("/user", new CreateUserController().handle);
router.post("/session", new AuthUserController().handle);

export { router };
