import { Controller, Post } from '@nestjs/common';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';

/*const createUserBodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
});*/

@Controller('/sessions')
export class AuthenticateController {
  constructor(private jwt: JwtService) {}

  @Post()
  //@HttpCode(201)
  //@UsePipes(new ZodValidationPipe(createUserBodySchema))
  async handle() {
    const token = this.jwt.sign({ sub: 'use-id' });

    return token;
  }
}
