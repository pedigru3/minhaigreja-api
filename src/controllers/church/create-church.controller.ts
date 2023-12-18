import {
  Body,
  ConflictException,
  Controller,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { z } from 'zod';
import { JwtService } from '@nestjs/jwt';
import { ZodValidationPipe } from 'src/pipes/zod-validation-pipe';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtAuthGuard } from 'src/auth/jwt-guardian';
import type { Request } from 'express';
import { CurrentUser } from 'src/auth/current-user-decorator';
import { UserPayload } from 'src/auth/jwt.strategy';

const createChurchBodySchema = z.object({
  name: z.string(),
});

type CreateChurchBodySchema = z.infer<typeof createChurchBodySchema>;

@Controller('/churchs')
@UseGuards(JwtAuthGuard)
export class CreateChurchController {
  constructor(private prisma: PrismaService) {}

  @Post()
  async handle(
    @Body(new ZodValidationPipe(createChurchBodySchema))
    body: CreateChurchBodySchema,
    @CurrentUser() user: UserPayload,
  ) {
    const { name } = body;
    const { sub: userId } = user;

    const church = await this.prisma.church.findFirst({
      where: {
        userId,
        name,
      },
    });

    if (church) {
      throw new ConflictException('Name already created');
    }

    await this.prisma.church.create({
      data: {
        name,
        userId,
      },
    });

    return { request: user };
  }
}
