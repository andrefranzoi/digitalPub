import { Router } from "express";
//USERS
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";

// CATEGORY
import { CreatecategoryController } from "./controllers/category/CreatecategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { isAuthenticated } from './Middleware/isAuthenticated'



const router = Router();

//-- ROTAS USERS --
router.post("/user", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --
router.post("/category", isAuthenticated, new CreatecategoryController().handle);

router.get("/categories", isAuthenticated, new ListCategoryController().handle);


export { router };
