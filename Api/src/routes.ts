import { Router } from "express";
import multer from 'multer';

//USERS
import { CreateUserController } from "./controllers/users/CreateUserController";
import { AuthUserController } from "./controllers/users/AuthUserController";
import { DetailUserController } from "./controllers/users/DetailUserController";

// CATEGORY
import { CreatecategoryController } from "./controllers/category/CreatecategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

// PRODUCT
import { CreateProductController } from "./controllers/product/CreateProductController";

import { isAuthenticated } from './Middleware/isAuthenticated';
import uploadConfig from './config/multer';

const upload = multer(uploadConfig.upload("./tmp"));
const router = Router();

//-- ROTAS USERS --
router.post("/user", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//-- ROTAS CATEGORY --
router.post("/category", isAuthenticated, new CreatecategoryController().handle);

router.get("/categories", isAuthenticated, new ListCategoryController().handle);

//-- ROTAS DOS PRODUTOS --
router.post("/product", isAuthenticated, upload.single('file'), new CreateProductController().handle);


export { router };
