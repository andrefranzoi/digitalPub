import { hash } from 'bcryptjs';
import prismaClient from '../../prisma';
interface UsersRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UsersRequest) {
    if (!email) {
      throw new Error("Email incorrect")
    }

    const userAlreadyExists = await prismaClient.users.findFirst({
      where: { email: email}
    })

    if (userAlreadyExists) {
      throw new Error("User already exists")
    }

    const passwordHash = await hash(password, 8)

    const user = await prismaClient.users.create({
      data:{
        name: name,
        email: email,
        password: passwordHash
      },
      select: { 
        id: true,
        name:true,
        email: true
      }
    })

    return user;
  }
}

export { CreateUserService };

