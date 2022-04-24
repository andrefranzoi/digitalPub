import prismaClient from '../../prisma'

class CreateCategoryService {
  async execute() {
    return { OK: true }
  }
}

export { CreateCategoryService }