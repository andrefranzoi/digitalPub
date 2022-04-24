import { Request, Response } from 'express'
import { CreateCategoryService } from '../../services/category/CreateCategoryService'

class CreatecategoryController {
  async handle(req: Request, res: Response) {

    const createCategoryService = new CreateCategoryService();

    const category = await createCategoryService.execute();

    return res.json(category);
  }
}

export { CreatecategoryController }