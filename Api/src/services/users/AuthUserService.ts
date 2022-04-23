import prismaClient from '../../prisma'
import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

interface AuthRequest {
  email: string,
  password: string
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    //Verificação do email passado
    const user = await prismaClient.users.findFirst({
      where: { email: email }
    })

    if (!user) {
      throw new Error('User/Password incorrect!')
    }
    //Verificação do password passado
    const passwordMath = await compare(password, user.password)
    if (!passwordMath) {
      throw new Error('User/Password incorrect!')
    }

    //Gera um token JwT e Devolver os dados do usuário logado.
    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    )

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }
  }
}

export { AuthUserService }