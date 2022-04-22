interface UsersRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  async execute({ name, email, password }: UsersRequest) {
    return { ok: true };
  }
}

export { CreateUserService };
